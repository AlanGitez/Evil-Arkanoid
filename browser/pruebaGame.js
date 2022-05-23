const game = new EventController();

const divPlayerOne = document.querySelector('.playerOne');
const divPlayerTwo = document.querySelector('.playerTwo');
const container = document.querySelector('.container');
const display = document.querySelector('.display');

//container limits, the movement has restricted by dimensions
const maxPosition = display.clientHeight - divPlayerOne.clientHeight;
const minPosition = 0;

//player position x & y cords;
const initialPositionPO = [ maxPosition, 0 ];
const initialPositionPT = [ 0, display.clientWidth - divPlayerTwo.clientWidth ];

const playerOne = new Player(divPlayerOne, initialPositionPO);
const playerTwo = new Player(divPlayerTwo, initialPositionPT);



let movementSpeed = 15;

document.addEventListener('keydown', (e) => {
	if (e.key == 'w') {
		if (playerOne.currentPos[0] > minPosition) {
			game.moveCharacter(-movementSpeed, playerOne);
			
		}
	}
	if (e.key == 's') {
		if (playerOne.currentPos[0] < maxPosition) {
			game.moveCharacter(movementSpeed, playerOne);
		}
	}

	if (e.key == 'i') {
		if (playerTwo.currentPos[0] > minPosition) {
			game.moveCharacter(-movementSpeed, playerTwo);
			
		}
	}
	if (e.key == 'k') {
		if (playerTwo.currentPos[0] < maxPosition) {
			game.moveCharacter(movementSpeed, playerTwo);
			
		}
	}
});

game.moveCharacter = function(speed, context){
	// console.log(context)
	context.positionUpdate(speed);
	game.emit('positionUpdate', context.currentPos[0], -movementSpeed, context);
}