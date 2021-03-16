function checkNumber() {
    var n = document.getElementById("row").value;
    var soDong = /[A-Za-z]/;
    if (n.trim() === "") {
        document.getElementById("number-error").innerHTML =
            "Vui lòng nhập số dòng !";
    } else if (soDong.test(n) === true) {
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
        var error = document.getElementById("number-error").innerHTML;
        var result = "";
        if ( error === "") {
            var i, x = 1;
            if (row === "1") {
                result = "1<br>";
            } else if (row != "") {
                result = "1<br>";
                for (i = 1; i < row; i++) {
                    result += lookAndSay(x) + "<br>";
                    x = lookAndSay(x);
                }
            }
        } else {
            result = "";
        }
        document.getElementById("viewShow").innerHTML = result;
    });
});

function lookAndSay(n) {
    var num = n.toString();
    var result= "";
    var count = 1;
    var i;
    for (i = 0; i < num.length; i++) {
        if (num[i] === num[i+1]) {
            count++;
        } else {
            result = result + count + num[i];
            count = 1;
        }
    }
    return result;
}

// function readNumber(n) {
//     var str = n.toString();
//     return str.replace(/(.)\1*/g, function(seq, num) {
//         return seq.length + num;
//     });
// }
