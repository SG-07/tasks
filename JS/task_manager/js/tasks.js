// =========================
// Sample Task (Learning Objects)
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
  },
};

// =========================
// Task List
// =========================

const tasks = [
  {
    title: "Learn Objects",
    completed: false,
    priority: "High",
  },
  {
    title: "Practice Arrays",
    completed: true,
    priority: "Medium",
  },
  {
    title: "Build Task Manager",
    completed: false,
    priority: "High",
  },
];
