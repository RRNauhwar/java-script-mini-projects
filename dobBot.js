// DOB bot analysis
function dobBot (dob) {
   let dobString = new Date (dob) 
   let presentDate = new Date() 
   if (dobString>presentDate) {
    console.log("invalid Date")   }
   else {
    console.log("valid Date")
   }
}
cdobBot("2024-02-16")