var LivingCreature = require("./LivingCreature.js");
var Grass = require("./grass.js");
var Eater = require("./eater.js");
var Predator = require("./predator.js");
var Bee = require("./bee.js");
var Flower = require("./bee.js");

var matrix = [];
var m = 10;
var n = 10;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = Math.floor((Math.random() * 5) + 0);
    }
}

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new Eater(x, y, 2);
        }
        else if(matrix[y][x] == 3){
            matrix[y][x] = new Predator(x,y,3);
        }
        else if(matrix[y][x] == 4){
            matrix[y][x] = new Flower(x,y,4);
        }
        else if(matrix[y][x]==5){
            matrix[y][x] = new Bee(x, y, 5);
        }
    }
}
module.exports = matrix;
