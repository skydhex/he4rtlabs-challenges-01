const fields = document.querySelectorAll(".inputs");
const resultParagraph = document.querySelector("#result");

function isEmpty() {
  for (const field of fields) {
    if (field.value == "" || isNumeric(field.value) == false) {
      field.focus();
      resultParagraph.innerHTML = "Por favor, insira valores válidos!";
      return false;
    } else {
      resultParagraph.innerHTML = "";
    }
  }
  return true;
}
function isNumeric(str) {
  const rege = /^\d+(\.\d+)?$/;
  return rege.test(str);
}

function calculation() {
  const dailyTime = fields[0].value;
  const workDays = fields[1].value;
  const vacation = fields[2].value;
  const totalValue = fields[3].value;
  let result =
    totalValue / (workDays * 4 * dailyTime) + vacation * workDays * dailyTime;
  result = parseFloat(result);

  resultParagraph.innerHTML =
    "Total: " +
    result.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

document.querySelector(".submit").addEventListener("click", (event) => {
  if (isEmpty()) {
    calculation();
  }

  event.preventDefault();
});
