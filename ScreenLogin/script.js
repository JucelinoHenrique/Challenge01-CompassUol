document.addEventListener("DOMContentLoaded", function () {
  let iconUsername = document.querySelector("#iconUsername");
  let iconPassword = document.querySelector("#iconPassword");
  let inputUsername = document.querySelector("#inputUsername");
  let inputPassword = document.querySelector("#inputPassword");

  inputUsername.addEventListener("focus", function () {
    iconUsername.style.transition = "all 2s ease-in-out";
    iconUsername.style.left = "calc(-50px)";
  });

  inputPassword.addEventListener("click", function () {
    iconPassword.style.transition = "all 2s ease-in-out";
    iconPassword.style.left = "calc(-50px)";
  });

  inputPassword.addEventListener("blur", function () {
    if (inputPassword.value.trim() === "") {
      iconPassword.style.transition = "all 2s ease-in-out";
      iconPassword.style.left = "15px";
    }
  });

  inputUsername.addEventListener("blur", function () {
    if (inputUsername.value.trim() === "") {
      iconUsername.style.transition = "all 2s ease-in-out";
      iconUsername.style.left = "15px";
    }
  });
});

const verifyUser = () => {
  const userName = document.getElementById("inputUsername");
  const password = document.getElementById("inputPassword");
  let errorMessage = document.querySelector(".errorMessage");
  const dataUserString = localStorage.getItem("dataUser");

  errorMessage.textContent = "";

  if (dataUserString) {
    const dataUser = JSON.parse(dataUserString);
    if (
      userName.value === dataUser.email &&
      password.value === dataUser.password
    ) {
      console.log("sucesso");
      window.location.href = "../ScreenHome/home.html";
    } else {
      userName.classList.add("inputInvalid");
      password.classList.add("inputInvalid");
      errorMessage.textContent =
        "Wow, invalid username or password. Please, try again!";
    }
  } else {
    userName.classList.add("inputInvalid");
    password.classList.add("inputInvalid");
    errorMessage.textContent = "Unregistered user, please register!";
  }
};

document.getElementById("buttonLogin").addEventListener("click", verifyUser);
