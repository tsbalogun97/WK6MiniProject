// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

// A game round would look like this:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again ... etc
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed



// Ship Properties
// hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target



// ROUND 1 FIGHT!!!!

// PlayerOne attacks playerTwo (AlienA) with a firepower of 5. playerTwo (AlienA)is dead with -1 hull. 
// playerTwo (AlienB) takes over and attack playerOne with a firepower of 3 reducing playerOne hull level to 15. and (also gain 3 added to its hull level to 7.)
// playerOne attack with a firpower of 5 reducing playerTwo (alienB) hull level to 2
// playerTwo (alienB) attacks again with a firepower of 3 reducing playerOne hull level to 12 and (gained 3 to its 
// hull level to 5)
// playerOne attack with a firepower of 5 reducing playerTwo(alienB) is dead.

// playerTwo(alienC)takes over and attack playerOne




// --------- or -----------
    
// playerOne retreat and wait for playerTwo fire first.
// playerTwo (AlienA) attack with a firepower of 3 causing damage to playerOne and reduces its hull level to 15 
// playerTwo (AlienA)'s hull level increases by 3 making it to be 7
// playerOne retreat yet again leavingo playerTwo (AlienA) to attack yet again with another firepower of 3 reducing playerOne hull level to 12 and thus level its hull to 10.



















// Your spaceship, the USS Assembly should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7

const playerOne = {
  ship: "Uss Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  attack() {
    currentAlien.hull -= playerOne.firepower
    console.log(`${playerOne.ship}  is attacking aggressively ${currentAlien.ship}`);
    console.log(`${currentAlien.ship} health is now ${currentAlien.hull} `);
  }
}

// call the function to check battle status


// call the function to start the battle

const startBattle = () => {
  battleStatus()
  if(counter > 4) {
    gameOver()
  }else{
    playerOne.attack() 
    if(currentAlien.hull > 0 ) {
      console.log(`${currentAlien.ship}, survived ${playerOne.ship}'s attack`);
      currentAlien.attack()
    }else{
      console.log(`${currentAlien.ship}, ship explodes boom!!!`)
      switchAlien()
    }

  }

}
// game over function
const gameOver = () => {
  alert('GAMEOVER')
  location.reload() 
// to reload the entire browser to restart the game

}


// swicth to the next alein

const switchAlien = ()=> {
  counter++
  if(counter > 4) {
    gameOver()
  }else{
    
    currentAlien = alienShips[counter]
    console.log(`%c a new alien is approaching at a fast pace ${currentAlien.ship}`, 'color:red; font-size: 15px;');
    battleStatus()
  }
  
}







// const obj = {
//   foo() {
//     return 'bar';
//   }
// };

// console.log(obj.foo());
// // Expected output: "bar"


// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8


// functions that gives random number globally
const getRandomArbitrary = (min, max) => {
  // Math.random() * (max - min) + min;
  return Math.floor(Math.random() * (max - min) + min);
}

// const playerTwo = {
//   ship: "alien",
//   // hull: 4,
//   // firepower: 3,
//   // accuracy: 0,
//   hull: getRandomArbitrary(3, 6),
//   firepower: getRandomArbitrary(2, 4),
//   accuracy: getRandomArbitrary(.6, .8),
//   attack() {
//     playerOne.hull -= playerTwo.firepower
//     console.log(playerOne);
//   }
// }

// const playerThree = {
//   ship: "alien",
//   // hull: 4,
//   // firepower: 3,
//   // accuracy: 0,
//   hull: getRandomArbitrary(3, 6),
//   firepower: getRandomArbitrary(2, 4),
//   accuracy: getRandomArbitrary(.6, .8),
//   attack() {
//     playerOne.hull -= this.firepower
//     console.log(playerOne);
//   }
// }

class Alien{
  constructor(ship) {
    this.ship= ship, 
    this.hull = getRandomArbitrary(3, 6),
    this.firepower = getRandomArbitrary(2, 4),
    this.accuracy = getRandomArbitrary(.6, .8)
  }
  attack() {
    playerOne.hull -= this.firepower
    console.log(`${currentAlien.ship}) is now attacking ${playerOne.ship}`)
    console.log(`${playerOne.ship} is badly damaged, their hp is now ${playerOne.hull} `);
  }
}

let playerTwo = new Alien('alienA') 
let playerThree = new Alien('alienB') 
let playerFour = new Alien('alienC') 
let playerFive = new Alien('alienD') 
let playerSix = new Alien('alienE') 
playerTwo.hull = 12
let alienShips = [playerTwo, playerThree, playerFour, playerFive, playerSix]

// a variable that grabs current alien

let counter = 0;

let currentAlien = alienShips[counter] 

console.log(currentAlien);

// create a function that checks the status is still ongoing.
const battleStatus = () =>{
  if(counter > 4) {
    console.log(`%c GAME OVER! ${playerOne.ship} wins`,'font-family: monospace; color: blue; font-size: 15px;');
    gameOver()
  }else{
    console.log(`%c BUMMER! the fight rages on`, 'background-color: black; font-size: 20px' );
  }
}








