var link = document.querySelector(".open-btn");
var popup = document.querySelector(".modal");
		
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adult = popup.querySelector("[name=adult]");
var kids = popup.querySelector("[name=kids]");

popup.classList.add("modal-hide");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("adult" && "kids");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-hide");
	popup.classList.add("modal-animation");
	popup.classList.remove("modal-error");
			
	if (storage) {
		adult.value = storage;
		kids.value = storage;
	}
	arrival.focus();
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value || !adult.value ||!kids.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
		else {
		if (isStorageSupport) {
			localStorage.setItem("adult", adult.value && "kids", kids.value);
		}
	}
});