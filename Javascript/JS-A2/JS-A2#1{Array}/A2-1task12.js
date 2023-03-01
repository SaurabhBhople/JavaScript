// Task 12
let array = [6,6,6,6,6,6]
let len = array.length;
let result;
for(let i=0; i<len; i++)
{
	if(array[0]==array[i])
	{
		result='AllSame';
	}
	else
	{
		result="DIFFERENT";
	}
}
console.log(result);
