// Task 7
let student1 = {
	name : 'Mark',
	maths : 80,
	english : 75,
	science : 63
}
let student2 = {
	name : "Bob", 
	maths : 90,
	english : 81,
	science : 88
}
let student3 = {
	name : 'Julia',
	maths : 88,
	english : 87,
	science : 89
}
let student4 = {
	name : 'Anthony',
	maths : 60,
	english : 64,
	science : 61
}
let student = [student1,student2,student3,student4];

let comp1 = {
	name:'Mark', 
	Computers:90
}
let comp2 = {
	name:'Anthony', 
	Computers:70
}
let comp3 = {
	name:'Julia', 
	Computers:88
}
let comp4 = {
	name:'Bob', 
	Computers:81
}
let computer = [comp1,comp2,comp3,comp4];
function addcomp(student, computer)
{
	let arraylist =[];
	for(let i=0; i<student.length; i++)
	{
		for(let j=0; j<computer.length; j++)
		{
			if(student[i].name== computer[j].name)
			{
				student[i].Computers=computer[j].Computers;
			}
		}
	}
	return student;
}
let allstudent = addcomp(student,computer);

function Totalmarks(student)
{
	
	for(let i=0; i<student.length; i++)
	{
		let marks=0;
		let std=student[i];
		marks=std.maths+std.english+std.science+std.Computers;
		student[i].total  = marks;
	}
	return student;
}

function addAvgMax(student)
{
	for(let i=0; i<student.length; i++)
	{
		let std=student[i];
		let Avg=0;
		let max=0;
		let mark = 0;
		marks=std.maths+std.english+std.science+std.Computers;
		Avg = marks/2;
		student[i].Avgmarks = Avg;
		student[i].Maxmark = ismax(student[i]);		
	}
	return student;
}
function ismax(max)
{
	for(let i=0; i<student.length; i++)
	{
		let std=student[i];
		let max=0;
		if(std.maths>std.english && std.maths>std.science && std.maths>std.Computers)
		{
			return max=std.maths;
		}
		if(std.english>std.maths && std.english>std.science && std.english>std.Computers)
		{
			return max=std.english;
		}
		if(std.science>std.maths && std.science>std.english && std.science>std.Computers)
		{
			return max=std.science;
		}
		if(std.Computers>std.english && std.Computers>std.science && std.Computers>std.maths)
		{
			return max=std.Computers;
		}
	}
}

function remove(student)
{
	for(let i=0; i<student.length; i++)
	{
		let std=student[i];
		if(std.name == 'Bob')
		{
			student.splice(i,1);
		}
	}
	return student;
}
console.log(remove(student));

