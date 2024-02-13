'use strict'

var gStates
var gStateIdx

var gSecondsHover = 0
var gHoverInterval

var gHandlersInterval
var gCycleCount = 0

function onInit() {
  gStates = []
  gStateIdx = 0
  renderBalls()
}

function renderBalls() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')
  const elBall3 = document.querySelector('.ball3')
  const elBall4 = document.querySelector('.ball4')
  const elBall5 = document.querySelector('.ball5')
  const elBall6 = document.querySelector('.ball6')

  elBall1.style.width = '100px'
  elBall1.style.height = '100px'
  elBall1.style.backgroundColor = getRandomColor()

  elBall2.style.width = '100px'
  elBall2.style.height = '100px'
  elBall2.style.backgroundColor = getRandomColor()

  elBall3.style.backgroundColor = getRandomColor()
  elBall4.style.backgroundColor = getRandomColor()
  elBall5.style.backgroundColor = getRandomColor()
  elBall6.style.backgroundColor = getRandomColor()

  addBallsState(elBall1, elBall2)
}

function onResetGame() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')
  const elBall4 = document.querySelector('.ball4')

  elBall1.dataset.maxDiameter = 400
  elBall2.dataset.maxDiameter = 500

  elBall1.innerText = '100'
  elBall2.innerText = '100'

  elBall4.innerText = 'Change max diameters'

  document.body.style.backgroundColor = 'black'

  onInit()
}

function onBallClick(elBall) {
  const maxDiameter = +elBall.dataset.maxDiameter
  const addSize = getRandomInt(20, 61)
  const newSize = Number.parseInt(elBall.style.width) + addSize

  if (newSize > maxDiameter) newSize = 100

  elBall.style.width = newSize + 'px'
  elBall.style.height = newSize + 'px'
  elBall.innerText = newSize

  addBallsState()
  gStateIdx++
}

function onThirdBallClick() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')

  const tempColor = elBall1.style.backgroundColor
  elBall1.style.backgroundColor = elBall2.style.backgroundColor
  elBall2.style.backgroundColor = tempColor

  addBallsState()
  gStateIdx++
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

function onHover() {
  gHoverInterval = setInterval(() => {
    gSecondsHover++

    if (gSecondsHover >= 2) {
      gHandlersInterval = setInterval(executeAllHandlers, 2000)
      clearInterval(gHoverInterval)
    }
  }, 1000)
}

function onOutHover() {
  gSecondsHover = 0
  clearInterval(gHoverInterval)
  clearInterval(gHandlersInterval)
}

function executeAllHandlers() {
  gCycleCount++

  if (gCycleCount > 10) {
    clearInterval(gHandlersInterval)
    gCycleCount = 0
    return
  }

  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')
  const elBall4 = document.querySelector('.ball4')

  onBallClick(elBall1)
  onBallClick(elBall2)
  onThirdBallClick()
  onFourthBallClick(elBall4)
}

function addBallsState() {
  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')

  const ball1Size = Number.parseInt(elBall1.style.width)
  const ball1Color = elBall1.style.backgroundColor

  const ball2Size = Number.parseInt(elBall2.style.width)
  const ball2Color = elBall2.style.backgroundColor

  const ball1 = {
    size: ball1Size,
    color: ball1Color,
  }

  const ball2 = {
    size: ball2Size,
    color: ball2Color,
  }

  gStates.push([ball1, ball2])
}

function onUndo() {
  if (gStateIdx === 0) return
  gStateIdx--
  const currState = gStates[gStateIdx]
  const ball1 = currState[0]
  const ball2 = currState[1]

  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')

  elBall1.style.width = ball1.size + 'px'
  elBall1.style.height = ball1.size + 'px'
  elBall1.style.backgroundColor = ball1.color
  elBall1.innerText = ball1.size

  elBall2.style.width = ball2.size + 'px'
  elBall2.style.height = ball2.size + 'px'
  elBall2.style.backgroundColor = ball2.color
  elBall2.innerText = ball2.size
}

function onRedo() {
  if (gStateIdx === gStates.length - 1) return
  gStateIdx++
  const currState = gStates[gStateIdx]
  const ball1 = currState[0]
  const ball2 = currState[1]

  const elBall1 = document.querySelector('.ball1')
  const elBall2 = document.querySelector('.ball2')

  elBall1.style.width = ball1.size + 'px'
  elBall1.style.height = ball1.size + 'px'
  elBall1.style.backgroundColor = ball1.color
  elBall1.innerText = ball1.size

  elBall2.style.width = ball2.size + 'px'
  elBall2.style.height = ball2.size + 'px'
  elBall2.style.backgroundColor = ball2.color
  elBall2.innerText = ball2.size
}
