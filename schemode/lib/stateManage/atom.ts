import { type } from "os";
import { atom } from "recoil";

export type opinionState = {
  id: number;
  mode: number;
  text: string;
};

export const opinionsState = atom<opinionState[]>({
  key: "opinionState",
  default: [],
});

export const countState = atom({
  key: "count",
  default: 0,
});
