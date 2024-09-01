const divs = document.querySelectorAll('.Slid-1');
let currentDiv = 0;

divs[currentDiv].style.display = 'flex';

function hideDivs() {
    divs.forEach(div => {
        div.style.display = 'none';
    });
}

function prevSlide() {
    currentDiv--;
    if (currentDiv < 0) {
        currentDiv = divs.length - 1;
    }
    hideDivs();
    divs[currentDiv].style.display = 'flex';
}

function nextSlide() {
    currentDiv++;
    if (currentDiv >= divs.length) {
        currentDiv = 0;
    }
    hideDivs();
    divs[currentDiv].style.display = 'flex';
}

setInterval(nextSlide, 4000);