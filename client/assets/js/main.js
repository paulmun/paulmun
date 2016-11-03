$(document).ready(function(){
	var menu = false
	$('#mobileMenu').click(function(){
		console.log('clicked');
		if(!menu){
			$('#menuShow').toggle();
			menu = true;
			$('#Logo1').css('stroke: #000000');
			$('#mobileMenu span').css('background-color: #252e35')
		}
	});
});