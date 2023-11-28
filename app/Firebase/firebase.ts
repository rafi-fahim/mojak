// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-FXTQNnROm7ci94FJQOcA_z1L8tCpyoA",
  authDomain: "mojak-6de41.firebaseapp.com" ,
  projectId: "mojak-6de41",
  storageBucket: "mojak-6de41.appspot.com",
  messagingSenderId: "397091662206",
  appId: "1:397091662206:web:c31e16957f0aeb2b702b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_ADMIN ,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER_ID,
// appId: process.env.FIREBASE_APP_ID
