var matrix = [];
var side = 10;
var socket;

function setup() {

    frameRate(0);
    socket = io();
    background('#acacac');


    socket.on("first matrix", function (mtx) {
        matrix = mtx;
        createCanvas(matrix[0].length * side, matrix.length * side);
        socket.on("newMatrix", function (mtx) {
            matrix = mtx;
            redraw();
            console.log(matrix);
        });
    });

    noLoop();
}
var i = 0;
function draw() {
    var guyn = "green";

    background('#acacac')
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                if (i <= 30) {
                    guyn = "green";
                }
                if (i > 30 && i <= 60) {
                    guyn = "white";
                    // stat.Exanak.Dzmer ++;
                }
                if (i > 60) {
                    i = 0;
                    // stat.Exanak.Amar ++;
                }
                fill(guyn);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
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
    i++;
    console.log(i);
}



