const board = document.querySelector('#board')
const colors = ['#e7753c', '#e7c83c', '#3ce7a5', '#3c86e7', '#9a3ce7', '#e73cd6', '#e73c53', '#3b6948']
const SQUARES_NUMBER = 700

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square) )

    square.addEventListener('mouseleave', () => 
    removeColor(square) )

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
 const index = Math.floor(Math.random() * colors.length)
 return colors [index]
}