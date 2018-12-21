var Grass = require("./grass.js");
var Eater = require("./eater.js");
var Predator = require("./predator.js");
var Bee = require("./bee.js");
var Flower = require("./bee.js");
var stat = require("./statistic");
var matrix = [];
var m = 50;
var n = 50;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = Math.floor((Math.random() * 5));
    }
}

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x, y, 1);
            stat.Grass.current ++;
            stat.Grass.born ++;
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new Eater(x, y, 2);
            stat.Eater.current ++;
            stat.Eater.born ++;
        }
        else if(matrix[y][x] == 3){
            matrix[y][x] = new Predator(x,y,3);
            stat.Predator.current ++;
            stat.Predator.born ++;
        }
        else if(matrix[y][x] == 4){
            matrix[y][x] = new Bee(x,y,4);
            stat.Bee.current ++;
            stat.Bee.born ++;
        }
        else if(matrix[y][x]==5){
            matrix[y][x] = new Flower(x, y, 5);
            stat.Flower.current ++;
            stat.Flower.born ++;
        }
    }
}
module.exports = matrix;
