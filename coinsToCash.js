const piggyBank = {
    quarters: 22,
    nickels: 111,
    dimes: 32,
    pennies: 134
}

let dollarAmount = 0
dollarAmount += (piggyBank.quarters * 0.25)
dollarAmount += (piggyBank.nickels * 0.05)
dollarAmount += (piggyBank.dimes * 0.10)
dollarAmount += (piggyBank.pennies * 0.01)

console.log(dollarAmount)