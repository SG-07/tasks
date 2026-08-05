const taskInput = document.getElementById("task-input");
const priority = document.getElementById("priority");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {
  const title = taskInput.value.trim();

  if (title === "") {
    alert("Task title cannot be empty!");
    return;
  }

  const newTask = {
    title,
    completed: false,
    priority: priority.value,
  };

  tasks.push(newTask);
  renderTasks();

  taskInput.value = "";
  priority.value = "High";
});

taskList.addEventListener("click", function (event) {
    console.log("Event target:", event.target); // Debugging line
    if(event.target.classList.contains("toggle-btn")) {
        const index = Number(event.target.getAttribute("data-index"));
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };
    if(event.target.classList.contains("delete-btn")) {
        const index = Number(event.target.getAttribute("data-index"));
        tasks.splice(index, 1);
        renderTasks();
    };
});

console.log("Task Manager Started");

console.log(sampleTask);

console.log(sampleTask.getSummary());

// Render all tasks on the webpage
renderTasks();
