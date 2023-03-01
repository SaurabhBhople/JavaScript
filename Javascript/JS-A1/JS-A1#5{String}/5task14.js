//Task 14
let str= 'q#w2&()@B**5g';
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	if(str[i]>'A' && str[i]<='Z')
	{
		
	}
	else if(str[i]>'a' && str[i]<='z')
	{
		
	}
	else if(str[i]>'0' && str[i]<='9')
	{
		
	}
	else
	{
		result=result+str[i];
	}
}
console.log(result);