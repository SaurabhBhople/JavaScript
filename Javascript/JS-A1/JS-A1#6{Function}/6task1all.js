// Task 1 I Largest of 3 numbers
function isLargest(num1, num2, num3) 
{
	let Largest;
	if(num1>=num2 && num1>=num3)
	{
		Largest=num1 + ' is Largest';
	}
	else if(num2>=num1 && num2>=num3)
	{
		Largest=num2 + ' is Largest';
	} 
	else
	{
		Largest=num3 + ' is Largest';
	}
	return Largest;
}
console.log(isLargest(11,15,12));


// Task 1 II replace char1 by char2 in str
function replaceChar(str, char1, char2) 
{
	let outStr='';
	let len=str.length;
	for(let i=0; i<len; i++)
	{
		if(str[i]==char1)
		{
			outStr = outStr + char2;
		}
		else
		{
			outStr = outStr + str[i];
		}
	}
	return outStr;
}
console.log(replaceChar('Hello', 'l', 'w'));


// Task 1 III is a Square 
function isSquare(num)
{
	for(let i=1; i<=num; i++)
	{
		let square = i * i;
		if(square==num)
		{
			return num+ ' is a Square';
		}
	}
	return num+ ' is not a Square';
}
console.log(isSquare(16));

// Task 1 IV Compute factorial
function factorial(n)
{
	let result = 1;
	for(let i= 1; i<=n; i++)
	{
		result = result *i;
	}
	return result;
}
let n=4;
console.log('factorial of ', n ,'is' ,factorial(n));

// Task 1 V Print factorial from 1 to n
function factorial(n)
{
	let result = 1;
	for(let i= 1; i<=n; i++)
	{
		result = result *i;
	}
	return result;
}
function printFact(num)
{
	for(let i=1; i<=num; i++)
	{
		let fact = factorial(i);
		console.log('factorial of ', i ,'is' ,fact);
	}
}
printFact(7);