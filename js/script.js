let input = document.getElementById("inputText");
let inputList = document.getElementById("inputList");
let hide = document.getElementById("hideText");

input.addEventListener('keyup', addItem);

function addItem(e) {
  var item = document.createElement('li');

  item.setAttribute('id', 'addList');

  if (e.keyCode === 13) {
    item.innerHTML = input.value;
    item.innerHTML +=  "<button type='button' onclick='removeItem()'>삭제</button>";

    inputList.appendChild(item);

    hideText();
  }
}

function removeItem() {
  var li = document.getElementById('addList');
  inputList.removeChild(li);
}

function hideText() {
  hide.style.display = "block";
}