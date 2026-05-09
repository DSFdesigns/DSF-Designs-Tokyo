// Update Year //
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

// Save state on SAVE button click //
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', (), => {
	// Example: toggle a 'clicked' state //
	const isClicked = true;
	localStorage.setItem('buttonState', isClicked);
});

// Restore the state on load //
window.onload = () => {
	const savedState = localStorage.getItem('buttonState');
	if (savedState === 'true') {
		document.getElementById('myButton').disabled = true; // Or any other
	}
};
// 