// Task 5
let n= prompt('Enter the value of n..');
console.log('The value of n is ' + n);
for(let i=2; i<=5; i++)
{
	if(n%i==0)
	{
		console.log(i + ' :yes');
	}
	else
	{
		console.log(i + ' :no');
	}
}