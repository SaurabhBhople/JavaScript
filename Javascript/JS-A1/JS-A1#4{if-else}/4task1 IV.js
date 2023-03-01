//Task1 IV Check Prime or Composite
let n= prompt('Enter the value of n....');
let count = 0;
for(let i=2; i<n; i++)
{
	if(n%1==0)
	{
		count=count++;
	}
}
if(count==0)
{
	if(n==1)
	{
		console.log(n +' is Nor prime Nor composite');
	}
	else
	{
		console.log(n + ' is Prime Number ');
	}
}
else
{
	console.log(n + ' is Composite Number');
}
