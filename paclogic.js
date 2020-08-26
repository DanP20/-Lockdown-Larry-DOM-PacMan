document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score');
  const gameOver = document.getElementById("gameOver");
  const powerUp = document.getElementById("powerUp");
  const move = document.getElementById("move");
  const gameMusic = document.getElementById("gameMusic");
  const width = 36;
  let score = 0;
  const grid = document.querySelector('.grid');
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
    1,0,1,1,1,1,1,0,1,0,8,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,
    1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,11,1,0,1,
    1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,
    1,0,1,0,0,0,0,0,11,0,0,1,0,0,1,0,0,0,0,0,0,1,3,0,1,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,
    1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,2,2,2,2,2,2,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,
    9,4,4,4,4,1,0,4,0,0,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,1,11,4,4,4,6,
    5,4,4,4,0,1,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,1,0,4,4,4,10,
    1,1,1,1,0,0,0,1,1,1,0,0,2,2,2,2,2,2,4,4,4,4,2,2,0,0,1,1,1,0,0,0,1,1,1,1,
    1,0,0,0,0,0,0,0,3,1,0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,1,0,0,0,0,0,0,0,0,1,
    1,4,1,1,1,1,11,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,
    1,4,1,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,
    1,0,0,8,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,7,0,1,0,0,0,0,0,0,1,8,0,0,0,0,1,
    1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,11,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
 ];
  // 0 - pac-dots       
  // 1 - wall
  // 2 - ghost-lair     
  // 3 - toiletpaper (powerUp)
  // 4 - empty
  // 5 - teleporterLeftBottom  
  // 6 -teleporterRight
  // 7 - hand sanitizer (powerUp)
  // 8 - mask (powerUp)
  // 9 - teleporterLeftTop 
  // 10 - teleportRightBottom
  // 11 - Covid
  //12 - Vaccine


  //BUILD BOARD

  const squares = []
 

  function createBoard() {

   
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet-paper')
      } else if (layout[i] === 5) {
        squares[i].classList.add('teleporterLeftBottom')
      } else if (layout[i] === 6) {
        squares[i].classList.add('teleportRightTop')
      } else if (layout[i] === 7) {
      squares[i].classList.add('power-pellet-hand')
      } else if (layout[i] === 8) {
      squares[i].classList.add('power-pellet-mask')
      } else if (layout[i] === 9) {
      squares[i].classList.add('teleporterLeftTop')
      } else if (layout[i] === 10) {
      squares[i].classList.add('teleportRightBottom')
      } else if (layout[i] === 11) {
      squares[i].classList.add('power-pellet-covid')
     } else if (layout[i] === 12) {
      squares[i].classList.add('power-pellet-vaccine')
     }
    }
    
  }

  
  createBoard()

// PACMAN

let pacmanCurrentIndex = 522  //522  395 rightbot  360 botleft  359righttop  314



squares[pacmanCurrentIndex].classList.add('pac-man')

function getCoordinates(index) {
return [index % width, Math.floor(index / width)]
  }
console.log(getCoordinates(pacmanCurrentIndex))



// MOVEMENT

