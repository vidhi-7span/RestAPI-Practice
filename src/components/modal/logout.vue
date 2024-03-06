<template>
  <VModal :header="true" :footer="false" name="logout" class="w-72 sm:w-80">
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span class="text-black"></span>
        <button @click="closeModal()" class="flex items-center justify-center">
          <IconMdiClose class="text-black h-8 w-8" />
        </button>
      </div>
      <!-- You can put close button here -->
    </template>
    <template #default>
      <div class="flex flex-col items-center justify-center">
        <div></div>
        <h3 class="text-xl">Are You Sure Want to Logout ?</h3>
        <div class="space-x-2 p-2">
          <button
            class="bg-red-300 rounded p-2 hover:border-black border"
            @click="logout()"
          >
            Logout
          </button>
          <button
            class="rounded p-2 hover:border-black border"
            @click="closeModal()"
          >
            Cancel
          </button>
        </div>
      </div>
    </template>
  </VModal>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$boilerplate.modal.close("input-modal");
    },
    logout() {
      this.$router.push({ name: "logout" });
    },
  },
};
</script>
<style lang=""></style>
