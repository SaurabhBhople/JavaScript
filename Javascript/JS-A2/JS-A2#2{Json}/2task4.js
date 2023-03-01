// Task 4
let data1 = {
	billid : 401,
	amount : 200
}
let data2 = {
	billid : 402,
	amount : 500
}
let data= [data1,data2];
function billtotal(jsdata)
{
	let bill = data.amount;
	// console.log(alldata);
	let total = 0;
	for(let i=0; i<data.length; i++)
	{
		let a = data[i];
		total = total + a.amount;
	}
	return total;
}

console.log('Total bill is',billtotal(data));