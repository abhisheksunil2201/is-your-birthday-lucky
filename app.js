const outputPass = `<div class="label">Hurray!!You are a lucky person!</div><img class="outputImg" height="200px" src="./yes.png" alt="image">`;
const outputFail = `<div class="label">Oops!!Your birthday is not a lucky number!</div><img class="outputImg" height="200px" src="./no.png" alt="image">`;

const alertCloseIcon = document.querySelector("#crossIcon");
const alertBoxDiv = document.querySelector("#alertBox");
const form = document.querySelector("#form");

const date = document.querySelector("#datePicker");
const luckyNumber = document.querySelector("#luckyNumber");

const outputDiv = document.querySelector(".output");

alertCloseIcon.addEventListener("click", (e) => {
  alertBoxDiv.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateString = date.value.split("-").join("");
  let sum = 0;
  for (letter of dateString) {
    sum = sum + Number(letter);
  }
  const luckyNumberJS = Number(luckyNumber.value);
  if (sum % luckyNumberJS === 0) {
    outputDiv.innerHTML = outputPass;
  } else {
    outputDiv.innerHTML = outputFail;
  }
});
