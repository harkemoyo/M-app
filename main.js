import { ready } from "./index.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://add-to-cart-8291f-default-rtdb.asia-southeast1.firebasedatabase.app",
}

const app = initializeApp(appSettings)
const db = getDatabase(app)

// reference database
const myListDb = ref(db, "Shopping")
console.log(ready());

const inputField = document.getElementById("input-field")
const addCart = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

addCart.addEventListener("click", fillInput)
function fillInput() {
        let inputValue = inputField.value

        push(myListDb, inputValue)
        clearInput()
        clearShoppinglist()
        renderDom(inputValue, myListDb)
        console.log(`${inputValue} added to database`)
}

// get value from object format to array
onValue(myListDb, function (snapshot){
    // turning it into a array for loop to work
    
            let itemsArray = Object.values(snapshot.val())
    
            for (let i = 0; i < itemsArray.length; i++) {
            renderDom(itemsArray[i])
    
            }
    
        
    })

// clearlist items
function clearShoppinglist(){
    shoppingList.innerHTML = ""
   
}

// clear input field
function clearInput() {
    inputField.value = ""
}
// rendering html
function renderDom(dom) {
     // appended li
     const li = document.createElement('li')
     li.appendChild(document.createTextNode(`${dom}`))
     shoppingList.append(li)
     
}

