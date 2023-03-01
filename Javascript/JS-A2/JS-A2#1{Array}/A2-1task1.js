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