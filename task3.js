//- Verilmiş üç ədəddən ən kiçiyini tapan alqoritm qurun.

let number1 = 5;
let number2 = 6;
let number3 = 7;

if (number1<=number2 && number1<=number3){
    console.log(number1);
}
else if(number2<=number1 && number2<=number3){
    console.log(number2);   
}
else{
    console.log(number3);
}