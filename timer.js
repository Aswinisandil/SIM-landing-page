function startTimer(durationInSeconds) {
    let timerDisplay = document.getElementById("timer");
    let timer = durationInSeconds;
  
    function updateTimer() {
      let minutes = parseInt((timer % 3600) / 60, 10);
      let seconds = parseInt(timer % 60, 10);
  
     
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      timerDisplay.textContent = minutes + ":" + seconds;
  
      if (timer > 0) {
        timer--;
        setTimeout(updateTimer, 1000);
      } else {
        timer = durationInSeconds; 
        setTimeout(updateTimer, 1000);
      }
    }
  
    updateTimer();
  }
  
  const durationInSeconds = 15 * 60;
  startTimer(durationInSeconds);