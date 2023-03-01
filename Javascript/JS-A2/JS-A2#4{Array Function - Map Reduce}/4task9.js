// Task 9
let json = [
		{id : 101, name : "Mark"},
		{id : 105, name : "Steve"},
		{id : 78, name : "James"}]
let string = json.map(function(element){
	return '<Button onClick = clicked(' + element.id + ')>' + element.name +'</button>';
});
console.log(string);