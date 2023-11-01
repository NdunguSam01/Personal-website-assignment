const year=new Date().getFullYear();
const date= document.getElementById("year")
date.innerHTML=year;

//Ease in effect
const header=document.getElementById("header");
document.addEventListener("DOMContentLoaded",()=>
{
    header.style.opacity="1";
})