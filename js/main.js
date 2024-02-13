'use strict'

var gSize

function onInit() {
  gSize = 100
  renderBalls()
}

function renderBalls() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')
  const elBall3 = document.querySelector('.ball3')
  const elBall4 = document.querySelector('.ball4')
  const elBall5 = document.querySelector('.ball5')
  const elBall6 = document.querySelector('.ball6')

  elBall1.style.width = gSize + 'px'
  elBall1.style.height = gSize + 'px'
  elBall1.style.backgroundColor = getRandomColor()

  elBall2.style.width = gSize + 'px'
  elBall2.style.height = gSize + 'px'
  elBall2.style.backgroundColor = getRandomColor()

  elBall3.style.backgroundColor = getRandomColor()
  elBall4.style.backgroundColor = getRandomColor()
  elBall5.style.backgroundColor = getRandomColor()
  elBall6.style.backgroundColor = getRandomColor()
}

function onResetGame() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')
  const elBall4 = document.querySelector('.ball4')

  elBall1.dataset.maxDiameter = 400
  elBall2.dataset.maxDiameter = 500
  elBall4.innerText = 'Change max diameters'

  document.body.style.backgroundColor = 'black'

  onInit()
}

function onBallClick(elBall) {
  const maxDiameter = +elBall.dataset.maxDiameter
  gSize += getRandomInt(20, 61)

  if (gSize > maxDiameter) gSize = 100

  elBall.style.width = gSize + 'px'
  elBall.style.height = gSize + 'px'
  elBall.innerText = gSize
  elBall.style.backgroundColor = getRandomColor()
}

function onThirdBallClick() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')

  const tempColor = elBall1.style.backgroundColor
  elBall1.style.backgroundColor = elBall2.style.backgroundColor
  elBall2.style.backgroundColor = tempColor
}

function onFourthBallClick(elBall) {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')

  if (
    +elBall1.dataset.maxDiameter === 100 &&
    +elBall2.dataset.maxDiameter === 100
  ) {
    elBall.innerText = `Finished`
    return
  }

  const decreaseSize = getRandomInt(20, 61)
  elBall.innerText = `Decreased by ${decreaseSize}`

  elBall1.dataset.maxDiameter -= decreaseSize
  elBall2.dataset.maxDiameter -= decreaseSize

  if (elBall1.dataset.maxDiameter < 100) elBall1.dataset.maxDiameter = 100
  if (elBall2.dataset.maxDiameter < 100) elBall2.dataset.maxDiameter = 100
}

function onFifthBallClick() {
  document.body.style.backgroundColor = getRandomColor()
}
