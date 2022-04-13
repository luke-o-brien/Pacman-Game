
const start = document.querySelector('.start-menu')
const main = document.querySelector('main')
const startButton = document.querySelector('.play-button')
const howToplay = document.querySelector('.how-to-play')


startButton.addEventListener('click', () => {
  console.log('start clicked')
  main.innerHTML = ''
  console.log(document)
  createlayout()
})


function createlayout() {
  const game = document.createElement("div");
  game.classList = 'game'
  main.appendChild(game)
  const grid = document.createElement("div")
  grid.classList = 'grid-container'
  game.appendChild(grid)
  createMap()
}


//Creation of map layout 

const layout = [
  'w' , 'w' , 'w' , 'w', 'w', 'w', 'w', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w',
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w',
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'P', 'w',
  'w' , 'w' , 'w' , 'w', 'w', 'w', 'w', 'w']
  'w' , 'w' , 'w' , 'w', 'w', 'w', 'w', 'p']

const map = []
const dotArray = []

//Initial position of characters
let pacmanPosition = 27;
let ghostposition = 11;
let points = 0;
let highScore = 0
let ghostVulnerable = false


//Pacman Spawn and Delete Functions 
function spawnPacman() {
  const spawnSquare = document.getElementById(pacmanPosition)
  const createPacman = document.createElement("div")
  createPacman.classList = 'pacman' 
  createPacman.id = 'pacman'
  spawnSquare.appendChild(createPacman)
}

function deletePacman() {
  const deleteFromSquare = document.getElementById(pacmanPosition)
  const pacman = deleteFromSquare.querySelector('.pacman')
  deleteFromSquare.removeChild(pacman)

}

//Ghost Spawn and Delete Functions
function spawnGhost() {
  const ghostspawnSquare = document.getElementById(ghostposition)
  const createGhost = document.createElement("div")
  createGhost.id = 'ghost'
  if (ghostVulnerable === true) {
    createGhost.classList = 'ghost-vulnerable'
  } else if (ghostVulnerable === false) {
    createGhost.classList = 'ghost' 
  }
  ghostspawnSquare.appendChild(createGhost)
}

function deleteGhost() {
  const deleteGhostSquare = document.getElementById(ghostposition)
  const ghostremoval = deleteGhostSquare.querySelector('#ghost')
  deleteGhostSquare.removeChild(ghostremoval)
}

const game = document.querySelector('.game')
// Map Creation Function 

function createMap() {
  const grid = document.querySelector('.grid-container');
  
  for (let i = 0; i < layout.length ; i++) {
    const square = document.createElement("div");
    if (layout[i] === 'w') {
      square.classList = 'wall'
      square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
    } else if (layout[i] === 'p') {
      square.classList = 'path'
      square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
      const dots = document.createElement('div')
      dots.id = 'dot'
      dots.classList = 'dots'
      square.appendChild(dots)
      dotArray.push(dots)
    } else if (layout[i] === 'P') {
      square.classList = 'path'
      square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
      const dots = document.createElement('div')
      dots.id = 'big-dot'
      dots.classList = 'big-dot'
      square.appendChild(dots)
      dotArray.push(dots)
    }
  }
  spawnPacman()
  spawnGhost()
  ghostMoves()
}

document.addEventListener('keydown', (e) => {
  const key = e.code
  if (key === 'ArrowLeft' && map[pacmanPosition - 1].classList.contains('path')) {
    deletePacman(pacmanPosition)
    pacmanPosition -= 1
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowRight' && map[pacmanPosition + 1].classList.contains('path')) {
    deletePacman(pacmanPosition)
    pacmanPosition += 1
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowDown' && map[pacmanPosition + 8].classList.contains('path')) {
    deletePacman(pacmanPosition)
    pacmanPosition += 8
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowUp' && map[pacmanPosition - 8].classList.contains('path')) {
    deletePacman(pacmanPosition)
    pacmanPosition -= 8
    spawnPacman(pacmanPosition)
  }
  GhostKillsPacman()
  pacmanEats()
})
console.log(document)

//Basic Randomized Ghost Movement

