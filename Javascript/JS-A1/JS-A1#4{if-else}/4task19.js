// Task 19
let n= prompt('Enter the value of n..');
console.log('Value of n is = ' +n);
let divide;
let notDivide;
let str;
let str2;
for(let i=0; i<n; i++)
{
	if(n%i==0)
	{
		divide=divide+ i +'#';
	}
	else
	{
		notDivide=notDivide+ i+'#';
	}
	str='divide: '+divide;
	str2='notDivide: '+notDivide;
	
}
console.log(str);	
console.log(str2)