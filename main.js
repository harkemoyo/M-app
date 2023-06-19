import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-8291f-default-rtdb.asia-southeast1.firebasedatabase.app",
}

const app = initializeApp(appSettings)
const db = getDatabase(app)
// reference database
const myListDb = ref(db, "Shopping")



const inputField = document.getElementById("input-field")
const addCart = document.getElementById("add-button")

addCart.addEventListener("click", fillInput)
function fillInput() {
    let inputValue = inputField.value
    
    push(myListDb, inputValue)
    
    console.log(`${inputValue} added to database`)
}