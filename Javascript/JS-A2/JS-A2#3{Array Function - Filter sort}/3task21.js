// Task 21
let personArray = [
					{name:"Mary",city:"London"},
					{name:"Anita",city:"Paris" },
					{name:"Edward",city:"New York"},
					{name:"Thomas",city:"Rome"},
					{name:"Robin",city:"Seattle"},
					{name:"Sophia",city:"Los Angeles"},
					{name:"Bruce",city:"Delhi"}];
let continentArray =[
					{city:"London",continent:"Europe"},
					{city:"Delhi",continent:"Asia"},
					{city:"Seattle",continent:"North America"},
					{city:"Paris",continent:"Europe"},
					{city:"New York",continent:" North America"},
					{city:"Rome",continent:"Europe"},
					{city:"Bengaluru",continent:"Asia"},
					{city:"Los Angeles",continent:"North America"}];
let cont = 'Asia'
let arrayOfPerson = personArray.filter(function(array,continent,con){
	return personAcont(array,continent,con);
});
function personAcont(array,continent,con)
{
	console.log(array)
	console.log(continent) 
	if(array.city==continent.city)
		return array.city;
}
console.log(arrayOfPerson)