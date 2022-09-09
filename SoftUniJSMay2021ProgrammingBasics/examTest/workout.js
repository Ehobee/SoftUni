function workout(input) {

    let index = 0;
    let totalDays = Number(input[index]);
    index++;
    let kmsFirstDay = Number(input[index]);
    index++;
   
    let addedKmsPercentage = 0;
let totalKms = 0;

kmsFirstDay += kmsFirstDay * addedKmsPercentage;
totalKms += kmsFirstDay;


    for (i = index; i <= totalDays; i++) {
 let addedKms = Number(input[index]);
 index++
 addedKmsPercentage = addedKms / 100
       

if (totalKms >= 1000) {
    let diff = totalKms - 1000
    console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`)
} else {
    let diff = 1000 - totalKms
    console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`)
} 
}
}
workout(["5", "30", "10", "15", "20", "5", "12"])

