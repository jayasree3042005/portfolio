// public/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Your Firebase config here
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

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html"; // Go to portfolio after login
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Login failed: " + error.message;
    });
};
