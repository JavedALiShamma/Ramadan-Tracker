// Here we need to add the event Listner for the dragger
let dragIndicator=document.querySelector("#drag_indicator");
dragIndicator.addEventListener("click",function(){
//    Here we need to toogle day-col
 // call the days-col
 let daysCol=document.querySelector(".days-col");
 daysCol.classList.toggle("display-off");
})
// Here we need a API to calculate the date of the system
// Step 1 we need the date
const dateToday=new Date();
// Now we have to check the following 
if(dateToday.getDate()==24 && (dateToday.getMonth()+1)==2){
    /// Here we need to add roza Day now 
    let rozaNumber=document.getElementById("roza-number");
    rozaNumber.innerHTML="2";
}

