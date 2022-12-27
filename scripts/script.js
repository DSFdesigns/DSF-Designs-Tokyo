// hamburger menu //
const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mainMenu.classList.toggle("active");
})

document.querySelectorAll(".main-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	mainMenu.classList.remove("active");
}))

// Lightbox //
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.img')
images.forEach(image => {
	image.addEventListener('click', e => {
		lightbox.classList.add('active')
		const img = document.createElement('img')
		img.src = image.src
		while (lightbox.firstChild) {
			lightbox.removeChild(lightbox.firstChild)
		}
		lightbox.appendChild(img)
	})
})

lightbox.addEventListener('click', e => {
	if (e.target !== e.currentTarget) return
	lightbox.classList.remove('active')
})

// Update Year //
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

/* Change Cursor 
var elms = document.getElementByIdTagName("*");
var n = elms.length;
for(var i = 0; i < n; i ++) {
	if(window.getComputedStyle(elms[i]).cursor == "pointer") {
		elms[i].style.cursor = "url(newcursor.ico)";
	}
}
*/