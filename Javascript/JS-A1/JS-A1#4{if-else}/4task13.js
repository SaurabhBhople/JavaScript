// Task 13
let n= prompt('Enter the value of n:');
let str= '';
for(let i=1; i<=n; i++)
{

	if(i%==1)
	{	
		if(i>=3) 
		{
		str=str + 'C';
		}
	
	str=str +'A';
	}
	else
	{
		str= str + 'B';
	}
	
}
console.log(str);