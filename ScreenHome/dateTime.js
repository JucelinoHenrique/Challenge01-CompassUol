const currentDate = new Date();

const hour = String(currentDate.getHours()).padStart(2, "0");
const minutes = String(currentDate.getMinutes()).padStart(2, "0");
const dateFormat = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const dateFormated = currentDate.toLocaleDateString("pt-BR", dateFormat);
const timeFormated = `${hour}:${minutes}`;

document.getElementById("time").textContent = timeFormated;
document.getElementById("date").textContent = dateFormated;
