// Task 16 a
let json = [
			{name : "Mark", age : 23},
			{name : "Steve", age : 28},
			{name : "Mary", age : 25},
			{name : "Bill", age : 34}];
let sumOfage = json.reduce(function(acc,curr){
	let Sum = curr.age;
	return acc + Sum;
},0);
console.log(sumOfage)


let ageMore27 = json.reduce(function(acc,curr){
	let age = curr.age;
	console.log(age)
	let n = 1
	if(age>27)
		return n+1;
	else
		return acc;
},0);
console.log(ageMore27);

let youngest = json.reduce(function(acc,curr){
	let b=curr.age;
	let a = acc.age
	console.log(a,b)
	if(b>a)
		return b;
	else
		return a;
	// let a=curr.age;
	// let b=acc.age;
	// console.log(a, b);

});
console.log(youngest)