
const inputBox = document.getElementById("input-box")

const btn = document.getElementById("btn")

const length = document.getElementById("length")

const volumn = document.getElementById("volumn")

const mass = document.getElementById("mass")


 

btn.addEventListener("click", function() {
 let unit = inputBox.value

const meterFeet = unit * 3.281
const feetMeter = unit / 3.281

const literGallons = unit * 0.264 
const gallonsLiter = unit / 0.264 

const kilogramsPounds = unit * 2.204
const poundsKilograms = unit / 2.204


 length.textContent = ` ${unit} meters = ${meterFeet.toFixed(3)} feet |
                        ${unit} feet = ${feetMeter.toFixed(3)} meters`

 volumn.textContent = ` ${unit} liters = ${literGallons.toFixed(3)} gallons |
                        ${unit} gallons = ${gallonsLiter.toFixed(3)} liters`

 mass.textContent = ` ${unit} kilos = ${kilogramsPounds.toFixed(3)} pounds |
                        ${unit} pounds = ${poundsKilograms.toFixed(3)} kilos`
})


////////////////--------- Another long alternative ----------/////////////////
// function convertLenght() {
//   // let unit = Number(inputBox.value)
//   let metersconvert = unit*3.281
//   let feetconvert = unit/3.

//   // length.textContent = ` ${unit} meters = ${metersconvert.toFixed()} feet |
//   //  ${unit} feet = ${feetconvert.toFixed()} meters`

// }



