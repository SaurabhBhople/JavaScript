// Task 4
function isRightangle(a, b, c)
{
	let a1= a*a == b*b + c*c;
	let b1= b*b == a*a + c*c;
	let c1= c*c == a*a + b*b;
	if(a1==b1==c1)
	{
		return true;
	} 
	return false;
}
console.log(isRightangle(5,4,3));