(function () {
	const header = () => {
		$("[data-hover-opacity]").hover(
			function () {
				const id = $(this).data("hover-opacity");
				$(`[data-hover-opacity=${id}]`).addClass("opacity");
				$(this).removeClass("opacity");
			},
			function () {
				const id = $(this).data("hover-opacity");
				$(`[data-hover-opacity=${id}]`).removeClass("opacity");
			}
		);

	};

	document.addEventListener("shopify:section:load", header);
	header();
})();
