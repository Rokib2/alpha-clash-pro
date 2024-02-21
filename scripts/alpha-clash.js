// function play() {
//   // Hide the home screen. To hide screen add the class hidden to the home section.
//   const homeSection = document.getElementById('home-screen');
//   homeSection.classList.add('hidden');
//   // console.log(homeSection.classList)
//   // show the playground
//   const playgroundSection = document.getElementById('play-ground');
//   playgroundSection.classList.remove('hidden');
//   // console.log(playgroundSection.classList)
// }

function handleKeyboardKeyUpEvent(event){
  const playerPressed = event.key; 
  console.log('player pressed', playerPressed)
  // stop the game if pressed 'ESC'
  if (playerPressed === 'Escape') {
    gameOver();
  }
  
  // key player is expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet); 

  // check right or wrong key pressed
  if (playerPressed === expectedAlphabet) {
    console.log('you got a point!');
    
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);



    // -----------------------------------------
    // update score:
    // // 1.get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // // 2.Increase the score by 1
    const newScore = currentScore + 1;
    // // 3.show the updated score
    // currentScoreElement.innerText = newScore;
    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();

  }
  else {
    console.log('you missed. you lost a life');
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // ---------------------------------------
    // // Step-1: get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // // Step-2:reduce the life count
    // const newLife = currentLife - 1;
    // // Step-3:Display the updated life count
    // currentLifeElement.innerText = newLife;
  }
  
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
  // step-1: generate a random alphabet 
  const alphabet = getARandomAlphabet();
  // console.log('Your random Alphabet', alphabet);

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);

}

function play() {
  // hide everything show only the playground
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');

  // reset score and life
  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);


  continueGame()
}

function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');
  // update final score
  // 1.get the final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}