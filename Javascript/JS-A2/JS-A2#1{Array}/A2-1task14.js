function isSequential(array) 
{
  let len = array.length;
  for (var i = 0;  i < len; i++) 
  {
    if (array[i] < array[i-1]) 
    {
      return 'NOT';
    }
  }
  return 'Sequence';
}
console.log(isSequential([12,13,14,15,16,17]));
console.log(isSequential([64,55,55,88,66,]));
console.log(isSequential([3,4,5,7]));