function addAndSubtract(arr) {

    let initialArray = arr;
    let modifiedArray = [];
    let length = initialArray.length
    let sumInitialArr = 0;
    let sumModifiedArr = 0;

    for (let i = 0; i < length; i++) {
        let number = initialArray[i];
        if (number % 2 === 0) {
            modifiedArray.push(number + i);
        } else {
            modifiedArray.push(number - i);
        }
        sumInitialArr += initialArray[i];
        sumModifiedArr += modifiedArray[i];
    }
    console.log(modifiedArray);
    console.log(sumInitialArr);
    console.log(sumModifiedArr);
}
addAndSubtract([-5, 11, 3, 0, 2])