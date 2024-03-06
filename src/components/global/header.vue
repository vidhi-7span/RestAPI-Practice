<template>
  <div
    class="bg-white p-2 allside-shadow rounded-md border text-gray-400 transition-all duration-500"
  >
    <!-- Show Sidebar in Mobile Screen -->
    <div class="flex items-center justify-between">
      <div class="flex md:hidden"><IconMdiToggle @click="toggleSideBar" /></div>
      <!-- Search Feature -->
      <button
        class="gap-2 flex items-center justify-center"
        @click="openSearch()"
      >
        <IconMdiSearch class="h-8 w-8" />
        <div class="hidden gap-2 text-sm items-center justify-center md:flex">
          <span>Search</span>
          <span class="text-sm border border-gray-400 rounded-md p-0.5">
            ⌘K
          </span>
        </div>
      </button>
      <!-- other navigations -->
      <div class="flex items-center justify-center gap-4">
        <button class="" @click="changeTheme()">
          <IconMdiSun v-if="isDark" class="h-6 w-6" />
          <IconMdiMoon v-else class="h-6 w-6" />
        </button>
        <div class="relative flex items-center justify-center">
          <button @click="toggleNotifications()">
            <IconMdiBell class="h-6 w-6" />
          </button>
          <div
            class="absolute -bottom-16 right-5 p-4 border border-gray-500 rounded bg-white z-50"
            v-if="isShowNotifications"
            v-click-outside="toggleNotifications"
          >
            Notifications
          </div>
        </div>
      </div>
    </div>
    <searchModal />
  </div>
</template>
<script>
import searchModal from "../modal/search-modal.vue";
import { useThemeStore } from "@/store/theme";
export default {
  // Setting up pinia.
  setup() {
    const theme = useThemeStore();
    return {
      theme,
    };
  },
  components: { searchModal },
  emits: ["toggleSidebar"],

  data() {
    return {
      isDark: false,
      isShowNotifications: false,
    };
  },
  mounted() {
    if (this.theme.getTheme == "dark") {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  },
  methods: {
    openSearch() {
      this.$boilerplate.modal.open("search-modal");
    },
    toggleSideBar() {
      this.$emit("toggleSidebar");
    },
    changeTheme() {
      if (this.isDark) {
        this.theme.setTheme("light");
      } else {
        this.theme.setTheme("dark");
      }
      this.isDark = !this.isDark;
    },
    toggleNotifications() {
      this.isShowNotifications = !this.isShowNotifications;
    },
  },
};
</script>
<style lang=""></style>
