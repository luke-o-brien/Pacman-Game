// C r e a t i o n   o f   m a p   l a y o u t  

const layout = [
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
  'w', 'p', 'p', 'p', 'p', 'p', 'P', 'p', 'p', 'w', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'w',
  'w', 'p', 'w', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'w', 'p', 'w',
  'w', 'p', 'w', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'w', 'p', 'w',
  'w', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'w',
  'w', 'p', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'P', 'w',
  'w', 'p', 'p', 'p', 'p', 'w', 'p', 'p', 'p', 'w', 'p', 'p', 'p', 'w', 'p', 'p', 'p', 'p', 'w',
  'w', 'w', 'w', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'w', 'w', 'w',
  'w', 'w', 'w', 'w', 'p', 'w', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'w', 'p', 'w', 'w', 'w', 'w',
  'o', 'o', 'o', 'o', 'p', 'p', 'o', 'w', 'd', 'd', 'd', 'w', 'o', 'p', 'p', 'o', 'o', 'o', 'o',
  'w', 'w', 'w', 'w', 'p', 'w', 'o', 'w', 'o', 'o', 'o', 'w', 'o', 'w', 'p', 'w', 'w', 'w', 'w',
  'o', 'o', 'o', 'o', 'p', 'p', 'o', 'w', 'o', 'o', 'o', 'w', 'o', 'p', 'p', 'o', 'o', 'o', 'o',
  'w', 'w', 'w', 'w', 'p', 'w', 'o', 'w', 'w', 'w', 'w', 'w', 'o', 'w', 'p', 'w', 'w', 'w', 'w',
  'w', 'w', 'w', 'w', 'p', 'w', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'w', 'p', 'w', 'w', 'w', 'w',
  'w', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'w',
  'w', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'w', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'w',
  'w', 'p', 'w', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'p', 'w', 'w', 'p', 'w',
  'w', 'p', 'p', 'w', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'w', 'p', 'p', 'w',
  'w', 'w', 'p', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'p', 'w', 'w',
  'w', 'P', 'p', 'p', 'p', 'w', 'p', 'p', 'p', 'w', 'p', 'p', 'p', 'w', 'p', 'P', 'p', 'p', 'w',
  'w', 'p', 'w', 'w', 'w', 'w', 'w', 'w', 'p', 'w', 'p', 'w', 'w', 'w', 'w', 'w', 'w', 'p', 'w',
  'w', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'w',
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'

]

const layoutGiant = [
  'w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w',
  'w','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','w','p','p','p','p','p','p','p','w','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','w',
  'w','p','w','w','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','w','p','w','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','w','w','p','w',
  'w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w',
  'w','p','w','p','w','w','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','w','w','p','w','p','w',
  'w','p','p','p','p','p','p','p','w','p','w','p','p','p','p','p','p','p','w','p','w','p','w','p','p','p','p','p','p','p','w','p','w','p','p','p','p','p','p','p','w',
  'w','w','p','w','p','w','p','w','w','p','w','w','w','p','w','p','w','p','p','p','w','p','p','p','w','p','w','p','w','w','w','p','w','w','p','w','p','w','p','w','w',
  'w','p','p','w','p','w','p','p','p','p','w','p','p','p','w','p','w','w','w','w','w','w','w','w','w','p','w','p','p','p','w','p','p','p','p','w','p','w','p','p','w',
  'w','p','w','w','p','w','w','w','w','p','w','p','w','w','w','p','p','p','p','p','p','p','p','p','p','p','w','w','w','p','w','p','w','w','w','w','p','w','w','p','w',
  'w','p','p','p','p','w','p','p','p','p','w','p','w','p','p','p','w','p','w','w','p','w','w','p','w','p','p','p','w','p','w','p','p','p','p','w','p','p','p','p','w',
  'w','w','w','w','p','w','p','w','w','p','w','p','w','p','w','w','w','p','w','p','p','p','w','p','w','w','w','p','w','p','w','p','w','w','p','w','p','w','w','w','w',
  'p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','w','p','p','p','w','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p',
  'w','w','w','w','p','w','p','w','w','p','w','p','w','p','w','w','w','p','w','p','p','p','w','p','w','w','w','p','w','p','w','p','w','w','p','w','p','w','w','w','w',
  'w','p','p','p','p','w','p','p','p','p','w','p','w','p','p','p','w','p','w','w','w','w','w','p','w','p','p','p','w','p','w','p','p','p','p','w','p','p','p','p','w',
  'w','p','w','w','p','w','w','w','w','p','w','p','w','w','w','p','p','p','p','p','p','p','p','p','p','p','w','w','w','p','w','p','w','w','w','w','p','w','w','p','w',
  'w','p','p','w','p','w','p','p','p','p','w','p','p','p','w','p','w','w','w','w','w','w','w','w','w','p','w','p','p','p','w','p','p','p','p','w','p','w','p','p','w',
  'w','w','p','w','p','w','p','w','w','p','w','w','w','p','w','p','w','p','p','p','w','p','p','p','w','p','w','p','w','w','w','p','w','w','p','w','p','w','p','w','w',
  'w','p','p','p','p','p','p','p','w','p','w','p','p','p','p','p','p','p','w','p','w','p','w','p','p','p','p','p','p','p','w','p','w','p','p','p','p','p','p','p','w',
  'w','p','w','p','w','w','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','w','w','p','w','p','w',
  'w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w','p','w','p','p','p','w','p','w',
  'w','p','w','w','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','w','p','w','w','p','w','p','w','p','w','w','w','p','w','p','w','p','w','w','w','p','w',
  'w','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','w','p','p','p','p','p','p','p','w','p','p','p','p','p','p','p','p','p','p','p','p','p','p','p','w',
  'w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'
]

