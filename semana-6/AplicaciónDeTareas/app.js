// Escucha el evento 'submit' del formulario y llama a la función saveTask
document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  // Obtiene el título y la descripción de la tarea
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

  // Crea un objeto tarea con el título y la descripción
  let task = {
    title,
    description
  };

  // Si no hay tareas guardadas, crea una nueva lista de tareas
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    // Almacena las tareas en el localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    // Recupera las tareas existentes del localStorage y añade la nueva
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Actualiza la lista de tareas visibles
  getTasks();
  // Reinicia el formulario
  document.getElementById('formTask').reset();
  e.preventDefault(); // Previene la recarga de la página
}

// Elimina una tarea según el título
function deleteTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  // Busca y elimina la tarea que coincide con el título
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1); // Elimina la tarea de la lista
    }
  }
  // Actualiza las tareas almacenadas en el localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // Refresca la lista de tareas en la interfaz
  getTasks();
}

// Recupera y muestra las tareas almacenadas
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = ''; // Limpia el contenedor de tareas
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    // Agrega cada tarea como una tarjeta en el contenedor
    tasksView.innerHTML += `<div class="card mb-3">
      <div class="card-body">
        <p>${title} - ${description}
        <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Eliminar</a>
        </p>
      </div>
    </div>`;
  }
}

// Llama a la función para mostrar las tareas cuando se carga la página
getTasks();