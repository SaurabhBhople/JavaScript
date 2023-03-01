//Task1 III Pattern JKJKJK
let n= prompt('Enter the value of n....');
let str='';
for(let i=1; i<=n; i++)
{
	if(i%2==1)
	{
		str=str + 'J';
	}
	else
	{
		str= str + 'K';
	}
}
console.log(str);