function arrModify(arr) {

    let initialArr = arr.shift().split(' ').map(Number);
    initialL = initialArr.length;
    arr.pop();
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let [command, index1, index2] = arr[i].split(' ');

        index1 = Number(index1);
        index2 = Number(index2);

        if (command === 'swap') {
            let element1 = Number(initialArr[index1]);
            let element2 = Number(initialArr[index2]);
            initialArr[index1] = element2;
            initialArr[index2] = element1;
        } else if (command === 'multiply') {
            initialArr[index1] *= initialArr[index2];
        } else if (command === 'decrease') {
            for (let i = 0; i < initialL; i++) {
                initialArr[i]--;
            }
        }
    }
    console.log(initialArr.join(', '))
}
arrModify([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
    
  )