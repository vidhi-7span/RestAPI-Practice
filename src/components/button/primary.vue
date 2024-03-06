<template>
  <div>
    <button
      class="bg-primary-500 transition-all duration-300 hover:bg-primary-600 text-white rounded-lg p-2 font-semibold text-sm"
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
