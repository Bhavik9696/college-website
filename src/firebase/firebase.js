// Import Firebase core
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import the services you will use
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyh04hYedgG-ighlalIxMGL1aJ_AKRlR0",
  authDomain: "bbcd-college.firebaseapp.com",
  projectId: "bbcd-college",
  storageBucket: "bbcd-college.firebasestorage.app",
  messagingSenderId: "788451178404",
  appId: "1:788451178404:web:907e50ffe7a919df633331",
  measurementId: "G-25K1YXD04S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db };
