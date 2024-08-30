console.log("Wellcome");
const modal = new bootstrap.Modal(document.getElementById('replaceAll'));
const modal1 = new bootstrap.Modal(document.getElementById('sliceText'));

const iTextArea = document.getElementById('sInput');
const oTextArea = document.getElementById('sOutput');
const lCount = document.getElementById('letter');
const wCount = document.getElementById('wCount');
const noVal = document.getElementById("noValue");

function textAreaVal() {
    oTextArea.value = iTextArea.value;
}

function count() {
    if (iTextArea.value === '') {
        wCount.innerText  = 0;
    }
    else {
        lCount.innerText = iTextArea.value.length;
        wCount.innerText = (iTextArea.value.trim().split(/\s+/)).length;
    }
}

function upperCase() {
    if (oTextArea.value) {
        noVal.style.display = "none";
        iTextArea.style.borderColor = "#dee2e6";
        iTextArea.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
        oTextArea.value = oTextArea.value.toUpperCase();
    }
    else {
        noVal.style.display = "block";
        iTextArea.style.borderColor = "red";
        iTextArea.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        iTextArea.focus();
    }
}

function lowerCase() {
    if (oTextArea.value) {
        noVal.style.display = "none";
        iTextArea.style.borderColor = "#dee2e6";
        iTextArea.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
        oTextArea.value = oTextArea.value.toLowerCase();
    }
    else {
        noVal.style.display = "block";
        iTextArea.style.borderColor = "red";
        iTextArea.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        iTextArea.focus();
    }
}

function valid(flag) {
    if (iTextArea.value) {
        noVal.style.display = "none";
        iTextArea.style.borderColor = "#dee2e6";
        iTextArea.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
        (flag === 1) ? modal.show() : modal1.show();
    }
    else {
        modal.hide();
        noVal.style.display = "block"
        iTextArea.style.borderColor = "red";
        iTextArea.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        iTextArea.focus();
    }
}

function Replace() {
    const strToReplace = document.getElementById("strToReplace");
    const replacementStr = document.getElementById("replacementStr");
    const rNoVal = document.getElementById("RnoValue");
    const RepNoVal = document.getElementById("RepNoValue");

    if (strToReplace.value && replacementStr.value) {
        if (oTextArea.value.includes(strToReplace.value)) {
            rNoVal.style.display = "none";
            strToReplace.style.borderColor = "#dee2e6";
            strToReplace.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";

            replacementStr.style.borderColor = "#dee2e6";
            replacementStr.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
            oTextArea.value = oTextArea.value.replaceAll(strToReplace.value, replacementStr.value);
            strToReplace.value = '';
            replacementStr.value = '';
            modal.hide();
        } else {
            rNoVal.style.display = "block";
            rNoVal.innerText = "Word doesn't exist";
            strToReplace.style.borderColor = "red";
            strToReplace.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        }
    } else {
        rNoVal.style.display = "block";
        rNoVal.innerText = "Please enter a string";
        RepNoVal.style.display = "block";
        RepNoVal.innerText = "Please enter a string";
        strToReplace.style.borderColor = "red";
        replacementStr.style.borderColor = "red";
        strToReplace.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        replacementStr.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        strToReplace.focus();
    }
}


function sliceText() {
    const startIndex = document.getElementById("startIndex");
    const endIndex = document.getElementById("endIndex");
    const SNoValue1 = document.getElementById("SNoValue1");
    const SNoValue2 = document.getElementById("SNoValue2");

    if (startIndex.value && endIndex.value) {

        SNoValue1.style.display = "none";
        startIndex.style.borderColor = "#dee2e6";
        startIndex.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";

        endIndex.style.borderColor = "#dee2e6";
        endIndex.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
        oTextArea.value = oTextArea.value.slice(startIndex.value, endIndex.value);
        startIndex.value = '';
        endIndex.value = '';
        modal1.hide();
    } else {
        SNoValue1.style.display = "block";
        SNoValue1.innerText = "Please enter a value";
        SNoValue2.style.display = "block";
        SNoValue2.innerText = "Please enter a value";
        startIndex.style.borderColor = "red";
        endIndex.style.borderColor = "red";
        startIndex.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        endIndex.style.boxShadow = "0 0 0 .25rem rgba(255, 0, 0, .25)";
        startIndex.focus();
    }
}