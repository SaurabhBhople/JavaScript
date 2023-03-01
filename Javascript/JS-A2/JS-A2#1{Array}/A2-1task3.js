// Task 3
let array = [3,4,5,12];
let sum = 0;
let count = 0;
let sum1=0;
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i]%3==0)
	{
		sum = sum + array[i];
		count ++;
	}
}
console.log('3Sum=',sum,'3Count=',count);
