const todo = [
    {taskName: "College work", status: false },
    {taskName: "DSAlectures", status: true},
    {taskName: "WebDevLectures",status:true}

]
function todoSummarizer (todo) {
    completedTasks = todo.filter(data => data.status)
    console.log(completedTasks)
}
todoSummarizer(todo)