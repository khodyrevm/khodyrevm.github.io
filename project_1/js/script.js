menu.onclick = function myFunction(){
	let nav = document.getElementById("myTopnav")
	if(nav.className === "topnav"){
		nav.className += " responsive";
	} else {
		nav.className = "topnav";
	}
}

$('.carousel').carousel({
  interval: 5000,
  pause: false
})