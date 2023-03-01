// task 12
let array =[12,5,-6,10,-9,4,0,-23,34];

let	arrayabs = [...array];
arrayabs.sort(absSort);

function absSort(arr1, arr2)
{
	ar1=(arr1)*(arr1);
	ar2=(arr2)*(arr2);
	if(ar1>ar2)
		return 1;
	else if(ar1<ar2)
		return -1;
	else
		return 0;
 }
 console.log('Given array',array)
 console.log('absolute value sort',arrayabs);