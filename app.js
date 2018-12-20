var express = require('express');
var app = express();
var socket;
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


var LivingCreature = require("./modules/LivingCreature.js");
var grass = require("./modules/grass.js");
var eater = require("./modules/eater.js");
var predator = require("./modules/predator.js");
var bee = require("./modules/bee.js");
var flower = require("./modules/bee.js");


io.on('connection', function (socket) {
    socket.emit("first matrix", matrix);


    var time = frameRate(1);
    function frameRate(frameCount) {
        return 1000 / frameCount;
    }
    function draw() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                console.log(matrix[y][x]);

                if (matrix[y][x].index == 1) {
                    matrix[y][x].mul(matrix);
                }
                /*else if (matrix[y][x].index == 2) {
                    matrix[y][x].eat();
                }
                else if (matrix[y][x].index == 3) {
                    matrix[y][x].eat();
                }
                else if (matrix[y][x].index == 4) {
                    matrix[y][x].eat();
                }
                else if (matrix[y][x].index == 5) {
                    matrix[y][x].move();
                }*/
            }
        }

    }
    setInterval(draw, time);

    socket.emit("refresh", matrix);
});




var matrix = require('./modules/matrix');

