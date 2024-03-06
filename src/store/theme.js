import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: 'dark',
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
  },
  persist: {
    key: "themeStore",
    storage: sessionStorage,
  },
});
