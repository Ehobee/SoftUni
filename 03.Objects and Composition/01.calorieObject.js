function solve(arr) {

    let obj = {};

    let length = arr.length;

    for (let i = 0; i < length; i += 2) {
        let food = arr[i];
        let calories = Number(arr[i + 1]);

        obj[food] = calories;
    }
    console.log(obj);
}
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])