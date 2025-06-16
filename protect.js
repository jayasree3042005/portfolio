// protect.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// 🔑 Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBCyUZjdypN6Jzfz5Jtdff5FFtwyHcSOrY",
  authDomain: "website-adf32.firebaseapp.com",
  projectId: "website-adf32",
  storageBucket: "website-adf32.firebasestorage.app",
  messagingSenderId: "300945420086",
  appId: "1:300945420086:web:17a2ffed99feab55f40d97",
  measurementId: "G-N8JS037LD1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Redirect to login.html if not logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});
