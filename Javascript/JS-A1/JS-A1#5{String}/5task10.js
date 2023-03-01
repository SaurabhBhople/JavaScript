// Task 10
let str='qw23BN**45g';
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	let ch=str[i];
	if(ch>='0' && ch<='9')
	{
		result=result+ch;
	}
}
console.log(result);