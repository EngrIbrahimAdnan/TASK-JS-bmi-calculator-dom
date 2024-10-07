function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let BMI = (weight/(height/100)^2);
  alert(`BMI is ${BMI}`);
  if (BMI < 18.5){
    alert("You're Underweight");
  }
  else if (BMI >= 18.5 && BMI <= 24.9){
    alert("Your Weight is Healthy");
  }
  else if (BMI >= 25 && BMI <= 29.9){
    alert("You're Overweight");
  }
  if (BMI >= 30){
    alert("You're Obese");
  }

  //BMI Based on age
  if (age>=19 && age<=24){
    if (BMI>=19 && BMI<=24){
      alert("Based on your Age, You're Healthy");
    }
    else{
      alert("Based on your Age, You're not Healthy");
    }
  }
  else if (age>=25 && age<=34){
    if (BMI>=20 && BMI<=25){
      alert("Based on your Age, You're Healthy");
    }
    else{
      alert("Based on your Age, You're not Healthy");
    }
  }
  else if (age>=35 && age<=44){
    if (BMI>=21 && BMI<=26){
      alert("Based on your Age, You're Healthy");
    }
    else{
      alert("Based on your Age, You're not Healthy");
    }
  }
  else if (age>=45 && age<=54){
    if (BMI>=22 && BMI<=27){
      alert("Based on your Age, You're Healthy");
    }
    else{
      alert("Based on your Age, You're not Healthy");
    }
  }
  else if (age>=55 && age<=64){
    if (BMI>=23 && BMI<=28){
      alert("Based on your Age, You're Healthy");
    }
    else{
      alert("Based on your Age, You're not Healthy");
    }
  }
  else if (age>65){
    if (BMI>=24 && BMI<=29){
      alert("Based on your Age, You're Healthy");
    }
    else{
      alert("Based on your Age, You're not Healthy");
    }
  }
}


