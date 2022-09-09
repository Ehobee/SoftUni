function piccolo(arr) {

    let parkingLot = {};
    let isEMpty = false;

    for (let line of arr) {
        let [direction, carNumber] = line.split(', ')

        if (direction === 'IN') {
            parkingLot[carNumber] = carNumber;
        } else if (direction === 'OUT') {
            parkingLot[carNumber] = 0;
        }
    }

    let entries = Object.entries(parkingLot);
    let sorted = [];
    
    for (let entry of entries) {
        let sum = 0;
        sum += +entry[1]
        if (entry[1] === entry[0]) {
            sorted.push(entry[1])
            sorted.sort((a, b) => a.localeCompare(b))
            isEMpty = false;

        } else if (sum === 0) {
            isEMpty = true;
        }
    }

    if (isEMpty) {
        console.log('Parking Lot is Empty')
    } else {
        for (element of sorted) {
            console.log(element)
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)