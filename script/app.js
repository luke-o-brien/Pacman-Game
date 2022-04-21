//! G A M E   C O D E   

const main = document.querySelector('main')
const startButton = document.querySelector('.play-button')
const howToplay = document.querySelector('.how-to-play')
const leaderboardButton = document.querySelector('.leaderboard')


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


// C r e a t i o n   o f   m a p   l a y o u t 

const layout = [

  'w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w',
  'w','p','p','p','p','p','p','p','p','w','p','p','p','p','p','p','p','p','w',
  'w','p','w','w','p','w','w','w','p','w','p','w','w','w','p','w','w','p','w',
  'w','p','w','w','p','w','w','w','p','w','p','w','w','w','p','w','w','p','w',
  'w','p','p','p','p','p','p','p','P','P','P','p','p','p','p','p','p','p','w',
  'w','p','w','w','p','w','p','w','w','w','w','w','p','w','p','w','w','p','w',
  'w','p','p','p','p','w','p','p','p','w','p','p','p','w','p','p','p','p','w',
  'w','w','w','w','p','w','w','w','p','w','p','w','w','w','p','w','w','w','w',
  'w','w','w','w','p','w','p','p','p','p','p','p','p','w','p','w','w','w','w',
  'o','o','o','o','p','p','p','w','w','o','w','w','p','p','p','o','o','o','o',
  'w','w','w','w','p','w','p','w','o','o','o','w','p','w','p','w','w','w','w',
  'o','o','o','o','p','p','p','w','o','o','o','w','p','p','p','o','o','o','o',
  'w','w','w','w','p','w','o','w','w','w','w','w','p','w','p','w','w','w','w',
  'w','w','w','w','p','w','p','p','p','p','p','p','p','w','p','w','w','w','w',
  'w','w','w','w','p','w','p','w','w','w','w','w','p','w','p','w','w','w','w',
  'w','p','p','p','p','p','p','p','p','w','p','p','p','p','p','p','p','p','w',
  'w','p','w','w','p','w','w','w','p','w','p','w','w','w','p','w','w','p','w',
  'w','p','p','w','p','p','p','p','p','p','p','p','p','p','p','w','p','p','w',
  'w','w','p','w','p','w','p','w','w','w','w','w','p','w','p','w','p','w','w',
  'w','p','p','p','p','w','p','p','p','w','p','p','p','w','p','p','p','p','w',
  'w','p','w','w','w','w','w','w','p','w','p','w','w','w','w','w','w','p','w',
  'w','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','w',
  'w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'
  
]

const map = []
const mapWidth = 19
const dotArray = []

//Initial position of characters
let pacmanPosition = 349;
let ghostposition = 169;
let points = 0;
let totalPoints = 0
let ghostVulnerable = false
let gameLive = false
console.log(gameLive)


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


// Map Creation Function 

function createMap() {
  const grid = document.querySelector('.grid-container');
  points = 0
  for (let i = 0; i < layout.length ; i++) {
    const square = document.createElement("div");
    if (layout[i] === 'w') {
      square.classList = 'wall'
      square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
    } else if (layout[i] === 'p' || layout[i] === 'P' || layout[i] === 'o') {
      square.classList = 'path'
      square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
      if (layout[i] === 'p') {
        const dots = document.createElement('div')
        dots.id = 'dot'
        dots.classList = 'dots'
        square.appendChild(dots)
        dotArray.push(dots)
      } else if (layout[i] === 'P') {
        const dots = document.createElement('div')
        dots.id = 'big-dot'
        dots.classList = 'big-dot'
        square.appendChild(dots)
        dotArray.push(dots)
      } 
    }
  }
  const pointdisplay = document.createElement('p')
  grid.appendChild(pointdisplay)
  pointdisplay.innerHTML = points + ' points'
  spawnPacman()
  spawnGhost()
  ghostMoves()
}

// Pacman Keypress Movement function 

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
  } else if (key === 'ArrowDown' && map[pacmanPosition + mapWidth].classList.contains('path')) {
    deletePacman(pacmanPosition)
    pacmanPosition += mapWidth
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowUp' && map[pacmanPosition - mapWidth].classList.contains('path')) {
    deletePacman(pacmanPosition)
    pacmanPosition -= mapWidth
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
    } else if ( ghostChoice === 'down' && map[ghostposition + mapWidth].classList.contains('path')) {
      deleteGhost(ghostposition)
      ghostposition += mapWidth
      spawnGhost(ghostposition)
    } else if ( ghostChoice === 'left' && map[ghostposition - 1].classList.contains('path')) {
      deleteGhost(ghostposition)
      ghostposition -= 1
      spawnGhost(ghostposition)
    } else if ( ghostChoice === 'up' && map[ghostposition - mapWidth].classList.contains('path')) {
      deleteGhost(ghostposition)
      ghostposition -= mapWidth
      spawnGhost(ghostposition)
    }
    GhostKillsPacman()
  }, 500)
}

