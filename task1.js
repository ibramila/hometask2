//- Havanın temperaturu verilir. 
//Əgər temperatur 15 - dən kiçikdirsə ekrana yazılsın "Hava soyuqdur", 
//15 - dən böyükdürsə ekrana yazılsın "Hava istidir"

let temperatur=15;
if (temperatur<15){
    console.log("weather is cold");
}
else if(temperatur>15){
    console.log("weather is hot");
}
else{
    console.log("weather is normal");
}