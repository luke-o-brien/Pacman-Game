const grid = document.querySelector('.grid-container');

//Creation of map layout 
const layout = [
  'w' , 'w' , 'w' , 'w', 'w', 'w', 'w', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w', 
  'w' , 'w' , 'w' , 'w', 'w', 'w', 'w', 'p']

const map = []
console.log(map)

//Initial position of characters
let pacmanPosition = 14;
let ghostposition = 11;

//Pacman Spawn and Delete Functions 
function spawnPacman() {
  map[pacmanPosition].classList.add('pacman')
}

function deletePacman() {
  map[pacmanPosition].classList.remove('pacman')
}

//Ghost Spawn and Delete Functions
function spawnGhost() {
  map[ghostposition].classList.add('ghost')
}

function deleteGhost() {
  map[ghostposition].classList.remove('ghost')
}

// Map Creation Function 

function createMap() {
  for (let i = 0; i < layout.length ; i++) {
    const square = document.createElement("div");
    if (layout[i] === 'w') {
      square.classList = 'wall'
      square.innerHTML = i
      square.id = 'wall'
      grid.appendChild(square)
      map.push(square)
    } else if (layout[i] === 'p') {
      square.classList = 'path'
      square.innerHTML = i
      square.id = 'path'
      grid.appendChild(square)
      map.push(square)
    }
  }
  spawnPacman()
  spawnGhost()
}
createMap()

//Basic Pacman Movement Function 

document.addEventListener('keydown', (e) => {
  
  const key = e.code
  if (key === 'ArrowLeft' && map[pacmanPosition - 1].id === 'path') {
    deletePacman(pacmanPosition)
    pacmanPosition -= 1
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowRight' && map[pacmanPosition + 1].id === 'path') {
    deletePacman(pacmanPosition)
    pacmanPosition += 1
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowDown' && map[pacmanPosition + 8].id === 'path') {
    deletePacman(pacmanPosition)
    pacmanPosition += 8
    spawnPacman(pacmanPosition)
  } else if (key === 'ArrowUp' && map[pacmanPosition - 8].id === 'path') {
    deletePacman(pacmanPosition)
    pacmanPosition -= 8
    spawnPacman(pacmanPosition)
  }
})


function ghostMoves() {
  setInterval(() => {
    map[ghostposition].classList.remove('ghost')
    ghostposition = Math.floor(Math.random() * map.length) 
    map[ghostposition].classList.add('ghost')
  }, 1000)
}

ghostMoves()