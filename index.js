
const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


let inputValue = ""

let metersToFeet
let feetToMeters
let litersToGallons
let gallonsToLiters
let kilosToPounds
let poundsToKillos

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

btnEl.addEventListener("click", function () {

    console.log(inputValue = inputEl.innerHTML)

    metersToFeet = (inputValue * 3.281).toFixed(3)
    feetToMeters = (inputValue / 3.281).toFixed(3)

    litersToGallons = (inputValue * 0.264).toFixed(3)
    gallonsToLiters = (inputValue / 0.265).toFixed(3)

    kilosToPounds = (inputValue * 2.204).toFixed(3)
    poundsToKillos = (inputValue / 2.204).toFixed(3)

    lengthEl.textContent = `${inputValue} meters = ${metersToFeet} feet | 20 feet = ${feetToMeters} meters`
    volumeEl.textContent = `${inputValue} liters = ${litersToGallons} gallons | 20 gallons = ${gallonsToLiters} liters`
    massEl.textContent = `${inputValue} kilos = ${kilosToPounds} pounds | 20 pounds = ${poundsToKillos} kilos`




    console.log(inputEl.value)
})