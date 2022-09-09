function examPrep(input) {

let empOne = Number(input[0]);
let empTwo = Number(input[1]);
let empThree = Number(input[2]);
let students = Number(input[3]);

let totalEmp = empOne + empTwo + empThree;
let hoursNeeded = 0;
let studentsLeft = true;

while(students > 0) {
   students--;
   if(students = totalEmp) {
      hoursNeeded++;
   }
}
console.log(hoursNeeded)
}
examPrep(['1','2','3','45'])