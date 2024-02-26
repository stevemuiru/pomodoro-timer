let intervalId; 

function updateTimer(minutes, seconds) {
  const timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer(minutes) {
  clearInterval(intervalId); 
  let totalSeconds = minutes * 60;
  
  intervalId = setInterval(function() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    updateTimer(minutes, seconds);
    
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      timesUp();
    }
    totalSeconds--;
  }, 1000);
}

function timesUp() {
 alert("Times Up")
}

let timerMode = 'pomodoro'; 

function resetTimer() {
  clearInterval(intervalId); 
  let initialMinutes;
  switch (timerMode) {
    case 'shortBreak':
      initialMinutes = 5; 
      break;
    case 'longBreak':
      initialMinutes = 10; 
      break;
    case 'pomodoro':
    default: 
      initialMinutes = 25; 
      break;
  }
  
  startTimer(initialMinutes);
}

const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', resetTimer);

const shortBreakButton = document.getElementById("shortBreak");
shortBreakButton.addEventListener('click', function() {
  timerMode = 'shortBreak';
  resetTimer(); 
});

const longBreakButton = document.getElementById("longBreak");
longBreakButton.addEventListener('click', function() {
  timerMode = 'longBreak';
  resetTimer();
});

resetTimer();



