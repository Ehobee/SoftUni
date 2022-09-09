function workout(input) {
 
    let index = 0;
    let days = Number(input[index]);
    index++;
    let kilometers = Number(input[index]);
    index++;
 
    let percentages = 0;
    let totalKilometers = 0;
 
    for (let i = 0; i <= days; i++) {
        kilometers += kilometers * percentages
        totalKilometers += kilometers
        console.log(kilometers, totalKilometers)
 
        let income = Number(input[index]);
        index++;
        percentages = income / 100;
    }
 
    if (totalKilometers >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKilometers - 1000)} more kilometers!`);
    }else{
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKilometers)} more kilometers`);
    }
 
} workout(["5",
 "30",
 "10",
 "15",
 "20",
 "5",
 "12"])
 