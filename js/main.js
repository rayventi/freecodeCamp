$(document).ready(function(){
	var img_on=new Array();
	img_on[0]="img/22on.gif";
	img_on[1]="img/33on.gif";
	img_on[2]="img/tvon.gif";
	var img_off=new Array();
	img_off[0]="img/22.gif";
	img_off[1]="img/33.gif";
	img_off[2]="img/tv.png";
	$("#mascot .img_btns a").each(function(i){
		$(this).hover(function(){
			$(this).children("img").attr("src",img_on[i]);
			$(".div_mascots .mascots"+(i+1)).fadeIn("slow");
		},function(){
			$(this).children("img").attr("src",img_off[i]);
			$(".div_mascots .mascots"+(i+1)).fadeOut("fast");
		}
		)
	})
})
