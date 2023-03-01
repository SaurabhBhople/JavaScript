//Task 7
let str=prompt('Enter the String');
console.log('String is '+str);
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	if(str[i]=='z')
	{
		result=result+'x';
	}
	else
	{
		result=result+str[i];
	}
}
console.log(result);

