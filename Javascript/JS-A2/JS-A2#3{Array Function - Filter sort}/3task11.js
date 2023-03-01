// Task 11
function joinarr(arr,sep)
{
	return arr.join(sep);
}
let array1 = ["Hi", "Hello", "Bye"];
let seprator1 = '**';

let array2 = ["A","B","C","X","Y"];
let seprator2 = 'level:';

let array3 = ["AB","!2","EF"];
let seprator3 = '#'

console.log(joinarr(array1,seprator1));
console.log(joinarr(array2,seprator2));
console.log(joinarr(array3,seprator3));