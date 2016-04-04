/*$(function(){

$('.topmenu a').bind({'mouseover': function() {
data=$(this).attr('data-url');
//console.log(data);	
$('#header').css('background', 'url('+data+')');	
	
	},
 'mouseout':function() {
	
$('#header').css('background', 'url(media/img/topcurves.png) center top repeat-x' );		
	
	}
	});


});*/

$(function(){

$('.leftmenu a').bind('click',function() {
data=$(this).attr('data-title');
data2=$(this).attr('data-body');
console.log(data);
$('.task').text(data); 
 $('.task').append('<br>',data2);    

});
   


});