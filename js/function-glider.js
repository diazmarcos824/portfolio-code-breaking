window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.container__pointer',
		arrows: {
			prev: '.left--arrow',
			next: '.right--arrow'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			breakpoint: 775,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			  // screens greater than >= 1024px
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
			}
		]
    });
})