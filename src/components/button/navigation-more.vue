<template>
  <div class="flex items-center justify-start flex-col">
    <button
      class="p-2 flex items-center w-full gap-4 transition-all duration-700"
      :class="toggle ? 'justify-between' : 'justify-center'"
      @click="toggleMoreOptions"
    >
      <div class="flex items-center justify-center gap-4 truncate">
        <component
          :is="`Icon${navDetail.icon}`"
          class="h-6 w-6 text-gray-900"
        />
        <span class="truncate" v-if="toggle">{{ navDetail.label }}</span>
      </div>
      <IconMdiArrowRight
        v-if="toggle"
        class="h-6 w-6 text-gray-500 transition-all duration-300"
        :class="showMoreNavs ? 'rotate-90' : 'rotate-0'"
      />
    </button>
    <div v-if="showMoreNavs && toggle" class="w-full pl-5">
      <div v-for="(detail, i) in navDetail.options" :key="i">
        <NavButton
          :to="detail.to"
          :label="detail.label"
          :icon="detail.icon"
          :toggle="toggle"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMoreNavs: false,
      navDetail: this.details,
    };
  },
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    details: {
      type: Object,
    },
  },
  mounted() {
    console.log("details", this.details);
  },
  methods: {
    toggleMoreOptions() {
      this.showMoreNavs = !this.showMoreNavs;
    },
  },
};
</script>
<style lang=""></style>
