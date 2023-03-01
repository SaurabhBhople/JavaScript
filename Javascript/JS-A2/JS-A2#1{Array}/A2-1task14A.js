// task 14
let arr = [1,5,3,4];
let len = arr.length;
let result='';
  for (var i = 1;  i < len; i++) {
    // check if current value smaller than previous value
    if (arr[i] < arr[i - 1]) {
      console.log('bdfds')
      break;
    }
    else{
    console.log('true');
	}
  }
  
