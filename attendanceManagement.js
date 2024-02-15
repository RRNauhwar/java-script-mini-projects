// attendance management 
const studentList = []
function addStudent (name) {
    studentList.push({name , attendance:[]})
}
function markAttendace (name,date) {
    const student = studentList.find((s)=>s.name===name) 
    if (student) {
        const attendanceRecord = {date,status:"present"}
        student.attendance.push(attendanceRecord) 
        console.log(`Student ${name} marked present on ${date}`)
    }
    else {
        console.log(`${name} not found`)
    }
}
function getAttendance () {
    console.log("Attendance Report: \n")
    studentList.forEach((student)=> {
        console.log(`${student.name}: `)
        student.attendance.forEach((record)=> {
            console.log(`${record.date} : ${record.status}`)
        })
    })
}
function getAttendancebyDate(date) {
    console.log("Attendance Report on Date: "+date)
    studentList.forEach((student)=>{
        const record = student.attendance.find((s)=>s.date===date)
        if(record) {
            console.log(`${student.name} : ${record.status}`)
        }
        else {
            console.log(`${student.name} not marked`)
        }
    })
}
addStudent("Rahul")
addStudent("Riya")
markAttendace("Rahul","16-02-2024")
markAttendace("Riya","17-02-2024")
getAttendance()
getAttendancebyDate("16-02-2024")
getAttendancebyDate("17-02-2024")