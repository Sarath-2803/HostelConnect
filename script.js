// Import the functions you need from the SDKs you need
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb3ho0zl99d8BD9I_LjVNSA4JB3vVm554",
  authDomain: "hostelconnect-45eda.firebaseapp.com",
  projectId: "hostelconnect-45eda",
  storageBucket: "hostelconnect-45eda.appspot.com",
  messagingSenderId: "1039951459263",
  appId: "1:1039951459263:web:1d7fc84c0a46b35817a70a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
*/

document.addEventListener('DOMContentLoaded', () => {
    //signup
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const phone = document.getElementById('phone');
    const gender = document.getElementById('gender');
    const signupEmail = document.getElementById('signup-email');
    const signupPasswd = document.getElementById('signup-password');
    const signupForm = document.getElementById('signup-form');

    //signin
    const signinEmail = document.getElementById('signin-email');
    const signinPasswd = document.getElementById('signin-password');
    const signinForm = document.getElementById('signin-form');
    const signinButton = document.getElementById('signin-button');

    //index
    const viewHostel = document.getElementById('viewHostel');
    const navSignIn = document.getElementById('navSignIn');
    const navSignUp = document.getElementById('navSignUp');
    const navSignOut = document.getElementById('navSignOut');
    const cta = document.getElementById('cta');

    let signedin = JSON.parse(localStorage.getItem('signedin')) || 0;
    console.log('Signed in:', signedin);

    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];
    console.log('Current user:', currentUser);


    const buttonFun = (event) => {
        event.preventDefault();
        console.log('Signed in:', signedin);
        console.log('Current user:', currentUser);
        localStorage.getItem('signedin');

        if (signedin == 1) {
            if (currentUser.gender == 'male') {
                window.location.href = 'boys.html';
            } else {
                window.location.href = 'girls.html';
            }
        } else {
            window.location.href = 'signin.html';
        }
    }

    if (viewHostel) {
        viewHostel.addEventListener('click', buttonFun);
    }

    if (signedin == 1) {
        navSignIn.style.display = 'none';
        navSignUp.style.display = 'none';
        navSignOut.style.display = 'block';
        cta.style.display = 'none';
    } else {
        navSignIn.style.display = 'block';
        navSignUp.style.display = 'block';
        navSignOut.style.display = 'none';
        cta.style.display = 'block';
    }
});
