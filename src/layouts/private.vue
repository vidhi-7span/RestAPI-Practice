<template>
  <div class="">
    <div class="flex h-screen overflow-hidden">
      <Sidebar :toggle="isToggleSidebar" />

      <div class="flex-1 flex flex-col">
        <div class="md:mx-10 m-4 md:my-4">
          <Header class="z-50" @toggle-sidebar="toggleSidebar" />

          <!-- Body content goes here -->
          <div class="flex-1 pt-4">
            <!-- <VButton label="Click Here to Logout" @click.native="logout()" /> -->
            <!-- Body content -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/global/header.vue";
import Sidebar from "@/components/global/sidebar.vue";

import Logout from "@/pages/private/logout.vue";
import { useUserStore } from "@/store/user";
export default {
  // Setting up pinia.
  setup() {
    const user = useUserStore();
    return {
      user,
    };
  },
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      isToggleSidebar: false,
    };
  },
  mounted() {
    // console.log("🔓 Private Layout");
    // console.log(this.user.getUser); // Get User from store
  },
  methods: {
    toggleSidebar() {
      this.isToggleSidebar = !this.isToggleSidebar;
    },
    logout() {
      this.$router.push({ name: "logout" });
    },
  },
};
</script>
<style lang=""></style>
