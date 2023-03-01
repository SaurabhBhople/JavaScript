// Task 18
let array= ["c101","mB24x","a4b6n7","zzz2z"]
array1=[...array];
let sortarr = array1.sort(compNo);
function compNo(arr1, arr2)
{
	let result1=''
	for(let i=0; i<arr1.length; i++)
	{
		let ch1=arr1[i];
		if(ch1>='0' && ch1<='9')
		{
			result1=result1+ch1;
		}
	}
	let result2=''
	for(let j=0; j<arr2.length; j++)
	{
		let ch2=arr2[j];
		if(ch2>='0' && ch2<='9')
		{
			result2=result2+ch2;
		}
	}
	if(arr1>arr2)
		return -1;
	else if(arr1<arr2)
		return 1;
	else 
		return 0;
}
console.log(sortarr)






