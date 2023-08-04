const dataButtons = Array.from(document.querySelectorAll(".dataButton"));
let currentResult = document.getElementById("currentResult");
let previousResult1 = document.getElementById("previousResult1");
let previousResult2 = document.getElementById("previousResult2");
let previousResult3 = document.getElementById("previousResult3");

const operations = ["/", "*", "-", "+", "."];

const lastDigitIsOperation = () => {
  return operations.includes(currentResult.innerText.slice(-1));
};

const buttonPressedIsOperation = (target) => {
  return operations.includes(target);
};

dataButtons.map((button) => {
  button.addEventListener("click", (b) => {
    if (currentResult.innerText.length < 20) {
      if (buttonPressedIsOperation && b.target.innerText == "=") {
        previousResult3.innerText = previousResult2.innerText;
        previousResult2.innerText = previousResult1.innerText;
        previousResult1.innerText = currentResult.innerText;
        currentResult.innerText = eval(currentResult.innerText);
      } else if (buttonPressedIsOperation) {
        if (!lastDigitIsOperation()) {
          currentResult.innerText == 0
            ? (currentResult.innerText = b.target.innerText)
            : (currentResult.innerText += b.target.innerText);
        } else {
          if (!buttonPressedIsOperation(b.target.innerText))
            currentResult.innerText += b.target.innerText;
        }
      }
    }
  });
});
