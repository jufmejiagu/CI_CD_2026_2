const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-navigation");
const navigationLinks = document.querySelectorAll(".site-navigation a");

if (menuToggle && siteNavigation) {
	const closeMenu = () => {
		menuToggle.setAttribute("aria-expanded", "false");
		siteNavigation.classList.remove("is-open");
	};

	menuToggle.addEventListener("click", () => {
		const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
		menuToggle.setAttribute("aria-expanded", String(!isOpen));
		siteNavigation.classList.toggle("is-open", !isOpen);
	});

	navigationLinks.forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeMenu();
			menuToggle.focus();
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 760) {
			closeMenu();
		}
	});
}
