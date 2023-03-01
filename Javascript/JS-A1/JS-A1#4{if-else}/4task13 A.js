//Task 13
let n = prompt('enter the value');
let str='';
for(let i =1; i<=n ;i++){
if(i%3==0)
{
	str=str+'C';
	
}
else if(i%3==2)
{
	str=str+'B';
}
else if(i%3==1)
{
	str= str +'A';
}
}
console.log(str)