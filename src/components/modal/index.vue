<template>
  <Teleport to="#modal-target" v-if="isOpen">
    <div :class="NewClass" v-bind="$attrs" v-click-outside="closeModalES">
      <div v-if="header" class="header relative">
        <slot v-bind="scopes" name="header" />
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
import { $modalEmitter } from "@/events/modal/index.js";

export default {
  inheritAttrs: false,
  name: "ModalIndex",
  props: {
    name: String,
    title: String,
    NewClass: {
      type: String,
      default: "modal",
    },
    size: {
      type: String,
      default: "sm",
    },
    header: {
      type: Boolean,
      default: true,
    },
    footer: {
      type: Boolean,
      default: true,
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
      return `modal--${this.size}`;
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
    $modalEmitter.on("modal-open", this.onModalOpen);
    $modalEmitter.on("modal-close", this.onModalClose);
  },

  unmounted() {
    $modalEmitter.off("modal-open", this.onModalOpen);
    $modalEmitter.off("modal-close", this.onModalClose);
  },

  methods: {
    closeModalES() {
      if (this.closeOnClickOutside) {
        this.closeModal(this.name);
      }
    },
    closeModal(name) {
      this.$boilerplate.modal.close(name);
      this.$emit("modal-close");
    },
    onModalOpen(payload) {
      let { __name } = payload;
      if (!__name) return;
      if (this.name == __name) {
        this.open(payload);
      } else {
        this.scope = null;
        this.isOpen = false;
      }
    },
    onModalClose(payload) {
      this.close(payload);
    },
    open(payload = {}) {
      this.scope = payload;
      this.isOpen = true;
      this.$emit("open", payload);
      document.body.classList.add("overflow-hidden", "touch-none");
    },

    /**
     * When name is explicitly provided to close, it should close that modal only.
     * If not, it will close any open modal as all the listeners will trigger.
     * Currently only one modal is supported at a time though.
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
      }
      document.body.classList.remove("overflow-hidden", "touch-none");
    },
  },
};
</script>

<style lang="scss" scoped>
.FullScreen {
  @apply relative h-full max-h-[80%] w-full max-w-[80%] rounded-lg border border-gray-500;

  .header {
    @apply flex h-14 flex-shrink-0 flex-grow-0  items-center justify-center gap-2  bg-secondary-1000 px-4;
  }

  .body {
    @apply h-full flex-grow-0  bg-white p-7;
  }

  .footer {
    @apply flex flex-shrink-0 flex-grow-0 items-center justify-center  py-5 bg-white;
  }
}
.modal {
  @apply relative z-50 flex max-w-lg flex-grow-0 flex-col overflow-auto rounded-lg border border-gray-500;

  &--sm {
    @apply w-[400px];
  }

  &--md {
    @apply w-[700px];
  }

  .header {
    @apply flex h-14 flex-shrink-0 flex-grow-0  items-center justify-center gap-2  bg-white px-4 border-b border-gray-500;
  }

  .body {
    @apply flex-grow-0 overflow-auto  bg-white;
  }

  .footer {
    @apply flex flex-shrink-0 flex-grow-0 items-center justify-center  py-5 bg-white border-t border-gray-500;
  }
}
</style>
