function storeProvision(currStock, orderList) {

    let stockLength = currStock.length;
    let orderLength = orderList.length;
    let stockList = {};

    for (let i = 0; i < stockLength; i += 2) {
        let product = currStock[i];
        stockList[product] = +currStock[i + 1];
    }
    for (let i = 0; i < orderLength; i += 2) {
        let product = orderList[i];

        if (!stockList.hasOwnProperty(product)) {
            stockList[product] = 0;
        }

        stockList[product] += +orderList[i + 1];
    }
    for (let product in stockList) {
        console.log(`${product} -> $`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)