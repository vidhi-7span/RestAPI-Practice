<template>
  <div>
    <svg
      width="32"
      height="22"
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.00183571 0.3125V7.59485C0.00183571 7.59485 -0.141502 9.88783 2.10473 11.8288L14.5469 23.6837L21.0172 23.6005L19.9794 10.8126L17.5261 7.93369L9.81536 0.3125H0.00183571Z"
        :fill="color"
      ></path>
      <path
        opacity="0.06"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.17969 17.7762L13.3027 3.75173L17.589 8.02192L8.17969 17.7762Z"
        :fill="color"
      ></path>
      <path
        opacity="0.06"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.58203 17.2248L14.8129 5.24231L17.6211 8.05247L8.58203 17.2248Z"
        :fill="color"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.25781 17.6914L25.1339 0.3125H33.9991V7.62657C33.9991 7.62657 33.8144 10.0645 32.5743 11.3686L21.0179 23.6875H14.5487L8.25781 17.6914Z"
        :fill="color"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  name: "VuexyLogo",
  props: {
    color: {
      type: String,
      default: "#161616",
    },
  },
};
</script>
<style lang=""></style>
./Logo.vue
