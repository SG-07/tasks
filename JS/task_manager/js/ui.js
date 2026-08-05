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
            </div>
        `;
    }

    taskList.innerHTML = html;
}