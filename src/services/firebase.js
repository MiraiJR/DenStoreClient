import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG_922BctUyfXttIJSUax0DALwchvfLBQ",
  authDomain: "databaseweb1.firebaseapp.com",
  databaseURL: "https://databaseweb1-default-rtdb.firebaseio.com",
  projectId: "databaseweb1",
  storageBucket: "databaseweb1.appspot.com",
  messagingSenderId: "725643283647",
  appId: "1:725643283647:web:b1c2c8c96189a5a5848a0a",
  measurementId: "G-0P44Q32H1P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
