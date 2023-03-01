// Task 25
let str='++a++b++c';
let len=str.length;
let out='';
for(let i=0; i<len; i++)
{
	let char = str[i];
	let preChar = str[i-1];
	if(char=='+')
	{
		if(preChar=='+')
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