// Task 3
function replaceChar(str, char1) 
{
	let outStr='';
	let len=str.length;
	for(let i=0; i<len; i++)
	{
		if(str[i]==char1)
		{
			
		}
		else
		{
			outStr = outStr + str[i];
		}
	}
	return outStr;
}
console.log(replaceChar('moozmozoom', 'm'));