// Task 1 V Print factorial from 1 to n
function factorial(n)
{
	let result = 1;
	for(let i= 1; i<=n; i++)
	{
		result = result *i;
	}
	return result;
}
function printFact(num)
{
	for(let i=1; i<=num; i++)
	{
		let fact = factorial(i);
		console.log('factorial of ', i ,'is' ,fact);
	}
}
printFact(7);