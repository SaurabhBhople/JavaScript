// //Task11
function isPrime(num) 
{
	
	if(num==1)
	{
		return false;
	}
	else if(num>1)
	{
		for(let i=2; i<num; i++)
		{
			if(num%i == 0)
			{
				return false;
			}
		}
	}
	return true;
}

function countPrime(num)
{
	let count=0;
	for(let i=2; i<=num; i++)
	{
		count=count+isPrime(i);
	}
	return count;
}
console.log(countPrime(150));