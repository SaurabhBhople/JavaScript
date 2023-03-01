// Task 19
let array = ['aa','car','is','going']
// let filterarray=array.filter(function(string){
// 	return stringArr(string)
// });
// function stringArr(str)
// {
// 	for(let i=0; i<str.length; i++)
// 	{
// 		if(str[i]=='a' || str[i]=='b' || str[i]=='c')
// 		{
// 			str = str;
// 		}
// 	}
// 	return str
// }
// console.log(filterarray)

let filarr=array.filter(function(string){
	for(let i=0; i<string.length; i++)
		if(string[i]=='a' || string[i]=='b' || string[i]=='c'){
			return string;
		}
});
console.log(filarr)