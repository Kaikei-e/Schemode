import { atom } from "recoil";

export const opinionState = atom({
  key: "id",
  default: {
    mode: 0,
    text: "hogehoge",
  }
})