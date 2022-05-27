// JavaScript Document
$(document).ready(function(){
	$(".navbar-toggle").click(function(){
		$(".menu").slideToggle()
	})
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
var typed = new Typed('.element',{
	strings:["Wed Designer.","Ps Desidner.","Brand Desidner."],
	typeSpeed:50,
	backSpeed:50,
	loop:true,
	
});