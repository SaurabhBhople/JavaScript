//Task 22
let str='ab11cd22ef'
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	if(str[i]=='1')
	{
		result=result+'@';
	}
	else if(str[i]=='2')
	{
		result=result+'#';
	}
	else
	{
		result=result+str[i];
	}
}
console.log(result);