let map = []

let dotArray = []


//window.onload = function() {
//document.getElementById("audio").play();
//}

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
  <audio id="audio" src="sounds/Ice-Road-Sunrise_Looping.mp3" loop="loop" ></audio>
</div>`
  
}


createMenu()
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// C r e a t i o n   o f   G a m e 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const startButton = document.querySelector('.play-button')
const howToplay = document.querySelector('.how-to-play')
const leaderboardButton = document.querySelector('.leaderboard')
let selectedTheme = ''
let gridSize = ''




startButton.addEventListener('click', () => {
  console.log('start clicked')
  main.innerHTML = ''
  console.log(document)
  options()
})


function options() {
  main.innerHTML = `
  <h2>Game Options</h2>
  <form>
  <h3>Select your Theme</h3>
    <div>
        <input type="radio" name="themes" value="retro" id="retro">
        <label for="retro">Retro Map</label>
    </div>
    <div>
        <input type="radio" name="themes" value="minimalist" id="minimalist">
        <label for="minimalist">Minimalist Map</label>
    </div>
    <h3>Select your Grid Size</h3>
    <div>
        <input type="radio" name="size" value="regular" id="classic">
        <label for="retro">regular</label>
    </div>
    <div>
        <input type="radio" name="size" value="giant" id="giant">
        <label for="minimalist">Giant</label>
    </div>
    <div class="preview">
    </div>
    </form>
  <button class="optionsPlayButton">Play Game!</button>
  <p class="result"></p>
  `
  const optionsPlayButton = document.querySelector(".optionsPlayButton")
  const radioButtons = document.querySelectorAll('input[name="themes"]');
  const radioButtonstwo = document.querySelectorAll('input[name="size"]')
  const previewcontainer = document.querySelector('.preview')
  const retro = document.querySelector('#retro')
  const minimalist = document.querySelector('#minimalist')
  retro.addEventListener('click', () => {
    console.log('clicked retro')
    previewcontainer.innerHTML = ''
    const retroPreview = document.createElement("img")
    retroPreview.classList = 'preview-map-img'
    retroPreview.src = 'images/Retro small preview.png'
    previewcontainer.appendChild(retroPreview)
  })
  minimalist.addEventListener('click', () => {
    console.log('clicked retro')
    previewcontainer.innerHTML = ''
    const Preview = document.createElement("img")
    Preview.classList = 'preview-map-img'
    Preview.src = 'images/Minimalist small preview .png'
    previewcontainer.appendChild(Preview)
  })
  
  
  optionsPlayButton.addEventListener("click", () => {
    console.log('clicked')
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedTheme = radioButton.value;
        console.log('the selected theme is ' + selectedTheme)
        // main.innerHTML = ''
        // createlayout()
      } else if (radioButton.checked === false && radioButton.checked === false) {
        //const noClick = document.createElement("p")
        // noClick.classList = 'no-click-error'
        //noClick.innerHTML = 'You must select a map theme first!'
        //main.appendChild(noClick)
      }
    }
    for (const radiobuttontwo of radioButtonstwo) {
      if (radiobuttontwo.checked) {
        gridSize = radiobuttontwo.value;
        console.log(gridSize)
        main.innerHTML = ''
        createlayout()
      }
    }
  })
}

const mapWidthsmall = 19;
const mapWidthGiant = 41;
let mapWidth = 19

function createlayout() {
  const game = document.createElement("div");
  main.appendChild(game)
  const grid = document.createElement("div")
  if (selectedTheme === 'retro') {
    game.classList = 'game-retro'
  } else if (selectedTheme === 'minimalist') {
    game.classList = 'game'
  }
  game.appendChild(grid)
  if (gridSize === 'regular') {
    grid.classList = 'grid-container'
    mapWidth = mapWidthsmall
    createMap()
  } else if (gridSize === 'giant') {
    grid.classList = 'grid-container-giant'
    mapWidth = mapWidthGiant
    createMapGiant()
  }
}



//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   
//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//! G A M E   C O D E
//! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   


let ghosts = [
  {
    "ghost": "blinky",
    "position": 161,
    "direction": "up",
    "class": "blinky",
  },
  {
    "ghost": "pinky",
    "position": 200,
    "direction": "left",
    "class": "pinky",
  },
  {
    "ghost": "inky",
    "position": 218,
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
let pacmanPositionRegular = 256
let pacmanPosition = 256;
let pacmanPositionGiant = 594;

let points = 0;
let totalPoints = 0
let ghostVulnerable = false
let gameLive = false






function SpawnPacmanInitGiant () {
  pacmanPosition = pacmanPositionGiant
  const spawnSquare = document.getElementById(pacmanPositionGiant)
  const createPacman = document.createElement("div")
  createPacman.classList = 'pacman'
  createPacman.id = 'pacman'
  spawnSquare.appendChild(createPacman)
}
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
    const deleteGhostSquare = document.getElementById(charcter.position)
    const ghostremoval = document.getElementById(charcter.ghost)
    deleteGhostSquare.removeChild(ghostremoval)
  })
}



// Map Creation Function 

function createMap() {
  const grid = document.querySelector('.grid-container');
  points = 0
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    if (layout[i] === 'w') {
      //square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
      if (selectedTheme === "minimalist") {
        square.classList = 'wall'
      } else if (selectedTheme === "retro") {
        square.classList = 'wall-retro'
      }
    } else if (layout[i] === 'd') {
      square.id = i
      grid.appendChild(square)
      map.push(square)
      if (selectedTheme === "minimalist") {
        square.classList = 'door'
      } else if (selectedTheme === "retro") {
        square.classList = 'door-retro'
      }
    } else if (layout[i] === 'p' || layout[i] === 'P' || layout[i] === 'o') {
      if (selectedTheme === "minimalist") {
        square.classList = 'path'
      } else if (selectedTheme === "retro") {
        square.classList = 'path-retro'
      }
      //square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
      if (layout[i] === 'p') {
        const dots = document.createElement('div')
        square.appendChild(dots)
        dotArray.push(dots)
        if (selectedTheme === "minimalist") {
          dots.id = 'dot'
          dots.classList = 'dots'
        } else if (selectedTheme === "retro") {
          dots.id = 'dot-retro'
          dots.classList = 'dots-retro'
        }

      } else if (layout[i] === 'P') {
        const dots = document.createElement('div')
        dots.id = 'big-dot'
        if (selectedTheme === "minimalist") {
          dots.classList = 'big-dot'
        } else if (selectedTheme === "retro") {
          dots.classList = 'big-dot-retro'
        }

        square.appendChild(dots)
        dotArray.push(dots)
      }
    }
  }
  const pointdisplay = document.createElement('p')
  grid.appendChild(pointdisplay)
  pointdisplay.innerHTML = points + ' points'
  if (selectedTheme === 'minimalist'){
    pointdisplay.classList = 'gamePoints'
  } else if (selectedTheme === 'retro') {
    pointdisplay.classList = 'gamePoints-retro'
  }
  spawnPacman()
  spawnGhost()
  ghostMoves()
}


function createMapGiant() {
  const grid = document.querySelector('.grid-container-giant');
  points = 0
  for (let i = 0; i < layoutGiant.length; i++) {
    const square = document.createElement("div");
    if (layoutGiant[i] === 'w') {
      //square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
      if (selectedTheme === "minimalist") {
        square.classList = 'wall'
      } else if (selectedTheme === "retro") {
        square.classList = 'wall-retro'
      }
    } else if (layoutGiant[i] === 'p' || layoutGiant[i] === 'P' || layoutGiant[i] === 'o' || layoutGiant[i] === 'd') {
      if (selectedTheme === "minimalist") {
        square.classList = 'path'
      } else if (selectedTheme === "retro") {
        square.classList = 'path-retro'
      }
      //square.innerHTML = i
      square.id = i
      grid.appendChild(square)
      map.push(square)
      if (layoutGiant[i] === 'p') {
        const dots = document.createElement('div')
        square.appendChild(dots)
        dotArray.push(dots)
        if (selectedTheme === "minimalist") {
          dots.id = 'dot'
          dots.classList = 'dots'
        } else if (selectedTheme === "retro") {
          dots.id = 'dot-retro'
          dots.classList = 'dots-retro'
        }

      } else if (layoutGiant[i] === 'P') {
        const dots = document.createElement('div')
        dots.id = 'big-dot'
        if (selectedTheme === "minimalist") {
          dots.classList = 'big-dot'
        } else if (selectedTheme === "retro") {
          dots.classList = 'big-dot-retro'
        }

        square.appendChild(dots)
        dotArray.push(dots)
      }
    }
  }
  const pointdisplay = document.createElement('p')
  grid.appendChild(pointdisplay)
  pointdisplay.innerHTML = points + ' points'
  pointdisplay.classList = 'gamePoints'
  SpawnPacmanInitGiant()
  spawnGhost()
  ghostMoves()
}



// Pacman Keypress Movement function 

document.addEventListener('keydown', (e) => {
  const key = e.code

  if (key === 'ArrowRight' && pacmanPosition === 189 || key === 'ArrowRight' && pacmanPosition === 227 ) {
    deletePacman(pacmanPosition)
    pacmanPosition -= 18
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowLeft' && pacmanPosition === 171 || key === 'ArrowLeft' && pacmanPosition === 209){
    console.log('portal')
    deletePacman(pacmanPosition)
    pacmanPosition += 18
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowLeft' && map[pacmanPosition - 1].classList.contains('path') || key === 'ArrowLeft' && map[pacmanPosition - 1].classList.contains('path-retro')) {
    deletePacman(pacmanPosition)
    pacmanPosition -= 1
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowRight' && map[pacmanPosition + 1].classList.contains('path') || key === 'ArrowRight' && map[pacmanPosition + 1].classList.contains('path-retro')) {
    deletePacman(pacmanPosition)
    pacmanPosition += 1
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowDown' && map[pacmanPosition + mapWidth].classList.contains('path') || key === 'ArrowDown' && map[pacmanPosition + mapWidth].classList.contains('path-retro')) {
    deletePacman(pacmanPosition)
    pacmanPosition += mapWidth
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowUp' && map[pacmanPosition - mapWidth].classList.contains('path') || key === 'ArrowUp' && map[pacmanPosition - mapWidth].classList.contains('path-retro')) {
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
      const ghostChoice = ghostOptions[Math.floor(Math.random() * ghostOptions.length)]
      if (ghostChoice === 'right' && map[charcter.position + 1].classList.contains('path') || ghostChoice === 'right' && map[charcter.position + 1].classList.contains('path-retro')) {
        deleteGhost(charcter.position)
        charcter.position += 1
        spawnGhost(charcter.position)
      } else if (ghostChoice === 'down' && map[charcter.position + mapWidth].classList.contains('path') || ghostChoice === 'down' && map[charcter.position + mapWidth].classList.contains('path-retro')) {
        deleteGhost(charcter.position)
        charcter.position += mapWidth
        spawnGhost(charcter.position)
      } else if (ghostChoice === 'left' && map[charcter.position - 1].classList.contains('path') || ghostChoice === 'left' && map[charcter.position - 1].classList.contains('path-retro')) {
        deleteGhost(charcter.position)
        charcter.position -= 1
        spawnGhost(charcter.position)
      } else if (ghostChoice === 'up' && map[charcter.position - mapWidth].classList.contains('path') || ghostChoice === 'up' && map[charcter.position - mapWidth].classList.contains('path-retro') || ghostChoice === 'up' && map[charcter.position - mapWidth].classList.contains('door-retro') || ghostChoice === 'up' && map[charcter.position - mapWidth].classList.contains('door')) {
        deleteGhost(charcter.position)
        charcter.position -= mapWidth
        spawnGhost(charcter.position)
      }
      GhostKillsPacman()
    });
  }, 500)
}


//Pacman eats Dots 

function pacmanEats() {
  const active = document.getElementById(pacmanPosition)
  if (selectedTheme === 'minimalist') {
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
        WinnerScreen()
      }
    } else if (map[pacmanPosition].children[0].id === null) {
      console.log('no dot')
    }
  } else if (selectedTheme === 'retro') {
    if (map[pacmanPosition].children[0].id === 'dot-retro') {
      const dot = active.querySelector('.dots-retro')
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
      const bigdots = active.querySelector('.big-dot-retro')
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
    if ( map[charcter.position] === map[pacmanPosition] && ghostVulnerable === false) {
      pacmanPosition = 349
      totalPoints = points

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
      replay.innerHTML = 'return to Main Menu'
      replay.classList.add('replay-button')

      gameOver.appendChild(results)
      gameOver.appendChild(finalPoints)
      gameOver.appendChild(replay)


      const replayButton = document.querySelector('.replay-button')

      replayButton.addEventListener('click', () => {
        console.log('replay clicked')
        main.innerHTML = ''
        map = []
        dotArray = []
        createlayout()
      })
      collectScores()

    } else if (map[pacmanPosition] === map[charcter.position] && ghostVulnerable === true) {
      deleteGhost(charcter.position)
      points += 200
      charcter.position = 200
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
  replay.innerHTML = 'Return to Main Menu'
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
  const returnHomeLeaderboard = document.querySelector('.leaderboard-return')

  returnHomeLeaderboard.addEventListener('click', () => {
    location.reload()
  })
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
  <p>Welcome to Pacman. The aim of the game is for you to eat all of the food pellets located around the map once you have eaten all the pellet the game ends!</p>
  <p>However things are not as easy as they sound because at the same time you will be hunted down by 4 pesky ghosts</p>
  <p>They are..</p>
  <ul class="character-list">
    <li class="character-list-item">Blinky<img src="images/kisspng-pac-man-world-3-ghosts-red-packs-5ae218e46ff980.5320704415247669484587-removebg-preview.png" class="ghost-list" alt="blinky"></li> 
    <li class="character-list-item">Inky<img src="images/imgbin-ms-pac-man-pac-man-world-3-ghosts-pac-man-ghost-from-pacman-VaSTbeXMCuKyP0UE9kP0mYWc9-removebg-preview (1).png" class="ghost-list"></li>
    <li class="character-list-item">Pinky<img src="images/kisspng-pac-man-world-3-ghosts-clip-art-pac-man-ghost-png-transparent-image-5a7561ae2a7482.6496024615176421581739-removebg-preview.png" class="ghost-list">
    <li class="character-list-item">Clyde<img src="images/548-5487219_pac-man-png-pacman-ghost-transparent-background-clipart-removebg-preview (1).png" class="ghost-list"></li>
</ul>

  
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

