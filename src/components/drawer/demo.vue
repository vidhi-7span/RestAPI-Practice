<template>
  <VDrawer name="demo-drawer" :header="true" :closeOnClickOutside="true">
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span class="font-bold text-xl">Header</span>
        <button @click="closeModal()" class="flex items-center justify-center">
          <IconMdiClose class="text-black h-8 w-8" />
        </button>
      </div>
    </template>
    <template #default>
      <div class="h-full p-2">
        <div v-for="(_, i) in 20" :key="i">{{ i }} - Button</div>
      </div>
    </template>
  </VDrawer>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$boilerplate.drawer.close("demo-drawer");
    },
  },
};
</script>
