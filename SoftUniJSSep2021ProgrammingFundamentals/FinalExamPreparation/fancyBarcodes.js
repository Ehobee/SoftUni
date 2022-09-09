function fancyBarcodes(input) {

    let barcodeRegex = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z]\1)/g;
    let digitRegex = /\d/g;
    let validBarcodes = [];
    let length = input.shift();
    let productGroup = '';

    for (string of input) {
        let validBarcode = string.match(barcodeRegex);

        if (validBarcode === null) {
            console.log('Invalid barcode')
        } else {
            validBarcodes.push(validBarcode.join(''));
            for (barcode of validBarcodes) {

                let digits = barcode.match(digitRegex);

                if (digits === null) {
                    productGroup = '00';
                } else {
                    productGroup = digits.join('');
                }
            }
            console.log(`Product group: ${productGroup}`)
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])


