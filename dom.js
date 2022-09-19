var form = document.querySelector(".input-form");

var itemlist = document.querySelector(".items");

var filter = document.querySelector(".input-search");

form.addEventListener("submit", addItem);

//Delete Event

itemlist.addEventListener("click", removeItem);

//Filter item

filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  // Get Input Value

  let newItem = document.querySelector(".input-box").value;

  //Create New li element

  var li = document.createElement("li");
  //Add class name
  li.className = "list-item";
  console.log(li);

  // Add text node with input value

  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "close-btn";
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
    console.log(itemName);
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
