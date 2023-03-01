// task 8
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
console.log(checkBracket('5+((a+b*c)+d+e)-'));