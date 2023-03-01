// task 1 I Count the Even No
let array = [2,4,2,5,5,6,8];
let count = 0;
let len = array.length;
for( let i=0; i<len; i++)
{
	if(array[i]%2==0)
	{
		count ++
	}
}
console.log('No of even No is ',count);

// task 1 II Sum of No divisible by 5
let array = [1,20,5,9,6,10];
let sum = 0;
let len = array.length;
for( let i=0; i<len; i++)
{
	if(array[i]%5==0)
	{
		sum = sum + array[i];
	}
}
console.log('Sum of No divisible by 5 is',sum);

// task 1 III Change each string to uppercase
let array = ['hello', 'Hi', 'GooD', 'jAck'];
let len = array.length;
console.log('Before the array is',array);
for( let i=0; i<len; i++)
{
	let str = array[i];
	array[i] = str.toUpperCase();
}
console.log('After the array is',array);

// task 1 IV Is there a prime number in array
function hasPrime(array)
{
	let len = array.length;
	for(let i=0; i<len; i++)
	{
		let check =isprime(array[i]);
		if(check)
		{
			// console.log('found',array[i]);
			return true;
		}
	}
	return false;
}
function isprime(array)
{
	for (let i=2; i<array-1; i++)
	{
		if(array%i==0)
		{
			return false;
		}
	}
	return true;
}
let array= [15,15,55]
console.log(hasPrime(array));

// Task 1 V Count strings with b or B
function hasB(array)
{
	let len=array.length;
	for(let i=0; i<len; i++)
	{
		if(array[i] == 'b' || array[i] == 'B')
		{
			return true;
		}
	}
	return false;
}
let array = ['hbi', 'ball', 'aBc']
let len = array.length;
let count = 0;
for(let i=0; i<len; i++)
{
	if(hasB(array[i]))
	{
		count++;
	}
}
console.log(count);

// Task 1 VI Create array of 1 to n
let n = 6;
let array = [];
for(let i=1; i<=n; i++)
{
	array.push(i);
}
console.log(array);

// Task 1 VII Create new array of numbers not divisible by 3
let array = [2,3,5,4,8,6,9];
let NumNo3 = [];
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i]%3 !=0)
	{
		NumNo3.push(array[i]);
	}
}
console.log(NumNo3);

//  Task 1 VIII Remove only 1 Hello from array
let array = ['hii', 'good', 'hello', 'x']
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i] == 'hello')
	{
		array.splice(i,1);
		break;
	}
}
console.log(array);

//  Task 1 VIII Remove all Hello from array
let array = ['hello', 'good', 'x','hello']
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i] == 'hello')
	{
		array.splice(i,1);
	}
}
console.log(array);

//  Task 1 IX Insert Angular, React and Node after Javascript
let array = ['C++', 'Python', 'Javascript', 'C', 'HTML']
console.log(array);
let len = array.length;
for(let i=0; i<len; i++)
{
	if(array[i] == 'Javascript')
	{
		array.splice(i+1, 0, 'Angular', 'React', 'Node');
	}
}
console.log(array)