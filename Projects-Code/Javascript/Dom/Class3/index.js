
// const handleChange=()=>{
//   let firstname=document.getElementById("firstname").value;

// }
// const handleSubmit=()=>{
//     let firstname=document.getElementById("firstname").value;
//     console.log(firstname);

// }


const addBtn=document.querySelector("#addBtn");
const input=document.querySelector("#taskInput");
const taskList=document.querySelector("#taskList")


addBtn.addEventListener("click",()=>{
  const taskText=input.value.trim() ;
  if(taskText==""){
    alert("Please Enter a task");
  }else{
    const li=document.createElement("li");
    li.textContent=taskText;
    
    const delBtn=document.createElement("button");
    delBtn.textContent="Delete"
    delBtn.addEventListener("click",()=>{
      li.remove();
    })


    li.appendChild(delBtn);
    taskList.append(li);
    input.value="";
  }

})
