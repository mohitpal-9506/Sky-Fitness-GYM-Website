function calculateBMI(){

let weight =
document.getElementById("weight").value;

let height =
document.getElementById("height").value / 100;

if(weight==="" || height===""){
document.getElementById("result").innerHTML =
"Please enter weight and height";
return;
}

let bmi = weight / (height * height);

document.getElementById("result").innerHTML =
"Your BMI : " + bmi.toFixed(2);

}