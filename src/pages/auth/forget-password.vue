<template>
  <div class="md:flex h-screen overflow-hidden">
    <div
      class="md:w-2/3 hidden p-8 h-full md:flex items-center justify-center flex-col"
    >
      <div
        class="bg-gray-50 h-full w-full flex items-center justify-center overflow-hidden rounded-lg"
      >
        <div class="max-w-md max-h-md">
          <img src="/images/auth/auth-v2-forgetpass.png" class="" />
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
            <span class="text-xl font-semibold"> Forgot Password? 🔒 </span>
            <span class="text-gray-600">
              Enter your email and we'll send you instructions to reset your
              password
            </span>
          </div>
          <VForm @submit="submit()" class="space-y-5">
            <!-- Email -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Email</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="email"
                  name="email"
                  v-model="email"
                  class="p-2 w-full"
                  rules="required|email"
                />
              </div>
              <ErrorMessage
                name="email"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>

            <button
              type="submit"
              class="flex items-center justify-center w-full rounded-lg bg-red-500 hover:bg-red-600 py-2 text-white text-md gap-2"
              :class="isLoading ? 'cursor-wait' : ''"
              :disabled="isLoading ? true : false"
            >
              <IconMdiLoading v-if="isLoading" class="h-6 w-6" />
              <span>{{
                isLoading ? "Sending Reset Link..." : "Send Reset Link"
              }}</span>
            </button>
            <div class="flex items-center justify-center gap-3 text-md">
              <button
                @click="backToLogin()"
                class="text-red-500 text-md flex items-center justify-center gap-1 hover:text-red-600"
              >
                <IconMdiArrowLeft class="h-8 w-8" />
                <span>Back to Login</span>
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "@/store/user";
import { setToken } from "@/utils";
export default {
  // Setting up pinia.
  setup() {
    const user = useUserStore();
    return {
      user,
    };
  },
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
      // const userDetail = {
      //   email: this.email,
      // };
      // this.user.setUser(userDetail);
      // if response true then...
      // this.setToken();
      setTimeout(() => {
        this.$router.push({ path: "/reset-password" });
        this.isLoading = false;
      }, 2000);
    },
    backToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
