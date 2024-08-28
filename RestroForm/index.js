console.log("Hello");


const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const guests = document.getElementById("guests");
const specialRequests = document.getElementById("specialRequests");



submit.addEventListener('click', () => {
    const booking = {
        Name: name.value,
        Email: email.value,
        Phone: phone.value,
        Date: date.value,
        Time: time.value,
        Guests: guests.value,
        SpecialRequests: specialRequests.value
    }

    localStorage.setItem("RegTable", JSON.stringify(booking));
    window.location.href = "./userInputData.html";
});  
