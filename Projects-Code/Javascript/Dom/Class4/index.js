// console.log("Hello skillians");

// fetch("https://jsonplaceholder.typico00de.com/posts").then(response=>{
//   return  response.json()
// }).then(data=>{
//     console.log(data)

// }).catch(err=>{
//     console.log(err)
// })

async function getData(){
   try{
    const response= await fetch("http://localhost:3000/movies");
    const data=await response.json()
    console.log(data)
   }catch(error){
    console.log("We found an error",error)
   }


}
getData()





