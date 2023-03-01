// Task 14 a
let num = [4,5,1,10,6,4];
let sum = num.reduce(function(acc,curr){
	return acc+curr;
},0);
console.log('sum of nums is=',sum)

// Task 14 b
let num1 = [4,5,1,10];
let prod = num1.reduce(function(acc,curr){
	return acc*curr;
});
console.log('product of nums is=',prod)

// Task 14 c
let num = [4,5,1,10,1,50,10,6,0];
let Max = num.reduce(function(acc,curr){
	if(acc>curr)
		return acc;
	else 
		return curr;
});
console.log('Max no is',Max);

// Task 14 d
let num = [4,5,1,10,50,10,6];
let Min = num.reduce(function(acc,curr){
	if(acc<curr)
		return acc;
	else 
		return curr;
});
console.log('Min no is',Min)
