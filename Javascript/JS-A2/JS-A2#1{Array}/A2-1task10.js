//Task 10
let array1 = [1,2,3];
let array2 = [10,20,30];
let sum1 = 0;
let sum2 = 0;
let len1 = array1.length;
let len2 = array2.length;
for( let i=0; i<len1; i++)
{
	{
		sum1 = sum1 + array1[i];
	}
}
for( let i=0; i<len2; i++)
{
	{
		sum2 = sum2 + array2[i];
	}
}
if(sum1>sum2)
{
	console.log('Big1');
}
else if(sum1==sum2)
{
	console.log('Equal');
}
else
{
	console.log('Big2')
}
