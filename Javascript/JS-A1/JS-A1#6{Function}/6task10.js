// //Task10
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
console.log(isPrime(12));