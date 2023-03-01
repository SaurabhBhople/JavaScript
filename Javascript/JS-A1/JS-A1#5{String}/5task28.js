// Task 28
let str1='ABCDABCDABCD';
let count=0;
let startPos=0;
for(;;)
{
	let index =str1.indexOf('ABCD',startPos)
	if(index>=0)
	{
		count++;
		startPos=index+1;
	}
	else 
	{
		break;
	}
}
console.log('Count of ABCD = ' +count);