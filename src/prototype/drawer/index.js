import { $drawerEmitter } from "@/events/drawer/index.js";
export const drawer = {
  open: (name, payload) => {
    $drawerEmitter.emit("drawer-open", {
      __name: name,
      ...payload,
    });
  },

  close: (name) => {
    $drawerEmitter.emit("drawer-close", name);
  },
};
