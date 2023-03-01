//Task 13
let str= 'qw2B**5g';
let len=str.length;
let Lowerchar='';
let digit='';
let upperchar='';
for(let i=0; i<len; i++)
{
	if(str[i]>'A' && str[i]<='Z')
	{
		upperchar=upperchar + str[i];
	}
	else if(str[i]>'a' && str[i]<='z')
	{
		Lowerchar=Lowerchar + str[i];
	}
	else if(str[i]>'0' && str[i]<='9')
	{
		digit=digit + str[i];
	}
	else
	{
		
	}
}
console.log(Lowerchar+digit+upperchar);