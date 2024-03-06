<template>
  <div class="md:flex h-screen overflow-hidden">
    <div
      class="md:w-2/3 hidden p-8 h-full md:flex items-center justify-center flex-col"
    >
      <div
        class="bg-gray-50 h-full w-full flex items-center justify-center overflow-hidden rounded-lg"
      >
        <div class="max-w-md max-h-md">
          <img src="/images/auth/auth-v2-signup.png" class="" />
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
            <span class="text-xl font-semibold">
              Adventure starts here 🚀
            </span>
            <span class="text-gray-600">
              Make your app management easy and fun!
            </span>
          </div>
          <VForm @submit="submit()" class="space-y-5">
            <!-- User Name -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Username</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="username"
                  v-model="userName"
                  class="p-2 w-full"
                  rules="required|alpha_dash"
                />
              </div>
              <ErrorMessage
                name="username"
                class="text-xxs text-red-500 md:text-xs whitespace-normal max-w-xs"
              ></ErrorMessage>
            </div>
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
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Password</span>
              <div
                class="relative border rounded-md border-gray-400 overflow-hidden"
              >
                <VInput
                  :type="isShowPass ? 'text' : 'password'"
                  name="Password"
                  v-model="password"
                  class="w-11/12 border-red-500 p-2 rounded-md focus:appearance-none appearance-none"
                  rules="required|min:10"
                />
                <button
                  class="absolute right-2 top-2 hover:cursor-pointer"
                  @click="showPass"
                >
                  <IconMdiEyeOff v-if="isShowPass" class="text-xl" />
                  <IconMdiEyeOn v-else class="text-xl" />
                </button>
              </div>
              <ErrorMessage
                name="Password"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="checkbox"
                  type="checkbox"
                  v-model="agreedToPolicy"
                  class="w-4 h-4 bg-gray-100 border-gray-600 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox" class="ml-2">
                  I agree to
                  <span
                    class="text-red-500 hover:cursor-pointer hover:text-red-600"
                    >privacy policy & terms</span
                  ></label
                >
              </div>
            </div>
            <span
              v-if="!agreedToPolicy && PolicyDecline"
              class="text-red-500 text-xs px-4"
            >
              🤔 You actually did not agree?
            </span>

            <button
              type="submit"
              class="flex items-center justify-center w-full rounded-lg bg-red-500 hover:bg-red-600 py-2 text-white text-md gap-2"
              :class="isLoading ? 'cursor-wait' : ''"
              :disabled="isLoading ? true : false"
            >
              <IconMdiLoading v-if="isLoading" class="h-6 w-6" />
              {{ isLoading ? "Signing up" : "Sign Up" }}
            </button>
            <div class="flex items-center justify-center gap-3 text-md">
              <span> Already have an account? </span>
              <button @click="signin()" class="text-red-500 text-md">
                Sign in instead
              </button>
            </div>
          </VForm>
          <div class="flex items-center justify-center">
            <hr
              class="w-full h-[0.025rem] bg-gray-100 rounded border-0 dark:bg-gray-300"
            />
            <span class="mx-4 text-gray-500">or</span>
            <hr
              class="w-full h-[0.025rem] bg-gray-100 rounded border-0 dark:bg-gray-300"
            />
          </div>
          <div class="flex items-center justify-center gap-4">
            <!-- Facebook Social signup Button -->
            <button
              class="rounded-md bg-indigo-200 p-2 w-8 h-8"
              @click="signupWithFacebook()"
            >
              <IconMdiFacebook class="text-indigo-600" />
            </button>
            <!-- Google Social signup Button -->
            <button
              class="rounded-md bg-red-200 p-2 w-8 h-8"
              @click="signupWithGoogle()"
            >
              <IconMdiGoogle class="text-red-600" />
            </button>
            <!-- X Social signup Button -->
            <button
              class="rounded-md bg-blue-200 p-2 w-8 h-8"
              @click="signupWithX()"
            >
              <IconMdiTwitter class="text-blue-500" />
            </button>
          </div>
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
      userName: "",
      email: "",
      password: "",
      agreedToPolicy: false,
      PolicyDecline: false,
    };
  },
  created() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function () {
      console.log(xhr.responseText);
    };
    xhr.send();
  },
  methods: {
    setToken,
    showPass() {
      this.isShowPass = !this.isShowPass;
    },
    submit() {
      this.isLoading = true;

      const registerResponse = fetch("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "pistol",
        }),
      });
      console.log(registerResponse);

      // setTimeout(() => {
      //   if (this.agreedToPolicy) {
      //     // Make API Call for Check Logger Data
      //     // if response true then...
      //     const userDetail = {
      //       userName: this.userName,
      //       email: this.email,
      //     };
      //     // this.user.setUser(userDetail);
      //     // this.setToken();
      //     this.$router.push({ path: "/verify-email" });
      //     this.isLoading = false;
      //   } else {
      //     this.PolicyDecline = true;
      //     this.isLoading = false;
      //   }
      // }, 2000);
    },
    signin() {
      this.$router.push({ path: "/login" });
    },
    signupWithFacebook() {
      this.$router.push({ path: "/signup" });
    },
    signupWithGoogle() {
      this.$router.push({ path: "/signup" });
    },
    signupWithX() {
      this.$router.push({ path: "/signup" });
    },
  },
};
</script>
