$(document).ready(function(){

event.preventDefault();

// ORIGINAL LANDING PAGE
$('#landing').click(showDivisions)
	function showDivisions(){
		$('#container').show();
		$('#landing').slideUp();
	}

//SEE NOTE #1
// $('#section-001').click(showStudio)
// $('#section-002').click(showAgency)
// $('#section-003').click(showAbout)

// click division 
// hide all summaries
// show summary of selected division

$('.divisions').click(showSummary)

function showSummary(){
	$('.summary').slideUp();
	$(this).next().slideToggle();
}

//REFACTORED ABOVE
// function showStudio(){
// 	$('.summary').hide();
// 	$('#studio').slideToggle();
// }

// function showAgency(){
// 	$('.summary').hide();
// 	$('#agency').slideToggle();
// }

// function showAbout(){
// 	$('.summary').hide();
// 	$('#about').slideToggle();
// }

// *** PORTFOLIO PAGE
$('#sub-nav').click(showNav)
	function showNav(){
		$('#nav-002').slideDown();
	}

// *** GALLERY SELCTION VIA SUB-NAV USING CLASSES
// 1. Click sub-category in navigation
// 2. Hide all categories
// 3. Show thumbnails with selected sub-category's class
// 4. Click 'all' to show all thumbnails

$('#category-001').click(showProducts)
	function showProducts(){
		$('.thumbnail').hide();
		$('.product').show();
	}

$('#category-002').click(showPlaces)
	function showPlaces(){
		$('.thumbnail').hide();
		$('.place').show();
	}

$('#category-003').click(showGraphics)
	function showGraphics(){
		$('.thumbnail').hide();
		$('.graphic').show();
	}

$('#category-004').click(showInteractive)
	function showInteractive(){
		$('.thumbnail').hide();
		$('.interactive').show();
	}

$('#category-005').click(showPrint)
	function showPrint(){
		$('.thumbnail').hide();
		$('.print').show();
	}

$('#category-all').click(showAll)
	function showAll(){
		$('.thumbnail').show();
}

$('.title-bar').click(showInfo)
	function showInfo(){
		// $('.title-bar').hide();
		$('.project-info').slideDown();
		$('.title-bar em').html("-");
}

$('.project-info').click(hideInfo)
	function hideInfo(){
		$('.project-info').slideUp();
		$('.title-bar em').html("+");
}

});

//***ISSUES TO ADDRESS***
// 	1. How to refactor these with class/ids?
//  2. Can I add text next to the cursor when I
// 	hover over a thumbnail on the portfolio page?

