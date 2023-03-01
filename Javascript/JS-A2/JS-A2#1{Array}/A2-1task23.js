// Task 23
let array = [5,18,26,30,40];
let n=36;
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i]>n)
	{
		array.splice(i,0,n);
		break;
	}
}
console.log(array)