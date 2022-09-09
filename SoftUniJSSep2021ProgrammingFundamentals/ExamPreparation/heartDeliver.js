function hearth(input) {

    input.pop();
    let inputL = input.length;
    let neborhood = input[0];
    neborhood = neborhood.split("@").map(Number);
    let neborhoodL = neborhood.length;
    let currentJump = 0;
 
    for (let i = 1; i < inputL; i++) {
       let commandJump = input[i].split(" ");
       currentJump += +commandJump[1];
       if (currentJump >= neborhoodL) {
          currentJump = 0;
       }
       if (neborhood[currentJump] !== 0) {
          neborhood[currentJump] -= 2;
          if (neborhood[currentJump] === 0) {
             console.log(`Place ${currentJump} has Valentine's day.`)
          }
       } else {
          console.log(`Place ${currentJump} already had Valentine's day.`);
       }
    }
    console.log(`Cupid's last position was ${currentJump}.`);
    neborhood = neborhood.filter((el) => el !== 0)
    if (neborhood.length === 0) {
       console.log("Mission was successful.");
    } else {
       console.log(`Cupid has failed ${neborhood.length} places.`)
    }
 }
 hearth(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love! "])
