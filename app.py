from flask import send_from_directory
from flask import Flask, url_for, request, jsonify, redirect, render_template
import secrets
from flask_sqlalchemy import SQLAlchemy
import os
from flask_migrate import Migrate

from werkzeug.utils import secure_filename
from flask_cors import CORS

from random import shuffle

from json import dumps, loads

UPLOAD_FOLDER = 'static/notes/images'
UPLOAD_FOLDER_URL = '/static/notes/images'
SEQUENTIAL_REVISION_FILES = 'static/notes/sequentialrevision'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(os.getcwd(), 'foo.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
db = SQLAlchemy(app)
migrate = Migrate(app, db)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(300), unique=False, nullable=False)
    answer = db.Column(db.String(300), unique=False, nullable=False)
    image_name = db.Column(db.String(300), unique=False, nullable=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'),
                         nullable=False)
    group = db.relationship('Group',
                            backref=db.backref('notes', lazy=True))

    def __repr__(self):
        return '<Note %r>' % self.question

    def serialize(self):
        return {"id": self.id,
                "question": self.question,
                "answer": self.answer,
                "group_id": self.group_id}


class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return '<Group %r>' % self.name

    def serialize(self):
        return {"id": self.id,
                "name": self.name}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def note_response(note_record):
    if note_record.image_name is None:
        return {
            'id': note_record.id,
            'question': note_record.question,
            'answer': note_record.answer,
            'group': note_record.group.name,
        }
    return {
        'id': note_record.id,
        'question': note_record.question,
        'answer': note_record.answer,
        'group': note_record.group.name,
        'image_url': url_for('get_image_file', id_=note_record.id)
    }


@app.route("/api/sequentialrevision")
def sequentialrevision():
    page = request.args.get('page', 1)
    per_page = 10
    random = request.args.get("random", False)
    if random == "true" or random == "True" or random == "t" or random == "T":
        random = True
    groups = request.args.get("groups")
    groups = groups.split(',')
    if "" in groups:
        return {"error": "The Group String isn't formatted correctly"}
    notes_collection = []
    for group in groups:
        print(group)
        notes = Note.query.filter(Note.group.has(name=group)).all()
        for note in notes:
            notes_collection.append(note_response(note))

    if random:
        shuffle(notes_collection)

    play_id = secrets.token_hex(10)
    open(os.path.join(SEQUENTIAL_REVISION_FILES, "sequentialrevision-" +
                      play_id + ".json"), 'w').write(dumps(notes_collection))

    return {"play_id": play_id}


@app.route("/api/sequentialrevision/<play_id>")
def sequentialrevision_play(play_id):
    index = request.args.get('index', 0, int)
    json_file = open(os.path.join(SEQUENTIAL_REVISION_FILES,
                                  "sequentialrevision-" + play_id + ".json"), 'r')
    json_notes = loads(json_file.read())
    next_ = ""
    prev_ = ""
    last_index_of_notes = len(json_notes) - 1
    if index == 0:
        prev_ = None
    elif index != 0 and index - 1 >= 0:
        prev_ = url_for("sequentialrevision_play",
                        play_id=play_id, index=index - 1)

    if index == last_index_of_notes:
        next_ = None
    elif index != last_index_of_notes and index+1 <= last_index_of_notes:
        next_ = url_for("sequentialrevision_play",
                        play_id=play_id, index=index + 1)
    json_note = json_notes[index]
    return {"note": json_note, "next": next_, "prev": prev_}


@app.route("/")
def home():
    return "Welcome to home"


@app.route("/api/groupnamebyid/<id_>")
def groupinfo(id_):
    group_record = Group.query.get(id_)
    if not group_record:
        return {}
    return {'name': group_record.name}


@app.route("/api/init")
def init():
    group_record = Group(name='default')
    db.session.add(group_record)
    db.session.commit()
    return "Welcome to home"


