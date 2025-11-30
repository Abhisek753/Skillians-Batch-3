import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import axios from "axios"

function App() {

  const callApi= async()=>{
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data=await res.json()
  console.log(data)
// let data= await axios.get("https://jsonplaceholder.typicode.com/posts")
// console.log(data)
  }

  useEffect(()=>{
callApi()
  },[])



  return (
    <div className="App">
      {/* <div className="card text-left">
        <img className="card-img-top" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt=""/>
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Body</p>
        </div>
      </div> */}
  
    
       <Navbar/>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
