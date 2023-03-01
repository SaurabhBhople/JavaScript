// Task 12
let n= prompt('Enter the value of n..');
console.log('Value of n is = ' +n);
let str= '';
for(let i=1; i<=n; i++)
{
	if(i%2==1)
	{
		str=str + 'X';
	}
	else
	{
		str= str + 'Y';
	}
	console.log(str);
}