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

//
function mulTable() {
  let number = prompt('Enter the name to consult')
  let operation = 0
  let result = []

  let dad = document.querySelector('.dad')  
  const showItemTable = document.createElement('p')
  const showTable = document.createElement('div')

  for (let i = 1; i < 13; i++){
    operation = i * number
    result.push(operation)
    // console.log(operation = i * number)
    // console.log(operation)
    // console.log(result)
    // let t = `${number} x ${i}`
    // showTable.innerText = result + t
  }

  for (let i = 0; i < result.length; i++) {
    showItemTable.innerText = number + 'x' + i + '=' + result
    console.log(`${number} x ${i + 1} = ${result[i]}`)
  }

  showTable.className = 'mulTable'
  showTable.appendChild(showItemTable)
  dad.appendChild(showTable)
  // console.log(operation)
  // console.log(result)
  // return result
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
}