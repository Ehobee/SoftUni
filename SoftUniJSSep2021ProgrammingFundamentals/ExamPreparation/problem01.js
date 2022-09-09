function solve(arr) {

    let budget = Number(arr.shift());
    let students = Number(arr.shift());
    let flourPrice = Number(arr.shift());
    let eggPrice = Number(arr.shift());
    let apronPrice = Number(arr.shift());
    let additionalApron = Math.ceil(students * 0.2);
    let totalPrice = 0;
    let freeFlour = 0;

    for (let i = 1; i <= students; i++) {
        if (i % 5 === 0) {
            freeFlour++;
        }
    }

    let totalApronPrice = apronPrice * (students + additionalApron);
    let totalEggPrice = students * (eggPrice * 10);
    let totalFlourPrice = flourPrice * (students - freeFlour);

    totalPrice = totalFlourPrice + totalEggPrice + totalApronPrice;

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`)
    } else {
        let diff = totalPrice - budget;
        console.log(`${diff.toFixed(2)}$ more needed.`)
    }
}
solve([
    '100', '25', '4.0', '1.0', '6.0'
]
)