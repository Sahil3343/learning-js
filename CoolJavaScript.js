// tip calculator

// TotalBill = Number(prompt('Enter the total bill value'))
// TipPercentage = Number(prompt('Enter the tip percentage'))

// TipAmount = TotalBill * (TipPercentage / 100)
// console.log('Tip Amount: ', TipAmount);

// TotalAmount = TotalBill + TipAmount
// console.log('Total Amount: ', TotalAmount);

//Arrow functions =>

// const SumOfTwoNumbers = (a, b) => {
//     return a + b
// }

// console.log(SumOfTwoNumbers(00, 40));

// functions

// function SumOfTwoNumbersFunc(a, b) {
//     return a + b
// }

// console.log(SumOfTwoNumbersFunc(1, 1));

// arrays

// const groceries = ['chips', 'chocolates', 'candies'];
// console.log(groceries);
// console.log(groceries[1]);

// groceries.push('ice cream')

// console.log(groceries);

// groceries.pop()
// console.log(groceries);

// console.log(groceries.length);
// console.log(groceries.indexOf('chips'))

// objects {}

// const person = { 
//     name: 'sahil',
//     shirt: 'yellow',
//     age: 18
// }

// accessing using . notation
// console.log(person.name, person.shirt);

// accessing using [] notation
// console.log(person['name'])
// console.log(person['age'])

// assigning a new parameter in the object
// person.phone = '+111111111'
// console.log(person.phone)

//console.log(person)


// arrow functions
//const introducer = (person) => {
//    // using template literals
//    return `Hi, my name is ${person.name}. The color of my shirt is ${person.shirt}.`
//}

//console.log(introducer(person))

// for loop
let fruits = ['banana', 'apple', 'pear', 'watermelon']

// old way to define for loops
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// new way to define loops
// for (const fruit of fruits) {
//     console.log(fruit)
// }

// sum of numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = 0
for (let number of numbers) {
    sum += number
}

//console.log(sum)

// counting the number of letters in a string

const CountLettersInString = () => {
    const sentance = 'hey!'

    let count = 0

    for (let letter of sentance) {
        //console.log(letter)
        count += 1
    }

    //console.log(count)

    //console.log(sentance.length)
}

//CountLettersInString()


// find the max number in the array
const findMaxNumber = () => {
    let max = 0;
    for(let number of numbers) {
        if (number > max) {
            max = number
        }
    }

    //console.log(max)
}

findMaxNumber()

// checking the frequncy of a letter in the sentance
const checkingLetterFrequency = () => {
    const phrase = 'hey, my name is sahil mahajan'
    let frequency = {}
    
    for(let letter of phrase) {
        if(letter in frequency) {
            frequency[letter] += 1
        } else {
            frequency[letter] = 1
        }
    }

    //console.log(frequency)
}

//checkingLetterFrequency()


// higher order functions
// map, filter, reduce

// implicit return
//numbers.map(number => console.log(number))

numbers.map(number => {
    //console.log('haha')
    //console.log(number)
})

// doubling the value in the numbers array
let result = numbers.map(number => number * 2)
//console.log(result)

// filtering the array
//console.log(numbers.filter(number => number > 4))

// dom manipulation

// console.log('sup')

// let heading = document.getElementById('heading')

// console.log(heading.innerText);

// const newText = 'Well, goodbye!'

// heading.innerText = newText

// const anotherNewText = 'hello, i am cool!'

// heading.innerHTML = `<p>${anotherNewText}</p>`

// heading.style.color = 'orange'

// console.log(heading.style.color)

// heading.style.backgroundColor = 'black'

// console.log(heading.style.backgroundColor)

let redBox = document.getElementById('red')
let blueBox = document.getElementById('blue')
let greenBox = document.getElementById('green')

// redBox.onclick = () => {
//     console.log('You have clicked RED!')
// }

// blueBox.onclick = () => {
//     console.log('You have clicked BLUE!')
// }

// greenBox.onclick = () => {
//     console.log('You have clicked GREEN!')
// }

let allBoxes = document.querySelectorAll('.colorBoxes')
//console.log(allBoxes)

//console.log(allBoxes[0].value)

// const timesClicked = { 'red': 0, 'blue': 0, 'green': 0 }

// allBoxes.forEach(box => {
//     box.onclick = () => {
//         console.log(box.value)
//         timesClicked[box.value] += 1
//         box.innerText = timesClicked[box.value]
//         console.log(box.value, " : ", timesClicked[box.value])
//     }
// })


// tip calculator (advanced)

const totalBill = 100
const tipPercentage = 13
const numberOfPayers = 2

const billAfterTip = (totalBill, tipPercentage, numberOfPayers) => {
    finalAmount = (totalBill * (tipPercentage / 100)) + totalBill
    console.log('Total Bill: ', finalAmount)

    perPersonCost = finalAmount / numberOfPayers
    console.log('Per Person: ', perPersonCost)
}

//billAfterTip(totalBill, tipPercentage, numberOfPayers)


// select an item out of an array
// ['banana', 'apple', 'pear', 'watermelon']

const selectRandom = () => {
    const fruits = ['banana', 'apple', 'pear', 'watermelon']
    let RandomSelection = Math.floor(Math.random() * fruits.length)
    console.log(fruits[RandomSelection])
}

selectRandom()

















