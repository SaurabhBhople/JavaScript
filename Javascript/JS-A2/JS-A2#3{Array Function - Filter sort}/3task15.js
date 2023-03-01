//  Task 15
let array = [
			{name:"Jack",country:"USA",age:35},
			{name:"Amit",country:"India",age:38},
			{name:"Edward",country:"USA",age:41},
			{name:"Vishal",country:"India",age:30},
			{name:"Annie",country:"USA",age:27},
			{name:"Preeti",country:"India",age:25},
			{name:"Sophie",country:"France",age:29},
			{name:"Harpreet",country:"India",age:48},
			{name:"Bob",country:"USA",age:21}]
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
console.log('Ascending By Name=',arrName1)

let arrName2 =[ ...array];
arrName2.sort(arrayAgeDesc);

function arrayAgeDesc(age1, age2)
{
	let a1 = age1.age;
	let a2 = age2.age;
	if(a1>a2)
		return -1;
	else if(a1< a2)
		return 1;
	else
		return 0;
}
console.log('Descending By age=',arrName2)

let arrName3 =[ ...array];
arrName3.sort(arrayCountryNameAsc);

function arrayCountryNameAsc(p1,p2)
{
	let result = 0
	if(p1.country>p2.country)
		result=1;
	if(p1.country<p2.country)
		result =-1;
	if(result==0)
		result = p1.name>p2.name?1:-1;
	return result
}
console.log('Ascending By country and name=',arrName3)


let arrName4 =[ ...array];
arrName4.sort(arrayCountryAgeAsc);

function arrayCountryAgeAsc(p1,p2)
{
	let result = 0
	if(p1.country>p2.country)
		result=1;
	if(p1.country<p2.country)
		result =-1;
	if(result==0)
		result = p1.age>p2.age?1:-1;
	return result;
}
console.log('Ascending By country and age=',arrName4);


let arrName5 =[ ...array];
arrName5.sort(arrayCountryDesc);
function arrayCountryDesc(country1, country2)
{
	if(country1.age>country2.age)
		return -1;
	else if(country1.age<country2.age)
		return 1;
}
console.log('Descending by by age=',arrName5);