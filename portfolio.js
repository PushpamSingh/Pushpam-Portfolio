let aboutbtn=document.querySelector("#aboutbtn");
let crossbtn=document.querySelector(".cross");
let popup=document.querySelector(".popup");

aboutbtn.addEventListener("click",()=>{
    popup.classList.add("open");
})
crossbtn.addEventListener("click",()=>{
    popup.classList.remove("open");
})

let modelogo=document.querySelector(".modelogo");
let sunbtn=document.querySelector(".sun");
let moonbtn=document.querySelector(".moon");
let projectsec=document.querySelector("#projects");
let body=document.querySelector("body");
let labels=document.querySelectorAll("form label");
let projectleft=document.querySelectorAll("#project1-lap");
let projectright=document.querySelectorAll("#project2-lap");
let mode="light";

modelogo.addEventListener("click", ()=>{
        if(mode==="light"){
            mode = "dark";
        body.classList.add("bg-black");
        body.classList.remove("bg-white");
        moonbtn.classList.remove("hidden");
        sunbtn.classList.add("hidden");
        labels.forEach(label => { // loop through each label
            label.classList.add("text-white");
            label.classList.remove("text-black");
        });
        projectleft.forEach(img =>{
            img.classList.add("shadow-dark");
            img.classList.remove("shadow-light");
        });
        projectright.forEach(img =>{
            img.classList.add("shadow-dark");
            img.classList.remove("shadow-light");
        });
        }
        else{
            mode = "light";
        body.classList.add("bg-white");
        body.classList.remove("bg-black");
        moonbtn.classList.add("hidden");
        sunbtn.classList.remove("hidden");
        labels.forEach(label => { // loop through each label
            label.classList.remove("text-white");
            label.classList.add("text-black");
        });
        projectleft.forEach(img =>{
            img.classList.remove("shadow-dark");
            img.classList.add("shadow-light");
        })
        projectright.forEach(img =>{
            img.classList.remove("shadow-dark");
            img.classList.add("shadow-light");
        })
        }
})
