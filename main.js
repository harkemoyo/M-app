

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDmXAq5m_XA-zkTkZT9qEbFIDSqVR7LH3I",
    authDomain: "add-to-cart-8291f.firebaseapp.com",
    databaseURL: "https://add-to-cart-8291f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "add-to-cart-8291f",
    storageBucket: "add-to-cart-8291f.appspot.com",
    messagingSenderId: "519952273041",
    appId: "1:519952273041:web:dfc0d55deb43663d277930",
    measurementId: "G-9LKY46K026"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(analytics);


// creating a reference


const inputField = document.getElementById("input-field")
const addCart = document.getElementById("add-button")




addCart.addEventListener('click', FillInput)

 function FillInput(){
   let inputValue = inputField.value
 

 }