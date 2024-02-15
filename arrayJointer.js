// mimic array join 
const arrayWords = ["Hi","I","am","Rahul"]
function arrayJointer (arrayWords) {
    const jointArray = arrayWords.reduce((prevValue,presentValue)=>prevValue+" "+presentValue)
    console.log(jointArray)
}
arrayJointer(arrayWords)