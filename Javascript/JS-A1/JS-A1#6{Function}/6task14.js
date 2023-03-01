// Task 14
function sum(num)
{
	let lastDigit;
	let sum=0;
	let rem=0;
	for(i=1; i<=4; i++)
	{
		rem= num%10;
		num=num-rem;
		num=num/10;
		sum=sum+rem;
	}
	return sum;
}
console.log(sum(9999));