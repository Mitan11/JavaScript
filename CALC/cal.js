let num1 ;
let num2 ;

function operation(){
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    console.log(num1);
    console.log(num2);
}
function add(){
    operation()
    ans = num1 + num2;
    console.log(ans);
    document.getElementById("ANS").value = ans;
}

function sub(){
    operation()
    ans = num1 - num2;
    console.log(ans);
    document.getElementById("ANS").value = ans;
}

function mul(){
    operation()
    ans = num1 * num2;
    console.log(ans);
    document.getElementById("ANS").value = ans;
}

function div(){
    operation()
    ans = num1 / num2;
    console.log(ans);
    document.getElementById("ANS").value = ans;
}

function mod(){
    operation()
    ans = num1 % num2;
    console.log(ans);
    document.getElementById("ANS").value = ans;
}