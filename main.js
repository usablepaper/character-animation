document.addEventListener("DOMContentLoaded", function () {
    const sun = document.querySelector(".sun");
    const moon = document.querySelector(".moon");

    sun.addEventListener("click", function () {
        document.querySelector("body").classList.add("day");
    });
    moon.addEventListener("click", function () {
        document.querySelector("body").classList.remove("day");
    });
});
