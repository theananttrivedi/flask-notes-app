import { atom } from "recoil";

const functionButton = atom({
  key: "functionButton",
  default: { func: null, title: "", component: null },
});
export default functionButton;
