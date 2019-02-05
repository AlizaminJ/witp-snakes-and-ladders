'use strict';
import {move} from "./features.js";

function main() {
    console.log("main is working");
    //createBoard();

renderBoard();
    //RenderSquareBoard();

}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function renderBoard() {

    let row=10;
    let col=10;
    let cellWidth = c.width/10;

    let cellHeight = c.height/10;
    let cellStartY = 0;
    let cellStartX = 0;
    let cellNumber = 100;
    let evenRow = false;
    //let tempeven = false;

    for (let i=0;i<row;i++)
    {

       // cellStartX = 0;
        if (evenRow)
        {
            cellStartX = c.width;
        }
        else {
            cellStartX = 0;
        }
        for (let j=0;j<col;j++)
        {
            if (evenRow)
            {
                cellStartX -= cellWidth;
                ctx.rect(cellStartX, cellStartY, cellWidth,cellHeight);
                ctx.fillText(cellNumber, cellStartX+20, cellStartY+20);
                ctx.stroke();
            }
            else
            {
                ctx.rect(cellStartX, cellStartY, cellWidth,cellHeight);
                ctx.fillText(cellNumber, cellStartX+20, cellStartY+20);
                ctx.stroke();
                cellStartX += cellWidth;
            }

            cellNumber--;

        }
        cellStartY += cellHeight;
        evenRow = !evenRow;
    }


}
placeCoin(10,10);
function placeCoin(x,y) {


    ctx.fillStyle = "red";
    ctx.rect(x,y, 40, 40);
//ctx.stroke();
}

document.getElementById("dice").addEventListener("click", function () {
   console.log("hi");
    placeCoin(100,10);
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

move();

    $(function () {
        $("tbody").each(function () {
            var arr = $.makeArray($("tr", this).detach());
            arr.reverse();

            $(this).append(arr);

        });
    });

}


window.onload = main;
