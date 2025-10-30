
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1z8hy-SeZzJWwCsgjFyvOMi3D20pyknQ",
  authDomain: "chattify-12c6b.firebaseapp.com",
  projectId: "chattify-12c6b",
  storageBucket: "chattify-12c6b.firebasestorage.app",
  messagingSenderId: "658717105051",
  appId: "1:658717105051:web:0fb739857390fb5bc61f3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;