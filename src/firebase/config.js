    import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBadBBybaCwnZ-UIYvuoubSjvDIj4P_c0s",
  authDomain: "portfolio-3a00b.firebaseapp.com",
  databaseURL: "https://portfolio-3a00b-default-rtdb.firebaseio.com/",
  projectId: "portfolio-3a00b",
  storageBucket: "portfolio-3a00b.firebasestorage.app",
  messagingSenderId: "934306283625",
  appId: "1:934306283625:web:819b9e340e04495f7b62f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
