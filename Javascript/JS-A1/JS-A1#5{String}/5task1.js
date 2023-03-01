// Task 1 A VI All word in sentence
let str=prompt('Enter the String');
console.log('String is '+str);
let startPos=0;
let sep=' ';
for(;;)
{
	let index =str.indexOf(sep,startPos)
	if(index>=0)
	{
		let word= str.substring(startPos,index);
		console.log(word);
		startPos=index+1;
	}
	else 
	{
		let word=str.substring(startPos);
		console.log(word);
		break;
	}
}
