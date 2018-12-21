var LivingCreature = require("./LivingCreature.js");
var stat = require("./statistic");
module.exports = class Predator extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.directions = [];
        this.active = false;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
        ];
    }
    chooseCell(num, matrix) {
        this.getNewCoordinates();
        return super.chooseCell(num, matrix);
    }
    move(matrix) {
        if (this.active == false) {
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
            this.active = true;
        }
    }
    eat(matrix) {
        if (this.active == false) {
            var newCell = randomInRange(this.chooseCell(2, matrix));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 12) {
                    this.mul(matrix);
                }
                stat.Eater.dead ++;
                stat.Eater.current --;
            }
            else {
                this.move(matrix);
            }
            this.active = true;
        }
        else{this.active = false;}

        
    }
    mul(matrix) {
        var newCell = randomInRange(this.chooseCell(0, matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Predator(newX, newY, 2);
            stat.Predator.born ++;
            stat.Predator.current ++;
        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
        stat.Predator.die ++;
        stat.Predator.current --;
    }
}
function randomInRange(mas)
{
    var i = Math.floor((Math.random() * mas.length));
    return mas[i];
}
