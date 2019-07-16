const dollarAmount = 5.92
const piggyBank = {}

piggyBank["quarters"] = 0
piggyBank["dimes"] = 0
piggyBank["nickels"] = 0
piggyBank["pennies"] = 0

const convertDollarAmount = dollarAmount * 100
let leftover = convertDollarAmount

const coinValues = {
  quarters: 25,
  dimes: 10,
  nickels: 5,
  pennies: 1
}

for (const coin in coinValues) {
    const coinValue = coinValues[coin]
    piggyBank[coin] = Math.floor(leftover/coinValue)
    leftover -= coinValue * piggyBank[coin]
  }
  

// piggyBank.quarters = Math.floor(leftover / 25)
// leftover -= 25 * piggyBank.quarters

// piggyBank.dimes = Math.floor(leftover / 10)
// leftover -= 10 * piggyBank.dimes

// piggyBank.nickels = Math.floor(leftover / 5)
// leftover -= 5 * piggyBank.nickels

// piggyBank.pennies = Math.floor(leftover)
// leftover -= piggyBank.pennies



console.log(piggyBank)
console.log(leftover)



