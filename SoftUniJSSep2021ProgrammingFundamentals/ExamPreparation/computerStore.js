function computerStore(arr) {

    let arrLength = arr.length;
    let totalPrice = 0;
    let taxes = 0;
    let taxPrice = 0;
    let isInvalid = true;

    for (let i = 0; i < arrLength; i++) {
        let customerType = arr[arrLength - 1];
        let partPrice = Number(arr[i]);

        if (partPrice > 0) {
            isInvalid = false;
            totalPrice += partPrice;
            taxes += (partPrice * 0.2);
        } else if (partPrice < 0) {
            console.log('Invalid price!')
        }

        taxPrice = totalPrice + taxes;

        if (customerType === 'special') {
            taxPrice = taxPrice - taxPrice * 0.1
        }
    }

    if (taxPrice >= 0) {
    }

    if (!isInvalid) {
        console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPrice.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${taxPrice.toFixed(2)}$
    `)
    } else {
        console.log('Invalid order!')
    }
}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    


