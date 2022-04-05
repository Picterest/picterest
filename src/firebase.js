import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDT79UtquShBOhowxeZisW-T_l8m7IsB-Q",
    authDomain: "picterest-cb600.firebaseapp.com",
    projectId: "picterest-cb600",
    storageBucket: "picterest-cb600.appspot.com",
    messagingSenderId: "196655593104",
    appId: "1:196655593104:web:0438f43a32cb6d36530a15",
    measurementId: "G-M7TY3BZD59"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)


export default db;