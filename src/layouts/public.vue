<template>
  <div class="auth-main">
    <router-view></router-view>
  </div>
</template>
<script>
import { getToken } from "@/utils";
export default {
  methods: {
    getToken,
  },
  mounted() {
    const token = this.getToken();
    if (token) {
      this.$router.push({ path: "/dashboard" });
    }
    // console.log("🌏 Public Layout");
  },
};
</script>
<style></style>
