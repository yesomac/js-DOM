function helloName() {
  console.log('hello')
  let yourName = prompt('Enter your name')

  console.log(yourName)
  
  //document.getElementById('name').value
  let whatsName = document.querySelector('#hello-name')
  const showName = document.createElement('h3')
  showName.innerText = 'Hi ' + yourName + '!'
  whatsName.append(showName)
  showName.className = 'title-hello'
  // console.log('hey')
}

//table multiplication
function mulTable() {
  let number = prompt('Enter the name to consult')
  let operation = 0
  let result = []

  let multiplicationTable = document.querySelector('#multiTable')  
  const showTable = document.createElement('div')
  const titleContainer = document.createElement('div')
  const showItemTableUl = document.createElement('ul')
  
  let titleTable = `Tabla de multiplicar del ${number}`
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

//card about
const activeAbout = document.querySelector('#about-nav')
activeAbout.addEventListener('click', showAbout)

const showAboutSelect = document.querySelector('.about')

function showAbout() {
  const isShowAbout = showAboutSelect.classList.contains('disguise')

  if (!isShowAbout) {
    showAboutSelect.classList.add('disguise')
  }

  showAboutSelect.classList.toggle('disguise')
}