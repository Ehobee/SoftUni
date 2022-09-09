function positiveAndNegative(arr) {

    let result = [];

    for (let num of arr) {

        if (num < 0) {

            result.unshift(num);

        } else {

            result.push(num);

        }
    }
    console.log(result.join('\n'));
}
positiveAndNegative([7,
    -2,
    8,
    9])

//not working for this problem, as this one sorts the numbers by <
    function sortNumbers(arr) {

        let sortedArr = arr.sort((a, b) => {
            return a - b;
        });
        console.log(sortedArr.join(' '));
    }
    sortNumbers([7,
        -2,
        8,
        9])
