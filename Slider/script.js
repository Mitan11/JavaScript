const divs = document.querySelectorAll('.Slid-1');
let currentDiv = 0;

function hideDivs() {
    divs.forEach(div => {
        div.style.display = 'none';
    });
}

function showDiv(index) {
    hideDivs();
    divs[index].style.display = 'flex';
}

showDiv(currentDiv);

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