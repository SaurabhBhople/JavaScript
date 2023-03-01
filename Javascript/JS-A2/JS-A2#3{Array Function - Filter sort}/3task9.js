// Task 9
let array=[
			{name:"Jack",tech:"Android"},
			{name:"Mary",tech:"React"},
			{name:"Bob",tech:"Angular"},
			{name:"Steve",tech:"Spring"},
			{name:"James",tech:"Android"},
			{name:"Julia",tech:"Android"},
			{name:"Michel",tech:"React"},
			{name:"Bill",tech:"Angular"},
			{name:"Sonny",tech:"Spring"},
			{name:"Martins",tech:"React"},
			{name:"Bruce",tech:"Angular"},
			{name:"Sam",tech:"Spring"}]
let string = 'Spring';
function matchStr(arr, str, boolean)
{
	for(let i=0; i<arr.length; i++)
	{
		let na;
		let st=[];
		let starr;
		let naarr;
		if(boolean)
		{
			if(arr[i].name == str)
			{
				naarr = arr.pop()
				return naarr;
			}
		}
		else
		{
			if(arr[i].tech == str){
				starr=arr.pop();
				return starr;
			}
		}
	}
}
let findMatchStrtrue = array.filter(function(arr, str, boolean){
	return matchStr(array,string,true)
});
console.log(findMatchStrtrue);
let findMatchStrfalse = array.filter(function(arr,str,boolean){
	return matchStr(array,string,false)
});
console.log(findMatchStrfalse);