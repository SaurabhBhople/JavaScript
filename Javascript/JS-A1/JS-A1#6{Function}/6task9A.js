// Task 9
function checkGoodExp(str)
{
	let count = 0;
	let len = str.length;
	for(let i=0; i<len; i++)
	{
		if(str[i]=='(')
		{
			count = count+1;
		}
		else if(str[i]==')')
		{
			count = count-1;
		}
		if(count ==(-1))
		{
			return false
		}

	}
	if(count == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
}
console.log(checkGoodExp('(a+b+(c+d*e)-(d+e*f))+3'))
