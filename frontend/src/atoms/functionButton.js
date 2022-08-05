import { atom } from "recoil";

const functionButton = atom({
  key: "functionButton",
  default: { func: null, title: "" },
});
export default functionButton;
