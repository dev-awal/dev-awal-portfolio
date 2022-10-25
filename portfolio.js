// let newList = document.getElementById('input').value;

document.getElementById("btn").addEventListener("click", makeList);

function makeList() {
    
    let newList = document.getElementById('input').value;

    var checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    var list = document.createElement('p');
    list.innerHTML = newList
    var listWrapper = document.createElement("div");

    // append variables to the div then to the body
    listWrapper.appendChild(checkbox);
    listWrapper.appendChild(list);
    document.getElementById('todo-wrapper').appendChild(listWrapper);


    // clear input field 
    document.getElementById('input').value = '';
}