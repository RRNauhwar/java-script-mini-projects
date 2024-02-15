// to do list
const todo = [
    {taskName: "College work", status: false },
    {taskName: "DSAlectures", status: true},
    {taskName: "WebDevLectures",status:true}

]
function taskAnalyser (todo) {
    todo.forEach(task => {
        if(task.status===false) {
            console.log(`Task ${task.taskName} is Pending`)
        }
        else {
            console.log(`Task ${task.taskName} is completed`)
        }
    });
}
taskAnalyser(todo)