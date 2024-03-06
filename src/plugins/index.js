import { Field, ErrorMessage, ValidationForm } from "./vee-validate";
import "./vee-validate-rules";
import { Cropper } from "./cropper.js";

export const registerPlugins = (appInstance) => {
  appInstance.component("VForm", ValidationForm);
  appInstance.component("Field", Field);
  appInstance.component("ErrorMessage", ErrorMessage);
  appInstance.component("imageCropper", Cropper);
};
