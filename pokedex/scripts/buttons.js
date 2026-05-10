    const button = document.getElementById("saveButton");
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