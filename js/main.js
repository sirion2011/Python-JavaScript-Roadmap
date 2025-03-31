const pythonButton = document.querySelector(".python-button")
const javaScriptButton = document.querySelector(".javascript-button")

pythonButton.addEventListener("click", () => {
    window.location.href = "/pages/pythonPage.html"
})

javaScriptButton.addEventListener("click", () => {
    window.location.href = "/pages/javaScriptPage.html"
})