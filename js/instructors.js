$(document).ready(function(){
	$("li img").click(function(){
		var imgsrc=$(this).attr("src");
		imgsrc= imgsrc.split("/");
		imgsrc= imgsrc[imgsrc.length-1];
		console.log(imgsrc);
		$("#displayer").attr("src","/Users/stephenchong/Desktop/web dev class/PumpkinCarvingLessons/assets/full/"+imgsrc);
	});
});

