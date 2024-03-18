const currentDate = new Date();

const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();
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
