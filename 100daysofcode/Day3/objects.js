/* Objects In JavaScript

1. JavaScript Objects is a Non Primitve Data Type Which allows us to Store 
Multiple Collections of data and Data Types 

2. Objects is a Non Primtive Data Type is A Reference Types and Mutable Data Type

3.Its a Commom Pratice to use const in Objects
4.Objects have key/values pairs

// There Are 3 Ways to Create Objects

1. Using Object Literal  
2. By Creating Instance of Object Directly 
3. By Using Constructor Function
*/

const report = {

    fullname: "Izhan Ali",
    year : 3,
    major: "CS",

    score :{
        clang: 9,
        dsa: 8,
        python:9,
        algebra: 7
    }

}


report.major = "AIML"

console.log(report["fullname"])
console.log(report.score.dsa)

report.rank = 5
console.log(report)
delete report.rank

//function in objecte

report.total = function(){
    console.log(report.score["clang"]+report.score["dsa"]+report.score["python"]+report.score["algebra"] )
}

report.total()

for (let key in report) {
    console.log(key) 
}  
  // Getting all values using for in loop
  console.log('Getting Values') 
  
  for (let value in report) {
    console.log(report[value]) 
}  
