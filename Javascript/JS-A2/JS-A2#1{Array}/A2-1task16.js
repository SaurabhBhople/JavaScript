// Task 16
function hasAB(str)
{
	let lenstr =str.length;
	for(let i=0; i<lenstr; i++)
	{
		if(str[i]=='a' && str[i+1]=='b')
		{
			return true;
		}
	}
	return false;
}
let array =['nicebaby'];
let len =array.length;
let result='';
for(let i=0; i<len; i++)
{
	if(hasAB(array[i]))
	{
		result='AB Found';
	}
	else
	{
		result='AB not Found';
	}
}
console.log(result);
