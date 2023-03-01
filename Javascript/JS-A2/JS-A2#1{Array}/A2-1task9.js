// Task 9
let array = [10,8,6,4,2,0];
let len = array.length;
	let first = array[0];
	let last = array[len-1];
	if(first>last)
	{
		console.log('first',array[0]);
	}
	else if(first==last)
	{
		console.log('Equal',array[0]);
	}
	else
	{
		console.log('last',array[len-1]);
	}
