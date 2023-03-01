// Task 6
function isReverse(str)
{
	let reverse='';
	let len= str.length;
	for(let i=len-1; i>=0; i--)
	{
		reverse=reverse+str[i];
	}
	return reverse;
}
console.log(isReverse('Perfect'));