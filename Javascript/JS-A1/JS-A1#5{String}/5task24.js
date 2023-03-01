//Task 24
let str='I GOT A BIRTHDAY CARD'
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	if(str[i]=='A')
	{
		result=result+'X';
	}
	else if(str[i]=='B')
	{
		result=result+'Y';
	}
	else if(str[i]=='C')
	{
		
	}
	else if(str[i]=='D')
	{
		
	}
	else
	{
		result=result+str[i];
	}
}
console.log(result);

