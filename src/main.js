import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT79UtquShBOhowxeZisW-T_l8m7IsB-Q",
  authDomain: "picterest-cb600.firebaseapp.com",
  projectId: "picterest-cb600",
  storageBucket: "picterest-cb600.appspot.com",
  messagingSenderId: "196655593104",
  appId: "1:196655593104:web:0438f43a32cb6d36530a15",
  measurementId: "G-M7TY3BZD59"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App).use(router).use(store);

router.isReady().then(() => {
  app.mount('#app');
});

