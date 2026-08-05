const taskInput = document.getElementById("task-input");
const priority = document.getElementById("priority");
const addButton = document.getElementById("add-btn");



addButton.addEventListener("click", function () {
    console.log("Button clicked");
    console.log(taskInput.value);
    console.log(priority.value);

    const newTask = {
    title: taskInput.value.trim(),
    completed: false,
    priority: priority.value,
};

if (newTask.title === "") {
    alert("Task title cannot be empty!");
    return;
}
tasks.push(newTask);
renderTasks();

taskInput.value = "";
});





console.log("Task Manager Started");

console.log(sampleTask);

console.log(sampleTask.getSummary());

// Render all tasks on the webpage
renderTasks();