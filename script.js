function startGame(){

	for (var i = 1; i <= 9; i++) {
		clearBox(i);
	}
	// gán cho thằng x đánh trước
	document.turn = "X";
	if (Math.random() < 0.5) {
		// random 1 số nếu nhỏ hơn 0.5 thì gán lại cho thằng O đánh trước
		document.turn = "O";
	}
	//khởi tạo biến winner
	document.winner = null;
	
	setMessage(document.turn + " đánh trước ")
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function nextMove(square){
	//check đã có ai chiến thắng chưa
	if(document.winner != null){
		setMessage(document.winner + " đã giành chiến thắng");
		document.winner = document.turn;
	}
	else if (square.innerText == "") {
	square.innerText = document.turn;
	switchTurn();
	}else{
		setMessage("That square is already used.")
	}
}



function switchTurn(){

	let time = new Date();

	if(checkForWinner(document.turn)){
		setMessage("Kết thúc ván đấu. "+ document.turn + " đã chiến thắng");
		document.winner = document.turn;
	}

	else if (document.turn == "X") {
		document.turn = "O";
		setMessage("Lượt của "+ document.turn + "");
		//log time 
		console.log(time);
	} else{
		//log time 
		console.log(time);
		document.turn = "X";
		setMessage("Lượt của  "+ document.turn + "")
	}
}

function checkForWinner(move){
	var result = false;
	if(checkRow(1,2,3, move) ||
	   checkRow(4,5,6, move) ||
	   checkRow(7,8,9, move) ||
	   checkRow(1,4,7, move) ||
	   checkRow(2,5,8, move) ||
	   checkRow(3,6,9, move) ||
	   checkRow(1,5,9, move) ||
	   checkRow(3,5,7, move)){

	   result= true;
	}
	return result;
}

function checkRow(a, b, c, move){
	var result = false;
	if(getBox(a) ==  move && getBox(b) == move && getBox(c) == move ){
		result= true;
	}
	return result; 
}

function getBox(number){
	return document.getElementById("s" + number).innerText;
}
// clear trận đấu 
function clearBox(number){
	document.getElementById("s" + number).innerText = "";
}