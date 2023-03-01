// Task 5
let string = ['Hello','React','Game','Java','Python','boat','Hibernate','JavaScript'];
let ch1 = 'e';
let ch2 ='a';
let findLast = string.find(function(string){
	return isEndt(string);
});
console.log(findLast);
let indexLast = string.findIndex(function(string){
	return isEndt(string);
});
console.log(indexLast);
let filtertLast = string.filter(function(string){
	return isEndt(string);
});
console.log(filtertLast);

let findLastCH = string.find(function(string){
	return isEndCH(string,ch1);
});
console.log(findLastCH);
let indexLastCH = string.findIndex(function(string){
	return isEndCH(string,ch1);
});
console.log(indexLastCH);
let filtertLastCH = string.filter(function(string){
	return isEndCH(string,ch1);
});
console.log(filtertLastCH);

let findhasCH = string.find(function(string){
	return hasCH(string,ch2);
});
console.log(findhasCH);
let indexhasCH = string.findIndex(function(string){
	return hasCH(string,ch2);
});
console.log(indexhasCH);
let filterhasCH = string.filter(function(string){
	return hasCH(string,ch2);
});
console.log(filterhasCH);

function isEndt(string)
{
	let len=string.length;
	for(let i=0; i<len; i++)
	{
		if(string[len-1]=='t')
		{
			return string;
		}
	}
}
function isEndCH(string,ch1)
{
	let len=string.length;
	for(let i=0; i<len; i++)
	{
		if(string[len-1]==ch1)
		{
			return string;
		}
	}
}
function hasCH(string,ch2)
{
	let len=string.length;
	for(let i=0; i<len; i++)
	{
		if(string[i]==ch2)
		{
			return string;
		}
	}
}
