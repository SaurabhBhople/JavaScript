//Task 14
let n = prompt('enter the value');
let str='';
for(let i =1; i<=n ;i++){
if(i%3==0)
{
	str=str+'R'+i;
	
}
else if(i%3==2)
{
	str=str+'Q'+i;
}
else if(i%3==1)
{
	str= str +'P'+i;
}
}
console.log(str)