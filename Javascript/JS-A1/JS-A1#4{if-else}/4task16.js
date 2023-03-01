//Task 16
let n= prompt('Enter the value....');
let str='';
let num;
let count=0;
for(let i=1; i<=n; i++)
{
	if(i%2==0)
	{
		str=str+'+'+i;
	}
	else 
	{ 
		str=str+'-'+i;
	}
	num=str;
}
console.log(num);
