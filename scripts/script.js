let age = prompt("Ваш возраст");
let height = prompt("Введите ваш рост");
let weight = prompt("Введите ваш вес");
let imt = weight / (height * height);
let bodygroup;
if(age >= 18 && age <= 25){
  bodygroup = 1
  console.log(1);
}else  if (age => 26 && age <= 46){
  bodygroup = 2;
  console.log(2);
}else if
  (age < 18 && age > 46){
    bodygroup = 3;
    console.log(3);
  }

//Условия
if(bodygroup === 1 && imt < 17.5){
  alert("Недостаточен, опасно для здоровья");
}else if(bodygroup === 1 && imt > 17.5 && imt <= 19.5){
  alert("Слегка снижен, не опасно для здоровья");
}else if(bodygroup === 1 && imt > 19.5 && imt <= 22.9){
  alert("Нормальный");
}else if(bodygroup === 1 && imt > 23 && imt <= 27.4){
  alert("Излишний");
}else if(bodygroup === 1 && imt >= 27.5 && imt <= 29.9){
  alert("Ожирение 1 степени");
}else if(bodygroup === 1 && imt >= 30 && imt <= 34.9){
  alert("Ожирение 2 степени");
}else if(bodygroup === 1 && imt >= 35 && imt <= 39.9){
  alert("Ожирение 3 степени");
}else if(bodygroup === 1 && imt > 40 ){
  alert("Ожирение 4 степени");
}
//2 bodygroup

if(bodygroup === 2 && imt < 18){
  alert("Опасочка");
}else if(bodygroup === 2 && imt > 18 && imt <= 20){
  alert("Слегка снижен");
}else if(bodygroup === 2 && imt > 20 && imt <= 25.9){
  alert("Слегка снижен, не опасно для здоровья");
}else if(bodygroup === 2 && imt > 26 && imt <= 27.9){
  alert("Нормальный");
}else if(bodygroup === 2 && imt > 28 && imt <= 30.9){
  alert("Ожирение 1 степени");
}else if(bodygroup === 2 && imt > 31 && imt <= 35.9){
  alert("Ожирение 2 степени");
}else if(bodygroup === 2 && imt > 36 && imt <= 40.9){
  alert("Ожирение 3 степени");
}else if(bodygroup === 2 && imt > 41){
  alert("Ожирение 4 степени");
}
//group 3
if(bodygroup === 3 ){
  alert("ты не вписался в наши ряды");
}
