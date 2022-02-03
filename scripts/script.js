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
