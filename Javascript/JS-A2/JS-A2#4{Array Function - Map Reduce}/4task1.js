// Task 1 b V
let array =[
			{name : 'pepsi', qty : 20, price : 15},
			{name : 'coke', qty : 15, price : 10},
			{name : 'maggie', qty : 10, price : 12},
			{name : 'colgate', qty : 6, price : 60},
			{name : 'perk', qty : 20, price : 5},
			{name : 'sprite', qty : 18, price : 20},
			{name : 'icecream', qty : 10, price : 25}]

let maxsale = array.reduce(function(acc,curr){
	let v1 = curr.qty * curr.price;
	let v2 = acc.qty * acc.price;
	if(v1>v2)
		return curr;
	else
		return acc;
})
console.log('Maxsale in json is',maxsale);