let a = + prompt("Введите первое число");
let b = + prompt("Введите второе число");
let c = + prompt("Введите третье число");

if(a < b && b < c ) {
    alert("Среднее число  " + b);
}else if(c < b && b < a){
    alert("Среднее число " + b);

}else if(b < c && c < a){
    alert("Среднее число " + c);

}else if(a < c && c < b){
    alert("Среднее число " + c);

}else if(b < a && a < c){
   alert("Среднее число " + a);

}else if(c < a && a < b){
    alert("Среднее число " + a);

}


let age = +prompt ("введите возраст")

if(age <= 18 ){
    alert("Вы еше молоды вам нужно учится")
}else if (age <= 50 && age > 18){
    alert("Вам нужно работать")
}else if(age <= 59 && age > 50){
    alert("Вам скоро в пенсию")

}else if(age <= 100 && age > 59){
    alert("Вы уже пенсионер")
}else {
    alert("Что то пошло не так")
}


let time = +prompt ("Укажите время")

if(time <= 6){
    alert(time + " часа ночи")
}else if(time <= 10 && time > 6){
    alert(time + " часов утра")

}else if(time <= 11 && time > 10){
    alert(time + " часов дня")

}else if(time <= 12 && time > 11) {
    alert("сейчас полдень")
}
else if(time <= 17 && time > 10){
    alert((time - 12) + " часа дня")}
else if(time <= 23 && time > 17){
    alert((time - 12) + " часов вечера")}
else if(time <= 24 && time > 23){
    alert(" Сейчас полночь")}
    else{
        alert("что то  пошло не так")
    }
    