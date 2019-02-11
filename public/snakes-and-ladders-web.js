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
let cells = [];
let coinCurrentPosition = 1;
let isBoardRenderdOnce = false;
function renderBoard() {
    // intializing the neccessary variables
    let row=10;
    let col=10;
    let cellWidth = c.width/10;
    let cellHeight = c.height/10;
    let cellStartY = 0;
    let cellStartX = 0;
    let cellNumber = 100;
    let evenRow = false;
    // loop for render the board
    for (let i=0;i<row;i++)
    {
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

            }
            if (!isBoardRenderdOnce) {
                let cell = {
                    cellNum: cellNumber,
                    xAxis: cellStartX,
                    yAxis: cellStartY
                }
                cells.push(cell);
            }
            if (!evenRow) {
                cellStartX += cellWidth;
            }

            cellNumber--;

        }

        cellStartY += cellHeight;
        evenRow = !evenRow;
    }

    isBoardRenderdOnce = true;


}
ctx.fillStyle = "red";
ctx.fillRect(0 + 13,585 +22, 40, 40);

function moveCoin(nextPos, diceVal) {
    var lastPos = nextPos;
    nextPos += diceVal;
    var temp = lastPos;
    lastPos = nextPos - lastPos;

    for (let i=0;i<lastPos;i++) {
        if (nextPos < 101) {
            var currentCell = cells.filter(c => c.cellNum == temp);
            if (currentCell) {
                coinCurrentPosition = nextPos;
            }
            setTimeout(function () {
                ctx.clearRect(0, 0, c.width, c.height);
                renderBoard();
                ctx.fillStyle = "red";
                ctx.fillRect(currentCell[0].xAxis + 13, currentCell[0].yAxis + 22, 40, 40);
            },10);


        }
        temp++;
    }
}
function rollDice(){
    let x = Math.floor(Math.random() * 6) + 1;
    return x;
}

document.getElementById("dice").addEventListener("click", function () {
    var diceVal = rollDice();
    document.getElementById("output").innerHTML = diceVal;
    setInterval(moveCoin(coinCurrentPosition, diceVal),1000);
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
