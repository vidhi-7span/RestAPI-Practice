import privateLayout from "@/layouts/private.vue";
import dashboard from "@/pages/private/dashboard/index.vue";
import NotFound from "@/pages/private/error/error.vue";
import Logout from "@/pages/private/logout.vue";

import ProfilePage from "@/pages/private/profile/index.vue";
export default [
  {
    path: "/",
    component: privateLayout,
    redirect: "dashboard",
    children: [
      {
        path: "/:pathMatch(.*)*",
        component: NotFound,
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} - Page Not Found`,
        },
      },
      {
        path: "/dashboard",
        component: dashboard,
        name: "dashboard",
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} - Dashboard`,
        },
      },
      {
        path: "/logout",
        component: Logout,
        name: "logout",
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} - Logging Out...`,
        },
      },
      {
        path: "/profile",
        component: ProfilePage,
        name: "profile",
        meta: {
          title: `${import.meta.env.VITE_PROJECT_NAME} - My Profile`,
        },
      },
    ],
  },
];
