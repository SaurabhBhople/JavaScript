// Task 18
let array =[5,18,26,30,40,6,9];
let result=[];
let len =array.length;
for(let i=0; i<len; i++)
{
	if(array[i]%2==0)
	{
		result.unshift(array[i]);
	}
}
console.log(result);

