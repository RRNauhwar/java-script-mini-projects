// Admission Management System 
const students = []
function listStudents () {
    return students
}
function addStudents(name) {
    students.push(name)
  console.log(`student ${name} added succesfully`)
}
function removeStudent (name) {
    let elementIndex = students.indexOf(name) 
    students.splice(elementIndex,1)
    console.log(`student ${name} removed succesfully`)
} 
addStudents("Rahul Chaudhary")
addStudents("Mithun")
listStudents()
removeStudent("Rahul Chaudhary")
listStudents()