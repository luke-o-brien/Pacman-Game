const grid = document.querySelector('.grid-container');

//Creation of map layout 
const layout = [
  'w' , 'w' , 'w' , 'w', 'w', 'w', 'w', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w', 
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w',
  'w' , 'p' , 'p' , 'p', 'p', 'p', 'p', 'w',
  'w' , 'w' , 'w' , 'w', 'w', 'w', 'w', 'w']

const map = []

//Initial position of characters
let pacmanPosition = 27;
let ghostposition = 9;
let points = 0;

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
    }
  }
  spawnPacman()
  spawnGhost()
}
createMap()

//Basic Pacman Movement Function 

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
  pacmanEats()
})



function ghostMoves() {
  setInterval(() => {
    const ghostOptions = ['up', 'down', 'left', 'right']
    const ghostChoice =  ghostOptions[Math.floor(Math.random() * ghostOptions.length)]
    if (ghostChoice === 'right' && map[ghostposition + 1].classList.contains('path')) {
      map[ghostposition].classList.remove('ghost')
      ghostposition += 1 
      map[ghostposition].classList.add('ghost')
    } else if ( ghostChoice === 'down' && map[ghostposition + 8].classList.contains('path')) {
      map[ghostposition].classList.remove('ghost')
      ghostposition += 8
      map[ghostposition].classList.add('ghost')
    } else if ( ghostChoice === 'left' && map[ghostposition - 1].classList.contains('path')) {
      map[ghostposition].classList.remove('ghost')
      ghostposition -= 1
      map[ghostposition].classList.add('ghost')
    } else if ( ghostChoice === 'up' && map[ghostposition - 8].classList.contains('path')) {
      map[ghostposition].classList.remove('ghost')
      ghostposition -= 8
      map[ghostposition].classList.add('ghost')
    }
  }, 1000)
}

ghostMoves()

function pacmanEats() {
  if (map[pacmanPosition].children[0].id === 'dot') {
    const identity = pacmanPosition 
    console.log(identity)
    const active = document.getElementById(identity)
    console.log(active)
    console.log('yum ' + pacmanPosition)
    
}
}
console.log(map[pacmanPosition])
