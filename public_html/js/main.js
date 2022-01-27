
$(document).on('click', 'a[href^="#"]', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
});

// Esto es para copiar la ip del servidor si es que aplica

// let t;
// $(document).ready(()=>{
// 	t = $(".ip").html();
// })
// $(document).on("click",".ip",()=>{
// 	let copy = document.createElement("textarea");
// 	copy.style.position = "absolute";
// 	copy.style.left = "-99999px";
// 	copy.style.top = "0";
// 	copy.setAttribute("id", "ta");
// 	document.body.appendChild(copy);
// 	copy.textContent = t;
// 	copy.select();
// 	document.execCommand("copy");
// 	$(".ip").html("<span class='extrapad'>IP copied!</span>");
// 	setTimeout(function(){
// 		$(".ip").html(t);
// 		var copy = document.getElementById("ta");
// 		copy.parentNode.removeChild(copy);
// 	},1000);
// });