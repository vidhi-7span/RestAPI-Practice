<template>
  <div :class="themeClass">
    <div>
      <router-view></router-view>
    </div>

    <!-- Modal Port-->
    <ModalPort class="port--middle port--center" />

    <!-- Drawer Port-->
    <DrawerPort class="h-full justify-end" />
  </div>
</template>
<script>
import { useThemeStore } from "@/store/theme";
import ModalPort from "@/components/modal/Port.vue";
import DrawerPort from "@/components/drawer/Port.vue";
export default {
  // Setting up pinia.
  setup() {
    const theme = useThemeStore();
    return {
      theme,
    };
  },
  components: {
    ModalPort,
    DrawerPort,
  },
  computed: {
    themeClass() {
      const theme = this.theme.getTheme;
      return theme === "dark" ? "dark" : "light";
    },
  },
};
</script>
