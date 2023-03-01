const arr = [3, 5, 5, 12, 23, 4, 7, 8, 8, 9];
const count=arr.reduce(function(acc, curr){
	console.log(acc,curr)
	let n=0;
	if(curr>10){
		return acc++;
	}
	else
		return n+1;
});
console.log(count);