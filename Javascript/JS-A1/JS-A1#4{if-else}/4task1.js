//Task1 I
let n=5;
let rem=n%2;
if(rem==1)
{
	n=n+1;
}
console.log();
//Task1 II
let n= prompt('Enter the value of n...');
if(n%6==0)
{
	console.log(n + 'Divisiblet by 6');
}
else if(n%3==0)
{
	console.log(n + 'Divisiblet by 3');
}
else if(n%2==0)
{
	console.log(n + 'Divisiblet by 2');
}
else 
{
	console.log(n + ' Not Divisible by 2, 3 & 6');
}
//task1 III Pattern JKJKJK
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
