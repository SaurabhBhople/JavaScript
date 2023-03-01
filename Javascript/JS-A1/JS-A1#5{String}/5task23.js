//Task 23
let str='1234567890'
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
	else if(str[i]=='3')
	{
		result=result+'&';
	}
	else if(str[i]>='4' && str[i]<='9')
	{
		result=result+'$';
	}
	else
	{
		result=result+str[i];
	}
}
console.log(result);

