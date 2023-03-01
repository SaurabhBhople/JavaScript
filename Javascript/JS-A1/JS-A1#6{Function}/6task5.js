// Task 5
function isTriangle(a,b,c) 
{
	let a1= a >= b + c;
	let b1= b >= a + c;
	let c1= c >= a + b;
	if(a1==b1==c1)
	{
		return false + ' is not a Triangle';
	}	
	return true +' is Triangle';
}
console.log(isTriangle(5, 6, 7));