//Task 12
let str= 'qw2B**5g';
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	if(str[i]>'A' && str[i]<='Z')
	{
		result=result + str[i] +str[i];
	}
	else if(str[i]>'a' && str[i]<='z')
	{
		result=result + str[i] + str[i];
	}
	else if(str[i]>'0' && str[i]<='9')
	{
		result=result + str[i] + str[i] + str[i];
	}
	else
	{
		
	}
}
console.log(result);