// Task 7
let json = [
			{name : "Mark", age : 23},
			{name : "Steve", age : 28},
			{name : "Mary", age : 25},
			{name : "Bill", age : 34}]
let array = json.map(function(element){
	return element.name+' is '+ element.age + ' years old';
});
console.log(array);