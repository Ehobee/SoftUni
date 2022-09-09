/* function arrayRotation(arr, num) {

  let array = arr;
  let rotations = num;
  let rotatedArray = [];

  for (let i = 0; i < rotations; i++) {

    rotatedArray.push(array[i]);
  }
  for (let i = 0; i < rotations; i++) {
    array.shift(array[i]);
  }
  array.push(rotatedArray);
  console.log(array.join(' '));

} */
/* function arrayRotation(arr, num) {

  let array = arr;
  let rotations = num;
  let rotatedArray = [];

  for (let i = 0; i < rotations; i++) {

    rotatedArray.push(array[i]);
  }
  for (let i = 0; i < rotations; i++) {
    array.shift(array[i]);
  }
  for (let element of rotatedArray) {
      array.push(element);
  }
  console.log(array.join(' '));
} */
function arrayRotation(arr, num) {

  let array = arr;
  let rotations = num;
  

  for (let i = 0; i < rotations; i++) {
    let currentElement = array[i];
    let elementToMove = array.shift(currentElement);
    array.push(elementToMove);
  }
  console.log(array.join(' '))
}
arrayRotation([2, 4, 15, 31], 5)