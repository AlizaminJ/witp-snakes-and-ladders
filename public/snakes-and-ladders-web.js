'use strict';
import {Rolldice} from "./features.js";

function main() {
    console.log("main is working");
    createBoard();


}

document.getElementById("roll").addEventListener("click",function(){
    let val=Rolldice();
   document.getElementById("output").innerHTML=val;
});



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
    document.getElementById("1").innerHTML += "<lable id=coin>?</lable>";
    $(function () {
        $("tbody").each(function () {
            var arr = $.makeArray($("tr", this).detach());
            arr.reverse();

            $(this).append(arr);

        });
    });


}

window.onload = main;
