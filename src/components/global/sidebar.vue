<template>
  <div
    class="transition-all duration-500 h-screen"
    :class="
      isToggle
        ? 'w-full absolute md:relative bg-white z-[999] md:w-[200px]'
        : 'hidden md:flex md:w-[70px]'
    "
  >
    <div class="w-full sidebar-shadow flex h-full flex-col sidebar-scroll">
      <!-- Top Header -->
      <div class="border-b shadow-2xl shadow-white">
        <div
          class="h-16 px-3 flex items-center md:justify-center justify-between"
        >
          <div
            class="flex items-center gap-2"
            :class="isToggle ? 'justify-between' : 'justify-center'"
          >
            <IconLogo class="h-6-w-6 text-gray-500" />
            <span v-if="isToggle" class="text-xl font-semibold truncate">{{
              title
            }}</span>
          </div>

          <IconMdiClose @click="toggleSidebar" class="h-8 w-8 md:hidden" />
        </div>
      </div>
      <!-- Side Bar Navigations -->
      <div class="overflow-y-scroll grow space-y-3 p-2">
        <div class="space-y-2 py-2">
          <div v-for="(item, i) in navigationDetails" :key="i">
            <component
              :is="item?.options ? 'NavButtonMore' : 'NavButton'"
              :to="item.to"
              :label="item.label"
              :icon="item.icon"
              :details="item"
              :toggle="isToggle"
            />
          </div>
        </div>
      </div>
      <div class="p-2">
        <NavButton
          label="Logout"
          icon="MdiLogout"
          @click.native="logout()"
          :toggle="isToggle"
        />
      </div>
      <!-- Bottom Footer -->
      <button
        @click="toggleSidebar"
        class="p-4 shadow-2xl shadow-white border-t hidden md:flex items-center"
        :class="isToggle ? 'justify-end' : 'justify-center'"
      >
        <IconMdiArrowLeft v-if="isToggle" class="h-6 w-6" />
        <IconMdiArrowRight v-else class="h-6 w-6" />
      </button>
    </div>
    <LogoutModal />
  </div>
</template>
<script>
import LogoutModal from "@/components/modal/logout.vue";
import navigations from "@/data/sidebar.json";
export default {
  props: {
    toggle: Boolean,
  },
  components: { LogoutModal },
  watch: {
    toggle() {
      this.toggleSidebar();
    },
  },
  data() {
    return {
      title: import.meta.env.VITE_PROJECT_NAME,
      isToggle: false,
      ToggleOnHover: true,
      navigationDetails: navigations,
    };
  },
  methods: {
    toggleSidebar() {
      this.isToggle = !this.isToggle;
    },
    logout() {
      this.$boilerplate.modal.open("logout");
    },
  },
};
</script>
<style lang="css"></style>
