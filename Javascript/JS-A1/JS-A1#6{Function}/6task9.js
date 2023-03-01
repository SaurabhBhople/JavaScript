// task 9
function checkBracket(str) 
{
	let count1 = 0;
	let count2 =0;
	let len=str.length;
	for(let i=0; i<len; i++)
	{
		if(str[i]=='(')
		{
			count1= count1+1;
		}
		else if(str[i]==')')
		{
			count2= count2+1;
		}
	}
	if(count1==count2)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function isgoodexp(str)
{
	let len=str.length;
	for(let i=0; i<len; i++)
	{
		if(str[i]=='(' && str[i]==')')
		{
			return checkBracket(str);
		}
		else
		{
			return checkBracket(str);
		}

	}

}
console.log(isgoodexp('(a+b))+(c'));