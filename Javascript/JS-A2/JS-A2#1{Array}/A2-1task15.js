// Task 15
function check(array)
{
  let lenstr =array.length;

  for(let i=0; i<lenstr; i++)
  {
    if(array[i]%2==0 && array[i+1]%2!=0)
    {
      return 'Alternating';
    }
    else
    {
      return 'NOT';
    }
  }
}
let array =[2,3,4,5,6,7];
console.log(check(array));
