// Task 29
let str= 'AB ABCD ABC ABCD AB'
let len=str.length;
let result='';
for(let i=0; i<len; i++)
{
	if(str[i]=='A' & str[i+1]=='B' & str[i+2]=='C' & str[i+3]=='D')
	{

		result=result+'XYZ';
		i=i+3;
	}
	else
	{
		result = result + str[i];
	}
}
console.log(result);