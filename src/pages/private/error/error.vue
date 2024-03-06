<template>
  <div>
    <div class="flex items-center justify-center flex-col overflow-y-scroll">
      <div class="space-y-14">
        <div
          class="flex items-center justify-center flex-col space-y-4 my-auto"
        >
          <h1 class="text-2xl font-bold text-gray-600">
            {{ pageDetail.title }}
          </h1>
          <h3 class="text-gray-500">{{ pageDetail.description }}</h3>
          <button
            class="p-2 px-4 rounded-lg text-white bg-red-500 font-semibold hover:bg-red-600"
            @click="goBackHome"
          >
            Back To Home
          </button>
        </div>
        <div class="flex items-center justify-center">
          <div class="max-w-[200px] max-h-fit">
            <img :src="`/images/error/${pageDetail.image}`" class="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorType: {
      type: String,
      default: "404",
    },
  },
  created() {
    const page = this.errorDetails.find(
      (detail) => detail.page === this.errorType
    );
    if (page) {
      this.pageDetail = {
        title: page.title,
        description: page.description,
        image: page.image,
      };
    } else {
      this.pageDetail = {
        title: "Unknown Error ☹️",
        description: "Error Code Not Found !",
      };
    }
  },
  data() {
    return {
      pageDetail: {},
      errorDetails: [
        {
          page: "404",
          title: "Page Not Found ☹️",
          description: "We couldn't find the page you are looking for.",
          image: "page-not-found.png",
        },
        {
          page: "500",
          title: "Internal server error 👨🏻‍💻",
          description: "Oops, something went wrong!",
          image: "page-not-found.png",
        },
        {
          page: "401",
          title: "You are not authorized! 🔐",
          description:
            "You do not have permission to view this page using the credentials that you have provided while login. Please contact your site administrator.",
          image: "page-not-found.png",
        },
        {
          page: "1001",
          title: "Under Maintenance! 🚧",
          description:
            "Sorry for the inconvenience but we're performing some maintenance at the moment",
          image: "under-maintenance.png",
        },
        {
          page: "1002",
          title: "We are launching soon 🚀",
          description:
            "Our website is opening soon. Please register to get notified when it's ready!",
          image: "coming-soon.png",
        },
        {
          page: "1003",
          title: "You are not authorized! 🔐",
          description:
            "You do not have permission to view this page using the credentials that you have provided while login. Please contact your site administrator.",
          image: "under-maintenance.png",
        },
      ],
    };
  },
  methods: {
    goBackHome() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>
<style lang=""></style>
