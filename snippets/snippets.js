let sec = 20;
  let timerInterval = setInterval(quizTimer, 1000);
  
  function quizTimer() {
    document.getElementById("countdown__timer__snippets").innerHTML ="You have" + " " + sec + " " + "seconds to answer";
    sec--;
    if (sec == -1 ) {
      clearInterval(timerInterval);
    }
  }