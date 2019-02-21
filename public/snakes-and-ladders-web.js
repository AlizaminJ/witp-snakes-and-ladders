'use strict';
import {
	move
} from "./features.js";

function main() {

	console.log("main is working");
	//createBoard();
	renderBoard();
	//RenderSquareBoard();
	moveCoin(coinCurrentPosition, 0);

}



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let cells = [];
let coinCurrentPosition = 1;
let isBoardRenderdOnce = false;
var coin = document.getElementById("coin");
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

	if (Pos < 101) {
		var currentCell = cells.filter(c => c.cellNum == Pos);
		if (currentCell) {
			coinCurrentPosition = Pos;
		}

		ctx.clearRect(0, 0, c.width, c.height);
		renderBoard();

		ctx.drawImage(coin, currentCell[0].xAxis + 13, currentCell[0].yAxis + 22, 30, 40);
    }
	else if(Pos>=100){
gameOver();
        }
};

// can be deleted later
document.getElementById("dice").addEventListener("click", function () {
	var diceVal = rollDice();
	document.getElementById("output").innerHTML = diceVal;
	moveCoin(coinCurrentPosition, diceVal);
});


// random number generator and dice picture
function rollDice() {
	let x = Math.floor(Math.random() * 6) + 1;
	var dice = document.getElementById("dice_img");
	dice.src = "images/" + x + ".png";
	return x;
};

// gameOver
function gameOver(){
    ctx.clearRect(0, 0, c.width, c.height);
    renderBoard();
	ctx.drawImage(coin, -1,5, 30, 40);
	swal("Congrats!", "You won!", "success");

   // document.getElementById("output").innerHTML="Congratulations, you won! Please start a new game!";
	}

// start a new game
$("#start").click(function () {
	location.reload();;
});

window.onload = main;
