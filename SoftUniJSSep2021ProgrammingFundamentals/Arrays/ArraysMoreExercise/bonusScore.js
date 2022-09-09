function bonusScoring(arr) {
//TODO calculates bonus points for each student, for a certain course.
let array = arr;
let arrayLength = array.length;

let index = 0;
let students = Number(array[index]);
index++;
let lectures = Number(array[index]);
index++;
let bonus = Number(array[index]);
index++;
let totalBonus = 0;

//{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})

for( let i = index; i < arrayLength; i++) {
    let currentStudentAttendances = Number(array[i]);
    totalBonus = Math.ceil(currentStudentAttendances / lectures * (5 + (bonus)));
    console.log(Math.max(totalBonus))
}


}
bonusScoring([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]  
  )