function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
} 
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
} 

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("side-nav-outer");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(document).ready(function(){
  $("#tabcontent-bottom").click(function(){
    $(this).addClass("active");
    $(".tabs-bottom").show().fade();
  });
});

// canvas
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.beginPath(); 
ctx.lineWidth="1";
ctx.setLineDash([10,5]);
ctx.strokeStyle="#14A5E8"; 
ctx.moveTo(15,30);
ctx.lineTo(550,270);
ctx.stroke(); 
// end for canvas