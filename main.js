const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calculateButton = document.getElementById("calculateButton");
const resultSpan = document.getElementById("result");

const add = (a, b) => a + b;

calculateButton.addEventListener("click", function() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = add(num1, num2);
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Invalid input";
    }
});