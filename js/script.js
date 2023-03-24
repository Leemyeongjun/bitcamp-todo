let completBtn = document.querySelector(".complete-btn");
let inputText = document.querySelector(".input-text");
let list = document.querySelector(".list");

let todoList = [];
let id = [];

inputText.addEventListener('keyup', addItem);

function addItem(e) {
  var item = document.createElement('li');

  item.setAttribute('id', 'addList');

  if (e.keyCode === 13) {
    item.innerHTML = inputText.value;
    item.innerHTML +=  "<button type='button' onclick='removeItem()'>X</button>";

    list.appendChild(item);
    deleteItem();
  }
}

function removeItem() {
  var li = document.getElementById('addList');
  list.removeChild(li);
}
