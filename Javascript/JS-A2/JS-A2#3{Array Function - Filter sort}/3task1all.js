//  Task1 a III
let Names = ['jack','sam', 'holand','sanchi','bob'];
let ch = 's';
function findName(Namesarr, tofind)
{
	let name = Names.find(function(Names){
	return isStartingCh(Names, tofind);
})
	return name;	
}
console.log(findName(name,ch))
function isStartingCh(names, start)
{
	return names[0]==start;
}
function FindNameIndex(Namesarr,tofind)
{
	let index = Names.findIndex(function(Names){
	return isStartingCh(Names,tofind);
});
	
	return index;
}
console.log(FindNameIndex(name,ch))
function filterNames(Namesarr,tofind)
{
	let filter =Names.filter(function(Names){
		return isStartingCh(Names,ch)
	});
	return filter;
}
console.log(filterNames(name, ch));
// Task 1 a IV
let Emps=[
	{name : 'jack', city : 'delhi', dept : 'tech'},
	{name : 'bob', city : 'london', dept : 'HR'},
	{name : 'tim', city : 'london', dept : 'tech'},
	{name : 'sam', city : 'delhi', dept : 'HR'},
	{name : 'ana', city : 'london', dept : 'tech'},
	{name : 'mary', city : 'delhi', dept : 'HR'},
]
let city = 'delhi';
let dept = 'HR';
let Emp1 = Emps.find(function(Emps){
	return Emps.city == city && Emps.dept == dept;
});
console.log(Emp1);
 let index = Emps.findIndex(function(Emps){
 	return Emps.city == city && Emps.dept == dept;
});
 console.log(index);
 let filterarr = Emps.filter(function(Emps){
	return Emps.city == city && Emps.dept == dept;
 });
 console.log(filterarr);


 // Task 1 b I
let names = ['jack', 'tim', 'anna', 'steven', 'jeason'];
names.sort(compLengthASC);
function compLengthASC(str1,str2)
{
	let len1 = str1.length;
	let len2 = str2.length;
	if(len1>len2)
		return 1;
	else if(len1<len2)
		return -1;
	else
		return 0;
}
console.log(names);


// Task 1 b II
let saledata = [
	{ name : 'pepsi', qty : 10, price : 25},
	{ name : 'coke', qty : 15, price : 20},
	{ name : 'maggi', qty : 25, price : 10},
	{ name : 'colgate', qty : 10, price : 22},
	{ name : 'nescafe', qty : 8, price : 12},
	{ name : 'sprite', qty : 12, price : 15},
	{ name : 'icecream', qty : 30, price : 10}
	]
saledata1 = [...saledata]
console.log(saledata);
saledata1.sort(compValueDEC);
function compValueDEC(pr1,pr2)
{
	let value1 = pr1.qty * pr1.price;
	let value2 = pr2.qty * pr2.price;
	if(value1>value2)
		return -1;
	else if(value1<value2)
		return 1;
	else
		return 0;
}
console.log(saledata1);

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
let mincut = 60;
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
	console.log(total1,total2);
	if(total1>total2)
		return -1;
	else if(total1<total2)
		return 1;
	else 
		return 0;
}
