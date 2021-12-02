const numbers = document.querySelectorAll(".number");
const btn = document.querySelector(".generator");
const copyBtn = document.querySelector(".copy");

let hexa = 0000;

const copyOtp = (hexa) => {
  const textArea = document.createElement("textarea");
  const OTP = hexa;

  textArea.value = OTP;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("OTP copied successfully");
};
const hex = () => {
  hexa = Math.floor(Math.random() * 10000).toString();

  if (hexa.length > 3) {
    for (let index = 0; index < numbers.length; index++) {
      numbers[index].innerHTML = hexa[index];
    }
  }
};

btn.addEventListener("click", hex);
copyBtn.addEventListener("click", () => copyOtp(hexa));
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    hex();
  }
});

hex();
