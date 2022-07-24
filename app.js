function helloName() {
  console.log('hello')
  let yourName = prompt('Enter your name')

  console.log(yourName)
  
  //document.getElementById('name').value
  let whatsName = document.querySelector('#hello-name')
  const showName = document.createElement('h3')
  showName.innerText = yourName
  whatsName.append(showName)
  showName.className = 'title-hello'
  // console.log('hey')
}

function mulTable() {
  let number = prompt('Enter the name to consult')
  let result = 0

  for (let i = 1; i < 12; i++){
    console.log(result = i * number)
  }
  return result
}