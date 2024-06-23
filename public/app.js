const $menu = document.querySelector("#menu");
const $button = document.querySelector("#boton");

$button.addEventListener("click", () => {
	$menu.classList.toggle("hidden");
});
