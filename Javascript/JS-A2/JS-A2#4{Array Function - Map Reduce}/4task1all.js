// Task 1 a I
let num =[2,4,5,2,6]
let arr=num.map(function(element){
	return element*element;
});
console.log(arr);

// Task 1 a II
let num =[-2,4,-5,-2,-6]
let arr=num.map(function(element){
	if(element>=0)
		return element;
	else
		return -1*element;
});
console.log(arr);

// Task 1 a III
let str =['hi','xyz','by','A'];
let string=str.map(function(element){
	return '<p>' + element + '</p>';
});
console.log(string);

// Task 1 a IV
let str =['hi','xyz','hello','Absolute'];
let maxlen=3;
let string=str.map(function(element){
	if(element.length<=maxlen)
		return element;
	else
		return element.substring(0,maxlen);
});
console.log(string);

// Task 1 a V
let array =[
			{name : 'pepsi', qty : 20, price : 15},
			{name : 'coke', qty : 15, price : 10},
			{name : 'maggie', qty : 10, price : 12},
			{name : 'colgate', qty : 6, price : 60},
			{name : 'perk', qty : 20, price : 5},
			{name : 'sprite', qty : 18, price : 20},
			{name : 'icecream', qty : 10, price : 25}]
let arr1=array.map(function(element){
	let v1=element.price*element.qty;
	let json={
				name: element.name,
				value: v1}
		return json;
});
console.log(arr1)
arr1.sort(compAsc);
function compAsc(p1,p2){
	if(p1.value>p2.value)
		return -1;
	else if(p1.value<p2.value)
		return 1;
	else 
		return 0;
}

// Task 1 a VI
let array = ['jack', 'bob smith', 'pitter parker','jane','mike henry'];

let namejson=array.map(function(element){
	return makeNamejson(element);
});
function makeNamejson(name)
{
	let index= name.indexOf(' ');
	let json = {};
	if(index<0)
	{
		json.firstName=name;
		json.lastName='';
	}
	else
	{
		json.firstName = name.substring(0,index);
		json.lastName = name.substring(index+1);
	}
	return json;
}
console.log(namejson)

// Task 1 b I
let array = [2,3,4,5];
let arr=array.reduce(function(acc,curr){
	let cube = curr*curr*curr;
	return acc+cube;
},0);
console.log(arr)

// Task 1 b II
let array = [22,13,4,45,15,10];
let arr=array.reduce(function(acc,curr){
		if(curr>acc)
			return curr;
		else
			return acc;
},0);
console.log(arr)

// Task 1 b III
let array = ['Steve', 'bob', 'ed','hello'];
let val='';
	if(array.length>0)
	 val =array[0];
let str= array.reduce(function(acc,curr){
	if(curr.length < acc.length)
		return curr;
	else
		return acc;
},val);

console.log(str);

// Task 1 b IV
let array =[
			{name : 'pepsi', qty : 20, price : 15},
			{name : 'coke', qty : 15, price : 10},
			{name : 'maggie', qty : 10, price : 12},
			{name : 'colgate', qty : 6, price : 60},
			{name : 'perk', qty : 20, price : 5},
			{name : 'sprite', qty : 18, price : 20},
			{name : 'icecream', qty : 10, price : 25}]

let sale =array.reduce(function(acc,curr){
	let value1= curr.qty *curr.price
	return value1+acc;
},0)
console.log(sale);

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
console.log(maxsale);