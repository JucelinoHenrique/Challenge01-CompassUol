const saveDataUser = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let birthDate = document.getElementById("birthDate").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    console.log("as senhas não estão iguais");
  } else if (password === "") {
    console.log("o campo senha não pode ser vazio");
  } else {
    let dataUser = {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      country: country,
      city: city,
      email: email,
      password: password,
    };

    localStorage.setItem("dataUser", JSON.stringify(dataUser));
  }
};

document
  .getElementById("buttonRegister")
  .addEventListener("click", function () {
    saveDataUser();
    window.location.href = "../ScreenLogin/index.html";
  });
