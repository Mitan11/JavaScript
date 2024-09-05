console.log("Har Har Mahadev");

let countrySelect = document.getElementById("countrySelect");

function countryDropdown() {

    for (const key in countryList) {
        const option = document.createElement("OPTION");
        const country = document.createTextNode(key)
        option.appendChild(country);
        option.value = countryList[key];
        countrySelect.appendChild(option);
    }

}

countryDropdown();

countrySelect.addEventListener('change', () => {
    currentData(countrySelect.value);
});

async function currentData(c) {

    let countryCode = c || 'IN';

    const url = `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=${countryCode}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '143a23b810msh53827e76d05f54bp16eac1jsn5b6689f4a9e6',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();

    let selectedCountryName = null;

    for (const key in countryList) {
        if (countryList[key] === countryCode) {
            selectedCountryName = key;
            break;
        }
    }

    const countryName = document.getElementById("country").innerText = `${selectedCountryName}`;
    const confirmed = document.getElementById("confirmed").innerText = result[0].confirmed.toLocaleString();
    const recovered = document.getElementById("recovered").innerText = result[0].recovered.toLocaleString();
    const critical = document.getElementById("critical").innerText = result[0].critical.toLocaleString();
    const deaths = document.getElementById("deaths").innerText = result[0].deaths.toLocaleString();
    const lastChange = document.getElementById("lastChange").innerText = result[0].lastChange;
    const lastUpdate = document.getElementById("lastUpdate").innerText = result[0].lastUpdate;

}

currentData();