'use strict'

var gSize = 100

function onInit() {
  const elBall = document.querySelector('.ball')

  elBall.style.width = gSize + 'px'
  elBall.style.height = gSize + 'px'
  elBall.style.backgroundColor = getRandomColor()
}

function onBallClick(elBall) {
  gSize += getRandomInt(20, 61)

  if (gSize > 400) gSize = 100

  elBall.style.width = gSize + 'px'
  elBall.style.height = gSize + 'px'
  elBall.innerText = gSize
  elBall.style.backgroundColor = getRandomColor()
}
