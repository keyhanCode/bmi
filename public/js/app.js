const bmiForm = document.querySelector(".form");
const weightInput = document.querySelector("#weight-input");
const heightInput = document.querySelector("#height-input");
const bmiPresent = document.querySelector(".bmiPresent");
const loading = document.querySelector(".loading");
const healthPresent = document.querySelector(".healthPresent");

bmiForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loading.textContent = "در حال محاسبه";
  const weight = weightInput.value;
  const height = heightInput.value;
  
  fetch(`/bmi?weight=${weight}&height=${height}`).then((res) => {
    res.json().then((data) => {
      healthPresent.textContent = data.message;
      bmiPresent.textContent = `BMI = ${data.bmi}`;
    });
  });
  loading.textContent = "روی باکس‌ها هاور کنید ✓";
  setTimeout(function () {
    loading.textContent = "محاسبه";
  }, 2000);
});
