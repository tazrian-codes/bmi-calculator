// receiving the elements on variables
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calcBtn = document.getElementById('button');
const score = document.getElementById('score');
const result = document.querySelector('.result');

// managing form submit
const form = document.getElementById('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
})

// managing button click
const btnClick = () => {
  // used parseFloat so that the input value will functionally be number
  let givenHeight = parseFloat(height.value);
  let givenWeight = parseFloat(weight.value);

  // height in meters
  givenHeight = givenHeight / 100;

  // squaring the height value
  let sqrHeight = givenHeight * givenHeight;
  
  // bmi formula. used toFixed to limit the numbers in 2 digits after point
  let bmi = givenWeight / sqrHeight;
  score.textContent = bmi.toFixed(2);
  result.style.display = 'block';

  if (bmi >= 18.6 && bmi <= 24.9){
    score.style.backgroundColor = '#75da66';
  }
  else if (bmi < 18.6){
    score.style.backgroundColor = '#ffd667';
  }
  else if (bmi > 24.9){
    score.style.backgroundColor = '#ff7351';
  }
  
}

calcBtn.addEventListener('click', btnClick);