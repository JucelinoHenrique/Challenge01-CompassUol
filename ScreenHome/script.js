let timeRemaining = 30;

const updateCounter = () => {
  document.getElementById("count").textContent = `${timeRemaining}`;

  if (timeRemaining === 0) {
    clearInterval(intervalId);
    localStorage.clear();
    window.location.href = "../ScreenLogin/index.html";
  } else {
    timeRemaining--;
  }
};
const intervalId = setInterval(updateCounter, 1000);
