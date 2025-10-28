const input = document.getElementById('taskInput');
const boton = document.getElementById('addTaskBtn');
const contenedor = document.getElementById('taskContainer');

function createTask(text) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';

  const taskText = document.createElement('span');
  taskText.textContent = text;



  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.addEventListener('click', () => {
    taskDiv.remove();
  });

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(deleteBtn);
  contenedor.appendChild(taskDiv);
}

boton.addEventListener('click', () => {
  const tarea = input.value.trim();
  if (tarea !== '') {
    createTask(tarea);
    input.value = '';
    input.focus();
  }
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') boton.click();
});
