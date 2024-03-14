document.addEventListener("DOMContentLoaded", function () {
  var iconUsername = document.querySelector("#iconUsername");
  var iconPassword = document.querySelector("#iconPassword");
  var inputUsername = document.querySelector("#inputUsername");
  var inputPassword = document.querySelector("#inputPassword");

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
