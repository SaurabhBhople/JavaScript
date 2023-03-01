// Task 4
let array = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
let sum1 = 0;
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i]%2==0)
	{
		sum = sum + array[i];
	}
	else
	{
		sum1 =sum1 + array[i];
	}
}
console.log('Even Sum=',sum);
console.log('Odd Sum=',sum1);