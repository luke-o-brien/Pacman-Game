//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   
//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//! G A M E   C O D E
//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   


const main = document.querySelector('main')

function createMenu() {
  main.innerHTML = `
  <div class="start-menu">
  <h1 class="main-title">Pacman</h1>
  <div class="menu-images">
    
    <img src="images/kisspng-pac-man-world-3-ghosts-red-packs-5ae218e46ff980.5320704415247669484587-removebg-preview.png">
    <img src="images/548-5487219_pac-man-png-pacman-ghost-transparent-background-clipart-removebg-preview (1).png">
    <img src="images/kisspng-pac-man-world-3-ghosts-clip-art-pac-man-ghost-png-transparent-image-5a7561ae2a7482.6496024615176421581739-removebg-preview.png">
    <img src="images/imgbin-ms-pac-man-pac-man-world-3-ghosts-pac-man-ghost-from-pacman-VaSTbeXMCuKyP0UE9kP0mYWc9-removebg-preview (1).png">
  </div>
  <button class="play-button">Play!</button>
  <button class="how-to-play">How to play</button>
  <button class="leaderboard">Leaderboard</button>
  <button class="github" onclick= "window.open('https://github.com/luke-o-brien/Pacman-Game' ,'_blank')">Github Respository</button>
</div>`
}

createMenu()
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// C r e a t i o n   o f   G a m e 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
  'w','p','p','p','P','p','p','p','p','p','p','p','p','p','P','p','p','p','w',
  'w','p','w','w','p','w','p','w','w','w','w','w','p','w','p','w','w','p','w',
  'w','p','p','p','p','w','p','p','p','w','p','p','p','w','p','p','p','p','w',
  'w','w','w','w','p','w','w','w','p','w','p','w','w','w','p','w','w','w','w',
  'w','w','w','w','p','w','p','p','p','p','p','p','p','w','p','w','w','w','w',
  'o','o','o','o','p','p','p','w','w','o','w','w','p','p','p','o','o','o','o',
  'w','w','w','w','p','[]','p','w','o','o','o','w','p','w','p','w','w','w','w',
  'o','o','o','o','p','p','p','w','o','o','o','w','p','p','p','o','o','o','o',
  'w','w','w','w','p','w','o','w','w','w','w','w','p','w','p','w','w','w','w',
  'w','w','w','w','p','w','p','p','p','p','p','p','p','w','p','w','w','w','w',
  'w','w','w','w','p','w','p','w','w','w','w','w','p','w','p','w','w','w','w',
  'w','p','p','p','P','p','p','p','p','w','p','p','p','p','P','p','p','p','w',
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


let ghosts = [
  {
    "ghost": "blinky",
    "position": 161 ,
    "direction": "up",
    "class": "blinky",
  },
  {
    "ghost": "pinky",
    "position": 200 ,
    "direction": "left",
    "class": "pinky",
  },
  {
    "ghost": "inky",
    "position": 218 ,
    "direction": "right",
    "class": "inky",
  },
  {
    "ghost": "clyde",
    "position": 198,
    "direction": "down",
    "class": "clyde",
  }]


//Initial position of characters
let pacmanPosition = 256;

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
//array of 4 object with all needed variables 
function spawnGhost() {
  ghosts.forEach(charcter => {
    const ghostSpawnSquare = document.getElementById(charcter.position)
    const createGhost = document.createElement("div")
    createGhost.id = charcter.ghost
    if (ghostVulnerable === true) {
      createGhost.classList = 'ghost-vulnerable'
    } else if (ghostVulnerable === false) {
      createGhost.classList = charcter.class
    }
    ghostSpawnSquare.appendChild(createGhost)
  });
  
  // const createGhost = document.createElement("div")
  // createGhost.id = 'ghost'
  // createGhost.classList = 'ghost' 
  // ghostspawnSquare.appendChild(createGhost)
}


function deleteGhost() {
  ghosts.forEach(charcter => {
    //console.log(charcter.position)
    const deleteGhostSquare = document.getElementById(charcter.position)
    console.log(deleteGhostSquare)
    const ghostremoval = document.getElementById(charcter.ghost)
    //console.log(ghostremoval)
    deleteGhostSquare.removeChild(ghostremoval)
  })
}



