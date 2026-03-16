var div = document.getElementById("aElement");
var aEL = document.createElement("a");
aEL.setAttribute("href", "https://www.google.com");
aEL.innerHTML = "GOOGLE";
/*div.appendChild(aEL);*/
var myImg = document.createElement("img");
myImg.setAttribute("src", "images/1jpg.jpg");          
myImg.setAttribute("width", "300");
myImg.setAttribute("height", "200");
/*div.appendChild(myImg); */
var table = document.createElement("table");
var rows = parseInt(prompt("כמה שורות תרצה בטבלה?"));
for (var i = 1; i <= rows; i++) {
    var link1 = document.createElement("a");
    link1.setAttribute("href", i + ".html");
    link1.innerHTML = "קישור לדף " + i;
    var img = document.createElement("img");
    img.setAttribute("src", "images/" + i + "jpg.jpg");
    img.setAttribute("width", "300");
    img.setAttribute("height", "300");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    td1.appendChild(link1);
    td2.appendChild(img);
    if (i % 2 == 0) {
        td1.style.backgroundColor = "red";
        td2.style.backgroundColor = "red";
    }
}
div.appendChild(table);