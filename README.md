## ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Pacman Game

### Project overview 

This project involved creating a Pacman style game that displayed in the browser and was playable on desktop devices.  


### Technologies used 
* HTML
* CSS
* Javascript 


### Planning and whiteboarding 


### Challenge one - Ghost Movements

One of the major challenges in creating this project was getting the ghost movement working. Initially I created a simple function to get one ghost movement before later scaling it up. In the initial build the ghost was details were contained in seperate lets and constants however when adding more ghosts it was nessary to change so there was not unnessary repition of code. To achieve this I placed all of the needed details and variables in an array of objects which could be easily accessed in future functions. the variable was assigned let so that values such as position could be updated as needed. 

```js
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
```

The next step was to create the ghosts and get create a function to delete them when the move between squares. to do this I made the ghosts empty divs as assigned CSS classes to which gave them there appearance. The divs were appended as children to the square which the ghostposition index matched. When scaling this function up to take into account multiple ghosts i wrapped the function in a for each loop to iterate over the ghost object in the array and carry out the function for each. An if statement was added to toggle the class of the ghosts when the were in the vulnerable state.


```js
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
  
  function deleteGhost() {
  ghosts.forEach(charcter => {
    const deleteGhostSquare = document.getElementById(charcter.position)
    const ghostremoval = document.getElementById(charcter.ghost)
    deleteGhostSquare.removeChild(ghostremoval)
  })
}
```


To get the ghosts to move on their own I created a setInterval function which would occur every 0.5s. Like the spawn function this was also wrapped in an foreach loop to apply to all ghosts. The ghosts in this inital build move randomly. To get this working i created an array of potential directions and set the function up to return a random direction from the array. I then used a chain of if statements to determine if it was permissable for the ghost to move in that direction by checking the class of the square. if it is permissable then using the function above the ghost was removed the index position of the ghost was changed and the ghost respawn. At the end of the movement to ghostKillsPacman function was triggered to check if pacman and the ghost were at the same index.

```js 
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
```

### Menu and UI 

I created a main menu which the game would load to containing two other pages a how to play page with instructions and a leaderboard page which used local storage to display the highscores of the person who had been playing the game. Each page was created dynamically with pure javascript to give the game a once page app feel. For the design i decided to keep it simple and clean with a white loading page, large readable font and accent colours which matched that of the ghosts.

In addition to the main menu I created a game settings page under the playgame menu item whern player can customise the game theme and grid size of the game using radio buttons I created a preview div to show the player what the game would look like.  

### Future development

The main development I would like to implement is smart ghost movements. currently the ghosts move around randomly which however i would like to rewrite the code to get the ghost to more accuratly mimic the ghost behaviour from the real game making the game both more challenging for the player.

I would also like to work on making the code itself more concise and reable by going through and finding new more efficient ways of writing the code to reduce repition and make it easier to understand change and maintain. 

The final development I would like to implement is the creation of a mobile playable version including onscreen buttons.
