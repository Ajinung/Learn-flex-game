import { atom } from "recoil";

export const IconState = atom({
  key: "iconSTate", // unique ID (with respect to other atoms/selectors)
  default: "start", // default value (aka initial value)
});
export const compareState = atom({
  key: "compareState", // unique ID (with respect to other atoms/selectors)
  default: "start", // default value (aka initial value)
});
