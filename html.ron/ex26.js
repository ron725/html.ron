function f1() {
    var img = document.getElementById("img1");
    var width = img.getAttribute("width");
    alert(width);
    var height = img.getAttribute("height");
    alert(height);
    var a = document.getElementById("a1");
    var href = a.getAttribute("href");
    alert(href);
}
/*f1();*/
function f2() {
    var img = document.getElementById("img1");
    var width = img.setAttribute("width", "200");
    var height = img.setAttribute("height", "200");
}
/*f2();*/
function f3() {
    var img = document.getElementById("img1");
    var width = img.getAttribute("width");
    var height = img.getAttribute("height");
    var new_width = img.setAttribute("width", width * 3);
    var new_height = img.setAttribute("height", height * 3);
}
/*f3();*/
function f4() {
    var tr2 = document.getElementById("row2");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerHTML = "i love javascript";
    td2.innerHTML = "תא חדש 2";
    td1.aling = "center";
    tr2.appendChild(td1);
    tr2.appendChild(td2);
}
/*f4();*/
function createrow1() {
    var table = document.getElementById("tbl");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var img = document.createElement("img");
    var link = document.createElement("a");
    img.src = "images/1jpg.jpg";
    link.href = "1.html";
    link.innerHTML = "link to page 1";
    td1.appendChild(img);
    td2.appendChild(link);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}
/*createrow1();*/
function createrow2(rowindex, imgheight, imgwidth) {
    var table = document.getElementById("tbl");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var img = document.createElement("img");
    var link = document.createElement("a");
    img.src = "images/" + rowindex + "jpg.jpg";
    img.setAttribute("width", imgwidth);
    img.setAttribute("height", imgheight);
    link.href = rowindex + ".html";
    link.innerHTML = "link to page" + rowindex;
    td1.appendChild(img);
    td2.appendChild(link);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}
/*createrow2(2, 200, 200);*/
function createtable(rows) {
    for (var i = 1; i <= rows; i++) {
        createrow2(i, 100, 200);
    }
}
/*createtable(5);*/
function createcell(src, size) {
    var cell = document.createElement("td");
    var img = document.createElement("img");
    img.src = src;
    img.setAttribute("width", size);
    img.setAttribute("height", size);
    cell.appendChild(img);
    return cell;
}
function addlinktocell(cell, href, content) {
    var link = document.createElement("a");
    link.href = href;
    link.innerHTML = content;
    cell.appendChild(link);
}
function createrow(index, onlyimage) {
    var row = document.createElement("tr");
    if (onlyimage == true) {   
        row.appendChild(createcell("images/" + index + "jpg.jpg", 100));
    }
    if (onlyimage == false) {
        row.appendChild(createcell("images/" + index + "jpg.jpg", 100));
        addlinktocell(row.appendChild(document.createElement("td")), index + ".html", "link to page " + index);
    }
}
function createtablerows(tbl, count) {
    for (var i = 1; i <= count; i++) {
        if (i % 2 == 0) {
            tbl.appendChild(createrow(i, false));
        }
        if (i % 2 != 0) {
            tbl.appendChild(createrow(i, true));
        }
    }
}
createtablerows(document.getElementById("tbl"), 5);
