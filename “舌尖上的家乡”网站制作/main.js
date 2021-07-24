var curId = 0;
var arrScene = ["item1","item2","item3","item4"];
var arrColor = ["#3498db","#9b59b6","#e67e22","#1abc9c"];
$(document).ready(function(){
	$('.main-link').each(function(index){
		$(this).attr("index",index);
		$('#'+arrScene[index]).css("opacity",0);
		$(this).click(function(event){
			event.preventDefault();
			if (!TweenMax.isTweening($('body'))&&curId!=$(this).attr("index")){
				TweenMax.to($('#'+arrScene[curId]),.5,{top:"100%",opacity:0});
				curId = $(this).attr("index");
				TweenMax.to($('body'),1,{backgroundColor:arrColor[curId]});
				TweenMax.to($('#'+arrScene[curId]),.5,{top:"0%",opacity:1,delay:.5});
			}
		});
	});
	TweenMax.to($('#item1'),1,{opacity:1});
});
$('.item4-link').each(function(index){
	$(this).attr("index",index+1);
	$(this).click(function(event){
		event.preventDefault();
		$('#popup').addClass('show');
		$('#popup-content').addClass('show');
		$('#popup-holder').html($('#work'+$(this).attr("index")).html());
	});
});
$('#close,#popup-bg').click(function(event){
	event.preventDefault();
	$('#popup').removeClass('show');
	$('#popup-content').removeClass('show');
});
$(window).resize(function(){
	resizePage();
});
function resizePage(){
	$('#item2').css("padding-top",$(window).height()*.35 + "px");
	$('#item3').css("padding-top",$(window).height()*.3 + "px");
	$('#item4').css("padding-top",$(window).height()*.35 + "px");
}
resizePage();
