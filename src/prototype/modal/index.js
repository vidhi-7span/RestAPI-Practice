import { $modalEmitter } from "@/events/modal/index.js";
export const modal = {
  open: (name, payload) => {
    $modalEmitter.emit("modal-open", {
      __name: name,
      ...payload,
    });
  },

  close: (name) => {
    $modalEmitter.emit("modal-close", name);
  },
  idList: {
    updateProfilePhoto: "update-profile-photo",
    cancelModal: "cancel-modal",
  },
};