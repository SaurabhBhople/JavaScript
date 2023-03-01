// Task 21
let str= 'A1B2C3D4';
let result1='';1
let result2='';
let len=str.length;
for(let i=0; i<len; i++)
{
	if(i%2==1)
	{
		result1=result1+str[i];
	}
	else
	{
		result2=result2+str[i];
	}
}
console.log('Odd : ' + result1);
console.log('Even : ' + result2);