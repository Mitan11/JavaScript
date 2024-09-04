console.log("Hello");

const breeddropdown = document.getElementById("breeddropdown");

async function getDogData() {

    const apiData = await fetch('https://dog.ceo/api/breeds/list/all');

    const data = await apiData.json();

    const dogBreedData = data.message;

    Object.keys(dogBreedData).forEach(breed => {
        const option = document.createElement("OPTION");
        option.innerText = breed;
        option.value = breed;
        breeddropdown.appendChild(option);
    });
}

getDogData();

breeddropdown.addEventListener('change', async (e) => {
    console.log(breeddropdown.value);
    const inputBreed = breeddropdown.value;

    // Fetch all images for the selected breed
    const fApi = await fetch(`https://dog.ceo/api/breed/${inputBreed}/images`);
    const dogData = await fApi.json();

    console.log(dogData);

    const dogcard = document.getElementById("dogcard");
    const heading = document.getElementById("heading");
    heading.innerText = inputBreed.charAt(0).toUpperCase() + inputBreed.slice(1).toLowerCase();
    dogcard.innerHTML = '';

    dogData.message.forEach(imageUrl => {
        const cardHtml = `
        <div class="col">
            <div class="card h-100">
                <img style="height: 200px; object-fit: cover; object-position: center;"
                    src="${imageUrl}" class="card-img-top"
                    alt="${inputBreed}">
            </div>
        </div>`;

        dogcard.innerHTML += cardHtml;
    });
});

async function allDog() {
    const fApi = await fetch(`https://dog.ceo/api/breeds/image/random/50`);
    const dogData = await fApi.json();

    console.log(dogData);

    const dogcard = document.getElementById("dogcard");

    dogcard.innerHTML = '';

    dogData.message.forEach(imageUrl => {
        const cardHtml = `
        <div class="col">
            <div class="card h-100">
                <img style="height: 200px; object-fit: cover; object-position: center;"
                    src="${imageUrl}" class="card-img-top"
                    alt="" loading="lazy">
            </div>
        </div>`;

        dogcard.innerHTML += cardHtml;
    });
}
allDog();