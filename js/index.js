console.log("hi");
const textInput = document.querySelector('.textInput');
const addButton = document.querySelector('.addButton');
const clearButton = document.querySelector('.clearAll'); 
const itemList = document.querySelector('.itemList');
const editButton = document.querySelectorAll('.fa-pen');
console.log(editButton);
const deleteButton = document.querySelector(".fa-trash");
const editMode = false; 



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
    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fa-solid");
    deleteButton.classList.add("fa-trash");
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    itemList.appendChild(li);
}

function removeAllItems ()
{
    const listItems = document.querySelectorAll("li");
    listItems.forEach(element => {
        element.remove();
    });
}



function editItem(e) 
{   
    // if(resetEdit())
    // {
    //     return;
    // }
    console.log("hiGG");
    console.log(e.target);
    e.target.parentElement.parentElement.style.border = '1px solid black';
    e.target.parentElement.parentElement.style.color = '#ccc';
    document.addEventListener("click",()=>{
        const allListItems = document.querySelectorAll("li")
        allListItems.forEach(element => {
            element.style.border = "1px solid #ccc";
            element.style.color = "black";
            
        }); 
    });
    e.stopPropagation();
}




console.log(textInput);
addButton.addEventListener("click",addItem);
editButton.forEach(element => {
    element.addEventListener("click",editItem);
});
clearButton.addEventListener("click",removeAllItems)
// document.addEventListener("click",resetEdit);