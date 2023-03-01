let arrName1 =[ ...array];
arrName1.sort(arrayMarksDesc);
function arrayMarksDesc(mark1,mark2)
{	

	let m1 = totals(mark1)
	let m2 = totals(mark2)
	if(m1>m2)
		return -1;
	else if(m1<m2)
		return 1;
	else return 0;
}
function totals(mark)
{
	let totalmarks=mark.marks;
	let sum =0;
	for (let i=0; i<totalmarks.length; i++)
	{
		sum=sum+totalmarks[i];
	}
	return sum;
}
console.log('Descending order of marks=',arrName1)

let arrName2 =[ ...array];
arrName2.sort(arrayMarksMaxAsc);
function arrayMarksMaxAsc(mark1,mark2)
{	

	let m1 = totals(mark1)
	let m2 = totals(mark2)
	if(m1>m2)
		return -1;
	else if(m1<m2)
		return 1;
	else return 0;
}
function totals(mark)
{
	let totalmarks=mark.marks;
	let max =0;
	for (let i=0; i<totalmarks.length; i++)
	{
		max=max+totalmarks[i];
	}
	return max;
}
console.log('Ascending order of Max marks=',arrName2)


let cutoff = 50;

function getArray(arr,cut)
{
	let arr1=arr.filter(function(st){
		if(st.marks>st.cut);
		return arr;
	});
	arr.sort(comMarksDesc);
	return arr1;
}
let fArr=getArray(array,cutoff);
console.log(fArr);

function comMarksDesc(st1,st2)
{
	if(st1.marks>st2.marks)
		return -1;
	else if(st1.marks<st2.marks)
		return 1;
	else
		return 0;
}

let minTotal = 250;
function getarr(arr,min,mark)
{	
	let arr1= arr.filter(function(st){
		return totals>min;
	});
	arr.sort(compTotal);
	return arr;
}
function totals(mark)
{
	let totalmarks=mark.marks;
	let sum =0;
	for (let i=0; i<totalmarks.length; i++)
	{
		sum=sum+totalmarks[i];
	}
	return sum;
}
function compTotal(st1,st2)
{
	if(st1.marks>st2.marks)
		return 1;
	else if(st1.marks<st2.marks)
		return -1;
	else
		return 0;
}
let fArr = getarr(array,minTotal);
console.log(fArr);


