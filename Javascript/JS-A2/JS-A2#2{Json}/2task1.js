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
let company = {
	companyName : 'Tech Star',
	webSite : 'www.techstar.site',
	emp : arayEmp
}
let emp4 = {
	Name : 'Anna',
	Dept : 'Tach',
	Desgination : 'Executive',
	Salary : 25600,
	Raise : false
}
company.emp.push(emp4);

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