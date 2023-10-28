// Question #8: Fetching User List from Server


const information = ()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
} 
const handleResponse = (response) => {
    return response.json();
    };

const onSuccess = (data)=>{ 
    let allName = []
    for(let i of data){
        allName.push([i.name])
      }
    console.log(allName)
    }


let newUser = information().then(handleResponse).then(onSuccess)
 console.log(information())
