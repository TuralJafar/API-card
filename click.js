let conatiner=document.querySelector(".conatiner")
let button=document.createElement("button")
box.classList.add("box");
let btn=document.createElement("button");
btn.textContent ="ADD";
btn.classList.add("btn");
btn.classList.add("btn-primary");
btn.classList.add("mx-3");
let body=document.querySelector("body");
let colorInput=document.createElement("input");
colorInput.setAttribute("type","color");
let wrapper=document.createElement("div");
wrapper.append("btn,colorInput");
conatiner.append("wrapper");
btn.addEventListener("click",function(){
    let color=colorInput.value
    box.style.background=`${color}`;
})
