import publicLayout from "@/layouts/public.vue";
import login from "@/pages/auth/login.vue";
import signup from "@/pages/auth/signup.vue";
import forgetPass from "@/pages/auth/forget-password.vue";
import resetPass from "@/pages/auth/reset-password.vue";
import verifyEmail from "@/pages/auth/verify-email.vue";

export default [
  {
    path: "/",
    component: publicLayout,
    redirect: "login",
    children: [
      {
        path: "/login",
        name: "login",
        component: login,
        meta: {
          public: true,
          title: `${import.meta.env.VITE_PROJECT_NAME} | Login`,
        },
      },
      {
        path: "/signup",
        name: "signup",
        component: signup,
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} | Sign-Up`,
          public: true,
        },
      },
      {
        path: "/forget-password",
        name: "forget-password",
        component: forgetPass,
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} | Forget Password`,
          public: true,
        },
      },
      {
        path: "/reset-password",
        name: "reset-password",
        component: resetPass,
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} | Reset Password`,
          public: true,
        },
      },
      {
        path: "/verify-email",
        name: "verify-email",
        component: verifyEmail,
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} | Verify Email`,
          public: true,
        },
      },
    ],
  },
];
