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

var main = function () {

/*$('.leftmenu a').bind('click',function() {
data=$(this).attr('data-title');
data2=$(this).attr('data-body');
console.log(data);
$('.tel').html(data); 
 $('.tel').append(data2);    

});*/
    
$('.text').bind({'mouseenter' : function () {
$(this).css('display', 'none');
$('.knopka').css({'display':"block"});

},
 'mouseleave':function() { 
 $(this).css('display', 'block');    
$('.knopka').css({'display':"none"});
     
} 
});
 
};
$(document).ready(main);