function isIndia(array){
	return array.country == "India";
}

let FindIndia = array.find(function(array){
	return isIndia(array);
});
console.log(FindIndia);
let IndexIndia = array.findIndex(function(array){
	return isIndia(array);
});
console.log(IndexIndia);
let FilterIndia = array.filter(function(array){
	return isIndia(array);
});
console.log(FilterIndia);

function isIndiaLess35(array){
	return (array.country == "India" && array.age<35);
}

let FindIndiaLess35 = array.find(function(array){
	return isIndiaLess35(array);
});
console.log(FindIndiaLess35);
let IndexIndiaLess35 = array.findIndex(function(array){
	return isIndiaLess35(array);
});
console.log(IndexIndiaLess35);
let FilterIndiaLess35 = array.filter(function(array){
	return isIndiaLess35(array);
});
console.log(FilterIndiaLess35);

function isNameLess6(arr){
	let less6=[];
	for(let i=0; i<arr.length; i++)
	{
		if(arr[i].name.length<6)
		{
			arr[i];
		}
	return arr;
	}
}
let FindNameless6 = array.find(function(arr1){
	return isNameLess6(array);
});
console.log(FindNameless6);
let IndexNameless6 = array.findIndex(function(arr1){
	return isNameLess6(array);
});
console.log(IndexNameless6);
let FilterNameless6 = array.filter(function(arr1){
	return isNameLess6(array);
});
console.log(FilterNameless6);


function counIndUSA(arr)
{
	return (arr.country == 'India' || arr.country =='USA')
}
let findCunIndUsa = array.find(function(arr) {
	return counIndUSA(arr);
});
console.log(findCunIndUsa);
let IndexCunIndUsa = array.findIndex(function(arr) {
	return counIndUSA(arr);
});
console.log(IndexCunIndUsa)
let filterCunIndUsa = array.filter(function(arr) {
	return counIndUSA(arr);
});
console.log(filterCunIndUsa)

let minAge = 35;

function ageGreatMin(arr,min)
{
	return arr.age > min;
}
let findMinage = array.find(function(arr) {
	return ageGreatMin(arr,minAge);
});
console.log(findMinage);
let IndexMinage = array.findIndex(function(arr) {
	return ageGreatMin(arr,minAge);
});
console.log(IndexMinage);
let filterMinage = array.filter(function(arr) {
	return ageGreatMin(arr,minAge);
});
console.log(filterMinage);

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