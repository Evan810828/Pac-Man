var red = new Image();
red.src = "./js/assets/red.png";
var yellow = new Image();
yellow.src = "./js/assets/yellow.png";
var blue = new Image();
blue.src = "./js/assets/blue.png";
var afraid = new Image();
afraid.src = "./js/assets/afraid.png";
var green = new Image();
green.src = "./js/assets/green.png";

var GHOST_RED_POSITION_X = 13*17;
var GHOST_RED_POSITION_Y = 14*17;
var GHOST_RED_DIRECTION = 1;
var GHOST_RED_SIZE = 17;
var GHOST_BLUE_POSITION_X = 14*17;
var GHOST_BLUE_POSITION_Y = 14*17;
var GHOST_BLUE_DIRECTION = 1;
var GHOST_BLUE_SIZE = 17;
var GHOST_YELLOW_POSITION_X = 13*17;
var GHOST_YELLOW_POSITION_Y = 15*17;
var GHOST_YELLOW_DIRECTION = 1;
var GHOST_YELLOW_SIZE = 17;
var GHOST_GREEN_POSITION_X = 14*17;
var GHOST_GREEN_POSITION_Y = 15*17;
var GHOST_GREEN_DIRECTION = 1;
var GHOST_GREEN_SIZE = 17;
var GHOST_AFRAID_POSITION_X = 15*17;
var GHOST_AFRAID_POSITION_Y = 15*17;
var GHOST_AFRAID_DIRECTION = 1;
var GHOST_AFRAID_SIZE = 17;


function renderGhosts() { 
	drawGhost("red");
	drawGhost("blue");
	drawGhost("yellow");
    drawGhost("green");
	drawGhost("afraid");
}
function drawGhost(ghost) { 

	var ctx = document.getElementById('canvas-board').getContext('2d');
	
    // use canvas.drawImage to draw the ghosts
	eval("ctx.drawImage("+ghost+", GHOST_"+ghost.toUpperCase()+"_POSITION_X, GHOST_"+ghost.toUpperCase()+"_POSITION_Y,  GHOST_"+ghost.toUpperCase()+"_SIZE, GHOST_"+ghost.toUpperCase()+"_SIZE);");
	
	ctx.closePath();
}