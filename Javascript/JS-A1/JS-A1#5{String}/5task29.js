let str='ab ABCDABCDab';
let startPos='';
let result='';
let other='';
let len = str.length;
for(;;) 
{
	let index =str.indexOf('ABCD',startPos)
	
	if(index>=0)
	{
		result =result + 'XYZ';
		startPos=index+1;
		
	}
	else 
	{
		result =result +str ;
		break;
	}

}
console.log(result + other);
