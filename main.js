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
        renderDom(inputValue)
}

// rendering html
function renderDom(item) {

    let itemsId = item[0]
    let itemsTitle = item[1]

    // appended li
    const li = document.createElement('li')
    
    li.textContent = itemsTitle
    
    shoppingList.append(li)

    // remove shopinglist function


    
}




// get value from object format to array
onValue(myListDb, function (snapshot){
    // turning it into a array for loop to work
    
            let itemsArray = Object.entries(snapshot.val())
            clearShoppinglist()
            for (let i = 0; i < itemsArray.length; i++) {
                let currentItem = itemsArray[i]
                // getting specific id
                

                // let currentItemId = currentItem[0]
                // let currentItemValue = currentItem[1]
                
            renderDom(currentItem)
    
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


