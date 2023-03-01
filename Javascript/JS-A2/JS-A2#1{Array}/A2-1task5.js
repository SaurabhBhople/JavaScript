// Task 5
let num = [22, 32, 4, 8, 44];
let numG21 = '';
let count=0;
let len = num.length;
for(let i=0; i<len; i++)
{
	if(num[i]>21)
	{
		count++
		numG21=numG21 + ' ' +num[i];
	}
}
console.log('Count =',count);
console.log('Values =',numG21);