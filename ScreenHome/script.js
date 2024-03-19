let timeRemaining = 30;

const updateCounter = () => {
  document.getElementById("count").textContent = `${timeRemaining}`;

  if (timeRemaining === 0) {
    clearInterval(intervalId);
    window.location.reload();
  } else {
    timeRemaining--;
  }
};
const intervalId = setInterval(updateCounter, 1000);

if (localStorage.getItem("userAuth") !== "true") {
  window.location.href = "../ScreenLogin/index.html";
}
