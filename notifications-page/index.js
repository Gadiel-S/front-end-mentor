const notifications = document.querySelectorAll(".notification");
const circles = document.querySelectorAll(".circle");
const cleaner = document.querySelector(".panel-button");
const unread = document.querySelectorAll(".new");
const number = document.getElementById("number");

number.innerText = unread.length;

notifications.forEach((notification, index) => {
    notification.addEventListener("click", () => {
        if(notification.classList.contains("new")) {
            notification.classList.remove("new");
            circles[index].classList.remove("circle");
        }
        let newUnread = document.querySelectorAll(".new");
        number.innerText = newUnread.length;
    })
});

cleaner.addEventListener("click", () => {
    notifications.forEach((notification) => {
        notification.classList.remove("new");
    })
    circles.forEach((circle) => {
        circle.classList.remove("circle");
    })
    number.innerText = "0";
})