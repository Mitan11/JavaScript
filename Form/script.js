function valid(iField , errorId) {

    if (iField.value === "") {
        document.getElementById(errorId).style.display = "block";
    }
    else {
        document.getElementById(errorId).style.display = "none";
    }

}