//Pacman eats Dots 

function pacmanEats() {
  const active = document.getElementById(pacmanPosition)
  
  if (map[pacmanPosition].children[0].id === 'dot') {
    const dot = active.querySelector('.dots')
    const dotIndex = dotArray.indexOf(dot)
    active.removeChild(dot)
    points += 10
    const pointsDisplayLive = document.querySelector('p')
    pointsDisplayLive.innerHTML = points + ' points'
    dotArray.splice(dotIndex, 1)
    if (dotArray.length === 0) {
      console.log('you have won')
      WinnerScreen()
    }
  } else if (map[pacmanPosition].children[0].id === 'big-dot') {
    const bigdots = active.querySelector('.big-dot')
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
  
  const timeout = setTimeout(resetVulstatus, 10000);

  function resetVulstatus() {
    ghostVulnerable = false
  }
}

// ghost and pacman meet ending the game and displaying points and option to restart game 
function GhostKillsPacman() {
  if (map[pacmanPosition] === map[ghostposition] && ghostVulnerable === false) {
    pacmanPosition = 349
    totalPoints = points
    console.log(totalPoints)
  
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
    collectScores()
    
  } else if (map[pacmanPosition] === map[ghostposition] && ghostVulnerable === true) {
    deleteGhost(ghostposition)
    ghostposition = 230
    spawnGhost(ghostposition)
  }
}

//Game is won 

function WinnerScreen() {
  pacmanPosition = 349
  totalPoints = points
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
  })
  collectScores()
}

const playerScore = JSON.parse(localStorage.getItem('scores')) || [] 

function collectScores() {
  

  const playerName = prompt('Enter Your Name ')
  const yourScore = Number(totalPoints)
  const leaderBoardContent = { name: playerName, score: yourScore }
  playerScore.push(leaderBoardContent)
  localStorage.setItem('scores', JSON.stringify(playerScore))
}

function displayScore() {
  const scoresList = document.querySelector('ol')
  const array = playerScore
    .sort((playerA, playerB) => playerB.score - playerA.score)
    .map(player => {
      return `<li>
        ${player.name} ${player.score} Points
      </li>`
    })
  scoresList.innerHTML = array.join('')
}


//! C O D E    F O R    O T H E R    M E N U    P A G E S //

//code to generate Leaderboard

leaderboardButton.addEventListener('click', () => {
  main.innerHTML = ''
  main.innerHTML = `
  <div class="leaderboard-page">
      <h2>Leaderboard</h2>
      <div class=Leaderboard>
      <ol></ol>
      </div>
    <button>return to home</button>
  </div>`
  displayScore()
})

// c o d e    f o r   L e a d e r B o a r d 

leaderboardButton.addEventListener('click', () => {
  console.log('view leaderboard')
})

//code to generate how to play plage
howToplay.addEventListener('click', () => {
  //console.log('how to play clicked')
  //window.location.href = 'How-to-play.html'
  main.innerHTML = ''
  const htpPage = document.createElement("div");
  htpPage.classList = 'htp-page'
  main.appendChild(htpPage)
  htpPage.innerHTML = `
  <h2>How to Play</h2>
  <h3>Pacman the Basics</h3>
  <p></p>
  <h3>controls</h3>
  <p> Its simple, which ever direction you want pacman to move click the corrosponding arrow key on your keyboard</p>
  <ul>
  <li>Move up = Up arrow Key<li>
  <li>Move down = down arrow Key</li>
  <li>Move left = left arrow Key</li>
  <li>Move right = right arrow Key</li>
  </ul>
  <h3>points and more rules</h3>
  <p>you get points when pacman eats the yellow food pellets which are on the</p>
  <button id="return-home"> return to home </button>
  `
  console.log(document)

  const returnHomeButton = document.querySelector('#return-home')

  returnHomeButton.addEventListener('click', () => {
    location.reload()
  })
})

