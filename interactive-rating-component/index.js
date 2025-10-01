const ratingArticle = document.querySelector(".article-rating");
const thanksArticle = document.querySelector(".article-thanks");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rateAgain");
const buttons = document.querySelectorAll(".btn");
const resultRating = document.getElementById("rating");

submit.addEventListener("click", () => {
  ratingArticle.classList.add("hidden");
  thanksArticle.classList.remove("hidden");
});
rateAgain.addEventListener("click", () => {
  thanksArticle.classList.add("hidden");
  ratingArticle.classList.remove("hidden");
});
buttons.forEach((rating) => {
  rating.addEventListener("click", () => {
    resultRating.innerHTML = rating.innerHTML;
  });
});
