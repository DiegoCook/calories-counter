/* const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data) */

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

const tableRowTag = tag('tr')
const tableRow = items => tableRowTag(tableCells(items))
const tableCell = tag('td')
const tableCells = items => items.map(tableCell).join('')

/* let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')
let list = [] */

/* function removeClassDescription() {
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
} */

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
  updateTotals()
  cleanInputs()
  renderItems()
}

const updateTotals = () => {
  let calories = 0, carbs = 0, protein = 0

  list.map(item => {
    calories += item.calories
    carbs += item.carbs
    protein += item.protein
  })

    document.getElementById('total-calories').innerHTML = calories
    document.getElementById('total-carbs').innerHTML = carbs
    document.getElementById('total-protein').innerHTML = protein
}

const cleanInputs = () => {
  description.value = ''
  calories.value = ''
  carbs.value = ''
  protein.value = ''
}

const renderItems = () => {
  const tbody = document.getElementsByTagName('tbody')

  tbody.innerHTML = ''

  list.map(item => {
    
    const row = document.createElement('tr')
    const { description, calories, carbs, protein } = item;

    row.innerHTML = tableRow([
      description,
      calories,
      carbs,
      protein
    ])

    tbody.appendChild(row)
  })
}