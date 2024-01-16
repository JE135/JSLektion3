var  text = "'ingen aning om vad jag håller på med här'";
var length = text.length;
console.log(length)


if (length == 0){
console.log(text + " har 0 tecken")
}

else if (length>=1 && length<=3){
    console.log(text + " har mellan 1 & 3 tecken")
}


else if (length>=10 && length<=20){
    console.log(text + " har mellan 10 och 20 tecken")
}

else if (length>=21){
    console.log(text + " har över 20 tecken")
}