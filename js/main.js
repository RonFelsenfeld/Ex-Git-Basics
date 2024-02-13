'use strict'

var gSize = 100

function onInit() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')
  const elBall3 = document.querySelector('.ball3')
  const elBall4 = document.querySelector('.ball4')

  elBall1.style.width = gSize + 'px'
  elBall1.style.height = gSize + 'px'
  elBall1.style.backgroundColor = getRandomColor()

  elBall2.style.width = gSize + 'px'
  elBall2.style.height = gSize + 'px'
  elBall2.style.backgroundColor = getRandomColor()

  elBall3.style.backgroundColor = getRandomColor()
  elBall4.style.backgroundColor = getRandomColor()
}

function onBallClick(elBall, maxDiameter) {
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
