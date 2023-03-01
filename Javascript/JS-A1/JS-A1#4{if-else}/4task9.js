// Task 9
let n= prompt('Enter the value of n..');
console.log('Value of n is = ' +n);
for(let i=1; i<=n; i++)
{
	let sqr=i*i;
	
	if(i%2==0)
	{
		console.log('square of ' + i +'=' +sqr + ' : even')
	}
	else
	{
		console.log('square of ' + i +'=' +sqr +' : odd' );
	}

}
