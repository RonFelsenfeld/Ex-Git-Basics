'use strict'

var gSize = 100

function onInit() {
  const elBall1 = document.querySelector('.ball2')
  const elBall2 = document.querySelector('.ball1')

  elBall1.style.width = gSize + 'px'
  elBall1.style.height = gSize + 'px'
  elBall1.style.backgroundColor = getRandomColor()

  elBall2.style.width = gSize + 'px'
  elBall2.style.height = gSize + 'px'
  elBall2.style.backgroundColor = getRandomColor()
}

function onBallClick(elBall) {
  gSize += getRandomInt(20, 61)

  if (gSize > 400) gSize = 100

  elBall.style.width = gSize + 'px'
  elBall.style.height = gSize + 'px'
  elBall.innerText = gSize
  elBall.style.backgroundColor = getRandomColor()
}
