//Task 11
let str= 'qw23BN**45g';
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	if(str[i]>'A' && str[i]<='Z')
	{
		result=result+'A';
	}
	else if(str[i]>'a' && str[i]<='z')
	{
		result=result + 'a';
	}
	else if(str[i]>'0' && str[i]<='9')
	{
		result=result + '0';
	}
	else
	{
		result=result + str[i];
	}
}
console.log(result);