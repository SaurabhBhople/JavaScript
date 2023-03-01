// Task 7
let array= [
		{name : "Jack",country:"USA",age:35},
		{name:"Amit",country:"India",age:38},
		{name:"Edward",country:"USA",age:41},
		{name:"Vishal",country:"India",age:30},
		{name:"Annie",country:"USA",age:27},
		{name:"Nick",country:"France",age:32},
		{name:"Francis",country:"France",age:44},
		{name:"Preeti",country:"India",age:25},
		{name:"Sophie",country:"France",age:29},
		{name:"Harpreet",country:"India",age:48},
		{name:"Bob",country:"USA",age:21}
		]

let str = 'France'
function FindStrCountry(arr,str)
{
	return arr.country == str;
}
let FindStr = array.find(function(arr) {
	return FindStrCountry(arr,str);
});
console.log(FindStr);
let IndexStr = array.findIndex(function(arr) {
	return FindStrCountry(arr,str);
});
console.log(IndexStr);
let filterstr = array.filter(function(arr) {
	return FindStrCountry(arr,str);
});
console.log(filterstr);