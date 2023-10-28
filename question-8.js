// Question #8: Fetching User List from Server

const getInformation = async()=>{
    const imformation = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await imformation.json()
    let allName = []
    for(let i of response){
        allName.push(i.name)
      }
    return allName
} 

let newUser = await getInformation()
 console.log(newUser)
