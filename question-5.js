// Question 5: Calculating Total Price in User's Cart

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

function addObject (x,y,z){
  let newObject = {name : x,price : y,quantity : z}
  return cart.push(newObject)
}

// addObject("Kiwi",20,2)
// console.log(cart)
 
let allPrice = 0
function calculateTotalPrice(cart) {
   for(let i in cart){
    let price = cart[i].price * cart[i].quantity
    if(price > 1){
      allPrice = allPrice + price
    }
   }
   return allPrice
  }


console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
