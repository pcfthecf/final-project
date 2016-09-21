$(document).ready(function(){

event.preventDefault();

$('#landing').click(showDivisions)
	function showDivisions(){
		$('#container').slideToggle();
		$('#landing').slideUp();
	}

//SEE NOTE #1
$('#section-001').click(showStudio)
$('#section-002').click(showAgency)
$('#section-003').click(showAbout)

//SEE NOTE #2
function showStudio(){
	$('#studio').slideToggle();
}

function showAgency(){
	$('#agency').slideToggle();
}

function showAbout(){
	$('#about').slideToggle();
}

$('#sub-nav').click(showNav)
	function showNav(){
		$('#nav-002').slideDown();
	}

//***ISSUES TO ADDRESS***
// 	1. How to refactor these with class/ids?
//	2. How to hide other sections on main page when one is open
//	3. How to show/hide thumbnails by class
// 	4. How to animate landing page logo?

});

