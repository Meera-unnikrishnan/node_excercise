const fs=require("readline-sync")
const rl=fs.question("enter a string ");
var l =rl.length;
var temp=[];
for(let i=0,j = l-1;i<l;i++,j--){

 
    temp.push(rl[j]);
  
}
console.log(temp);
for(var i = 0;i<l;i++)
{
    if(temp[i] != rl[i]){
        console.log(rl+" is not palindrome");
        break;
    }
    else
   {
    console.log(rl+" is a palindrome")
   }
}
