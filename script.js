const passwordBox = document.getElementById("password");
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");
const display = document.querySelector(".display");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value === "") {
    alert("There are no password in here.!");
  } else {
    const popup = document.createElement("div");
    popup.className = "popup-box";
    popup.innerHTML = "copied";

    display.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 1000);

    passwordBox.select();
    document.execCommand("copy");
  }
}

generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", copyPassword);
