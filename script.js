/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = []; //this is an array

var Sneakers1 = {
	name: "JACKSHIBO Men Women Unisex Couple Casual Fashion Sneakers Breathable Athletic Sports Shoes",
	price: 18.99,
	manufacture: "JACKSHIBO"
}

var Sneakers2 = {
	name: "ASICS Men's GEL Venture 5 Running Shoe",
	price: 46.75,
	manufacture: "ASICS"
}

var Sneakers3 = {
	name: "New Balance Men's MX608V4 Training Shoe",
	price: 19.91,
	manufacture: "New Balance"
}

var Sneakers4 = {
	name: "Dream Pairs Boy's Casual Velcro Strap Casual Shoes Sneakers Loafers",
	price: 13.99,
	manufacture: "DREAM PAIRS"
}

productList.push( Sneakers1, Sneakers2, Sneakers3, Sneakers4);

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array

console.log(productList[0]);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    //Your code here
if (productList[i].price < 50 ) {
    console.log("This sneaker," + productList[i].name + ", its cost is " + productList[i].price );
}
}


/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again

var totalPrice = 0;
for (var i= 0; i<productList.length; i++){
	totalPrice+=productList[i].price;
}

//3.2 then, divide total price by the number of products, using proudctList.length
var averagePrice = totalPrice/productList.length;
console.log("The average price of sneakers is " + averagePrice);

/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    //Your code here
for (var i=0; i<productList.length; i++){
if (productList[i].price < p){
	numOfMatchingProducts+=1;
}
}
    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
