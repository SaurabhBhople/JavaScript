// Task 22
let array = [100,10,20,50,64,200];
let max=0;
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i]>max)
	{
		max=array[i]
	}
}
for(let i=0; i<len; i++)
{
	if(array[i]==max)
	{
		array.splice(i,1);
		break;
	}
}
console.log(array)