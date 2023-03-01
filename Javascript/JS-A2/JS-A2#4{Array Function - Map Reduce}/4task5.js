// Task 5
let array = [4,8,12,3,5,7]
let arr = array.map(function(element){
	if(element%2==0)
		return 'Even';
	else
		return 'Odd';
});
console.log('Array is',arr)