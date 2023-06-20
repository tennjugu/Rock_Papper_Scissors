function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random () * choicesLength)
    return choices[choiceIndex]
}
const choices= ["rock", "paper", "scissors"]
const choicesLength = choices.length
//console.log(getComputerChoice(choices))

let getPlayerChoice = prompt("Pick between rock, paper or scissors")
console.log(getPlayerChoice.toLowerCase())
if (getPlayerChoice.toLowerCase() != "rock" && getPlayerChoice.toLowerCase() != "paper" && getPlayerChoice.toLowerCase() != "scissors")
alert("Your choice was not rock, paper or scissors. Try again")

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
    return ("Draw! Play again")}
    else if (playerSelection === "rock" && computerSelection === "scissors"){
    return ("rock beats scissors, player wins!")}
    else if (playerSelection === "rock" && computerSelection === "paper") {
    return ("paper beats rock, computer wins!")}
    else if (playerSelection === "paper" && computerSelection === "rock") {
    return ("paper beats rock, player wins!")}
    else if (playerSelection === "paper" && computerSelection === "scissors") {
    return ("scissors beats paper, computer wins!")}
    else if (playerSelection === "scissors" && computerSelection === "rock"){
    return ("rock beats scissors, computer wins!")}
    else if (playerSelection === "scissors" && computerSelection === "paper") {
    return ("scissors beats paper, player wins!")}

}
const playerSelection = getPlayerChoice.toLowerCase()
const computerSelection = getComputerChoice(choices)
console.log(playRound(playerSelection, computerSelection))

