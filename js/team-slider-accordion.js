document.addEventListener("DOMContentLoaded", function() {
	//Get all accordion items fro mthe DOM
	const items = document.querySelectorAll(".accordion-item");
	//Loop through each accordion item
	items.forEach((item) => { 
		//Add click event to each item
		item.addEventListener("click", () => {

			items.forEach((item) => { 
				item.classList.remove("item-active");
			});
			item.classList.add("item-active");
		})
	})

});