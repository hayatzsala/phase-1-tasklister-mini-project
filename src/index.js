document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const task = document.getElementById('new-task-description');
    const textValue =task.value;
    const priorety = document.getElementById('priorety');
    const prioretyVal= priorety.options[priorety.selectedIndex].text;
    addToDo(textValue,prioretyVal);
  })
});

function addToDo(todo,priority){
  const listElement = document.createElement('li');
  listElement.innerText = todo;
  listElement.style.backgroundColor = getColor(priority);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
  deleteBtn.addEventListener('click',(e)=>{
    e.target.parentNode.parentNode.remove();
  })
  
  listElement.appendChild(deleteBtn);


  const tasks = document.getElementById('tasks');
  tasks.appendChild(listElement);
}

function getColor(value){
  if(value === 'high'){
    return 'red';
  }
  if(value=== 'medium'){
    return 'orange';
  }
  if(value === 'low'){
    return 'green';
  }
}