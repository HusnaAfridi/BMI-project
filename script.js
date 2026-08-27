const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");
const bmiValue = document.getElementById("bmi-value");
const bmiStatus = document.getElementById("bmi-status");

calculateBtn.addEventListener("click", () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validate input
  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid positive numbers for height and weight.");
    return;
  }

  // Convert height from cm to meters and calculate BMI
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Determine category
  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal weight";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  // Display results
  bmiValue.textContent = bmi;
  bmiStatus.textContent = status;
  resultDiv.classList.remove("hidden");
});