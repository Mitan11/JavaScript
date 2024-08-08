console.log("Wellcome");

const iTextArea = document.getElementById('sInput');
const oTextArea = document.getElementById('sOutput');
const lCount = document.getElementById('letter');
const wCount = document.getElementById('wCount');
function textAreaVal(){
    oTextArea.value = iTextArea.value;
}

function count(){
    lCount.innerText = iTextArea.value.length;
    wCount.innerText = (iTextArea.value.trim().split(/\s+/)).length;
}

function upperCase(){
    oTextArea.value = oTextArea.value.toUpperCase();
}

function lowerCase(){
    oTextArea.value = oTextArea.value.toLowerCase();
}

function replace(){
    let strToReplace = document.getElementById("strToReplace").value;
    let replacementStr = document.getElementById("replacementStr").value;

    oTextArea.value = oTextArea.value.replaceAll(strToReplace, replacementStr);
}

function sliceText(){
    let startIndex = parseInt(document.getElementById("startIndex").value, 10);
    let endIndex = parseInt(document.getElementById("endIndex").value, 10);

    oTextArea.value = oTextArea.value.slice(startIndex, endIndex);
}