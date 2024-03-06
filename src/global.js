// global component register
import primaryButton from "@/components/button/primary.vue";
import secondaryButton from "@/components/button/secondary.vue";
import navButton from "@/components/button/navigation.vue";
import navButtonMore from "@/components/button/navigation-more.vue";
import input from "@/components/input/index.vue";
import ImageUpload from "@/components/input/image-upload.vue";
import Modal from "./components/modal/Index.vue";
import Drawer from "./components/drawer/Index.vue";

// Export app Instance
export const register = (appInstance) => {
  appInstance.component("PButton", primaryButton);
  appInstance.component("SButton", secondaryButton);
  appInstance.component("NavButton", navButton);
  appInstance.component("NavButtonMore", navButtonMore);
  appInstance.component("VInput", input);
  appInstance.component("ImageUpload", ImageUpload);
  appInstance.component("VModal", Modal);
  appInstance.component("VDrawer", Drawer);
};

// Auto Register Icons
export const iconAutoRegister = (appInstance) => {
  const icons = import.meta.globEager("@/components/icons/*.vue");
  Object.entries(icons).forEach(([path, component]) => {
    appInstance.component(
      "Icon" +
        path
          .split("/")
          .pop()
          .replace(/\.\w+$/, ""),
      component.default
    );
  });
};
