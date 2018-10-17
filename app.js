// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');


//Represent the list

const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  // edit task event 
  taskList.addEventListener('click', editTask);
  // select a task
  taskList.addEventListener('click', selectTask);

}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  



  // create a checkmarck

  const label = document.createElement('label');


  const input = document.createElement('input');

  input.type = 'checkbox';
  input.className = 'checkbox-indigo';
  input.id = 'indeterminate-checkbox';

  const span = document.createElement('span');

  label.appendChild(input);
  label.appendChild(span);

  li.appendChild(label);


 // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const linkDelete = document.createElement('a');
  const linkEdit = document.createElement('a');

  // Add class
  linkDelete.className = 'delete-item secondary-content';
  linkEdit.className = 'edit-item secondary-content';

  // Add icon html
  linkDelete.innerHTML = '<i class="fa fa-remove"></i>';
  linkEdit.innerHTML = '<i class="fa fa-edit"></i>';

  // apend the links to the button group
  li.appendChild(linkDelete);
  li.appendChild(linkEdit);
  
  // Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

//remove task function
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('are you sure  you want to delete this?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}


//this fucntion allows to edit, need to add a button to save the changes

function editTask(e){
    if(e.target.parentElement.classList.contains('edit-item')){
        e.target.parentElement.parentElement.setAttribute('contentEditable',true);
        // create an event to load a button to save the changes or 
        
    }
}

// Task to select item 

function selectTask(e){
    if(e.target.parentElement.classList.contains('select-item')){
        console.log(e)
    }
}