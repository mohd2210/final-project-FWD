// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('mobile-nav');

// Below code for preventing nav from animating on 
// browser re-size modified from code found at
// this stackoverflow question and answer:
// https://goo.gl/6s3pAZ


btnMenu.addEventListener('click', openMenu);
// Prevents the focus state from activating
// btnMenu.addEventListener('mousedown', function(e){
   //e.preventDefault();
// });

function openMenu(){
    body.classList.toggle('show');
	nav.classList.add('activated');

	document.addEventListener('click', closeMenuOutsideClick);
}

//Close Menu if the user clicks outside the dropdown
function closeMenuOutsideClick(e) {
	const clickInsideMenu = nav.contains(e.target);
	const clickOnButton = btnMenu.contains(e.target); 

	if(!clickInsideMenu && !clickOnButton) {
		body.classList.remove('show');
		nav.classList.remove('activated'); 
		//Remove event listener after closing menu 
		document.removeEventListener('click', closeMenuOutsideClick);
	}
}

// Media Query Event Listener
// removes the "activated" class from the nav
// when user resizes browser

// Create a media query list using
// matchMedia
const mql = window.matchMedia('(min-width: 560px)');

// Add a Media Query Listener to the 
// above media query list
mql.addListener(removeTransition);

// Function to remove transition from the nav
// when user resizes browser to desktop
// screen width wider than 560px

function removeTransition(e){
	// e -> is the event object
	// e.matches -> stores a true false value
	// depending if the media query
	// list set above matches or not
	if(e.matches){
		body.classList.remove('show');
		nav.classList.remove('activated');
	}
}