const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')

function removeClassDescription() {
  description.classList.remove("is-invalid")
}
function removeClassCalories() {
  calories.classList.remove("is-invalid")
}
function removeClassCarbs() {
  carbs.classList.remove("is-invalid")
}
function removeClassProtein() {
  protein.classList.remove("is-invalid")
}

const validateInputs = () => {
  description.value ? "" : description.classList.add("is-invalid")
  calories.value ? "" : calories.classList.add("is-invalid")
  carbs.value ? "" : carbs.classList.add("is-invalid")
  protein.value ? "" : protein.classList.add("is-invalid")

  if(description.value && calories.value && carbs.value && protein.value) {
    
  }
}