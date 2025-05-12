// Open Modal
function openModal(id) {
	document.getElementById(id + "Modal").style.display = "block";
}

// Close Modal
function closeModal(id) {
	document.getElementById(id + "Modal").style.display = "none";
}

// Close modal if clicking outside of it
window.onclick = function(event) {
	const modals = document.getElementsByClassName("modal");
	for (let i = 0; i < modals.length; i++) {
		if (event.target == modals[i]) {
			modals[i].style.display = "none";
		}
	}
};
