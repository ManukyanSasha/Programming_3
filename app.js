var express = require('express');
var matrix = require('./modules/matrix');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});
var LivingCreature = require("./modules/LivingCreature.js");
var grass = require("./modules/grass.js");
var eater = require("./modules/eater.js");
var predator = require("./modules/predator.js");
var bee = require("./modules/bee.js");
var flower = require("./modules/bee.js");


var time = frameRate(1);
function frameRate(frameCount) {
    return 1000 / frameCount;
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            console.log(matrix[y][x].index);

            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            // else if (matrix[y][x].index == 2) {
            //     matrix[y][x].eat();
            // }
            // else if (matrix[y][x].index == 3) {
            //     matrix[y][x].eat();
            // }
            // else if (matrix[y][x].index == 4) {
            //     matrix[y][x].eat();
            // }
            // else if (matrix[y][x].index == 5) {
            //     matrix[y][x].move();
            // }
        }
    }

}
setInterval(draw, time);
