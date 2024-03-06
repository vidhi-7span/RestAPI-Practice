<template>
  <div class="md:flex h-screen overflow-hidden">
    <div
      class="md:w-2/3 hidden p-8 h-full md:flex items-center justify-center flex-col"
    >
      <div
        class="bg-gray-50 h-full w-full flex items-center justify-center overflow-hidden rounded-lg"
      >
        <div class="max-w-md max-h-md">
          <img src="/images/auth/auth-v2-verifyemail.png" class="" />
        </div>
      </div>
    </div>
    <div
      class="lg:w-1/3 h-full flex flex-col p-8 overflow-y-scroll justify-center"
    >
      <div class="flex items-center justify-center xl:p-8">
        <div class="border border-white space-y-5 max-w-md w-full">
          <div class="flex items-start flex-col space-y-2">
            <IconLogo color="red" />
            <span class="text-xl font-semibold"> Verify your email ✉️ </span>
            <span class="text-gray-600">
              Account activation link sent to your email address:
              hello@example.com Please follow the link inside to continue.
            </span>
          </div>
          <VForm @submit="submit()" class="space-y-5">
            <button
              type="submit"
              class="flex items-center justify-center w-full rounded-lg bg-red-500 hover:bg-red-600 py-2 text-white text-md gap-2"
              :class="isLoading ? 'cursor-wait' : ''"
              :disabled="isLoading ? true : false"
            >
              <IconMdiLoading v-if="isLoading" class="h-6 w-6" />
              {{ isLoading ? "Skipping..." : "Skip For Now" }}
            </button>
            <div class="flex items-center justify-center gap-3 text-md">
              <span> Didn't get the mail? </span>
              <button @click="resend()" class="text-red-500 text-md">
                Resend
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { useUserStore } from "@/store/user";
import { setToken } from "@/utils";
export default {
  // Setting up pinia.
  //   setup() {
  //     const user = useUserStore();
  //     return {
  //       user,
  //     };
  //   },
  data() {
    return {
      isShowPass: false,
      email: "",
      password: "",
      remember: false,
      isLoading: false,
    };
  },
  methods: {
    setToken,
    showPass() {
      this.isShowPass = !this.isShowPass;
    },
    submit() {
      this.isLoading = true;
      // Make API Call for Check Logger Data
      // if response true then...
      //   const userDetail = {
      //     email: this.email,
      //   };
      //   this.user.setUser(userDetail);
      setTimeout(() => {
        this.setToken();
        this.$router.push({ path: "/dashboard" });
        this.isLoading = false;
      }, 2000);
    },
    resend() {
      // Logic For Resending OTP
      console.log("Resending OTP....");
    },
    backToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
