function checkanswer() {
    var num = document.getElementById("num").value;
    alert(num);
}
function newnum() {
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num1").value = num;
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num2").value = num;
    var answer1 = parseInt(document.getElementById("answer1").value);
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num3").value = num;
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num4").value = num;
    var answer2 = parseInt(document.getElementById("answer2").value);
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num5").value = num;
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num6").value = num;
    var answer3 = parseInt(document.getElementById("answer3").value);
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num7").value = num;
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num8").value = num;
    var answer4 = parseInt(document.getElementById("answer4").value);
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num9").value = num;
    var num = parseInt(Math.random() * 10) + 1;
    document.getElementById("num10").value = num;
    var answer5 = parseInt(document.getElementById("answer5").value);
}

function check() {
    var num2 = parseInt(document.getElementById("num2").value);
    var num1 = parseInt(document.getElementById("num1").value);
    var answer1 = parseInt(document.getElementById("answer1").value);
    if (num1 + num2 == answer1) {
        document.getElementById("msgplus1").innerHTML = "יפה מאוד";
        
    }
    else {
        document.getElementById("msgplus1").innerHTML = "טעות";
    }
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var answer2 = parseInt(document.getElementById("answer2").value);
    if (num3 - num4 == answer2) {
        document.getElementById("msgplus2").innerHTML = "יפה מאוד";

    }
    else {
        document.getElementById("msgplus2").innerHTML = "טעות";
    }
    var num5 = parseInt(document.getElementById("num5").value);
    var num6 = parseInt(document.getElementById("num6").value);
    var answer3 = parseInt(document.getElementById("answer3").value);
    if (num5 * num6 == answer3) {
        document.getElementById("msgplus3").innerHTML = "יפה מאוד";

    }
    else {
        document.getElementById("msgplus3").innerHTML = "טעות";
    }
    var num7 = parseInt(document.getElementById("num7").value);
    var num8 = parseInt(document.getElementById("num8").value);
    var answer4 = parseInt(document.getElementById("answer4").value);
    if (num7 / num8 == answer4) {
        document.getElementById("msgplus4").innerHTML = "יפה מאוד";

    }
    else {
        document.getElementById("msgplus4").innerHTML = "טעות";
    }
    var num9 = parseInt(document.getElementById("num9").value);
    var num10 = parseInt(document.getElementById("num10").value);
    var answer5 = parseInt(document.getElementById("answer5").value);
    if (num9 % num10 == answer5) {
        document.getElementById("msgplus5").innerHTML = "יפה מאוד";

    }
    else {
        document.getElementById("msgplus5").innerHTML = "טעות";
    }
}