// Map Creation Function 

function createMap() {
  const grid = document.querySelector('.grid-container');
  points = 0
  for (let i = 0; i < layout.length ; i++) {
    const square = document.createElement("div");
    if (layout[i] === 'w' || layout[i] === '[]') {
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
  pointdisplay.classList = 'gamePoints'
  spawnPacman()
  spawnGhost()
  ghostMoves()
}







//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
//for each loop on array of ghosts 
function ghostMoves() {
  setInterval(() => {
    const ghostOptions = ['up', 'down', 'left', 'right']
    ghosts.forEach(charcter => {
      
      const ghostChoice =  ghostOptions[Math.floor(Math.random() * ghostOptions.length)]
      //console.log(ghostChoice)
      if (ghostChoice === 'right' && map[charcter.position + 1].classList.contains('path')) {
        deleteGhost(charcter.position)
        charcter.position += 1 
        spawnGhost(charcter.position)
      } else if ( ghostChoice === 'down' && map[charcter.position + mapWidth].classList.contains('path')) {
        deleteGhost(charcter.position)
        charcter.position += mapWidth
        spawnGhost(charcter.position)
      } else if ( ghostChoice === 'left' && map[charcter.position - 1].classList.contains('path')) {
        deleteGhost(charcter.position)
        charcter.position  -= 1
        spawnGhost(charcter.position)
      } else if ( ghostChoice === 'up' && map[charcter.position - mapWidth].classList.contains('path')) {
        deleteGhost(charcter.position)
        charcter.position  -= mapWidth
        spawnGhost(charcter.position)
      }
    });
  }, 2000)
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
//pass as an argument ghost position
function GhostKillsPacman() {
  ghosts.forEach(charcter => {
    if (map[pacmanPosition] === map[charcter.position] && ghostVulnerable === false) {
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
      
    } else if (map[pacmanPosition] === map[charcter.position] && ghostVulnerable === true) {
      deleteGhost(charcter.position)
      points += 200
      charcter.position = 230
      spawnGhost(charcter.position)
    }
  })
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

//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -
//! C O D E    F O R    O T H E R    M E N U    P A G E S //
//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - - -

//code to generate Leaderboard

leaderboardButton.addEventListener('click', () => {
  main.innerHTML = ''
  main.innerHTML = `
  <div class="leaderboard-page">
      <h2>Leaderboard</h2>
      <div class=Leaderboard>
      <ol></ol>
      </div>
    <button class="leaderboard-return">return to home</button>
  </div>`
  displayScore()
})

// c o d e    f o r   L e a d e r B o a r d 



//c o d e   t o   g e n e r a t e   h o w   t o   p l a y   p l a g e

howToplay.addEventListener('click', () => {
  //console.log('how to play clicked')
  //window.location.href = 'How-to-play.html'
  main.innerHTML = ''
  const htpPage = document.createElement("div");
  htpPage.id = 'htp-page'
  main.appendChild(htpPage)
  htpPage.innerHTML = `
  <h2 class="htp-h2">How to Play</h2>
  <h3>Pacman the Basics</h3>
  <p></p>
  <h3>controls</h3>
  <p> Its simple, which ever direction you want pacman to move click the corrosponding arrow key on your keyboard</p>
  <p>if you want to pacman to keep moving in the same direction hold down the key </P>
  <ul>
  <li>Move down = down arrow Key</li>
  <li>Move up = Up arrow Key</li>
  <li>Move left = left arrow Key</li>
  <li>Move right = right arrow Key</li>
  </ul>
  <h3>points and more rules</h3>
  <p>you get points when pacman eats the yellow food pellets which are on the map</p>
  <ul>
  <li>Food Pellets = 10 points</li>
  <li>PowerUp Pellets = 15 Points</li>
  <li>Eating a ghost = 200</li>
  </ul>
  <button class="htp-return"> return to home </button>
  `
  console.log(document)

  const returnHomeButton = document.querySelector('.htp-return')

  returnHomeButton.addEventListener('click', () => {
    location.reload()
  })
})

