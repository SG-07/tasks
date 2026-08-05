function renderTasks() {
  const taskList = document.getElementById("task-list");

  let html = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    html += `
            <div class="task ${task.completed ? "completed" : ""}">
                <h3>${task.title}</h3>

                <p>
                    <strong>Priority:</strong>
                    ${task.priority}
                </p>

                <p>
                    <strong>Status:</strong>
                    ${task.completed ? "Completed" : "Pending"}
                </p>

               <button
    class="toggle-btn"
    data-index="${i}"
>
    ${task.completed ? "Mark as Pending" : "Mark as Completed"}
</button>

               <button class="delete-btn" data-index="${i}">
    Delete
</button>
            </div>
        `;
  }

  taskList.innerHTML = html;
}
