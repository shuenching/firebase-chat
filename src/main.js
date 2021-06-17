import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

let app = "";
const config = {
  apiKey: "AIzaSyDFd9Y4vP56i3eLKBNWFRoOwvH0byeweHg",
  authDomain: "fir-rtc-b7805.firebaseapp.com",
  projectId: "fir-rtc-b7805",
  storageBucket: "fir-rtc-b7805.appspot.com",
  messagingSenderId: "7579827964",
  appId: "1:7579827964:web:2911f4bf49cdf28b72a179",
  measurementId: "G-ZD295XWLS9"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   render: (h) => h(App)
// }).$mount("#app");
