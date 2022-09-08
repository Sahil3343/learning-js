const userChoice = 'rock'

const compResult = () => {
    const options = ['rock', 'paper', 'scissors']
    const indexValue = Math.floor(Math.random() * options.length)
    return options[indexValue]
}

const compChoice = compResult()

// comparing the results to see who won

let winner = ''

if (userChoice == 'rock' && compChoice == 'paper') {
    winner = 'Computer!'
} else if (userChoice == 'paper' && compChoice == 'scissors') {
    winner = "Computer!"
} else if (userChoice == "scissors" && compChoice == 'rock') {
    winner = 'Computer!'
} else if (userChoice == compChoice) {
    winner = 'No one! It is a tie!'
} else {
    winner = 'User!'
}

console.log(`Computer choice: ${compChoice}`)
console.log(`User choice: ${userChoice}`)
console.log(`The winner is ${winner}`)