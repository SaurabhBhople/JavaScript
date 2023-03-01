// Task 8.1
let array=[	{name:"Mary",marks:[72,65,55,71]},
			{name:"Anita",marks:[66,70,75,53]},
			{name:"Edward",marks:[44,54,64,58]},
			{name:"Thomas",marks:[62,55,65,81]},
			{name:"Robin",marks:[41,44,47,49]},
			{name:"Sophia",marks:[71,73,67,77]},
			{name:"Bruce",marks:[52,57,61,64]}];
function istotalLess(arr)
{	
	let totalofmarks = 0;
	for(let i=0; i<arr.length; i++)
	{
		totalofmarks=istotal(arr[i].marks);
	}
	if(totalofmarks<250)
	{
		return arr
	}
}
function istotal(marks)
{
	let total = 0
	for(let j=0; j<marks.length; j++)
	{
		total=total+marks[j];
	}
	return total;
}
let findistotalless = array.find(function(arr){
	return istotalLess(arr);
});
console.log(findistotalless);
let Indexistotalless = array.findIndex(function(arr){
	return istotalLess(arr);
});
console.log(Indexistotalless);
let filteristotalless = array.filter(function(arr){
	return istotalLess(arr);
});
console.log(filteristotalless);


// 8.2
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

// task 8.3
function marksmore70In2(arr)
{	
	for(let i=0; i<arr.length; i++)
	{
		marksIn = arrmark(arr[i].marks)
		if(marksIn > 70 && marksIn >70)
		{
			return arr[i];
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
let findscore70in2 = array.find(function(arr){
	return marksmore70In2(arr);
});
console.log(findscore70in2);
let Indexscore70in2 = array.findIndex(function(arr){
	return marksmore70In2(arr);
});
console.log(Indexscore70in2);
let filterscore70in2 = array.filter(function(arr){
	return marksmore70In2(arr);
});
console.log(filterscore70in2);


// task 8.4
function avgMGreatAvg(arr)
{	
	for(let i=0; i<arr.length; i++)
	{
		avg = average(arr[i].marks)
		avmark = avgmarks(arr[i].marks)
		if(avg>avmark)
		{
			return arr[i];
		}
	}
	return arr;
}
function avgmarks(marks)
{
	avgs=0;
	for(let k=0;k<marks.length; k++)
	{
		avgs=avgs+avg/marks.length;
	}
}
function average(marks)
{
	let avg=0
	for(let j=0; j<marks.length; j++)
	{
		avg=avg+marks[j]/marks.length;
	}
	return avg;
}