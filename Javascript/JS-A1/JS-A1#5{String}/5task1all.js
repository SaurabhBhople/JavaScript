// Ṭask 1 I count the number of z
let str=prompt('Enter the String');
console.log('String is '+str);
let len=str.length;
let count=0;
for(let i=0; i<len; i++)
{
	if(str[i]=='z')
	{
		count++;
	}
}
console.log('Count of z is ' +count);

// Ṭask 1 II Double the Each char
let str=prompt('Enter the String');
console.log('String is '+str);
let len=str.length;
let newStr='';
for(let i=0; i<len; i++)
{
	newStr=newStr + str[i]+str[i];
}
console.log('Double value is ' + newStr);

//Task 1 A III  create 3 string apha, digit, other
let str=prompt('Enter the String');
console.log('String is '+str);
let len=str.length;
let alpha='';
let digit='';
let other='';
for(let i=0; i<len; i++)
{
	if(str[i]>'a' && str[i]<='z')
	{
		alpha=alpha +str[i];
	}
	else if(str[i]>'A' && str[i]<='Z')
	{
		alpha=alpha +str[i];
	}
	else if(str[i]>'0' && str[i]<='9')
	{
		digit=digit +str[i];
	}
	else
	{
		other=other+str[i];
	}
}
console.log('Alphabet are : ' +alpha +' Digits are : '+ digit +' Others are : '+ other);

// Task 1 A IV Remove multiple #
let str=prompt('Enter the String');
console.log('String is '+str);
let len=str.length;
let out='';
for(let i=0; i<len; i++)
{
	let char = str[i];
	let preChar = str[i-1];
	if(char=='#')
	{
		if(preChar=='#')
		{
			// do nothing
		}
		else
		{
			out=out+char;
		}
	}
	else
	{
		out=out+char
	}
}
console.log(out);

// Task 1 A V Number of times second string appears in first
let str1=prompt('Enter the first String');
console.log('String is '+str1);
let str2=prompt('Enter the second String');
console.log('String is '+str2); 
let count=0;
let startPos=0;
for(;;)
{
	let index =str1.indexOf(str2,startPos)
	if(index>=0)
	{
		count++;
		startPos=index+1;
	}
	else 
	{
		break;
	}
}
console.log(str2 + ' print ' +count);

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
