// Task 6
let product1 = {
	code : 'PX101',
	stock : 15,
	price : 30
}
let product2 = {
	code : 'PX102',
	stock : 24,
	price : 20,
	
}
let product3 = {
	code : 'PX103',
	stock : 33,
	price : 10
}
let allproduct =[product1,product2,product3];
let shop = {
	product : allproduct
}
function totalStockQty(shop)
{
	let prodt = shop.product;
	let total = 0;
	for(let i=0; i<prodt.length; i++)
	{
		total = total + prodt[i].stock;
	}
	return total;
}
// let totalstock = totalStockQty(shop);
shop.totalstock = totalStockQty(shop);

let product4 = {
	code : 'PX104',
	stock : 10,
	price : 40
}
shop.product.push(product4);

function totalStockQty(shop)
{
	let prodt = shop.product;
	let total = 0;
	for(let i=0; i<prodt.length; i++)
	{
		total = total + prodt[i].stock;
	}
	return total;
}
shop.totalstock = totalStockQty(shop);

function raiseprice(shop)
{
	let prodt = shop.product;
	for(let i=0; i<prodt.length; i++)
	{
		let product = prodt[i];
		product.price = product.price * 1.10;
	}
}
raiseprice(shop);
console.log(shop);