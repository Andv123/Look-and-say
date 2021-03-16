function checkNumber() {
    var n = document.getElementById("row").value;
    var soDong = parseInt(n);
    if (n.trim() === "") {
        document.getElementById("number-error").innerHTML =
            "Vui lòng nhập số dòng !";
    } else if (Number.isInteger(soDong) === false) {
        document.getElementById("number-error").innerHTML =
            "Số dòng phải là số !";
    } else {
        document.getElementById("number-error").innerHTML = "";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#show").
    addEventListener('click', function () {
        var row = document.getElementById("row").value;
        var result = "";
        var i, x = 1;
        if (row === "1") {
            result = "1<br>";
        } else if (row != "") {
            result = "1<br>";
            for (i = 1; i < row; i++) {
                result += readNumber(x) + "<br>";
                x = readNumber(x);
            }
        }

        document.getElementById("viewShow").innerHTML = result;
    });
});

function readNumber(n) {
    var str = n.toString();
    return str.replace(/(.)\1*/g, function(seq, num) {
        return seq.length + num;
    });
}
