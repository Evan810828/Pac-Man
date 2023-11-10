var BOARD_CANVAS_CONTEXT = null;
var cells = new Array();
var pacMan;
var ghosts = new Array();
var height = 31;
var width = 28;

var fruit = new Image();
fruit.src = "./js/assets/fruit.png";

// mock a board array data with size 30*30
var map = "wwwwwwwwwwwwwwwwwwwwwwwwwwww w************ww************w w*wwww*wwwww*ww*wwww*wwwww*w w*wwww*wwwww*ww*wwww*wwwww*w w*wwww*wwwww*ww*wwww*wwwww*w w*************f************w w*wwww*ww*wwwwwwww*ww*wwww*w w*wwww*ww*wwwwwwww*ww*wwww*w w******ww****ww****ww******w wwwwww*wwwwwswwswwwww*wwwwww wwwwww*wwwwwswwswwwww*wwwwww wwwwww*wwssssssssssww*wwwwww wwwwww*wwswwwsswwwsww*wwwwww wwwwww*wwswwsssswwsww*wwwwww ssssss*ssswwsssswwsss*ssssss wwwwww*wwswwsssswwsww*wwwwww wwwwww*wwswwwwwwwwsww*wwwwww wwwwww*wwssssssssssww*wwwwww wwwwww*wwswwwwwwwwsww*wwwwww wwwwww*wwswwwwwwwwsww*wwwwww w************ww************w w*wwwww*wwww*ww*wwwww*wwww*w w*wwwww*wwww*ww*wwwww*wwww*w w***ww*******ss*******ww***w www*ww*ww*wwwwwwww*ww*ww*www www*ww*ww*wwwwwwww*ww*ww*www w******ww****ww****ww******w w*wwwwwwwwww*ww*wwwwwwwwww*w w*wwwwwwwwww*ww*wwwwwwwwww*w w**************************w wwwwwwwwwwwwwwwwwwwwwwwwwwwwe";

function initBoard() { 
	var canvas = document.getElementById('canvas-board');
	canvas.setAttribute('width', '476');
	canvas.setAttribute('height', '527');

	if (canvas.getContext) { 
		BOARD_CANVAS_CONTEXT = canvas.getContext('2d');
	}
}

function getBoardCanevasContext() { 
	return BOARD_CANVAS_CONTEXT;
}

function drawBoard(){
	var context = getBoardCanevasContext();
	var canvas = document.getElementById('canvas-board');
	var processing =true;
	var i = 0;
	var j = 0;
	var ix = 0;
	cells[0]=new Array();
	while(processing){
		if(map[i]=='w'){
			cells[j][ix]=new Cell(false, false, true);
		}
		if(map[i]=='*'){
			cells[j][ix]=new Cell(true, true, false); // a passable cell with a nibble
		}
		if(map[i]=='s'){
			cells[j][ix]=new Cell(true, false, false); // a passable cell with a nibble
		}
		if(map[i]=='f'){
			cells[j][ix]=new Cell(false, false, false); // a passable cell with a nibble
		}
		if(map[i]==' '){
			cells[j+1]=new Array();
			j++;
			ix=-1;
		}
		if(map[i]=='e'){
			processing=false;
		}
		i++;
		ix++;
	}

	context.fillStyle='#000000';
	context.fillRect(0,0,canvas.width, canvas.height);

	//draw the level
	for(var y = 0; y < height; y++){
		for(var x= 0; x < width; x++){
			if(cells[y][x].getIsWall()) {
				context.fillStyle='#0000FF';
				context.fillRect(x*(canvas.width/width),y*(canvas.height/height),(canvas.width/width),(canvas.height/height));
			}
			else if(cells[y][x].getEdible()) {
				context.fillStyle='#FFFF00';
				context.fillRect(x*(canvas.width/width)+2*((canvas.width/width)/5),y*(canvas.width/width)+2*((canvas.width/width)/5),(canvas.width/width)/5,(canvas.width/width)/5);
				if((x==1 && y==3) || (x==1 && y==23) || (x==26 && y==3) || (x==26 && y==23)){
					//if is big nibble
					context.fillRect(x*(canvas.width/width)+((canvas.width/width)/4),y*(canvas.width/width)+((canvas.width/width)/4),(canvas.width/width)/2,(canvas.width/width)/2);
				}
			}
			else if(cells[y][x].getPassable()) {
				
			}
			else { // fruit
				context.drawImage(fruit, x*(canvas.width/width),y*(canvas.height/height),(canvas.width/width),(canvas.height/height));
			}
		}
	}

}