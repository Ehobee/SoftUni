function swimmingRecord (input){
    
    let currentRecordSec = Number(input[0]);
    let metersToSwim = Number(input[1]);
    let secForMeter = Number(input[2]);
    
    let ivansSecBase = metersToSwim * secForMeter;
    let slownessAdded = Math.floor(metersToSwim / 15) * 12.5;
    let ivansSecTotal = ivansSecBase + slownessAdded;

    if (ivansSecTotal < currentRecordSec) {
        console.log(`Yes, he succeeded! The new world record is ${ivansSecTotal.toFixed(2)} seconds.`)
    } else {
        let differrence = Math.abs(currentRecordSec - ivansSecTotal);
        console.log(`No, he failed! He was ${differrence.toFixed(2)} seconds slower.`)
    }
}
swimmingRecord(["55555.67",
"3017",
"5.03"])





