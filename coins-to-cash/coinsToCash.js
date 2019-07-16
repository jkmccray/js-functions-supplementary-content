const piggyBank = {
  quarters: 124,
  nickels: 412,
  dimes: 27,
  pennies: 32,
  dollarAmount: function () {
    return this.quarters * 0.25 + this.nickels * 0.05 + this.dimes * 0.1 + this.pennies * 0.01
  }
}

console.log(piggyBank.dollarAmount())
console.log("$" + piggyBank.dollarAmount().toFixed(2))

// Always check for weird decimals/numbers when doing calculations in js
// Use .toFixed() to establish number of decimal places


// Another way of solving the problem: 

const coinValues = {
  pennies: 0.01,
  nickels: 0.05,
  dimes: 0.1,
  quarters: 0.25
}

function newDollarCalc() {
  let sum = 0
  for (let coin in coinValues) {
    sum += coinValues[coin] * piggyBank[coin]
  }
  console.log(`New dollar calc $${sum.toFixed(2)}`)
}
newDollarCalc()