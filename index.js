var wrapper = document.querySelector(".toggle-wrapper");

wrapper.addEventListener("click", () => {
	let toggle = document.querySelector(".toggle");
	toggle.classList.toggle("toggled-right");
	toggle.classList.toggle("toggled-left");
	switchPrices();
});

const switchPrices = () => {
	const prices = {
		annual: {
			basic: 199.99,
			professional: 249.99,
			master: 399.99,
		},

		monthly: {
			basic: 19.99,
			professional: 24.99,
			master: 39.99,
		},
	};

	let priceList = document.querySelectorAll("span");
	priceList[0].classList.value === "annual"
		? priceList.forEach((el) => {
				el.innerText = prices.monthly[el.id];
				el.classList.value = "monthly";
		  })
		: priceList.forEach((el) => {
				el.innerText = prices.annual[el.id];
				el.classList.value = "annual";
		  });
};
