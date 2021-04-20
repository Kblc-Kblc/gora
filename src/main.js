import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import VueRouter from "vue-router";
import { store } from "./store/store";
import { routes } from "./router/routes";


const firebaseConfig = {
  apiKey: "AIzaSyAgWN2p_iTD4w-O9bP5kQQUdU_rm2aIWYI",
  authDomain: "test-gora.firebaseapp.com",
  projectId: "test-gora",
  storageBucket: "test-gora.appspot.com",
  messagingSenderId: "1081489973277",
  appId: "1:1081489973277:web:c48b5827256b13248d66f4",
  measurementId: "G-JRQP3ZCJDH"
};

firebase.initializeApp(firebaseConfig);


Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history",
});


router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !user) {
    next("/sign-in");
  } else if (requiresAuth && user) {
    next();
  } else {
    next();
  }
});


firebase.auth().onAuthStateChanged(() => {
  new Vue({
    el: "#app",
    store: store,
    router: router,
    render: h => h(App),
  });
});
