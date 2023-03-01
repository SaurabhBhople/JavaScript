// Task 2
let num = [20,15,35,20,45,10,25,60,10,20,40];
let fnumeq = num.find(function(num){
	return isEq10(num);
});
console.log('First No equal to 10 =',fnumeq);
let Indexnumeq = num.findIndex(function(num){
	return isEq10(num);
});
console.log('Index of No Equal to 10 =',Indexnumeq);
let Fileq10 = num.filter(function(num){
	return isEq10(num);
});
console.log('Filter No Eq 10 =',Fileq10);

let fnumgt = num.find(function(num){
	return isGreat30(num)
});
console.log('First No Greater than 30 =',fnumgt);
let Indexnumgt = num.findIndex(function(num){
	return isGreat30(num);
});
console.log('Index of no Greater than 30 =',Indexnumgt);
let filGreat30 = num.filter(function(num){
	return isGreat30(num);
});
console.log('Filter No Greater than 30 =',filGreat30);

let fnumMul3 = num.find(function(num){
	return ismult3(num);
});
console.log('First no multiple of 3 =',fnumMul3);
let IndexnumMul3 = num.findIndex(function(num){
	return ismult3(num);
});
console.log('Index of no multiple of 3 =',IndexnumMul3);
let fiMult3 = num.filter(function(num){
	return ismult3(num);
});
console.log('Filter No Multiple of 3 =',fiMult3);
function isEq10(num){
	return num == 10;
}
function isGreat30(num){
	return num > 30;
}
function ismult3(num){
	return num%3 == 0;
}