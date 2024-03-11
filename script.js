let display = document.getElementById("display");

function appendtoClick(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR!!";
  }
}

function clearLastElement() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "0";
}
