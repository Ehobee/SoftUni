function footballKit(input) {

    let tshirtPrice = Number(input[0]);
    let goalPrice = Number(input[1]);

    let shortsPrice = tshirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = (tshirtPrice + shortsPrice) * 2;

    let totalPrice = tshirtPrice + shortsPrice + socksPrice + shoesPrice;
    let priceAfterDiscount = totalPrice - totalPrice * 0.15;

    if(priceAfterDiscount >= goalPrice) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${priceAfterDiscount.toFixed(2)} lv.`);
    }else {
        let diff = (goalPrice - priceAfterDiscount)
        console.log("No, he will not earn the world-cup replica ball.")
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }

}
footballKit(["10", "45"])