let askedQuestions = []; // Array to keep track of asked questions

function getRandomQuestionIndex() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questionBank.length);
  } while (askedQuestions.includes(randomIndex)); // Keep generating a new index if it's already been asked
  return randomIndex;
}

function loadRandomQuestion() {
  if (askedQuestions.length === questionBank.length) {
    // All questions have been asked
    // Handle this case (e.g., end the quiz or start over)
    return;
  }
  const randomIndex = getRandomQuestionIndex();
  loadQuestion(randomIndex);
  askedQuestions.push(randomIndex); // Add the index to the list of asked questions
}


function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  