import { atom } from "recoil";

const currentPageTitle = atom({
  key: "currentPageTitle",
  default: "",
});
export default currentPageTitle;
