// Task 13
let array =[10,12,14];
let len =array.length;
let count=0;
for(let i=0; i<len; i++)
{
	if(array[i]%2==0 || array[i]%3==0 || array[i]%5==0 || array[i]%7==0)
	{
		count=count+1;
	}
}
console.log('Count =',count);