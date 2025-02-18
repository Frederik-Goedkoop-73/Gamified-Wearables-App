// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkiBNRxfZHv9cEbl5rrvstkv-hdN_O060",
  authDomain: "gamified-wearables-app.firebaseapp.com",
  projectId: "gamified-wearables-app",
  storageBucket: "gamified-wearables-app.firebasestorage.app",
  messagingSenderId: "465963456148",
  appId: "1:465963456148:web:56a5156af2b7a4aae24681",
  measurementId: "G-VKEYCQHFPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services (optional, if you need to use them elsewhere)
/* export { app, analytics }; */