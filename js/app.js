document.querySelectorAll('.slider').forEach((item, idx) => {
	window[`slider${idx + 1}`] = new Swiper(item, {
		freeMode: true,
		centeredSlides: false,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		autoplay: true,
	});
});
bindSwipers(slider1, slider2, slider3, slider4);

/* 
const sliders = ['.slider1', '.slider2', '.slider3', '.slider4'];
sliders.forEach((item, idx) => {
	window[`slider${idx + 1}`] = new Swiper(item, {
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
	});
});
 */
