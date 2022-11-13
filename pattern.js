var n=5;
let s=" ";
for(let i=1;i<n;i++)
{
for(j=1;j<=n-i;j++){
    process.stdout.write(" ");
}
 for (let k = 0; k < 2*i-1; k++) 
 {
    process.stdout.write('*');   
 }
process.stdout.write("\n");
}
console.log(s);