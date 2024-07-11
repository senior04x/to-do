let editing;
const newArray = [];
function addItem() {
  const input = document.getElementById("new-item");
  const task = input.value;
  if (!task) {
    alert("Iltimos qiymat kirirting");
    return;
  }
  const list = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.className = "result-item";
  const newDiv = document.createElement("div");
  newDiv.className = "button-case";
  const span = document.createElement("span");
  span.className = "result-text";

  span.appendChild(document.createTextNode(task));
  li.appendChild(span);

  const buttonEdit = createButton(" ", () => {
    input.value = task;
    document.getElementById("edit").disabled = false;
    editing = span;
    input.focus();
  });
  buttonEdit.className = "edit-button";
  newDiv.appendChild(buttonEdit);

  const buttonDelete = createButton(" ", () => {
    list.removeChild(li);
  });
  buttonDelete.className = "delete-button";
  newDiv.appendChild(buttonDelete);
  li.append(newDiv);
  list.appendChild(li);
  clearField();
  const newObj = {
    text: task,
  };
  newArray.push(newObj);
  console.log("Boshlang'ich to do ", newArray);
}

function createButton(text, onclick) {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode(text));
  button.onclick = onclick;
  return button;
}
const newArray2 = [];
function change() {
  const input = document.getElementById("new-item");
  const task = input.value;
  editing.innerText = task;
  clearField();
  const newObj2 = {
    text: task,
  };
  newArray2.push(newObj2);
  console.log("O'zgartirilgan to do ", newArray2);
}

function clearField() {
  const input = document.getElementById("new-item");
  input.value = "";
  editing = undefined;

  document.getElementById("edit").disabled = true;

  input.focus();
}
