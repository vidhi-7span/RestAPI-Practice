<template>
  <div class="md:flex h-screen overflow-hidden">
    <div
      class="md:w-2/3 hidden p-8 h-full md:flex items-center justify-center flex-col"
    >
      <div
        class="bg-gray-50 h-full w-full flex items-center justify-center overflow-hidden rounded-lg"
      >
        <div class="max-w-md max-h-md">
          <img src="/images/auth/auth-v2-resetpass.png" class="" />
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
            <span class="text-xl font-semibold">Reset Password 🔒 </span>
            <span class="text-gray-600"> for {{ userEmail }}</span>
          </div>
          <VForm @submit="submit()" class="space-y-5">
            <!-- New Password -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">New Password</span>
              <div
                class="relative border rounded-md border-gray-400 overflow-hidden"
              >
                <VInput
                  :type="isShowNewPass ? 'text' : 'password'"
                  name="NewPassword"
                  v-model="newPassword"
                  class="w-11/12 border-red-500 p-2 rounded-md focus:appearance-none appearance-none"
                  rules="required|min:10"
                />
                <button
                  class="absolute right-2 top-2 hover:cursor-pointer"
                  @click="showNewPass"
                >
                  <IconMdiEyeOff v-if="isShowNewPass" class="text-xl" />
                  <IconMdiEyeOn v-else class="text-xl" />
                </button>
              </div>
              <ErrorMessage
                name="NewPassword"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- Confirm Password -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Confirm Password</span>
              <div
                class="relative border rounded-md border-gray-400 overflow-hidden"
              >
                <VInput
                  :type="isShowConfirmPass ? 'text' : 'password'"
                  name="ConfirmPassword"
                  v-model="confirmPassword"
                  class="w-11/12 border-red-500 p-2 rounded-md focus:appearance-none appearance-none"
                  rules="required|min:10"
                />
                <button
                  class="absolute right-2 top-2 hover:cursor-pointer"
                  @click="showConfirmPass"
                >
                  <IconMdiEyeOff v-if="isShowConfirmPass" class="text-xl" />
                  <IconMdiEyeOn v-else class="text-xl" />
                </button>
              </div>
              <ErrorMessage
                name="ConfirmPassword"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <div v-if="showCompareError && newPassword != confirmPassword">
              <span class="text-xxs text-red-500 md:text-xs"
                >New Password & Confirm Password Must be same.</span
              >
            </div>
            <button
              type="submit"
              class="flex items-center justify-center w-full rounded-lg bg-red-500 hover:bg-red-600 py-2 text-white text-md gap-2"
              :class="isLoading ? 'cursor-wait' : ''"
              :disabled="isLoading ? true : false"
            >
              <IconMdiLoading v-if="isLoading" class="h-6 w-6" />
              {{ isLoading ? "Updating New Password" : "Set New Password" }}
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
      isShowNewPass: false,
      showCompareError: false,
      isShowConfirmPass: false,
      newPassword: "",
      confirmPassword: "",
      userEmail: "john.doe@email.com",
      isLoading: false,
    };
  },
  methods: {
    setToken,
    showNewPass() {
      this.isShowNewPass = !this.isShowNewPass;
    },
    showConfirmPass() {
      this.isShowConfirmPass = !this.isShowConfirmPass;
    },
    submit() {
      this.isLoading = true;
      setTimeout(() => {
        if (this.newPassword == this.confirmPassword) {
          // Make API Call for Setiing Up New Password
          // if response true then...
          this.setToken();
          this.$router.push({ path: "/dashboard" });
          this.isLoading = false;
        } else {
          this.showCompareError = true;
          this.isLoading = false;
        }
      }, 2000);
    },
    backToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
