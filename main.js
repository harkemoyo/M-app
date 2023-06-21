import { ready } from "./index.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
   
        renderDom(inputValue, myListDb)
    
}
document.addEventListener('keydown', enterBtn)

function enterBtn(e){
    console.log(e)
    if(e.key === 'enter'){
        fillInput()
    }
}

// get value from object format to array
onValue(myListDb, function (snapshot){
    // adding conditional statement to dataBase to allow remove to work on the last itemlist
    clearShoppinglist()
    if (snapshot.exists()){
        
        // turning it into a array for loop to work
        let itemsArray = Object.entries(snapshot.val())
       
        
        for (let i = 0; i < itemsArray.length; i++) {
        const currentItem = itemsArray[i]
        // getting specific id


        // let currentItemId = currentItem[0]
        // let currentItemValue = currentItem[1]
      renderDom(currentItem)
    
            }
    }else{
        shoppingList.innerHTML = "Nothing to display"
    }
    
    
    
    })


    // rendering html
function renderDom(item) {
   
    let itemsId = item[0]
    let itemsTitle = item[1]

    // appended li
    const li = document.createElement('li')
   
    li.textContent = itemsTitle
    shoppingList.append(li)


    // remove shopinglist function

li.addEventListener("click", removeUsedList)

function removeUsedList(){
    let itemIdLocation = ref(db, `Shopping/${itemsId}`)
    remove(itemIdLocation)
    
}
  
}



// clearlist items
function clearShoppinglist(){
    shoppingList.innerHTML = ""
   
}

// clear input field
function clearInput() {
    inputField.value = ""
}


