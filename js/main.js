const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = []

  for(let i=0; i < keys.length; i++) {
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
    console.log(obj[attr])
  }
  
  const strig = attrs.join('')

  return strig 
}

const tagAttrs = obj => (content = "") => 
  `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => {
  if(typeof t === 'string') {
    tagAttrs({tag: t})
  } else {
    tagAttrs(t)
  }
}

const tableRowtag = tag('tr')
const tableRow = items => tableRowtag(tableCells(items))
const tableCell = tag('td')
const tableCells = items => item.map(tableCell).join('')

let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')
let list = []

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

  if(description.value && calories.value && carbs.value && protein.value) add()
}

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value)
  }
  list.push(newItem)
  console.log(list)
  cleanInputs()
}

const cleanInputs = () => {
  description.value = ''
  calories.value = ''
  carbs.value = ''
  protein.value = ''
}