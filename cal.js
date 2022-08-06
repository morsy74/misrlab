
var ans = document.getElementById("Answer");

function EnterClear() {
    ans.value = "";
}

function EnterNumber(val) {
    ans.value += val;
}

function EnterOperation(val) {
    ans.value += val;
}

function EnterEqual() {
    var p = ans.value;
    var q = eval(p);
    ans.value = q;
}