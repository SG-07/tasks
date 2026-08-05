console.log("Task Manager Started");

const task = {
    title: "Learn JavaScript Objects",
    description: "Finish Hour 1 practice",
    completed: false,
    priority: "High",

    displayTitle: function () {
        console.log(this.title);
    },
    
    showStatus: function () {
        if (this.completed) {
            console.log("Task is completed");
        } else {
            console.log("Task is not completed");
        }
    },

    rename: function (newTitle) {
        this.title = newTitle;
    },

    toggleComplete: function () {
        this.completed = !this.completed;
    }
};

// const person = {
//     name: "Alice",

//     greet: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// };

// const sayHello = person.greet;

// sayHello();

//console.log(task);
// console.log("-------------------------------");

// task.title = "Learn JavaScript Objects Deeply";
// console.log(task.displayTitle());


// console.log("-------------------------------");
// console.log(task.showStatus());

console.log(task.completed);

task.toggleComplete();

console.log(task.completed);

task.toggleComplete();

console.log(task.completed);