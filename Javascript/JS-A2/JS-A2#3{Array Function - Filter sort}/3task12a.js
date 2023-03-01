// // Task 12
// function comparrAsc(a1,a2)
// {
//     if(a1>a2)
//         return 1;
//     else if(a1<a2)
//         return -1;
//     else
//         return 0;
// }
// // console.log('Given array=',array);
// console.log('Ascending array=',arrayAsc);

// function comparrDec(b1,b2)
// {
//     if(b1>b2)
//         return -1;
//     else if(b1<b2)
//         return 1;
//     else
//         return 0;
// }
// console.log('Given array=',array);
// console.log('Descending array=',arrayDec);

var array= new Array(2,-2,3,0,-3,1);

 function absoluteSortin(array){

    var inputArray= array.slice(0);
    var temp;
    console.log(inputArray)

    for(var i=0;i< inputArray.length;i++){
        for(j=i+1; j<inputArray.length;j++){
            if(Math.abs(inputArray[i]) > Math.abs(inputArray[j])){
                temp= inputArray[j];
                inputArray[j] = inputArray[i];
                inputArray[i] = temp;
            }
        }
    }
   return inputArray;

 }
console.log(absoluteSortin(array));