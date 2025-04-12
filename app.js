var input = document.querySelector('#input');
var ol = document.querySelector('ol');

var arra = [];

function addTodo() {
    var inputValue = input.value.trim();

    if (inputValue === "") {
        alert("The box is empty");
        return;
    }

    arra.push(inputValue);
    console.log("Current To-Do List:", arra);
    input.value = ""; 
    renderTodo();
}

function deleteTodo(index) {
    arra.splice(index, 1);
    console.log("Updated To-Do List:", arra);
    renderTodo();
}

function editTodo(index) {
    var editvalue = prompt('Enter the Edit', arra[index]);
    if (editvalue !== null && editvalue.trim() !== "") {
        arra[index] = editvalue.trim();
        console.log("Updated To-Do List:", arra);
        renderTodo();
    }
}

function renderTodo() {
    ol.innerHTML = "";
    for (var i = 0; i < arra.length; i++) {
        ol.innerHTML += `
        <li>${arra[i]}
            <button onclick="deleteTodo(${i})">delete</button> &nbsp
            <button onclick="editTodo(${i})">edit</button>
        </li>`;
    }
}

