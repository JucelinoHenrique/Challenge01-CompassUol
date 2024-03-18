let tempoRestante = 30;

const intervalId = setInterval(updateCounter, 1000);

const updateCounter = () => {
  document.getElementById("count").textContent = `${tempoRestante}`;

  if (tempoRestante === 0) {
    clearInterval(intervalId);

    localStorage.clear();

    window.location.href = "../ScreenLogin/index.html";
  } else {
    tempoRestante--;
  }
};
