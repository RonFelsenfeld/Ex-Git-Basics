'use strict'

function onBallClick(elBall) {
  const newSize = elBall.clientWidth + 50

  elBall.style.width = newSize + 'px'
  elBall.style.height = newSize + 'px'
  elBall.innerText = newSize
}
