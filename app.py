from flask import Flask
from flask import request
import secrets
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(os.getcwd(), 'foo.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(300), unique=False, nullable=False)
    answer = db.Column(db.String(300), unique=False, nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'),
        nullable=False)
    group = db.relationship('Group',
        backref=db.backref('notes', lazy=True))
    def __repr__(self):
        return '<User %r>' % self.question

class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    
    def __repr__(self):
        return '<User %r>' % self.name

notes = {}

@app.route("/")
def home():
    return "Welcome to home"

@app.route("/api/note", methods=['POST'])
def add_note():
    question = request.form['question']
    answer = request.form['answer']
    group = request.form['group'] 

    group_record = Group.query.filter_by(name=group).first()
    if group_record is None:
        group_record = Group(name=group)
        db.session.add(group_record)

    note_record = Note(question=question, answer=answer, group=group_record)
    db.session.add(note_record)
    db.session.commit()
    return {
        'id':note_record.id, 
        'question':note_record.question, 
        'answer':note_record.answer,
        'group':note_record.group.name
        }



@app.route("/api/note/<id_>", methods=['GET', 'DELETE'])
def get_note(id_):

    note_record = Note.query.filter_by(id=id_).first()

    if note_record is None:
        return "Note Doesn't Exists"

    if request.method == 'DELETE':
        db.session.delete(note_record)
        db.session.commit()
        return "Note Deleted Successfully"

    return {
        'id':note_record.id, 
        'question':note_record.question, 
        'answer':note_record.answer,
        'group':note_record.group.name
        }

@app.route("/api/group/<id_>")
def get_notes(id_):
    per_page = 10
    page = request.args.get('page', default = 1, type = int)
    group_record = Group.query.filter_by(id=id_).first()

    if group_record is None:
        return "This Group Does not Exist"

    notes = []
    for note_record in Note.query.filter_by(group_id=id_).paginate(page,per_page,error_out=False).items:
        notes.append({
        'id':note_record.id,
        'question':note_record.question, 
        'answer':note_record.answer,
        })
    return {'id':group_record.id, 'name':group_record.name, 'notes':notes}



if __name__ == '__main__':
    app.run(port=80, debug=True)
