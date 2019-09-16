// ici j'ai créer un modèle todo tasks en utilisant l'objet
var tasks = [
    {
        id: 1,
        title: 'Hit the gym',
        isDone: false

    }, {
        id: 2,
        title: 'Grocery Shopping',
        isDone: true

    }, {
        id: 3,
        title: 'Doctor appointement',
        isDone: true

    }, {
        id: 4,
        title: 'Pick up Jane at the airport',
        isDone: false
    }, {
        id: 5,
        title: 'Meet up with parents',
        isDone: true
    }

];




//cette ligne va me permettre d'afficher les elements que j'ai dans mon array tout en haut
var ul = document.getElementById('taskList');

tasks.forEach(function (task) {

    //Li
    var li = document.createElement('li');

    // Checkbox
    var checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = task.isDone;
    checkbox.addEventListener('change', onCheckboxChanged)

    // Label
    var label = document.createElement('label')
    if (task.isDone) {
        label.classList.add('label-checked');
    }
    
    label.innerHTML = task.title;
    label.id = 'label-' + task.id

    //Appendchild
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
    console.log(" taille initiale : " + tasks.length);


});


//Ecouter lorsqu'il y a un changement sur la checkbox
function onCheckboxChanged(event) {

    console.log("checkbox function", event.target.checked);

    var label = event.target.nextSibling;
    if (event.target.checked) {
        label.classList.add('label-checked');

    } else {
        label.classList.remove('label-checked');
    }
}
 
// addTask function that allows to add new todo element
function addTask() {

    // Label
    var inputValue = document.getElementById('taskInput').value;
    //create a label
    var label;
    //create an li node
    var liNode = document.createElement('li');
    label = document.createElement('label');
    //create a text node
    label.innerHTML = inputValue;
    console.log(" inputValue " + inputValue);
    //apend the liNode to the checkbox
    var checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.addEventListener('change', onCheckboxChanged)

    var newTask = {
        id: tasks.length + 1,
        title: inputValue,
        isDone: true
    }

    tasks.push(newTask);

    console.log(" tasks.length " + tasks.length);

    //appendchild
    liNode.appendChild(checkbox);
    liNode.appendChild(label);
    //Append the text to <li>
    ul.appendChild(liNode);


    // Label
    if (addTask.isDone) {
        label.classList.add('label-checked');
    }
}

//Function to remove the elements from the list
function removeTasks() {
    var allTasks = document.getElementById('allTasks');
    for (i = 0; i < allTasks.childNodes.length; i++) {

        allTasks.removeChild(allTasks.lastChild)
    }
}



















