// Task 8
let array=[	{name:"Mary",marks:[72,65,55,71]},
			{name:"Anita",marks:[66,70,75,53]},
			{name:"Edward",marks:[44,54,64,58]},
			{name:"Thomas",marks:[62,55,65,81]},
			{name:"Robin",marks:[41,44,47,49]},
			{name:"Sophia",marks:[71,73,67,77]},
			{name:"Bruce",marks:[52,57,61,64]}];
function marksmore70(arr)
{	
	for(let i=0; i<arr.length; i++)
	{
		marksIn = arrmark(arr[i].marks)
		if(marksIn < 70)
		{
			arr[i];
		}
	}
	return arr;
}
function arrmark(marks)
{
	for(let j=0; j<marks.length; j++)
	{
		return marks[j];
	}
}
let findscore70 = array.find(function(arr){
	return marksmore70(arr);
});
console.log(findscore70);
let Indexscore70 = array.findIndex(function(arr){
	return marksmore70(arr);
});
console.log(Indexscore70);
let filterscore70 = array.filter(function(arr){
	return marksmore70(arr);
});
console.log(filterscore70);