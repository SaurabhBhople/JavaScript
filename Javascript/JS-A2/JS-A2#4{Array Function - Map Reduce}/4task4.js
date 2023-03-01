// Task 4
let array = [4,8,12,3,5,7]
let arr = array.map(function(element){
	if(element%2==0)
		return element
	else
		return 0;
});
console.log('Array is',arr)