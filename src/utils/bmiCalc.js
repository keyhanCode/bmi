function bmiCalc(weight, height, callback) {
  const heightMeter = height / 100;
  const bmi = weight / (heightMeter * heightMeter);
  const bmiRounded = bmi.toFixed(1); //******

  if (bmiRounded <= 18.5) {
    callback(bmiRounded, "کمبود وزن دارید ...");
  } else if (18.5 < bmiRounded && bmiRounded <= 24.9)
    callback(bmiRounded, "وزن شما طبیعی است ...");
  else if (25 <= bmiRounded && bmiRounded <= 29.9)
    callback(bmiRounded, "شما اضافه وزن دارید");
  else if (bmiRounded >= 30) {
    callback(bmiRounded, "شما اضافه وزن بیش از حد دارید");
  }
  
}
module.exports = bmiCalc;
