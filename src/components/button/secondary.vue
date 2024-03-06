<template>
  <div>
    <button
      class="bg-gray-100 transition-all duration-300 hover:bg-gray-200 text-gray-500 rounded-lg p-2 font-semibold text-sm"
    >
      {{ label }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Button",
    },
  },
};
</script>
<style lang=""></style>
