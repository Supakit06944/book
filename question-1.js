// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};
inventory.apple.quantity = 200
inventory.orange = {price: 20,quantity: 300}
inventory

let allPrice = 0
for(let i in inventory){
const totalPrice =  inventory[i].price * inventory[i].quantity
if(totalPrice > 1){
  allPrice = totalPrice + allPrice
}
}
console.log(`Total inventory value: ${allPrice} baht`)