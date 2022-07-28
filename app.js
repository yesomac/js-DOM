// import { showCurrentDate, spanShowDate } from './scripts/date'

const dad = document.querySelector('.dad')

/**
 * hello
 */
function helloName() {
  console.log('hello')
  let yourName = prompt('Enter your name')

  if (yourName === null) {
    return
  }

  if (!isNaN(yourName)) {
    alert('You must enter a valid name')
    return
  }

  if (yourName === '') {
    alert('You must enter a name')
  } else {
    let whatsName = document.querySelector('#hello-name')
    const showName = document.createElement('h3')
    showName.innerText = 'Hi ' + yourName + '!'
    whatsName.append(showName)
    showName.className = 'title-hello'
  }
}

//table multiplication
function mulTable() {
  let number = parseInt(prompt('Enter the name to consult'))

  if (isNaN(number)) {
    alert('You must enter a numerical value')
    return
  }

  if (number === null) {
    return
  }

  if (number === '') {
    alert('You must enter a number')
    return
  }

  let operation = 0
  let result = []

  let multiplicationTable = document.querySelector('#multiTable')  
  const showTable = document.createElement('div')
  const titleContainer = document.createElement('div')
  const showItemTableUl = document.createElement('ul')
  
  let titleTable = `Multiplication Table of ${number}`
  titleContainer.append(titleTable)
  for (let i = 1; i < 13; i++){
    const showItemTableLi = document.createElement('li')
    operation = number * i
    result.push(operation)
    let t = `${number} x ${i} = ${operation}`
    showItemTableLi.append(t)
    showItemTableUl.append(showItemTableLi)
  }

  showTable.className = 'mulTable'
  titleContainer.className = 'titleTable'
  showTable.append(titleContainer, showItemTableUl)
  multiplicationTable.appendChild(showTable)
}

/**
 * show form
 */
const captureShow = document.querySelector('#input-text')
captureShow.addEventListener('click', inputText)

const formContainer = document.querySelector('.form-container')

function inputText() {
  const isShowForm = formContainer.classList.contains('disguise')
  
  if (!isShowForm) {
    formContainer.classList.add('disguise')
  } else {
    formContainer.classList.remove('disguise')
  }
  
  const inputName = document.getElementById('input-name').value
  console.log(inputName)

}


/**
 * card about
 */
const activeAbout = document.querySelector('#about-nav')
activeAbout.addEventListener('click', showAbout)

const showAboutSelect = document.querySelector('.about')

function showAbout() {
  const isShowAbout = showAboutSelect.classList.contains('disguise')

  if (!isShowAbout) {
    showAboutSelect.classList.add('disguise')
  }
  else {
    showAboutSelect.classList.remove('disguise')
  }

}

/**
 * date
 */
const getDateNow = document.querySelector('#date')

function showCurrentDate() {
  const dateNow = new Date();

  const arrWeekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ]
  const numberDay = dateNow.getDay()
  const weekday = arrWeekday[numberDay]

  const MonthName = [
    'January',
    'February',
    'March',
    'May',
    'April',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const month = dateNow.getMonth()
  const showMonth = MonthName[month]
  
  const day = dateNow.getDate()
  const year = dateNow.getFullYear()

  const formDate = `${weekday} ${day} ${showMonth} ${year}`
  // console.log({day, month, showMonth, year, numberDay, weekday})

  const containerDate = document.createElement('p')
  containerDate.append(formDate)
  
  getDateNow.append(containerDate)
}

showCurrentDate()