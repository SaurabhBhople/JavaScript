//task 13
let n= prompt("Enter the value of n=");
let str = '';
let mult = 12;
let count = 10; 
let k;
for(let i=1; i<=n; i++)
{
 		k = mult * i ;
 		if(k > 12){
 			k = k + count ;
			count +=10;
 		}
 		str = str + 'XY'+ k;
}
console.log(str);