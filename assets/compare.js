(function () {
	const twentytwenty = () => {
		const twentytwentySlider = $(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5});
	}
	twentytwenty();
	document.addEventListener('shopify:section:load', function () {
		twentytwenty();
	});
})();
