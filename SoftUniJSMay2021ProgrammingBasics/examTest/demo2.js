function workout(input) {
 
    let index = 0;
    let day = Number(input[index]);
    index++;
    let km = Number(input[index]);
    index++;
    let kmDay = km;
    let allKm = 0;
  
    for (let i = 1; i <= day; i++) {
       let percentage = Number(input[index]);
       index++;
       kmDay *= 1 + percentage / 100;
       allKm += kmDay;
    }
    allKm += km;
    if (allKm >= 1000) {
       console.log(`You've done a great job running ${Math.ceil(allKm - 1000)} more kilometers!`);
    } else {
       console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - allKm)} more kilometers`);
    }
 }
 workout(["5",
 "30",
 "10",
 "15",
 "20",
 "5",
 "12"])