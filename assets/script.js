const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_menu_close = document.querySelector('.menu-close');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	mobile_menu_close.addEventListener('click', function () {
		mobile_menu.classList.remove('is-active');
		menu_btn.classList.remove('is-active');
	});