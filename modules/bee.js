var LivingCreature = require("./LivingCreature.js");
var stat = require("./statistic");
module.exports = class Bee extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
        this.dieDir = [];
        this.energy = 10;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1]
        ];

        this.dieDir = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(num, matrix) {
        this.getNewCoordinates();
        return super.chooseCell(num, matrix);
    }
    move(matrix) {
        var newCell = randomInRange(this.chooseCell(0, matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
        this.energy--;
        if (this.energy <= 0) {
            this.die(matrix);
        }
    }
    die(matrix) {
        for (var i in this.dieDir) {
            var x = this.dieDir[i][0];
            var y = this.dieDir[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[x][y].index == 1) {
                    stat.Grass.dead++;
                    stat.Grass.current--;
                }
                if (matrix[x][y].index == 2) {
                    stat.Eater.dead++;
                    stat.Eater.current--;
                }
                if (matrix[x][y].index == 3) {
                    stat.Predator.dead++;
                    stat.Predator.current--;
                }
                if (matrix[x][y].index == 5) {
                    stat.Flower.dead++;
                    stat.Flower.current--;
                }
                matrix[x][y] = 0;
            }
        }
        matrix[this.y][this.x] = 0;
        stat.Bee.dead ++;
        stat.Bee.current --;
    }
}
function randomInRange(mas) {
    var i = Math.floor((Math.random() * mas.length));
    return mas[i];
}
