<template>
  <Teleport to="#drawer-target" v-if="isOpen">
    <div class="drawer" :class="[sizeClass]" v-click-outside="closeModalES">
      <div v-if="header" class="header">
        <slot v-bind="scopes" name="header"/>
      </div>

      <div class="body">
        <slot v-bind="scopes"></slot>
      </div>

      <div v-if="footer" class="footer">
        <slot name="footer" v-bind="scopes"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { $drawerEmitter } from "@/events/drawer/index.js";
export default {
  name: "DrawerIndex",
  props: {
    name: String,
    title: String,
    size: {
      type: String,
      default: "sm",
    },
    header: {
      type: Boolean,
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    closeOnClickOutside: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      scope: null,
    };
  },
  computed: {
    sizeClass() {
      return `drawer--${this.size}`;
    },
    scopes() {
      return {
        close: this.close,
        isOpen: this.isOpen,
        scope: this.scope,
      };
    },
  },
  mounted() {
    $drawerEmitter.on("drawer-open", this.onDrawerOpen);

    $drawerEmitter.on("drawer-close", this.onDrawerClose);
  },

  unmounted() {
    $drawerEmitter.off("drawer-open", this.onDrawerOpen);
    $drawerEmitter.off("drawer-close", this.onDrawerClose);
  },

  methods: {
    /**
     * The open method should be accesible from the parent component too
     * so it can be used with $refs when required.
     * Hence the name maching should be done at listener level ($root.on)
     * intead of method level.
     */
    closeModalES() {
      if (this.closeOnClickOutside) {
        this.$boilerplate.drawer.close(this.name);
      }
    },
    onDrawerOpen(payload) {
      let { __name } = payload;
      if (!__name) return;
      if (this.name == __name) {
        this.open(payload);
      } else {
        this.scope = null;
        this.isOpen = false;
      }
    },
    onDrawerClose(payload) {
      this.close(payload);
    },
    open(payload = {}) {
      this.scope = payload;
      this.isOpen = true;
      this.$emit("open", payload);
      document.body.classList.add("overflow-hidden", "touch-none");
    },

    /**
     * When name is explicitly provided to close, it should close that drawer only.
     * If not, it will close any open drawer as all the listeners will trigger.
     * Currently only one drawer is supported at a time though.
     */
    close(payload = {}) {
      const { __name } = payload;
      let shouldClose = false;
      if (__name) {
        if (this.name == __name) {
          shouldClose = true;
        }
      } else {
        shouldClose = true;
      }
      if (shouldClose) {
        this.scope = null;
        this.isOpen = false;
        this.$emit("close", payload);
        document.body.classList.remove("overflow-hidden", "touch-none");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.drawer {
  @apply relative flex w-full max-w-lg flex-grow-0 flex-col overflow-auto rounded-lg border border-black bg-white text-black;
  opacity: 1;
  height: 100%;

  .header {
    @apply flex h-12 flex-shrink-0 flex-grow-0  items-center justify-center gap-2  bg-white border-b border-black px-4;
  }

  .body {
    @apply flex-grow-0 overflow-auto bg-white text-black h-full;
  }

  .footer {
    @apply flex flex-shrink-0 flex-grow-0 items-center justify-center bg-white border-t border-black py-5;
  }
}
</style>
