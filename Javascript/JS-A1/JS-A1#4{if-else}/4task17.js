//Task 17
let n= prompt('Enter the value....');
let str='';
let num;
let count=0;
let count1=0;
let sum;
for(let i=1; i<=n; i++)
{
	if(i%2==0)
	{
		str=str+'+'+i;
		count=count+i;
	}
	else 
	{ 
		str=str+'-'+i;
		count1=count1-i;
	}
	sum=count+count1;
	num=str+'=' +sum;
}
console.log(num);
