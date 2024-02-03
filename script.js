document.addEventListener("DOMContentLoaded", function (event) {
	// Select the hamburger menu icon and the navigation bar
	const hamburger = document.querySelector(".hamburger");
	const navbar = document.querySelector("nav");
	const navElements = document.querySelectorAll("nav li, nav button");

	// Check if the hamburger element exists
	if (hamburger) {
		// Add a click event listener to the hamburger menu icon
		hamburger.addEventListener("click", () => {
			// Toggle the "active" class on the hamburger menu icon
			[hamburger].forEach((el) => el.classList.toggle("active"));
			// Toggle the "active" class on the navigation bar
			navbar.classList.toggle("active");

			// Toggle the body's overflow property to control scrolling
			document.body.style.overflow =
				document.body.style.overflow === "hidden" ? "auto" : "hidden";

			navElements.forEach((element) => {
				element.addEventListener("click", () => {
					// Remove the "active" class from the hamburger menu icon
					[hamburger].forEach((el) => el.classList.remove("active"));
					// Remove the "active" class from the navigation bar
					navbar.classList.remove("active");

					// Set the body's overflow property to "auto" to allow scrolling
					document.body.style.overflow = "auto";
				});
			});
		});
	}

	// Select all elements with the class "dPane"
	const dPanes = document.querySelectorAll(".dPane");

	// Function to handle the fade-in effect on scroll
	function fadeIn() {
		// Loop through each "dPane" class element
		dPanes.forEach((dPane, index) => {
			// Get the bounding rectangle of the "dPane" class element
			const bounding = dPane.getBoundingClientRect();

			// Check if the "dPane" class element is in the viewport
			if (
				bounding.top >= 0 &&
				bounding.bottom <=
					(window.innerHeight ||
						document.documentElement.clientHeight) &&
				bounding.left >= 0 &&
				bounding.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			) {
				// Set a timeout to gradually change the opacity for a fade-in effect
				setTimeout(() => {
					dPane.style.opacity = "1";
				}, index * 1000);
			}
		});
	}

	// Add a scroll event listener to trigger the fade-in effect on scroll
	window.addEventListener("scroll", fadeIn);

	// Trigger the fadeIn function once on page load
	fadeIn();
});