function ghostMoves() {
  setInterval(() => {
    const ghostOptions = ['up', 'down', 'left', 'right']
    const ghostChoice =  ghostOptions[Math.floor(Math.random() * ghostOptions.length)]
    if (ghostChoice === 'right' && map[ghostposition + 1].classList.contains('path')) {
      deleteGhost(ghostposition)
      ghostposition += 1 
      spawnGhost(ghostposition)
    } else if ( ghostChoice === 'down' && map[ghostposition + 8].classList.contains('path')) {
      deleteGhost(ghostposition)
      ghostposition += 8
      spawnGhost(ghostposition)
    } else if ( ghostChoice === 'left' && map[ghostposition - 1].classList.contains('path')) {
      deleteGhost(ghostposition)
      ghostposition -= 1
      spawnGhost(ghostposition)
    } else if ( ghostChoice === 'up' && map[ghostposition - 8].classList.contains('path')) {
      deleteGhost(ghostposition)
      ghostposition -= 8
      spawnGhost(ghostposition)
    }
    GhostKillsPacman()
  }, 1000)
}

//Pacman eats Dots 
function pacmanEats() {
  const active = document.getElementById(pacmanPosition)
  
  if (map[pacmanPosition].children[0].id === 'dot') {
    const dot = active.querySelector('.dots')
    const dotIndex = dotArray.indexOf(dot)
    active.removeChild(dot)
    points += 10
    dotArray.splice(dotIndex, 1)
    if (dotArray.length === 0) {
      console.log('you have won')
      WinnerScreen()
    }
  } else if (map[pacmanPosition].children[0].id === 'big-dot') {
    const bigdots = document.querySelector('.big-dot')
    const bigDotIndex = dotArray.indexOf(bigdots)
    active.removeChild(bigdots)
    points += 15
    dotArray.splice(bigDotIndex, 1)
    vulnerableGhosts()
    console.log(ghostVulnerable)
    if (dotArray.length === 0) {
      console.log('you have won')
      WinnerScreen()
    }
  } else if (map[pacmanPosition].children[0].id === null) {
    console.log('no dot')
  }
}

//Pacman eats big dot and ghosts become vulnerable
function vulnerableGhosts() {
  ghostVulnerable = true 
  
  const timeout = setTimeout(resetVulstatus, 5000);

  function resetVulstatus() {
    ghostVulnerable = false
  }
}

// ghost and pacman meet ending the game and displaying points and option to restart game 
function GhostKillsPacman() {
  if (map[pacmanPosition] === map[ghostposition] && ghostVulnerable === false) {
    main.innerHTML = ''
    const gameOver = document.createElement("div");
    main.appendChild(gameOver)
    gameOver.classList.add('game-over')
    const results = document.createElement('p')
    results.innerHTML = 'Better Luck next time'
    results.classList.add('results')

    const finalPoints = document.createElement('p')
    finalPoints.innerHTML = points + ' points'
    finalPoints.classList.add('final-points')
  
  
    const replay = document.createElement('button')
    replay.innerHTML = 'click to replay'
    replay.classList.add('replay-button')

    gameOver.appendChild(results)
    gameOver.appendChild(finalPoints)
    gameOver.appendChild(replay)


    const replayButton = document.querySelector('.replay-button')

    replayButton.addEventListener('click', () => {
      console.log('replay clicked')

      main.innerHTML = ''
    
      console.log(document)
      createlayout()
    })
    
  } else if (map[pacmanPosition] === map[ghostposition] && ghostVulnerable === true) {
    deleteGhost(ghostposition)
    ghostposition = 11
    spawnGhost(ghostposition)
  }
}

//Game is won 

function WinnerScreen() {
  main.innerHTML = ''
  const gameOver = document.createElement("div");
  main.appendChild(gameOver)
  gameOver.classList.add('game-over')
  const results = document.createElement('p')
  results.innerHTML = 'You Win Congratulations!'
  results.classList.add('results')

  const finalPoints = document.createElement('p')
  finalPoints.innerHTML = points + ' points'
  finalPoints.classList.add('final-points')
  
  
  const replay = document.createElement('button')
  replay.innerHTML = 'click to replay'
  replay.classList.add('replay-button')

  gameOver.appendChild(results)
  gameOver.appendChild(finalPoints)
  gameOver.appendChild(replay)


  const replayButton = document.querySelector('.replay-button')

  replayButton.addEventListener('click', () => {
    console.log('replay clicked')

    main.innerHTML = ''
    
    console.log(document)
    createlayout()
  })
}

// CODE FOR OTHER MENUS 

howToplay.addEventListener('click', () => {
  console.log('how to play clicked')
  main.innerHTML = ''
  const htpPage = document.createElement("div");
  htpPage.classList = 'htp-page'
  main.appendChild(htpPage)
  const title = document.createElement("h2")
  title.classList = 'htp-h2'
  title.innerHTML = 'How to Play'
  htpPage.appendChild(title)
})