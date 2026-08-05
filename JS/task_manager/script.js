console.log("Task Manager Started");

// =========================
// Single Task (Learning Objects)
// =========================

const sampleTask = {
    title: "Learn JavaScript Objects",
    description: "Finish Hour 1 practice",
    completed: false,
    priority: "High",

    displayTitle() {
        console.log(this.title);
    },

    showStatus() {
        return this.completed ? "Completed" : "Pending";
    },

    rename(newTitle) {
        this.title = newTitle;
    },

    toggleComplete() {
        this.completed = !this.completed;
    },

    getSummary() {
        return `
Title: ${this.title}
Description: ${this.description}
Status: ${this.showStatus()}
Priority: ${this.priority}
        `;
    }
};

console.log("===== Sample Task =====");
console.log(sampleTask);
console.log(sampleTask.getSummary());

// =========================
// Multiple Tasks
// =========================

const tasks = [
    {
        title: "Learn Objects",
        completed: false,
        priority: "High"
    },
    {
        title: "Practice Arrays",
        completed: true,
        priority: "Medium"
    },
    {
        title: "Build Task Manager",
        completed: false,
        priority: "High"
    }
];

console.log("===== All Tasks =====");
console.log(tasks);

// =========================
// Print All Task Titles
// =========================

console.log("===== Task Titles =====");

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].title);
}

// =========================
// Print All Tasks with Status
// =========================

console.log("===== Tasks with Status =====");

for (let i = 0; i < tasks.length; i++) {
    console.log(
        `${tasks[i].title} - ${
            tasks[i].completed ? "Completed" : "Pending"
        }`
    );
}

// =========================
// Print Only Completed Tasks
// =========================

console.log("===== Completed Tasks =====");

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
        console.log(tasks[i].title);
    }
}