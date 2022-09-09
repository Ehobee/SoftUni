function lift(arr) {

   let peopleWaiting = Number(arr.shift());
   let wagons = arr[0].split(' ').map(Number);
   let wagonsLength = wagons.length;
   let isSpots = true;
   // console.log(wagons)
   for (let i = 0; i < wagonsLength; i++) {
      let currentWagon = wagons[i];
      //  console.log(wagons)
      while (wagons[currentWagon] < 4) {
         // console.log(wagons)
         if (peopleWaiting === 0) {
            break;
         }
         peopleWaiting--;
         wagons[currentWagon]++;

         if (wagons[currentWagon] === 4) {
            wagons[currentWagon++];
         }
      }
   }
   for (let j = 0; j < wagons.length; j++) {
      isSpots = true;
      if (wagons[j] === 4) {
         isSpots = false;
      }

   }
   if (isSpots) {
      console.log('The lift has empty spots!');
      console.log(wagons.join(' '));
   } else if (peopleWaiting > 0) {
      console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
      console.log(wagons.join(' '))
   } else if (isSpots) {
      if (peopleWaiting <= 0) {
         console.log(wagons.join(' '));
      }
   }
}
hearth(["10@10@10@2",
   "Jump 1",
   "Jump 2",
   "Love! "])




} else if (command === 'Error') {
   index = Number(name);
   console.log(index)

}