// Task 17
let array = ["bear","bell","cab","hello"];

let array1=array.sort(compcount)

function compcount(arr1, arr2)
{
	let count1=arr1.lenght;
	let count2=arr2.lenght
	for(let i=0; i<arr1.length; i++)
	{
		if(arr1[i]=='a' && arr1[i]=='b' && arr1[i]=='c')
		{
			count1=count1+1;
		}
	}
	for(let j=0; j<arr2.length; j++)
	{
		if(arr1[j]=='a' && arr1[j]=='b' && arr1[j]=='c')
		{
			count2=count2+1;
		}
	}
	let result;
	if(count1>count2)
		result= 1;
	else if(count1<count2)
		result= -1;
	else
		result = 0;
	return result;
	if(count1==0 && count2==0)
		result=arr1.length>arr2.length?1:-1;
	
}
console.log(array1)
