function user() {
    let l1 = document.getElementById("uname");
    let i1 = document.getElementById("unamel");
    if (i1.value == "") {
        l1.style.top = "16px";
        l2.style.fontSize = "14px";
    } else {
        l1.style.top = "4px";
        l2.style.fontSize = "12px";
    }
}


function handlePass() {
    let l2 = document.getElementById("upass");
    let i2 = document.getElementById("pass");
    if (i2.value == "") {
        l2.style.top = "16px";
        l2.style.fontSize = "14px";
    } else {
        l2.style.top = "6px";
        l2.style.fontSize = "12px";
    }
}


function Show(){
    let show = document.getElementById("so");
    let hide = document.getElementById("hid");
    let pass = document.getElementById("pass");
    show.style.display = "none";
    hide.style.display = "block";
    pass.type = "text";
}


function Hide() {
    let show = document.getElementById("so");
    let hide = document.getElementById("hid");
    let pass = document.getElementById("pass");
    hide.style.display = "none";
    show.style.display = "block";
    pass.type = "password";
}
