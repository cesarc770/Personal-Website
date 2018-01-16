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

var showText = function (target, message, index, interval) { 
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }


}

function showTextFunc (target, message, index, interval){
	alert("hey");
	$(target).empty();

	showText(target, message, index, interval);

}

setInterval(showText('#msg', 'I Design & Build Custom Web Applications', 0, 100), 3000);