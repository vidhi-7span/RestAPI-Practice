import { modal } from "./modal";
import { drawer } from "./drawer";

export const register = (appInstance) => {
  appInstance.config.globalProperties.$boilerplate = { modal, drawer };
};
