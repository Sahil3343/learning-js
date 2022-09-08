// a simple advanced tip calculator

const totalBill = 100
const tipPercentage = 12
const numberOfPayers = 2

const finalAmountPerPerson = (totalBill, tipPercentage, numberOfPayers) => {
    const finalAmount = (totalBill * (tipPercentage / 100)) + totalBill
    console.log('Final Amount (After Tip): ',  finalAmount)
    const perPersonCost = finalAmount / numberOfPayers
    console.log('Per Person Amount: ', perPersonCost)

}

finalAmountPerPerson(totalBill, tipPercentage, numberOfPayers)