<template>
  <div class="text-black">
    <button
      class="m-3 p-4 rounded-lg hover:bg-gray-200 border"
      @click="openModal"
    >
      Open Modal
    </button>
    <button
      class="m-3 p-4 rounded-lg hover:bg-gray-200 border"
      @click="openDrawer"
    >
      Open Drawer
    </button>
    <demoModal />
    <demoDrawer />
  </div>
</template>
<script>
import demoModal from "@/components/modal/demo.vue";
import demoDrawer from "@/components/drawer/demo.vue";
export default {
  components: {
    demoModal,
    demoDrawer,
  },
  methods: {
    openModal() {
      this.$boilerplate.modal.open("demo-modal");
    },
    openDrawer() {
      this.$boilerplate.drawer.open("demo-drawer");
    },
  },
};
</script>
<style lang=""></style>
