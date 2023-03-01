// Task 15 c
let string = ['jack', 'bob', 'Ana', 'julia', 'mark', 'thomson'];
let fString = string.reduce(function (acc, curr){
	return acc + curr[0] + ':';
},'');
console.log('sum of string length is ',fString);