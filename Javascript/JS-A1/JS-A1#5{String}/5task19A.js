let str= '123c321';
let result=0;
let len= str.length;
if(len%2==1)
{
	result=len/2;
	len=1;
}
else
{
	result=len/2-1;
	len=2;
	console.log(result);
}
console.log(str.substring(result,result+len))
console.log(str.indexOf(str.substring(result,result+len)));
