let array1= [1,2,3,4,5];
let array2= [101,102];
let array=[];
let len1 = array1.length;
let len2 = array2.length;
let len=len1+len2;
for(let i=0; i<len; i++)
{
	if(i<array1.length)
	{
		array.push(array1[i]);
	}
	if(i<array2.length)
	{
		array.push(array2[i])
	}
}
console.log(array)