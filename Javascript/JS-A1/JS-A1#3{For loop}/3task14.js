//task 14
let n= prompt("Enter the value of n=");
var s1 ='';
var s2 = '';
for(let i=1; i<=n;i++)
{
	s1 =s1+ '@';
	s2= (s2+i) +s1;
}
console.log(s2);
