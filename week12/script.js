let students = [
  { name: "Patrick", score: 80 },
  { name: "John", score: 40 },
  { name: "Alice", score: 90 },
  { name: "Bob", score: 55 },
  { name: "Eve", score: 30 }
];

//print all students
students.forEach(n => console.log("Name:",n.name,", Score:",n.score));

//find passed students and names
let passed = students
.filter(m => m.score >= 50)
.map(m => m.name)
console.log("Passed student:\n",passed);

//total score of passed students
let total = students
.filter(m => m.score >= 50)
.map( m => m.score)
.reduce((sum,n) => sum + n , 0);
console.log("Total score of passed student:",total);

//finding average
let average = total / passed.length;
console.log("\n Average of passed students:",average);

//top student
let findTop = students.reduce((m,n) => n > m ? n : m );
console.log("Top student with Highest mark is:",findTop);

//student less than 50
let lesss = students
.filter(m => m.score < 50)
.map(m => m.name);
console.log("student with lower scores:",lesss,"\n");

//add new student
let add = students.push({name: "Rebecca", score: 70});
console.log("Final list of all students:");
students.forEach(n => console.log("Name:",n.name,", Score:",n.score));