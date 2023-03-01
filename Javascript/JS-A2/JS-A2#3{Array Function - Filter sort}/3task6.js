// Task 6
let student =[
	{name : "Jack", maths : 55, english : 60, science : 62},
	{name : "Anita" , maths : 62, english : 65, science : 56},
	{name : "Thomas", maths : 48, english : 72, science : 75},
	{name : "Steve", maths : 51, english : 56, science : 68},
	{name :"Julia",maths : 47, english : 77, science : 72},
	{name : "Mary", maths : 72, english : 56,science : 81}]

let No1 = 60;
let No2 = 65
function greatInMathSci(stdarr,n1,n2)
{
	for(let i=0; i<stdarr.length; i++)
	{
		if(stdarr[i].maths > n1 && 
			stdarr[i].science > n2)
			{
				return stdarr[i];
			}
	}
	return stdarr;
}
console.log(greatInMathSci(student,No1,No2))
let findGreatMtSci = student.find(function(stdarr){
	return (greatInMathSci(student,No1,No2));
});
console.log(findGreatMtSci);
let IndexGreatMtSci = student.findIndex(function(stdarr){
	return greatInMathSci(student,No1,No2);
});
console.log(IndexGreatMtSci);
let filterGreatMtSci = student.filter(function(stdarr){
	return greatInMathSci(stdarr,No1,No2)
});
console.log(filterGreatMtSci)