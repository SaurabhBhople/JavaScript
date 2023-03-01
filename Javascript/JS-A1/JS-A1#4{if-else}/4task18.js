// task 18
let n= prompt('enter the value');
let str='';
let num;
for(let i=n; i>0; i--)
{
	if(i%3==0)
	{
		str=str+'*';
	}
	else
	{
		str=str+i;
	}
	num=str;
}
console.log(num);
