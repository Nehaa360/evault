import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCpBmroRzKG5EjgDSidYqO6DYHl19dmEKk",
    authDomain: "evault-2fe82.firebaseapp.com",
    projectId: "evault-2fe82",
    storageBucket: "evault-2fe82.appspot.com",
    messagingSenderId: "605533355226",
    appId: "1:605533355226:web:86f162c943662701e479e3",
    measurementId: "G-9QXLG0VPX9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, createUserWithEmailAndPassword };

