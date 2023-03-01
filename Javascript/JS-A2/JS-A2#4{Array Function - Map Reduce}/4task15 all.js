// Task 15 a
let string = ['jack', 'bob', 'Ana', 'julia', 'mark', 'thomson'];
let concation = string.reduce(function (acc, curr){
	return acc + '::' + curr;
});
console.log(concation);

// Task 15 b
let string = ['jack', 'bob', 'Ana', 'julia', 'mark', 'thomson'];
let sumlength = string.reduce(function (acc, curr){
	return acc + curr.length;
},0);
console.log('sum of string length is ',sumlength);

// Task 15 c
let string = ['jack', 'bob', 'Ana', 'julia', 'mark', 'thomson'];
let fString = string.reduce(function (acc, curr){
	return acc + curr[0] + ':';
},'');
console.log('sum of string length is ',fString);