// Task 8
let array = ['Mark', 'James', 'Maratha'];
let string = array.map(function(element){
	let str='<li>'+element+'<li>'+'<ul>'+'<ul>'
	return str;
});
console.log(string);