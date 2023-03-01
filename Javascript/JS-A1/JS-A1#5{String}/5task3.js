//Task 3 
let str=prompt('Enter the String');
console.log('String is '+str);
let len=str.length;
let count=0;
for(let i=0; i<len; i++)
{
	if(str[i]=='m')
	{
		count++;
	}
}
console.log('Count of m is ' +count);