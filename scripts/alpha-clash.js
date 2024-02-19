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

function continueGame() {
  // step-1: generate a random alphabet 
  const alphabet = getARandomAlphabet();
  console.log('Your random Alphabet', alphabet);

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);

}

function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  continueGame()
}