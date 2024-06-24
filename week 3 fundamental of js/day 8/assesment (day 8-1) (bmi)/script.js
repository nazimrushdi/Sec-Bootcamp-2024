//  this is an example of pseudocode
//  pseudocode is a way of planning out your code before you write it

// BMI calculator web app
// BMI is calculated by dividing a person's weight in kilograms by the square of his/her height in meters
// BMI = kg/m^2
// BMI = kg/m/m
// BMI = kg/(m*m)

// category	BMI (kg/m2)
// 1. Very severely underweight	< 15
// 2. Severely underweight	< 16
// 3. Underweight	< 18.5
// 4. Normal (healthy weight)	18.5 - 25
// 5. Overweight	25 - 30
// 6. Obese Class I (Moderately obese)	30 - 35
// 7. Obese Class II (Severely obese)	35 - 40
// 8. Obese Class III (Very severely obese)	> 40

// how our app will work:
// input user for weight in kilograms
// input user for height in meters
// calculate BMI based on user input (weight and height) when user click the button
// display BMI at h2 with id="bmiValue" by execute the calculation when user click the button
// display BMI category at h2 with id="bmiCategory" by using if else statement

const bmiform = document.querySelector("#bmiForm");
const result = document.querySelector("#result");
const kg = document.querySelector("#weight");
const cm = document.querySelector("#height");
const button = document.querySelector("button");
const bmiCategory = document.querySelector("#bmiCategory");
const bmiValue = document.querySelector("#bmiValue");
const bmiLearn = document.querySelector("bmiLearn");

console.log(bmiform);
console.dir(bmiValue);
console.dir(result);
console.dir(kg);

kg.addEventListener("input", function (e) {
  console.log(e.target.value);
});
cm.addEventListener("input", function (e) {
  console.log(e.target.value);
});

button.addEventListener("click", function () {
  console.log("Button clicked");

  // hasil tambah
  const weight = kg.value;
  const height = cm.value / 100;
  const calculatedBmi = weight / Math.pow(height, 2);
  console.log(calculatedBmi);

  const result = Math.round(calculatedBmi * 10) / 10;
  console.log(result);
  bmiValue.innerText = result;
  console.log(bmiValue.innerText);

  if (result < 15) {
    bmiCategory.innerText = "Very severely underweight";
    bmiLearn.innerText = "Bodyweight Beginner Routine";
  } else if (result < 16) {
    bmiCategory.innerText = "Severely underweight";
    bmiLearn.innerText = "Dumbbell Full-Body Routine";
  } else if (result < 18.5) {
    bmiCategory.innerText = "Underweight";
    bmiLearn.innerText = "Beginner Weight Training Split";
  } else if (result < 25) {
    bmiCategory.innerText = "Normal (healthy weight)";
    bmiLearn.innerText = "Intermediate Full-Body Routine";
  } else if (result < 30) {
    bmiCategory.innerText = "Overweight";
    bmiLearn.innerText = "Push-Pull-Legs Split";
  } else if (result < 35) {
    bmiCategory.innerText = "Obese Class I (Moderately obese)";
    bmiLearn.innerText = "Upper-Lower Split";
  } else if (result < 40) {
    bmiCategory.innerText = "Obese Class II (Severely obese)";
    bmiLearn.innerText = "Hypertrophy-Focused Routine ";
  } else if (result > 40) {
    bmiCategory.innerText = "Obese Class III (Very severely obese)";
    bmiLearn.innerText = "Advanced Bodybuilding Split";
  }
});

// nan
//kenapa kena pakai cm x boleh ke pakai meter terus
