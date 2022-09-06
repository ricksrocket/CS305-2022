"use strict"
const prompt = require("prompt-sync")();
const age = prompt("Enter age in years: ");
if(age<=0){
    console.log("Please enter a valid age");
}
else if( age>0 && age<=14 ){
    console.log("You can't drive yet");
}
else if(age>=15 && age<=18){
    console.log("You can drive under supervision");
}
else if( age>18){
    console.log("You can drive")
}