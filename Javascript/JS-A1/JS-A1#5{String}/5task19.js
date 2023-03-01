//Task 19
let str= 'AB1C123';
let result='';
let len=str.length;
if(len%2==1)
	{
		result=len/2;
		len=1;
		console.log('Middle Char = ' + str.substring(result,result+len));
		console.log('index = ' + str.indexOf(str.substring(result,result+len)))
	}