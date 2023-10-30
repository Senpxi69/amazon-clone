import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQuUCfoxsMx7gNrQpZ8ozm92SItdZxZ7Q",
  authDomain: "challenge-c4581.firebaseapp.com",
  projectId: "challenge-c4581",
  storageBucket: "challenge-c4581.appspot.com",
  messagingSenderId: "291522691190",
  appId: "1:291522691190:web:e68be8c2e704c27bf81f57",
  measurementId: "G-Z5QSYX16TM"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };