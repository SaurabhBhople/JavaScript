// task 20
let n= prompt('Enter the four digit no');
let lastDigit;
let sum=0;
let rem=0;
let count;
for(i=1; i<=4; i++)
{
	rem= n%10;
	n=parseInt(n/10);
	sum=sum+rem;
	console.log(n)
	
}

console.log(sum);

