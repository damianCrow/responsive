$(function(){
	
$("#menu").click(function(){
  $("#header-ul").slideToggle(1000);
});

$(window).on('resize', function(){
    
    if($(this).width() > 640) {
      
      $("#header-ul").removeAttr('style');
    }
 }); 
 });
  