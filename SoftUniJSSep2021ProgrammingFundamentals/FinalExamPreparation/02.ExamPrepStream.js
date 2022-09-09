function fancyBarcodes(input) {

    const productCount = +input.shift();
    const regex = /@#+(?<product>[A-Z][A-Za-z0-9]){4,}[A-Z]@#+/;

    while (productCount > 0) {
        let barcode = input.shift();
        let match = regex.exec(barcode);

        if(match){
            let productGroup = '';
            let product = match.groups.product;
            for(let ch of product) {
                let isNumber = Number(ch);
                if (isNumber * 1 === isNUmber) {
                    productGroup += ch;
                }
            }
            //if(productGrou)
        }
    }

}
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
