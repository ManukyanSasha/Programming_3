var matrix = [];

var side = 10;
var socket;
function setup() {
    frameRate(0);
    socket = io();
    background('#acacac');

    console.log(matrix);

    socket.on("first matrix", function (mtx) {
      mtx=matrix;
    });
    }
  

       /* socket.on("refresh", function (mtx) {
            matrix = mtx;
            redraw();
        });
*/

   

    //noLoop();

function draw() {
    background('#acacac')
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].active = false;
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].active = false;
            }
            else if (matrix[y][x].index == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 5) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

console.log(matrix);