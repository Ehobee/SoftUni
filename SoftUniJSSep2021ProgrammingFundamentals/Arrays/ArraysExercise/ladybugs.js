function ladybugs(arr) {

    let index = 0;
let fieldSize = Number(arr[index]);
index++;
let arrayLength = arr.length;
let ladybugs = arr[index].split(' ');
let ladybugsLength = ladybugs.length;
index++;
let fieldArray = [];
for(let i = 1; i < fieldSize; i++) {
for(let j = 1; j < ladybugsLength; j++) {


    fieldArray.push(1);
}

}
console.log(fieldArray)
}
ladybugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
)