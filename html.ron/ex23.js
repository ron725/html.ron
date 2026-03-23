function drawlink() {
    var div = document.getElementById("drawlink");
    var link1 = document.createElement("a");
    link1.href = "1.html";
    link1.innerHTML = "קישור לאתר וואלה";
    link1.style.color = "red";
    div.appendChild(link1);
}
/*drawlink();*/
function drawimage() {
    var div = document.getElementById("drawlink");
    var myImg = document.createElement("img");
    myImg.setAttribute("src", "images/1jpg.jpg");
    myImg.setAttribute("width", "200");
    myImg.setAttribute("height", "200");
    div.appendChild(myImg);
}
/*drawimage();*/
function drawimage3(num) {
    var div = document.getElementById("drawlink");
    var myImg = document.createElement("img");
    myImg.setAttribute("src", "images/" + num + "jpg.jpg");
    myImg.setAttribute("width", "200");
    myImg.setAttribute("height", "200");
    div.appendChild(myImg);
}
/*drawimage3(4);*/
function drawimage4(imghight, imgwidth, el, imgindex) {
    var div = document.getElementById(el);
    var myImg = document.createElement("img");
    myImg.setAttribute("src", "images/" + imgindex + "jpg.jpg");
    myImg.setAttribute("width", imgwidth);
    myImg.setAttribute("height", imghight);
    el.appendChild(myImg);
}
/*drawimage4(100, 200, "drawlink", 2);*/
function drawsomeimages(num) {
    var div = document.getElementById("drawlink");
    for (var i = 1; i <= num; i++) {
        drawimage3(i);
    }
}
/*drawsomeimages(5)*/
function drawlink6(linkindex, el) {
    var div = document.getElementById(el);
    var link1 = document.createElement("a");
    link1.href = linkindex + ".html";
    link1.innerHTML = "קישור לדף " + linkindex;
    el.appendChild(link1);
}
function drawsomelinks6(num) {
    for (var i = 1; i <= num; i++) {
        drawlink6(i, "drawlink");
    }
}
/*drawsomelinks6(6)*/
function drawrow(rowindex, imghight, imgwidth, el) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.id = "td1" + rowindex;
    tr.appendChild(td1);
    tr.appendChild(td2);
    drawlink6(rowindex, td1);
    drawimage4(imghight, imgwidth, td2, rowindex);
    el.appendChild(tr);
}
/*drawrow (2, 200, 200, "drawlink")*/

function drawtable(num) {
    var div = document.getElementById("drawlink");
    var table = document.createElement("table");
    div.appendChild(table);
    for (var i = 1; i <= num; i++) {
        drawrow(i, 200, 200, table);
    }
}
/*drawtable(4);*/
function SumTwoValues(x, y) {
    var div = document.getElementById("drawlink")
    div.innerText = x + y;
}
/*SumTwoValues(4, 7)*/
function IsEven(num) {
    var div = document.getElementById("drawlink");
    var result = num % 2 == 0;
    div.innerText = result;
    return result;
}
/*IsEven(11);*/
function IsAInEnd(str) {
    var div = document.getElementById("drawlink");
    var result = str.endsWith("a");
    div.innerText = result;
    return result;
}
/*IsAInEnd("Havah");*/
function FindDifference(x, y) {
    var div = document.getElementById("drawlink");
    var result = Math.abs(x - y);
    div.innerText = result;
    return result;
}
/*FindDifference(1, 4);*/
function SumEvenValuesUpToX(x) {
    var div = document.getElementById("drawlink");
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    div.innerText = sum;
    return sum;
}
/*SumEvenValuesUpToX(10);*/
function FindMaxValue(x) {
    var div = document.getElementById("drawlink");
    var max = 0;
    for (var i = 1; i <= x; i++) {
        var y = parseInt(prompt("הכנס מספר " + i));
        if (y > max) {
            max = y;
        }
    }
    div.innerText = max;
    return max;
}
/*FindMaxValue(5);*/
function FindExtremeDifference(x) {
    var div = document.getElementById("drawlink");
    var min = Infinity;
    var max = -Infinity;
    for (var i = 1; i <= x; i++) {
        var y = parseInt(prompt("הכנס מספר " + i));
        if (y < min) {
            min = y;
        }
        if (y > max) {
            max = y;
        }
    }
    var result = max - min;
    div.innerText = result;
    return result;
}
/*FindExtremeDifference(5);*/
function ConcatStrings(x) {
    var div = document.getElementById("drawlink");
    for (var i = 1; i <= x; i++) {
        var str = prompt("הכנס מחרוזת " + i);
        div.innerText += str;
    }  
}
/*ConcatStrings(3);*/
