<template>
  <div>
    <div>
      <VModal
        :header="true"
        :footer="true"
        name="demo-modal"
        class="w-72 sm:w-80"
        :closeOnClickOutside="true"
      >
        <template #header>
          <div class="flex items-center justify-between w-full">
            <span class="text-black">Header</span>
            <button
              @click="closeModal()"
              class="flex items-center justify-center"
            >
              <IconMdiClose class="text-black h-8 w-8" />
            </button>
          </div>
          <!-- You can put close button here -->
        </template>
        <template #default>
          <div class="flex flex-col items-center justify-center">
            <div></div>
            <h3 class="mt-6 text-xl">Modal Data</h3>
            <p class="mt-2 text-center">Data 2</p>
          </div>
        </template>
        <template #footer
          ><span class="text-black">Footer</span>
          <!-- You can put close button here -->
        </template>
      </VModal>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$boilerplate.modal.close("input-modal");
    },
  },
};
</script>
