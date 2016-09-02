$(document).ready(function(){
	var img1on="img/22on.gif";
	$("#mascot .img_btns a").each(function(i){
		$(this).hover(function(){
			$("this").children("img").attr("src","img/22on.gif");
			$(".div_mascots .mascots"+(i+1)).show();
		}),
		function(){
			$("this").children("img").attr("src","img/22on.gif");
			$(".div_mascots .mascots"+(i+1)).hide();
		}
	})
})
