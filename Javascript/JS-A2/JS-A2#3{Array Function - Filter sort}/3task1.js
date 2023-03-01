// Task 1 b III
let studetdata = [
	{ name : 'jack', mark1 : 33, mark2 : 25},
	{ name : 'bob', mark1 : 40, mark2 : 35},
	{ name : 'mary', mark1 : 35, mark2 : 28},
	{ name : 'tom', mark1 : 38, mark2 : 49},
	{ name : 'hardy', mark1 : 36, mark2 : 45},
	{ name : 'anna', mark1 : 32, mark2 : 29},
	{ name : 'rocky', mark1 : 43, mark2 : 45}
]
let mincut = 70;
studetdata1 = [...studetdata];
console.log(studetdata);
function getStdata(studetdata1, mincut)
{
	let array1 = studetdata1.filter(function(st){
		return (st.mark1 + st.mark2)>mincut;
	});
	array1.sort(compTotalDesc);
	return array1;
}
let farr = getStdata(studetdata1,mincut);
console.log(farr);
function compTotalDesc(str1, str2)
{
	let total1 = str1.mark1 + str1.mark2;
	let total2 = str2.mark1 + str2.mark2;
	if(total1>total2)
		return -1;
	else if(total1<total2)
		return 1;
	else 
		return 0;
}
