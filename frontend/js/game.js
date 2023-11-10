function initGame() {
    var canvas = document.getElementById('canvas-panel-title-pacman');
    canvas.setAttribute('width', '38');
    canvas.setAttribute('height', '32');
    if (canvas.getContext) { 
        ctx = canvas.getContext('2d');
    }
    
    var x = 15;
    var y = 16;
    
    ctx.fillStyle = "#fff200";
    ctx.beginPath();
    ctx.arc(x, y, 14, (0.35 - (3 * 0.05)) * Math.PI, (1.65 + (3 * 0.05)) * Math.PI, false);
    ctx.lineTo(x - 5, y);
    ctx.fill();
    ctx.closePath();
    
    x = 32;
    y = 16;
    
    ctx.fillStyle = "#dca5be";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();

    // init board
    initBoard();
    drawBoard();

    // static demo
    drawPacman();
    renderGhosts();
}