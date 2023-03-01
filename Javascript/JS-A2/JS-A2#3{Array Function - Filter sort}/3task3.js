// Task 3
let string = ['jit','pankaj','tejas','rockey','mahi','rohit','parthiv'];
let ch = 'r';

let fGreat5 = string.find(function(string){
	return isGreat5Len(string);
});
console.log('First string len greater than 5 =',fGreat5);
let iGreat5 = string.findIndex(function(string){
	return isGreat5Len(string);
});
console.log('Index of string len greater than 5 =',iGreat5);
let filGreat5 = string.filter(function(string){
	return isGreat5Len(string);
});
console.log('filter of string len greater than 5 =',filGreat5);

let fStartP = string.find(function(string){
	return isStartp(string,);
});
console.log('First string start with p =',fStartP);
let iStartP = string.findIndex(function(string){
	return isStartp(string);
});
console.log('Index of string start with p =',iStartP);
let filStartP = string.filter(function(string){
	return isStartp(string);
});
console.log('filter of string start with p =',filStartP);

let fStartCh = string.find(function(string){
	return isStartCh(string,ch);
});
console.log('First string start with p =',fStartCh);
let iStartCh = string.findIndex(function(string){
	return isStartCh(string,ch);
});
console.log('Index of string start with p =',iStartCh);
let filStartCh = string.filter(function(string){
	return isStartCh(string,ch);
});
console.log('filter of string start with p =',filStartCh);

function isGreat5Len(string)
{
	let len = string.length;
	return len>5;
}
function isStartp(string)
{
	return string[0]=='p';
}
function isStartCh(string,ch)
{
	return string[0]==ch;
}
