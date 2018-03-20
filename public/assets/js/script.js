window.onscroll = function() {myFunction()};
window.onresize = function() {resizeScreen()};

resizeScreen();
// Get the header

function resizeScreen() {
	var header = document.getElementById("header");
	document.getElementById("home").style.height = screen.height+ "px";
}


// Get the offset position of the navbar
var sticky = header.offsetTop + screen.height;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	var sticky = header.offsetTop + screen.height;
  if (window.pageYOffset > sticky) {
  	header.style.display = "block";
    header.classList.add("sticky");
  } else {
  	header.style.display = "none";
    header.classList.remove("sticky");
  }
}


$("#downarrow").on("click", function(){
	$("#rest").css("display", "block");
	$("body").css("position", "relative");
});

$("#crashpad-img").on("mouseover", function(){
	$("#crashpad-img-text").css("display", "block");
});
$("#crashpad-img").on("mouseleave", function(){
	$("#crashpad-img-text").css("display", "none");
});
$("#pets-img").on("mouseover", function(){
	$("#pets-img-text").css("display", "block");
});
$("#pets-img").on("mouseleave", function(){
	$("#pets-img-text").css("display", "none");
});
$("#scraper-img").on("mouseover", function(){
	$("#scraper-img-text").css("display", "block");
});
$("#scraper-img").on("mouseleave", function(){
	$("#scraper-img-text").css("display", "none");
});
$("#dev-img").on("mouseover", function(){
	$("#dev-img-text").css("display", "block");
});
$("#dev-img").on("mouseleave", function(){
	$("#dev-img-text").css("display", "none");
});

function enterText(){
	$("#code").removeClass("out");
	$("#code").addClass("in");
	$("#ui-ux").removeClass("out");
	$("#ui-ux").addClass("in");
}

function exitText(){
	$("#code").removeClass("in");
	$("#code").addClass("out");
	$("#ui-ux").removeClass("in");
	$("#ui-ux").addClass("out");
}

function animateText(){
	enterText();
	setTimeout(exitText, 3000);
}
setTimeout(enterText, 2000);
setInterval(animateText, 5000);

var showText = function (target, message, index, interval) { 
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }


}

function showTextFunc (target, message, index, interval){
	$(target).empty();

	showText(target, message, index, interval);

}



setInterval(showText('#msg', 'I Design & Build Custom Web Applications', 0, 100), 3000);