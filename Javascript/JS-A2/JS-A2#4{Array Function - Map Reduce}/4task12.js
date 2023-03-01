let json = [
			{fname:"Jack",lname:"Smith",city:"London"},
			{fname:"Mary",lname:"Markle",city:"Amsterdam"},
			{fname:"Ed",lname:"May",city:"Paris"},
			{fname:"Tim",lname:"Gates",city:"Rome"}]
let string = json.map(function(element){
	return element.city;
});
console.log(string)