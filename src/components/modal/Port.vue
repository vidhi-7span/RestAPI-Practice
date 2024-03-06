<template>
  <div class="port" :class="{ 'port--overlay': isOpen }" v-if="isOpen">
    <slot>
      <div id="modal-target" class="modal-parent"></div>
    </slot>
  </div>
</template>

<script>
import { ref } from "vue";
import { $modalEmitter } from "@/events/modal/index.js";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    $modalEmitter.on("modal-close", this.onModalClose);
    $modalEmitter.on("modal-open", this.onModalOpen);
  },
  unmounted() {
    $modalEmitter.off("modal-open", this.onModalOpen);
    $modalEmitter.off("modal-close", this.onModalClose);
  },
  methods: {
    onModalOpen() {
      this.isOpen = true;
    },
    onModalClose() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.port {
  z-index: 999;
  @apply fixed inset-0 flex overflow-y-auto overflow-x-hidden;

  &--overlay {
    @apply bg-black bg-opacity-40;
  }

  &--top {
    @apply items-start;
  }

  &--middle {
    @apply items-center;
  }

  &--bottom {
    @apply items-end;
  }

  &--left {
    @apply justify-start;
  }

  &--center {
    @apply justify-center;
  }
  &--right {
    @apply justify-end;
  }

  & > * {
    @apply pointer-events-auto;
  }
  .modal-parent {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>
