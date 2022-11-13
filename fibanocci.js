const fs = require("readline-sync");
var num=fs.question("enter a number:");
var num1=0;
var num2=1;
process.stdout.write(+num1+" "+num2+" ");
for(let i=1;i<num;i++){
    let s=num1+num2;
    process.stdout.write(+s+" ");
    num1=num2;
    num2=s;
}