// task 13
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
function countMax(str)
{
	let count=0;
	let len=str.length;
	for(let i=0; i<len; i++)
	{
		if(count < countChar(str,str[i]))
		{
			count=countChar(str,str[i]);
		}
	}
	return count;

}
console.log(countMax('abacadaeafag'))
