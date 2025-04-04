const pythonButton = document.querySelector(".python-button")
const javaScriptButton = document.querySelector(".javascript-button")
const homePageButton = document.querySelector(".home-button")

if (pythonButton) {
    pythonButton.addEventListener("click", () => {
        window.location.href = "/pages/pythonPage.html";
    });
}

if (javaScriptButton){
    javaScriptButton.addEventListener("click", () => {
        window.location.href = "/pages/javaScriptPage.html"
    })
}

if (homePageButton){
    homePageButton.addEventListener("click", () => {
        window.location.href = "/index.html"
    })
}

