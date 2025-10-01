const url = "https://api.adviceslip.com/advice";
const advNumber = document.querySelector(".number");
const advContainer = document.querySelector(".advice");
const loading = document.querySelector(".loading");
const button = document.querySelector(".dice");

async function getAdvice() {

    const response = await fetch(url);
    const data = await response.json();
    const advice = data.slip.advice;
    const number = data.slip.id;

    loading.classList.add("hide");
    advNumber.innerText = number;
    const span = document.createElement("span");
    span.innerText = advice;
    advContainer.appendChild(span);

}

button.addEventListener("click", () => {
    advContainer.innerText = "";
    loading.classList.remove("hide");
    getAdvice();
})

getAdvice();