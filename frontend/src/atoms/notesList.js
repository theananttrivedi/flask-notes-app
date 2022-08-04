import { atom } from "recoil";

const notesList = atom({
  key: "notesList",
  default: [],
});
export default notesList;
