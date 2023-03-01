//Task 16
let array= [
			{name:"Mary",marks:[72,65,55,71]}, //263
			{name:"Anita",marks:[66,70,75,53]}, //264
			{name:"Edward",marks:[44,54,64,58]}, //220
			{name:"Thomas",marks:[62,55,65,81]}, //263
			{name:"Robin",marks:[41,44,47,49]}, //181
			{name:"Sophia",marks:[71,73,67,77]}, //288
			{name:"Bruce",marks:[52,57,61,64]}] //234
let minScore = 65;
function getarr(arr,min,mark)
{	
	let arr1= arr.filter(function(st){
		return mark>min;
	});
	arr.sort(SortAsc);
	return arr;
}
function SortAsc(st1,st2)
{
	if(st1.marks>st2.marks)
		return 1;
	else if(st1.marks<st2.marks)
		return -1;
	else
		return 0;
}
let fArr = getarr(array,minScore);
console.log(fArr);

