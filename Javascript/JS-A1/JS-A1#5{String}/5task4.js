//Task 4
let str=prompt('Enter the String');
console.log('String is '+str);
let len=str.length;
let count=0;
let x=0;
let y=0;
for(let i=0; i<len; i++)
{
	if(str[i]=='x')
	{
		x++;
		
	}
	else if(str[i]=='y')
	{
		y++;
		
	}
}
console.log('Count of x is ' +x);
console.log('Count of y is ' +y);
