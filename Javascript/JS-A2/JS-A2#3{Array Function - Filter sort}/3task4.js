// Task 4
let emps=[
	{name : 'jack', age : 31},
	{name : 'stark', age : 35},
	{name : 'tom', age : 28},
	{name : 'jerry', age : 29},
	{name : 'sam', age : 33},
	{name : 'kim', age : 21},
	{name : 'meary', age : 24}
	];
let ch = 'j';

let fLess30 = emps.find(function(emps){
	return isLess30(emps);
});
console.log('First emp less than 30 =',fLess30);
let iLess30 = emps.findIndex(function(emps){
	return isLess30(emps);
});
console.log('Index of emp less than 30 =',iLess30);
let filLess30 = emps.filter(function(emps){
	return isLess30(emps);
});
console.log('First emp less than 30 =',filLess30);

let fStartS = emps.find(function(emps){
	return isStartS(emps);
});
console.log('Emp start with s=',fStartS);
let iStartS = emps.findIndex(function(emps){
	return isStartS(emps);
});
console.log('Index of emp start with s=',iStartS);
let filStartS = emps.filter(function(emps){
	return isStartS(emps);
});
console.log('Filter emp start with s=',filStartS);

let fStartCH = emps.find(function(emps){
	return isStartCh(emps,ch);
});
console.log('Emp start with CH=',fStartCH);
let iStartCH = emps.findIndex(function(emps){
	return isStartCh(emps,ch);
});
console.log('Index of emp start with CH=',iStartCH);
let filStartCH= emps.filter(function(emps){
	return isStartCh(emps, ch);
});
console.log('Filter emp start with CH=',filStartCH);
function isLess30(emps)
{
	return emps.age < 30;
}
function isStartS(emps)
{
	return emps.name[0]=='s';
}
function isStartCh(emps,ch)
{
	return emps.name[0]==ch;
}
