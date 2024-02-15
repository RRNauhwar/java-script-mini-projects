// logic system 
var admin_credentials = {
    email : "rahulch@gmail.com",
    password : "admin123"
}
function login(email,password) {
    if (email === admin_credentials.email &&password === admin_credentials.password)
    console.log ("login successful")
else if (email === admin_credentials.email&&password!==admin_credentials.password)
console.log("password mismatch")
else 
console.log("invalid credentials")
}
login ("rahulch@gmail.com","admin123")
login ("rahulch19905@gmail.com","admin2")
login("rahulch@gmail.com","admin2")