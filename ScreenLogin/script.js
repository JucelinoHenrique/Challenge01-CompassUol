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
