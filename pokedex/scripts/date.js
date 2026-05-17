// Update Year //
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

// Button save state script
    const button = document.getElementById("saveButton");

// const elements = document.querySelectorAll("#seenButton"); // must change button to elements
// Load saved state
    let savedState = localStorage.getItem("buttonState");
    if(savedState === "on"){
        button.classList.remove("off");
        button.classList.add("on");
        button.textContent = "ON";
    }
// Toggle button state
    button.addEventListener("click", () => {

        if(button.classList.contains("off")){
            button.classList.remove("off");
            button.classList.add("on");
            button.textContent = "ON";
// Save state
            localStorage.setItem("buttonState", "on");

        } else {
            button.classList.remove("on");
            button.classList.add("off");
            button.textContent = "OFF";
// Save state
            localStorage.setItem("buttonState", "off");
        }
    });
	
