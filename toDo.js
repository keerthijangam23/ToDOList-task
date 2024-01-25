// - Cook Biryani
// - Go to Gym
// - Study Javascript
// - Spend time with plants
// - Do Meditation
// - Learn Typing
// - Do walking
// - Watch Movie
// - Read Novel
// - Talk to friends
// - Play ludo

//getting items from the local storage or array .
const itemArray = JSON.parse(localStorage.getItem("user")) || [
  { task: "Cook Biryani", id: 1 },
  { task: "Go to Gym", id: 2 },
  { task: "Study Javascript", id: 3 },
  { task: "Spend time with plants", id: 4 },
  { task: "Do Meditation", id: 5 },
  { task: "Learn Typing", id: 6 },
  { task: "Do walking", id: 7 },
  { task: "Watch Movie", id: 8 },
  { task: "Read Novel", id: 9 },
  { task: "Talk to friends", id: 10 },
  { task: "Play ludo ", id: 11 },
];
var arrayLength = itemArray.length;
//creating orderlist
let inputValue = document.getElementById("add-item");
var orderList = document.createElement("OL");
orderList.id = "tasks";
//appending orderlist to the body
document.body.appendChild(orderList);
var toList = document.createElement("DIV");
toList.id = "display";
//looping through array items ,calling the function which will add listitems to the orderlist and display
itemArray.forEach(function (val) {
  additem(val);
});
//adding each task to the list item and appedning it to the individual div,appending the div to orderList
function additem(val) {
  var toDO = val.task;
  var toDOId = val.id;
  var listContainer = document.createElement("DIV");
  listContainer.id = toDOId;
  orderList.appendChild(listContainer);
  var item = document.createElement("LI");
  item.textContent = toDO;
  listContainer.appendChild(item);
  //addin delete button to each each individual div
  var delButton = document.createElement("BUTTON");
  var symbol = document.createTextNode("\u00D7");
  delButton.id = toDOId;
  delButton.appendChild(symbol);
  listContainer.appendChild(delButton);
  // adding delete functionality to the button
  delButton.onclick = function (event) {
    let ol = document.getElementById("tasks");
    let del = document.getElementById(event.target.id);
    ol.removeChild(del);
    let index = itemArray.findIndex((val) => val.id === toDOId);
    itemArray.splice(index, 1);
    save();
  };
}
//adding eventlistner to the button
const addItemButton = document.getElementById("add-item-btn");
addItemButton.addEventListener("click", () => {
  let val1 = inputValue.value;
  if (val1 === "") {
    alert("You must write something!");
  } else {
    arrayLength = arrayLength + 1;
    let x = {
      task: val1,
      id: arrayLength,
    };
    //pushing new array items to the array
    itemArray.push(x);
    inputValue.value = "";
    additem(x);
    save();
  }
});
//setting items to the local storage
function save() {
  localStorage.setItem("user", JSON.stringify(itemArray));
}
