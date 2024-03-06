<template>
  <div class="port" :class="{ 'port--overlay': isOpen }" v-if="isOpen">
    <slot>
      <div id="drawer-target" class="drawer-parent"></div>
    </slot>
  </div>
</template>

<script>
import { $drawerEmitter } from "@/events/drawer/index.js";

export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    $drawerEmitter.on("drawer-close", this.onDrawerClose);
    $drawerEmitter.on("drawer-open", this.onDrawerOpen);
  },
  unmounted() {
    $drawerEmitter.off("drawer-open", this.onDrawerOpen);
    $drawerEmitter.off("drawer-close", this.onDrawerClose);
  },
  methods: {
    onDrawerOpen() {
      this.isOpen = true;
    },
    onDrawerClose() {
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
    @apply ml-80 md:justify-end;
  }

  & > * {
    @apply pointer-events-auto;
  }
  .drawer-parent {
    @apply w-full max-w-md sm:max-w-sm;
  }
}
</style>
