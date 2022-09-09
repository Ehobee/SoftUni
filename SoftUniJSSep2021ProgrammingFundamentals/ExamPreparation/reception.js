function reception(arr) {

let empOne = Number(arr.shift());
let empTwo = Number(arr.shift());
let empThree = Number(arr.shift());
let students = Number(arr);
let totalTime = empOne + empTwo + empThree;
let hoursNeeded = 0;

while (students > 0) {
    hoursNeeded++;

    if (hoursNeeded % 4 == 0) {                
        continue;
    }
  
    students -= totalTime;
}
console.log(`Time needed: ${hoursNeeded}h.`)
}
reception(['1','2','3','45'])