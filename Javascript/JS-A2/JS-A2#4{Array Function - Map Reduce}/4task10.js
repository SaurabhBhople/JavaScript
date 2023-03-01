// Task 10
let json = [
		{id : 101, name : "Mark"},
		{id : 105, name : "Steve"},
		{id : 78, name : "James"}]
let string = json.map(function(element){
	let str="'id"+element.id
	return '<p class=' + str + "'>"+element.name +'</p>';
});
console.log(string);