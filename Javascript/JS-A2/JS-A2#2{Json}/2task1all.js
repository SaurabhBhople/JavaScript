// Task 1 II
let emp1 = {
	Name : 'Sam',
	Dept : 'Tech',
	Desgination : 'Manager',
	Salary : 40000,
	Raise : true
}
let emp2 = {
	Name : 'Mary',
	Dept : 'Finance',
	Desgination : 'Trainee',
	Salary : 18500,
	Raise : true
}
let emp3 = {
	Name : 'Bill',
	Dept : 'HR',
	Desgination : 'Executive',
	Salary : 21200,
	Raise : false
}
let arayEmp = [emp1,emp2,emp3];
// Task 1 II
let company = {
	companyName : 'Tech Star',
	webSite : 'www.techstar.site',
	emp : arayEmp
}
// Task 1 III
let emp4 = {
	Name : 'Anna',
	Dept : 'Tach',
	Desgination : 'Executive',
	Salary : 25600,
	Raise : false
}
company.emp.push(emp4);
// Task 1 IV
function countSalary(compJson) 
{
	let emparr = compJson.emp;
	let Total = 0;
	for(let i=0; i<emparr.length; i++)
	{
		let emp =emparr[i];
		Total = Total + emp.Salary;
	}
	return Total;
}
totalSalary = countSalary(company)
console.log('Total Salary is',totalSalary);

// Task 1 V
function raise(company)
{
	let emparr = company.emp;
	for(let i=0; i<emparr.length; i++)
	{
		let emp =emparr[i];
		if(emp.Raise)
		{
			emp.Salary = emp.Salary * 1.10;
			emp.Raise = false;
		}
	}
}
raise(company);
console.log(company);

//  Task VI 
let wfhemp= ['Anna', 'Sam'];
function addwfh(company, wfhemp)
{
	let emparr = company.emp;
	for(let i=0; i<emparr.length; i++)
	{
		let emp = emparr[i];
		emp.wfh = checkarr(emp.Name,wfhemp);
	}
}
function checkarr(value, arr)
{
	for(let i=0; i<arr.length; i++)
	{
		if(arr[i]==value)
		{
			return true;
		}
	}
	return false;
}
addwfh(company,wfhemp);
console.log(company);