// Task 8
let array= [5,18,23,10,15,20];
let len=array.length;
for(let i=0; i<len; i++)
{
	if(i%2!=0)
	{
		array[i];
	}
	else
	{
		array[i]=array[i]+1;
	}
}
console.log(array);