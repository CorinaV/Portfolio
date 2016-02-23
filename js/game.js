document.getElementById("circle1").onclick=function() {
  document.getElementById("circle1").style.backgroundColor="transparent";
}

document.getElementById("circle2").onclick=function() {
  document.getElementById("circle2").style.backgroundColor="transparent";
}

document.getElementById("circle3").onclick=function() {
  document.getElementById("circle3").style.backgroundColor="transparent";
}
document.getElementById("circle4").onclick=function() {
  document.getElementById("circle4").style.backgroundColor="transparent";
}

 setTimeout(function(){
   if (document.getElementById("circle1").style.backgroundColor=="transparent" &&
       document.getElementById("circle2").style.backgroundColor=="transparent" &&
       document.getElementById("circle3").style.backgroundColor=="transparent" &&
       document.getElementById("circle4").style.backgroundColor=="transparent" ){
     alert("Thank you for saving the design! Refresh page to re-start.");
   }else{
     alert("Oh no! Too slow! Refresh and try again!");
   }
 }, 5000);
