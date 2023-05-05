console.log("hi");
console.log("day 4");
console.log("day 5");
console.log("Day6");
let textInput = document.querySelector('.textInput');
const addButton = document.querySelector('.addButton');
const clearButton = document.querySelector('.clearAll'); 
const itemList = document.querySelector('.itemList');
// const editButton = itemList.getElementsByClassName('.edit');
// console.log(editButton);
// const deleteButton = document.querySelectorAll(".delete");
// console.log(deleteButton);
let editMode = false;
let itemToBeEdited;



function addItem(e)
{
    e.preventDefault();
    const newItem = textInput.value; 
   if (newItem === "")
   {
    alert("Please enter an Note");
    return;
   }

   addItemsToDOM(newItem);
}

function addItemsToDOM(Item)
{
    const li = document.createElement("li");
    const text = document.createTextNode(Item);
    li.appendChild(text);
    const div = document.createElement("div");
    div.className = "CRUDicons";
    const editButton = document.createElement("i");
    editButton.classList.add("fa-solid");
    editButton.classList.add("fa-pen");
    editButton.classList.add("edit");

    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid");
    deleteButton.classList.add("fa-trash");
    deleteButton.classList.add("delete");

    div.appendChild(editButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    itemList.appendChild(li);
    textInput.value = "";
}

function removeAllItems ()
{
    const listItems = document.querySelectorAll("li");
    listItems.forEach(element => {
        element.remove();
    });
}

function deleteItem (e)
{
    console.log("hi");
    const itemToBeDeleted = e.target.parentElement.parentElement;
    itemToBeDeleted.remove();
    console.log(itemToBeDeleted);
}

function editItem(e) 
{   
    function editItem(e) {
        if (editMode) {
          return; // Only allow one item to be edited at a time
        }
      
        editMode = true;
        itemToBeEdited = e.target.parentElement.parentElement;
        const itemText = itemToBeEdited.firstChild.textContent.trim();
      
        // Update the UI to show edit mode
        itemToBeEdited.style.border = '1px solid black';
        itemToBeEdited.style.color = '#ccc';
        textInput.value = itemText;
        addButton.disabled = true;
      
        // Add a "Save" button to the item
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', saveItem);
        itemToBeEdited.appendChild(saveButton);
      
        e.stopPropagation();
      }
      
      function saveItem() {
        const editedText = textInput.value.trim();
      
        if (editedText !== '') {
          itemToBeEdited.firstChild.textContent = editedText;
        }
      
        // Reset the UI and variables to exit edit mode
        itemToBeEdited.style.border = '1px solid #ccc';
        itemToBeEdited.style.color = 'black';
        textInput.value = '';
        addButton.disabled = false;
        editMode = false;
        itemToBeEdited.removeChild(itemToBeEdited.lastChild); // Remove the "Save" button
      }
}




console.log(textInput);
addButton.addEventListener("click",addItem);
// editButton.forEach(element => {
//     element.addEventListener("click",editItem);
// });
// deleteButton.forEach(element =>{
//     element.addEventListener("click",deleteItem);
// });
clearButton.addEventListener("click",removeAllItems);
itemList.addEventListener("DOMNodeInserted", ()=>
{
    const listItems = itemList.querySelectorAll("li");
    editButtons = document.querySelectorAll(".edit");
    deleteButtons = document.querySelectorAll(".delete");
    console.log(editButtons);
    console.log(deleteButtons);
    editButtons.forEach(i =>{
        i.addEventListener("click",editItem);
    })
    deleteButtons.forEach(i =>{
        i.addEventListener("click",deleteItem);
    }) 
})
// document.addEventListener("click",resetEdit);