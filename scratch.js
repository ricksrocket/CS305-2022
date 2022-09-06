const prompt=require("prompt-sync")();
let num=prompt("Enter any number?: ",0);
num=+num;
if (num===0){
  console.log(0);
  }
  else if(num>0){
    console.log(1);
  }
  else if(num<0) {
    console.log(-1);
  }
