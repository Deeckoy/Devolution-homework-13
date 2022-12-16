const pizza = document.querySelector(".grid__item");

for (let i = 0; i < 9; i++) {
	const pizzaClone = pizza.cloneNode(true);

	document.querySelector(".grid").appendChild(pizzaClone);
}
