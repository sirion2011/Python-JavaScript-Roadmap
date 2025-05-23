const pythonButton = document.querySelector(".python-button")
const javaScriptButton = document.querySelector(".javascript-button")
const homePageButton = document.querySelector(".home-button")
const backScreenButton = document.querySelector(".back-button")
const homeScreenText = document.querySelector(".page-title")
const jsBackButton = document.querySelector(".js-back-button")
const footerImgLogo = document.querySelector(".footerImg")

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

if (backScreenButton){
    backScreenButton.addEventListener("click", () => {
        window.location.href = "/pages/pythonPage.html"
    })
}

if (homeScreenText){
    homeScreenText.title = "Главный экран"
    homeScreenText.style.cursor = "pointer"
    homeScreenText.addEventListener("click", () => {
        window.location.href = "/index.html"
    })
}

if (jsBackButton){
    jsBackButton.addEventListener("click", () => {
        window.location.href = "/pages/javaScriptPage.html"
    })
}

if (footerImgLogo){
    footerImgLogo.addEventListener("click", () => {
        window.location.href = "/index.html"
    })
}