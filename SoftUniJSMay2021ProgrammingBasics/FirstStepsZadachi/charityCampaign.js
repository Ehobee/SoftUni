function charityCampaign(input) {

    let days = Number(input[0]);
    let bakers = Number(input[1]);
    let cakes = Number(input[2] * 45);
    let waffles = Number(input[3] * 5.80);
    let pancakes = Number(input[4] * 3.20);
//input 2, 3 and 4 are the number of sweets 
//made for 1 day by 1 baker

    let sumPerDay = (cakes + waffles + pancakes) * bakers;
    let totalSum = sumPerDay * days

    let endSum = totalSum - totalSum / 8;

console.log(endSum);


}
charityCampaign(["23",
"8",
"14",
"30",
"16"])


