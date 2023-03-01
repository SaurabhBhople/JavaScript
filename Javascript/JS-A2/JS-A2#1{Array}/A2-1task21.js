// Task 21
let array =['Jack','Bob','Ed','Steve','Bob'];
let string = 'Bob';
let len =array.length;
for(let i=0; i<len; i++)
{
	if(array[i]==string)
	{
		array.splice(i,1);
	}
}
console.log(array);
