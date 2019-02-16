'use strict';
import {move} from "./features.js";

function main() {
    console.log("main is working");
    //createBoard();

renderBoard();
    //RenderSquareBoard();

    moveCoin(coinCurrentPosition,0);

}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let cells = [];
let coinCurrentPosition = 1;
let isBoardRenderdOnce = false;

let player1=true;

var coin = document.getElementById("coin");


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
    let isBoardRenderdOnce = false;
    //let tempeven = false;



    // loop for render the board

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
                else
                    {
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

                if (colorRed){
                    ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
                    ctx.fillStyle = "black";
                    ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
                    ctx.stroke();
                    cellStartX += cellWidth;
                    colorRed = true;
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
    var img =document.getElementById("laddernew");
    var img2 =document.getElementById("snakes");
    var img3 =document.getElementById("snakes2");

    ctx.drawImage(img,65,360,200,260);
    ctx.drawImage(img,460,65,200,260);
    ctx.drawImage(img2,325,330,200,260);
    ctx.drawImage(img3,65,65,200,260);

}
/*ctx.fillStyle = "red";
ctx.fillRect(0 + 13,585 +22, 40, 40);
*/
//moveCoin(coinCurrentPosition,rollDice());

function moveCoin(Pos, diceVal) {
    var lastPos = Pos;
    console.log(Pos);
    Pos += diceVal;
    switch (Pos) {
        case 3:
            Pos = 43;
            break;
        case 46:
            Pos = 13;
        case 52:
            Pos = 89;
            break;
        case 84:
            Pos = 59;
            break;
    }
    var moveToCell = lastPos;
    var loopRun = Pos - lastPos;
    /*for (let i=0;i<loopRun;i++) {
        moveToCell++;*/
  
        if (Pos < 101)
        {
            var currentCell = cells.filter(c => c.cellNum == Pos);
            if (currentCell) {
                coinCurrentPosition = Pos;
            }

                ctx.clearRect(0, 0, c.width, c.height);
                renderBoard();
                //ctx.fillStyle = "red";
                //ctx.fillRect(currentCell[0].xAxis + 13, currentCell[0].yAxis + 22, 40, 40);
                ctx.drawImage(coin,currentCell[0].xAxis + 13,currentCell[0].yAxis + 22,30,40);
            }

    //}
}

// roll the dice
function rollDice() {
    let x = Math.floor(Math.random() * 6) + 1;
    var dice = document.getElementById("dice_img");
    dice.src = "images/" + x + ".png";
    return x;
}
// start a new game
$("#start").click(function () {
    location.reload();
});


document.getElementById("dice").addEventListener("click", function () {
    var diceVal = rollDice();
    document.getElementById("output").innerHTML = diceVal;
    moveCoin(coinCurrentPosition, diceVal);
});


window.onload = main;
