
document.getElementById("btn").addEventListener("click", makeList);

function makeList() {
    
    let activity = document.getElementById('input').value;

    if (activity === '') {
        document.getElementById("btn").disabled = true;
    } 
    else {

        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");

        var newActivity = document.createElement('p');
        newActivity.innerHTML = activity
        var wrapper = document.createElement("div");
        wrapper.setAttribute("id", "activityWrapper");

        // append variables to the div then to the body
        wrapper.appendChild(checkbox);
        wrapper.appendChild(newActivity);
        document.getElementById('todo-wrapper').appendChild(wrapper);


        // clear input field 
        document.getElementById('input').value = '';
        document.getElementById("btn").disabled = false;
        }
    document.getElementById("btn").disabled = false;
}