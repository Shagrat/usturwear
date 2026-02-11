(function () {
	const announcementSlider = () => {
		$(".announcement-bar__box").each(function () {
			const $box = $(this);
			const speed = $box.data("announcement-speed") * 1000;
			const count = $box.data("announcement-count");
			
			if (count <= 1) return;
			
			let currentIndex = 0;
			let autoplayInterval;
			
			const $texts = $box.find('.announcement-bar__text');
			const $prevBtn = $box.find('.announcement-bar__button--prev');
			const $nextBtn = $box.find('.announcement-bar__button--next');
			
			const showSlide = (index) => {
				$texts.removeClass('active');
				$texts.eq(index).addClass('active');
				currentIndex = index;
			};
			
			const nextSlide = () => {
				const nextIndex = (currentIndex + 1) % count;
				showSlide(nextIndex);
			};
			
			const prevSlide = () => {
				const prevIndex = (currentIndex - 1 + count) % count;
				showSlide(prevIndex);
			};
			
			const startAutoplay = () => {
				if (speed > 0) {
					autoplayInterval = setInterval(nextSlide, speed);
				}
			};
			
			const stopAutoplay = () => {
				if (autoplayInterval) {
					clearInterval(autoplayInterval);
				}
			};
			
			// Navigation button handlers
			$nextBtn.on('click', function() {
				stopAutoplay();
				nextSlide();
				startAutoplay();
			});
			
			$prevBtn.on('click', function() {
				stopAutoplay();
				prevSlide();
				startAutoplay();
			});
			
			// Start autoplay
			startAutoplay();
			
			// Pause on hover
			$box.on('mouseenter', stopAutoplay);
			$box.on('mouseleave', startAutoplay);
		});
	};
	
	// Initialize
	announcementSlider();
	
	// Reinitialize on section load
	document.addEventListener("shopify:section:load", function () {
		announcementSlider();
	});
	
	// Handle visibility change
	document.addEventListener("visibilitychange", function () {
		if (!document.hidden) {
			announcementSlider();
		}
	});
})();
