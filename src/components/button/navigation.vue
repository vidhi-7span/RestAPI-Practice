<template>
  <div class="flex items-center justify-start transition-all duration-700">
    <router-link
      :to="to"
      class="p-2 hover:bg-gray-100 transition-all duration-200 rounded-lg flex items-center gap-4 w-full"
      :class="toggle ? '' : 'justify-center'"
    >
      <component :is="`Icon${icon}`" class="h-6 w-6 text-gray-600" />
      <span v-if="toggle" class="truncate">{{ label }}</span></router-link
    >
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: "MdiHome",
    },
    to: {
      type: String,
      default: "/",
    },
    label: {
      type: String,
      default: "Lable",
    },
    toggle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.router-link-active {
  @apply bg-gray-200;
}
</style>
