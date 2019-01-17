'use strict';
function main() {
    console.log("main is working");
    createBoard();
}
function createBoard() {
    let table = "";
    let cellNumber = 1;
    for (let i = 0; i < 10; i++) {
        table += "<tr>";
        for (let j = 0; j < 10; j++) {

            table += "<td id=" + cellNumber + ">";
            table += cellNumber++ + "</td>";
        }
        table += "</tr>"
    }
    document.getElementById("board").innerHTML = table;

    $(function () {
        $("tbody").each(function () {
            var arr = $.makeArray($("tr", this).detach());
            arr.reverse();

            $(this).append(arr);

        });
    });
}
    window.onload = main;
