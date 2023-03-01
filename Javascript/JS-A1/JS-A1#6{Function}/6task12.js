// task 12
function countChar(str, char) 
{
	let count=0;
	let len=str.length;
	for(let i=0; i<len; i++)
	{	
		if(str[i]==char)
		{
			count=count+1;
		}
	}
	return count;
}
console.log(countChar('musmeum', 'm'))