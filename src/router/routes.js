import firebase from "firebase";
import Home from "@/components/Home";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Error404 from "@/components/Error404";
import Dashboard from "@/components/Dashboard";
import ForgotPassword from "@/components/ForgotPassword";



export const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: SignIn,
    beforeEnter(to, from, next) {
      const user = firebase.auth().currentUser;
      if (user) {
        next({ name: "dashboard" });
      } else {
        next();
      }
    },
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: SignUp,
    beforeEnter(to, from, next) {
      const user = firebase.auth().currentUser;
      if (user) {
        next({ name: "dashboard" });
      } else {
        next();
      }
    },
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
    beforeEnter(to, from, next) {
      const user = firebase.auth().currentUser;
      if (user) {
        next({ name: "dashboard" });
      } else {
        next();
      }
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/404",
    name: "404",
    component: Error404,
  },
  {
    path: "*",
    redirect: "/404",
  },
];
