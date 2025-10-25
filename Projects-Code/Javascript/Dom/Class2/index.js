
// let buttonelement = document.querySelector('.clickbtn');
// buttonelement.addEventListener('click', function() {
//   let element=document.querySelector('.heading');
//   element.textContent="Dom Manipulation using JavaScript";
// });


let parentElement=document.querySelector(".parent")


let mybutton=document.createElement("button");
mybutton.innerText="click me";

// creating paragraph element
let para=document.createElement("p");
para.innerText="this is a paragraph";

parentElement.appendChild(mybutton);
parentElement.appendChild(para);

mybutton.addEventListener("click",function(){
  mybutton.innerText="you clicked me";
  para.innerText="paragraph changed after clicking the button";
});


