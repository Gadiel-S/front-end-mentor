const content = document.querySelectorAll(".content");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

content.forEach((block, index) => {
    block.addEventListener("click", () => {
        if(answers[index].classList.contains("hidden")) {
            answers[index].classList.remove("hidden");
            arrows[index].classList.add("rotate");
            questions[index].style.fontWeight = "900";
        } else {
            answers[index].classList.add("hidden");
            arrows[index].classList.remove("rotate");
            questions[index].style.fontWeight = "400";
        }
    })
})