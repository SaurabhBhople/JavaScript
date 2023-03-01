let findless50Math = student.find(function(std){
	return isless50Math(std);
});
// console.log(findless50Math);
let Indexless50Math = student.findIndex(function(std){
	return isless50Math(std);
});
// console.log(Indexless50Math);
let filterless50Math = student.filter(function(std){
	return isless50Math(std);
});
// console.log(filterless50Math);
let findgreattotal = student.find(function(std1){
	return isGreattotal(student);
});
// console.log(findgreattotal);
let indexgreatTotal = student.findIndex(function(std1){
	return isGreattotal(student);
});
// console.log(indexgreatTotal);
let filtergreatTotal = student.filter(function(std1){
	return isGreattotal(student);
});
// console.log(filtergreatTotal);

function isless50Math(std)
{
	return std.maths<50;
}
function isGreattotal(std1)
{
	let total=0;
	for(let i=0; i<std1.length; i++)
	{
		total= (std1[i].maths + std1[i].english + std1[i].science);
	}
	if(total>200)
	{
		return(total);
	}
}

let findMathGreatEng = student.find(function(stdarr){
	return mathGreatEng(student);
});
console.log(findMathGreatEng);
let IndexMathGreatEng = student.findIndex(function(stdarr){
	return mathGreatEng(student);
});
console.log(IndexMathGreatEng);
let filterMathGreatEng = student.filter(function(stra){
	return mathGreatEng(student);
});
console.log(filterMathGreatEng);
function mathGreatEng(stdarr)
{

	for(let i=0; i<stdarr.length; i++)
	{
	
		if(stdarr[i].maths>stdarr[i].english)
		{
			stdarr;
		}
	}
	return stdarr;
}
function greatInall(stdarr,no)
{
	for(let i=0; i<stdarr.length; i++)
	{
		if(stdarr[i].maths > no && 
			stdarr[i].english > no && 
			stdarr[i].science > no)
			{
				stdarr[i];
			}
	}
	return stdarr;
}
let findGreatin = student.find(function(stdarr){
	return (greatInall(stdarr,No));
});
console.log(findGreatin);
let IndexGreatin = student.findIndex(function(stdarr1){
	return greatInall(student,No);
});
console.log(IndexGreatin);
let filterGreatin = student.filter(function(stdarr){
	return greatInall(stdarr,No)
});
console.log(filterGreatin)