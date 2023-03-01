// Task 7
function checkChar(str, char1, char2) 
{
	let len=str.length;
	let count1=0;
	let count2=0;
	for(let i=0; i<len; i++)
	{	
		if(str[i]==char1)
		{
			count1=count1+1;
		}
		else if(str[i]==char2)
		{
			count2=count2+1;
		}
	}
	if(count1>count2)
		{
			return '1';
		}
	else if(count1==count2)
	{
		return '0';
	}
	else
	{
		return '-1'
	}
}
console.log(checkChar('moozoom', 'm', 'o'));
