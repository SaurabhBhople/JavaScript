// Task 14
let array = [{name:"Jack", maths:55, english:60, science:62},
			{name:"Anita", maths:62, english:65, science:56},
			{name:"Thomas", maths:68, english:58, science:54},
			{name:"Steve", maths:51, english:56, science:68},
			{name:"Julia", maths:47, english:77, science:72},
			{name:"Mary", maths:72, english:55, science:60}]
let arrName1 =[ ...array];
arrName1.sort(arrayNameAsc);

function arrayNameAsc(name1, name2)
{
	let n1 = name1.name;
	let n2 = name2.name
	if(n1>n2)
		return 1;
	else if(n1< n2)
		return -1;
	else
		return 0;
}
console.log('Ascending by name=',arrName1)

let arrName2 =[ ...array];
arrName2.sort(arrayNameDesc);

function arrayNameDesc(name1, name2)
{
	let n1 = name1.name;
	let n2 = name2.name
	if(n1>n2)
		return -1;
	else if(n1< n2)
		return 1;
	else
		return 0;
}
console.log('Descending by name=',arrName2)


let arrName3 =[ ...array];
arrName3.sort(arrayTotalAsc);

function arrayTotalAsc(total1, total2)
{
	let sum1 = total1.maths + total1.english + total1.science;
	let sum2 = total2.maths + total2.english + total2.science;
	if(sum1 > sum2)
		return 1;
	else if(sum1 < sum2)
		return -1;
	else
		return 0;
}
console.log('Ascending by Total=',arrName3)

let arrName4 =[ ...array];
arrName4.sort(arrayMathMarkAsc);

function arrayMathMarkAsc(math1, math2)
{
	let M1 = math1.maths;
	let M2 = math2.maths;
	if(M1 > M2)
		return -1;
	else if(M1 < M2)
		return 1;
	else
		return 0;
}
console.log('Descending by Math Marks=',arrName4)