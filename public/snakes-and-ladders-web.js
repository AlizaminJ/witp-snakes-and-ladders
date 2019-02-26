'use strict';
import {
	move
} from "./features.js";

function main() {

	console.log("main is working");
	//createBoard();
	renderBoard();
	//RenderSquareBoard();
	moveCoin(coinOneCurrentPosition, 0, 1);

}



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let cells = [];
let coinOneCurrentPosition = 1;
let coinTwoCurrentPosition = 1;
let isBoardRenderdOnce = false;
var coin = document.getElementById("coin");
var coin2 = document.getElementById("coin2");
function renderBoard() {
	// intializing the neccessary variables
	let row = 10;
	let col = 10;
	let cellWidth = c.width / 10;
	let cellHeight = c.height / 10;
	let cellStartY = 0;
	let cellStartX = 0;
	let cellNumber = 100;
	let evenRow = false;
	// loop for render the board
	for (let i = 0; i < row; i++) {
		if (evenRow) {
			cellStartX = c.width;
		} else {
			cellStartX = 0;
		}
		// to make th e board colorful
		let colorRed = false;
		for (let j = 0; j < col; j++) {
			if (evenRow) {

				if (colorRed) {

					cellStartX -= cellWidth;
					ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

					ctx.fillStyle = "#633101";
					ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
					ctx.fillStyle = "black";
					ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
					ctx.stroke();
					colorRed = false;
				} else {
					cellStartX -= cellWidth;
					ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

					ctx.fillStyle = "#F6D0A5";
					ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
					ctx.fillStyle = "black";
					ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
					ctx.stroke();
					colorRed = true;
				}

			} else {

				if (colorRed) {
					ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

					ctx.fillStyle = "#633101";
					ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
					ctx.fillStyle = "black";
					ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
					ctx.stroke();
					colorRed = false;
				} else {
					ctx.rect(cellStartX, cellStartY, cellWidth, cellHeight);

					ctx.fillStyle = "#F6D0A5";
					ctx.fillRect(cellStartX, cellStartY, cellWidth, cellHeight);
					ctx.fillStyle = "black";
					ctx.fillText(cellNumber, cellStartX + 20, cellStartY + 20);
					ctx.stroke();
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
	var img = document.getElementById("laddernew");
	var img2 = document.getElementById("snakes");
	var img3 = document.getElementById("snakes2");
    var img4 = document.getElementById("flag");
	ctx.drawImage(img, 65, 360, 200, 260);
	ctx.drawImage(img, 460, 65, 200, 260);
	ctx.drawImage(img2, 325, 330, 200, 260);
	ctx.drawImage(img3, 65, 65, 200, 260);
    ctx.drawImage(img4, -1, -1, 65, 65);

};


// moveCoin(coinCurrentPosition,rollDice());
function moveCoin(Pos, diceVal, player) {
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


	if (Pos < 101) {
        if (player == 1){
            coinOneCurrentPosition = Pos;
        }
        else if (player == 2){
            coinTwoCurrentPosition = Pos;
        }
        if(Pos ==100){
            if (coinOneCurrentPosition == 100){
                gameOver("won");
            }
            else if (coinTwoCurrentPosition == 100){
                gameOver("lose");
            }
        }
		var currentCellForPlayerOne = cells.filter(c => c.cellNum == coinOneCurrentPosition);
        var currentCellForPlayerTwo = cells.filter(c => c.cellNum == coinTwoCurrentPosition);

		ctx.clearRect(0, 0, c.width, c.height);
		renderBoard();
		if (coinOneCurrentPosition == coinTwoCurrentPosition) {

            ctx.drawImage(coin, currentCellForPlayerOne[0].xAxis + 3, currentCellForPlayerOne[0].yAxis + 22, 30, 40);

            ctx.drawImage(coin2, currentCellForPlayerTwo[0].xAxis + 35, currentCellForPlayerTwo[0].yAxis + 22, 30, 40);
        }
        else {
            ctx.drawImage(coin, currentCellForPlayerOne[0].xAxis + 20, currentCellForPlayerOne[0].yAxis + 22, 30, 40);

            ctx.drawImage(coin2, currentCellForPlayerTwo[0].xAxis + 20, currentCellForPlayerTwo[0].yAxis + 22, 30, 40);
        }
    }

}

// can be deleted later
var player1 = true
document.getElementById("dice").addEventListener("click", function () {
	var diceVal = rollDice();
	document.getElementById("output").innerHTML = diceVal;
	if (player1) {

        player1 = false;
        setTimeout(function () {
            moveCoin(coinOneCurrentPosition, diceVal, 1);
            document.getElementById("dice").click();
        }, 2500);

    }
    else
    {
        setTimeout(function () {
            moveCoin(coinTwoCurrentPosition, diceVal, 2);
        },1000);

        player1 = true;
    }
});


// random number generator and dice picture
function rollDice() {
	let x = Math.floor(Math.random() * 6) + 1;
	var dice = document.getElementById("dice_img");
	dice.classList.add("diceimage");
	setTimeout(function () {
        dice.src = "images/" + x + ".png";
        dice.classList.remove("diceimage");
    },1000);

	return x;
};

// gameOver
function gameOver(msg){
    if (msg == "won"){
        swal("Congrats!", "You won!", "success");
    }else {
        swal("Oops!", "You Lose!", "warning");
    }


    ctx.clearRect(0, 0, c.width, c.height);
    renderBoard();
	ctx.drawImage(coin, -1,5, 30, 40);


   // document.getElementById("output").innerHTML="Congratulations, you won! Please start a new game!";
	}

// start a new game
$("#start").click(function () {
	location.reload();;
});

window.onload = main;
