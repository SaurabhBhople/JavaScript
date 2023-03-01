// Task 17
let str = '12345';
let len = str.length;
let mid = '';
let half1 = '';
let half2 = '';
if(len%2==0)
{
	half1 = str.substring(0,len/2);
 	half2 = str.substring(len/2,len);
 	console.log(half2+half1);
}
else 
{	
	half1 = str.substring(0,len/2);
 	half2 = str.substring(len,len/2+1);
		mid=len/2;
		len=1;
	console.log(half2 + str.substring(mid,mid+len) + half1);
}
