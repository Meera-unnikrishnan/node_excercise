var fs = require("readline-sync");
var ar = [1,1,2,2,6,7];
var num = fs.question("enter the number of items:");
for(i=0;i<num;i++)
{
    var number = fs.question("enter the "+num+ " numbers");
    ar.push(number);
}
var l = ar.length;
for(var i=0;i<l;i++){
    for(j=i+1;j<l;j++){
    if(ar[i]>=ar[j]){
        var temp=ar[i];
        ar[i]=ar[j];
        ar[j]=temp;
    }
   }
}
console.log(ar);