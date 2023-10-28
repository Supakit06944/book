// Question #6: Calculating Total Price in User's Cart

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];


function addObject (x,y){
  let newObject = {name : x,quantity : y}
  return products.push(newObject)
}

function filterInStockProducts(products) {
  let check = []
  for(let i of products){
    console.log(i.quantity)
    if(i.quantity > 0){
      check.push(i)
    }
  }
  return check
}

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
