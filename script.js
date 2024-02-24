// Here we need to add the event Listner for the dragger
let dragIndicator=document.querySelector("#drag_indicator");
dragIndicator.addEventListener("click",function(){
//    Here we need to toogle day-col
 // call the days-col
 let daysCol=document.querySelector(".days-col");
 daysCol.classList.toggle("display-off");
})