function movePacman(e) {

  const gameTheme = true;


squares[pacmanCurrentIndex].classList.remove('pac-man')


switch(e.keyCode) {
  
  case 37:
    if(pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains('wall')
    && !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair'))
    pacmanCurrentIndex -=1

    if((pacmanCurrentIndex - 1) === 324) {pacmanCurrentIndex = 359}
    if((pacmanCurrentIndex - 1) === 360) {pacmanCurrentIndex = 395}
    break
  case 38:
    if(pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex -width].classList.contains('wall')
    && !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair'))
    pacmanCurrentIndex -= width
    break
  case 39:
    if(pacmanCurrentIndex % width < width -1 && !squares[pacmanCurrentIndex +1].classList.contains('wall')
    && !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair'))
    pacmanCurrentIndex +=1

    if((pacmanCurrentIndex +1)  === 359) {pacmanCurrentIndex = 324}
    if((pacmanCurrentIndex +1)  === 395) {pacmanCurrentIndex = 360}
    break
  case 40:
    if(pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex +width].classList.contains('wall')
    && !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair'))
    pacmanCurrentIndex += width
    break

}




squares[pacmanCurrentIndex].classList.add('pac-man')



powerPelletPaper()
powerPelletHand()
powerPelletMask()
powerPelletCovid()
pacDotEaten()
checkForGameOver()
checkForWin()
if (gameTheme) {
  gameMusic.pause();
  gameMusic.currentPlayTime = 0;
  gameMusic.play();
 gameMusic = false;
  }

}
document.addEventListener('keydown', movePacman)


//POWERUPS AND DEBUFFS

function pacDotEaten(){
  const pacmanMove = true;

  if(squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    score++
    scoreDisplay.innerHTML=score;
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
    if (pacmanMove) {
      move.pause();
      move.currentPlayTime= 0;
      move.play();
      pacmanMove = false;
    }
  }
  
  
}



function powerPelletPaper() { 
  const powerUpEaten = true;
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet-paper')) {
    score +=50
    scoreDisplay.innerHTML=score;
    ghosts.forEach(ghost => ghost.isScared = true)
    setTimeout(unScareGhosts, 10000);
    squares[pacmanCurrentIndex].classList.remove('power-pellet-paper') 
    if (powerUpEaten) {
      powerUp.pause();
      powerUp.currentTime = 0;
      powerUp.play();
      powerUpEaten = false;
    }
  }
}

function powerPelletHand() {
  const powerUpEaten = true;
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet-hand')) {
    score += 50
    scoreDisplay.innerHTML=score;
    ghosts.forEach(ghost => ghost.isScared = true)
    setTimeout(unScareGhosts, 10000);
    squares[pacmanCurrentIndex].classList.remove('power-pellet-hand')
    if (powerUpEaten) {
      powerUp.pause();
      powerUp.currentTime = 0;
      powerUp.play();
      powerUpEaten = false;
    }
  }
}

function powerPelletMask() {
  const powerUpEaten = true;
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet-mask')) {
    score += 50
    scoreDisplay.innerHTML=score;
    ghosts.forEach(ghost => ghost.isScared = true)
    setTimeout(unScareGhosts, 10000);
    squares[pacmanCurrentIndex].classList.remove('power-pellet-mask')
    if (powerUpEaten) {
      powerUp.pause();
      powerUp.currentTime = 0;
      powerUp.play();
      powerUpEaten = false;
    }
  }
}

function powerPelletCovid() {
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet-covid')) {
    score -=100
    scoreDisplay.innerHTML=score;
    // ghosts.forEach(ghost => ghost.isFast = true)
    // setTimeout(isNotFast, 10000);
    squares[pacmanCurrentIndex].classList.remove('power-pellet-covid')
  }
}

function unScareGhosts() {
  ghosts.forEach(ghost => ghost.isScared = false)
}

// function isNotFast() {
//   ghosts.forEach(ghost => ghost.isFast = false)
// }

// function isFast() {
//   ghosts.forEach(ghost.speed += 100)
// }

// GHOSTS

class Ghost {
  constructor(className, startIndex, speed) {
  this.className= className;
  this.startIndex= startIndex;
  this.speed= speed;
  this.currentIndex = startIndex;
  this.timerId = NaN;
  this.isScared = false;
  // this.isFast = false;
  }
}

ghosts = [
  new Ghost('blinky', 411, 330),
  new Ghost('pinky', 416, 370),
  new Ghost('inky', 380, 300),
  new Ghost('clyde', 375, 250),
  new Ghost('bob', 450, 370 ) // 391
];

ghosts.forEach(ghost => {
   squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add('ghost')
});

ghosts.forEach(ghost => moveGhost(ghost))

  function moveGhost(ghost) {

    const ghostsSiren = true;
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
   

  
 ghost.timerId = setInterval(function() {

  if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghosts')
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      if(ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghosts')
      }
      if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghosts')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }

      //  if (ghostsSiren) {
      //  ghostsMove.pause();
      //   ghostsMove.play();
      //    ghostsSiren = false;
      //  }

checkForGameOver()

 }, ghost.speed)
  }

  // WIN/LOSE LOGIC
  function checkForGameOver()
  { const pacmanDead = true;
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghosts')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keydown', movePacman)
      setTimeout(function(){ alert("Game Over"); }, 500)
      if (pacmanDead) {
        gameOver.pause();
        gameOver.currentTime = 0;
        gameOver.play();
        pacmanDead = false;
      }
    }
  }

  function checkForWin() {
    if (score > 900) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keydown', movePacman)
      setTimeout(function(){ alert("WINNER WINNER!"); }, 500)
    }
  }
 
 
});
