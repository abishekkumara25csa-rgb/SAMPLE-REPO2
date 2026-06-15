//let
let studentcount  = 10;
studentcount = 11;

console.log("student count:", studentcount);

//count
const collegename = "VETIAS";

console.log("college name:", collegename);

//Template literals
let studentname = "Arun";

console.log('Welcome ${studentname} to ${collegeName}');

//object
const student = {
    name: "Arun",
    age: 20,
    deptpartment:"IT"
};
console.log(student);

//Destructuring
const { name,age,department} = student;

console.log("Name:",name);
console.log("Age:",age);
console.log("Department:",department);

//Arrow Function
const displaystudent = () => {
    console.log('student Name:${name}');
};
displaystudent();

//Arrays
const students = [
    "Arun",
    "Priya",
    "Devadharshini"
];
console.log(students);

//spread operator
const updatedstudents = [
    ...students,
    "Rahul"
];

console.log(updatedstudents);

// // Rest operator
function maximumMarks(...marks){
    let max = Math.max(...marks);

    return max;
}

console.log("Maximum marks:", maximumMarks(80,90,70));