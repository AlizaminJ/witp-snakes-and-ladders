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
    let colorRed=false;
    //let tempeven = false;

<<<<<<< HEAD
=======
    // loop for render the board
>>>>>>> 91c4584f4d46b99278f46fe681dd4c26ae11819f
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
<<<<<<< HEAD
=======

>>>>>>> 91c4584f4d46b99278f46fe681dd4c26ae11819f
                if (colorRed) {

                    cellStartX -= cellWidth;
                    ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
                    ctx.fillStyle = "black";
                    ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
                    ctx.stroke();
                    colorRed =false;
                }
                else{
                    cellStartX -= cellWidth;
                    ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

                    ctx.fillStyle = "#FFFFFF";
                    ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
                    ctx.fillStyle = "black";
                    ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
                    ctx.stroke();
                    colorRed = true;
                }

            }
            else
            {
<<<<<<< HEAD
=======

>>>>>>> 91c4584f4d46b99278f46fe681dd4c26ae11819f
                if (colorRed){
                    ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
                    ctx.fillStyle = "black";
                    ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
                    ctx.stroke();
                    cellStartX += cellWidth;
                    colorRed = false;
                }
                else
                {
                    ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

                    ctx.fillStyle = "#FFFFFF";
                    ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
                    ctx.fillStyle = "black";
                    ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
                    ctx.stroke();
                    cellStartX += cellWidth;
                    colorRed = true;
                }

<<<<<<< HEAD
=======


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

>>>>>>> 91c4584f4d46b99278f46fe681dd4c26ae11819f
            }

            cellNumber--;

        }
        cellStartY += cellHeight;
        evenRow = !evenRow;
    }
    var img =document.getElementById("laddernew");
    var img2 =document.getElementById("snakes");
    var img3 =document.getElementById("snakes2");
    ctx.drawImage(img,65,360,200,260);
    ctx.drawImage(img,460,65,200,260);
    ctx.drawImage(img2,325,330,200,260);
    ctx.drawImage(img3,65,65,200,260);

}
placeCoin(10,10);
function placeCoin(x,y) {

<<<<<<< HEAD

    ctx.fillStyle = "black";
    ctx.rect(x,y, 40, 40);
//ctx.stroke();
=======
                ctx.clearRect(0, 0, c.width, c.height);
                renderBoard();
                ctx.fillStyle = "red";
                ctx.fillRect(currentCell[0].xAxis + 13, currentCell[0].yAxis + 22, 40, 40);


        }

    }
}
function rollDice(){
    let x = Math.floor(Math.random() * 6) + 1;
    return x;

>>>>>>> 91c4584f4d46b99278f46fe681dd4c26ae11819f
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
