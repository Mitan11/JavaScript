let open = document.getElementById("open");
let close = document.getElementById("close");

open.addEventListener("click", function () {

    document.getElementById("mnav").style.right = "0";

});
close.addEventListener("click", function () {

    document.getElementById("mnav").style.right = "-100%";

});

window.addEventListener('resize', function () {
    let width = window.innerWidth;
    if (width > 767) {
        document.getElementById("mnav").style.right = "-100%";
    }
});

let icon = document.querySelector("#mode i");
let links = document.querySelectorAll(".menu-item a");
let mobileLinks = document.querySelectorAll(".m-nav a");

mode.addEventListener("click", function () {

    modeclass.classList.toggle("bg-black");
    modeclass.classList.toggle("darkMode");
    mnav.classList.toggle("bg-black");
    mnav.classList.toggle("darkMode");

    if (head.classList.contains("bg-body-tertiary")) {
        head.classList.remove("bg-body-tertiary");
        head.classList.add("bg-dark");
    } else {
        head.classList.remove("bg-dark");
        head.classList.add("bg-body-tertiary");
    }

    links.forEach(element => {
        element.classList.toggle("text-white");
    });

    mobileLinks.forEach(link => {
        link.classList.toggle("text-white");
    });

    if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
    icon.classList.toggle("text-white");

})

