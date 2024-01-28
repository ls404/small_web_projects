const btnEl = document.getElementById("calculate");

const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tipPercentage");
const totalSpan = document.getElementById("result");

function calculateTotal() {
  const billvalue = billInput.value;
  const tipvalue = tipInput.value;
  const totalValue = billvalue * (1 + tipvalue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
