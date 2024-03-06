<template>
  <div>Logging Out...</div>
</template>
<script>
import { useUserStore } from "@/store/user";
import { removeToken } from "@/utils";
export default {
  // Setting up pinia.
  setup() {
    const user = useUserStore();
    return {
      user,
    };
  },
  methods: {
    removeToken,
  },
  mounted() {
    this.user.removeUser();
    localStorage.clear();
    this.$router.push({ name: "login" });
  },
};
</script>
<style lang=""></style>
