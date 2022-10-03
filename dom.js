var form = document.querySelector(".input-form");

var itemlist = document.querySelector(".items");

var filter = document.querySelector(".input-search");

form.addEventListener("submit", addItem);

//Delete Event

itemlist.addEventListener("click", removeItem);

//Filter item

filter.addEventListener("keyup", filterItems);

/**
 * needs better documentation, and the same applies to other functions
 * 
 * @param {Event} e
 */
function addItem(e) {
  e.preventDefault();
  // Get Input Value

  let newItem = document.querySelector(".input-box").value;

  //Create New li element

  // REPLACE OUTDATED VAR WIHT LET AND CONST WHEN POSSIBLE
  var li = document.createElement("li");
 
  //Add class name
  li.className = "list-item";

  // NO CONSOLE-LOGS SHOULD BE PRESENT IN PRODUCTUIN CODE UNLESS NECESSARY
  console.log(li);

  // Add text node with input value

  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "close-btn";1
  
  // use HTML symbols, if impossibele here, render a whole html element using bacticks, and render a html symbol in the html code in js 
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);
  itemlist.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("close-btn")) {
    var li = e.target.parentElement;
    itemlist.removeChild(li);
  }
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  
  console.log(text);

  var items = itemlist.getElementsByTagName("li");

  //Covert to Array

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    // VERY IMPORTANT, REMOVE ALL CONSOLE-LOGS THAT ARNT 100% NECESSARY
    console.log(itemName);
    
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }

    // better code: const {statementName} = (itemName.toLowerCase().indexOf(text) != -1);
    // item.style.display = {statementName} ? "flex" : "none";

    // it is a good practice to replace if and switch-case statement's when possible, to learn how to do that, take a look here: https://javascript.plainenglish.io/avoiding-if-statements-in-our-javascript-code-29406677268e
  });
}
