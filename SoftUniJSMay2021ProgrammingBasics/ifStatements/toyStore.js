function toyStore(input) {

  let vacationPrice = Number(input[0]);
  let puzzlesCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let teddyBearsCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksQCount = Number(input[5]);

  let profit = (puzzlesCount * 2.6) + (dollsCount * 3) + (teddyBearsCount * 4.10) + (minionsCount * 8.20) + (trucksQCount * 2)
  let toysCount = puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksQCount

  if (toysCount >= 50) {
    profit = (profit - profit * 0.25)
  } else {
    profit = profit
  }
  
  let profitAfterRent = profit - profit * 0.10

  if (profitAfterRent >= vacationPrice) {
    let priceDifferrence = profitAfterRent - vacationPrice
    console.log(`Yes! ${priceDifferrence.toFixed(2)} lv left.`)
  } else if (profitAfterRent < vacationPrice) {
    let priceDifferrence = vacationPrice - profitAfterRent
    console.log(`Not enough money! ${priceDifferrence.toFixed(2)} lv needed.`)
  }
}
toyStore(["320", "8", "2", "5", "5", "1"])