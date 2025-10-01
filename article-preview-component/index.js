const button = document.querySelector(".container .button");
const shareBtn = document.querySelector(".container .share-button");
const share = document.querySelector(".share");
const triangle = document.querySelector(".triangle");

button.addEventListener("click", () => {
    if(share.classList.contains("hidden")) {
        share.classList.remove("hidden");
        triangle.classList.remove("hidden");
        button.style.backgroundColor = "hsl(214, 17%, 51%)";
        shareBtn.style.fill = "white";
    } else {
        share.classList.add("hidden");
        triangle.classList.add("hidden");
        button.style.backgroundColor = "";
        shareBtn.style.fill = "";
    }
})