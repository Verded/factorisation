$(function () {
	        $("div[class='dragx']").draggable({
	                containment: "#box",
	                scroll: false
	        });
	});

function appendText() {
    var squareblue = "<p>Text.</p>";               // Create element with HTML  
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, txt3);      // Append the new elements 
}

$("squareblue").css("width": "210px", "height": "210px", "background": "blue", "border-width": "1px", "border-style" : "solid");
