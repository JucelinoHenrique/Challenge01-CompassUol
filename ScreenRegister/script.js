const saveDataUser = () => {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let birthDate = document.getElementById("birthDate").value.trim();
  let country = document.getElementById("country").value.trim();
  let city = document.getElementById("city").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = "";

  if (
    !firstName ||
    !lastName ||
    !birthDate ||
    !country ||
    !city ||
    !email ||
    !password ||
    !confirmPassword
  ) {
    errorMessage.textContent = "All fields must be filled in.";
    return;
  }

  if (!validateEmail(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "The passwords are not the same.";
    return;
  }

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
  window.location.href = "../ScreenLogin/index.html";
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

document
  .getElementById("buttonRegister")
  .addEventListener("click", function () {
    saveDataUser();
  });