@app.route("/api/note", methods=['POST'])
def add_note():
    question = request.form['question']
    answer = request.form['answer']
    group = request.form['group']
    image_file = request.files.get('image', None)

    group_record = Group.query.filter_by(name=group).first()
    if group_record is None:
        group_record = Group(name=group)
        db.session.add(group_record)

    note_record = Note(question=question, answer=answer, group=group_record)

    if image_file and allowed_file(image_file.filename):
        filename = secure_filename(image_file.filename)
        name, ext = os.path.splitext(filename)
        filename = name + secrets.token_hex(10) + ext
        save_location = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image_file.save(save_location)
        note_record.image_name = filename

    db.session.add(note_record)
    db.session.commit()
    return note_response(note_record)


@app.route("/api/groups")
def groups():
    return {
        "groups": list(map(lambda grp: grp.serialize(), Group.query.all()))
    }


@app.route("/api/group", methods=['POST'])
def add_group():
    name = request.form['name']

    group_record = Group.query.filter_by(name=name).first()
    if group_record is not None:
        return "Group already exists"

    group_record = Group(name=name)
    db.session.add(group_record)
    db.session.commit()
    return {
        'id': group_record.id,
        'name': group_record.name,
    }


@app.route('/api/note/<id_>/image/default')
def get_image_file(id_):
    note_record = Note.query.get(id_)
    if note_record is None:
        return "Inavlid Note"
    if note_record.image_name is None:
        return "Sorry, no image for this note!"
    return send_from_directory(app.config["UPLOAD_FOLDER"], note_record.image_name)


@app.route("/api/note/<id_>", methods=['GET', 'DELETE', 'PUT'])
def get_note(id_):

    note_record = Note.query.get(id_)

    if note_record is None:
        return "Note Doesn't Exists"

    if request.method == 'DELETE':
        if note_record.image_name:
            os.remove(os.path.join(
                app.config['UPLOAD_FOLDER'], note_record.image_name))
        db.session.delete(note_record)
        db.session.commit()
        return "Note Deleted Successfully"

    if request.method == 'PUT':
        question = request.form.get('question', None)
        answer = request.form.get('answer', None)
        group = request.form.get('group', None)
        image_file = request.files.get('image', None)

        group_record = Group.query.filter_by(name=group).first()
        if group_record is None:
            return "The given group doesn\'t exist"

        note_record.question = note_record.question if question is None else question
        note_record.answer = note_record.answer if answer is None else answer
        note_record.group_id = note_record.group_id if group_record.id is None else group_record.id

        if image_file and allowed_file(image_file.filename):
            if note_record.image_name is not None:
                old_image_location = os.path.join(
                    app.config['UPLOAD_FOLDER'], note_record.image_name)
                os.remove(old_image_location)

            filename = secure_filename(image_file.filename)
            name, ext = os.path.splitext(filename)
            filename = name + secrets.token_hex(10) + ext
            save_location = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image_file.save(save_location)
            note_record.image_name = filename

        db.session.add(note_record)
        db.session.commit()

        return {
            'message': 'Updated',
            'note': note_response(note_record)
        }

    return note_response(note_record)


@app.route("/api/group/<id_>", methods=['GET', 'DELETE', 'PUT'])
def get_notes(id_):
    per_page = 10
    page = request.args.get('page', default=1, type=int)
    group_record = Group.query.filter_by(id=id_).first()

    if group_record is None:
        return "This Group Does not Exist"

    if request.method == 'DELETE':
        default_group = Group.query.filter_by(name='default').first()
        _ = Note.query.filter_by(group_id=id_).update(
            {Note.group_id: default_group.id})
        db.session.delete(group_record)
        db.session.commit()
        return "Group Deleted Successfully"

    if request.method == 'PUT':
        name = request.form['name']
        group_record.name = group_record.name if name is None else name
        db.session.add(group_record)
        db.session.commit()
        return {
            'message': 'Updated',
            'id': group_record.id,
            'name': group_record.name
        }

    notes = []
    for note_record in Note.query.filter_by(group_id=id_).paginate(page, per_page, error_out=False).items:
        notes.append(note_response(note_record))
    return {'id': group_record.id, 'name': group_record.name, 'notes': notes}


if __name__ == '__main__':
    app.run(host="127.0.0.1" ,port=80, debug=True)
