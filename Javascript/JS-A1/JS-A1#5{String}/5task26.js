// Task 26
let str='AAXXXBBYYYCXXDYY';
let len=str.length;
let out='';
for(let i=0; i<len; i++)
{
	let char = str[i];
	let preChar = str[i-1];
	if(char=='X')
	{
		if(preChar=='X')
		{
			// do nothing
		}
		else
		{
			out=out+char;
		}
	}
	else if(char=='Y')
	{
		if(preChar=='Y')
		{
			// do nothing
		}
		else
		{
			out=out+char;
		}
	}
	else
	{
		out=out+char
	}
}
console.log(out);