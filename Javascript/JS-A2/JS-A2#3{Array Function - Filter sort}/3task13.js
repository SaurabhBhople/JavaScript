// Task 13
let array= ["JavaScript","Hello","React","Java","Python","C","Node"];

arrayhasA=[...array];
arrayhasA.sort(compcountA);

function compcountA(arr1, arr2)
{
	let count1=0;
	let count2=0
	for(let i=0; i<arr1.length; i++)
	{
		if(arr1[i]=='a')
		{
			count1=count1+1;
		}
	}
	for(let j=0; j<arr2.length; j++)
	{
		if(arr2[j]=='a')
		{
			count2=count2+1;
		}
	}
	if(count1>count2)
		return 1;
	else if(count1<count2)
		return -1;
	else
		return 0;
	
}
console.log(arrayhasA)

