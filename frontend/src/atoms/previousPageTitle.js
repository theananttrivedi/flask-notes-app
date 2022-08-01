import { atom } from "recoil";

const previousPageTitle = atom({
  key: "previousPageTitle",
  default: "",
});
export default previousPageTitle;
