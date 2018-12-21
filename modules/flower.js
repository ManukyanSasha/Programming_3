var LivingCreature = require("./LivingCreature.js");
var stat = require("./statistic");
module.exports = class Flower extends LivingCreature{
    constructor(x, y, index) {
      super(x,y,index);
        this.directions = [
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
        ];
        this.energy = 8;
    }
    
    eat(matrix) {
        this.energy--;
        var newCell1 = randomInRange(this.chooseCell(2, matrix));
        var newCell2 = randomInRange(this.chooseCell(3, matrix));
        var arr = [newCell1, newCell2];
        var newCell = randomInRange(arr);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            this.x = newX;
            this.y = newY;
        stat.Eater.dead ++;
        stat.Eater.current --;
        stat.Predator.dead ++;
        stat.Predator.current --;
        }
       
        if (this.energy <= 0) {
            this.die(matrix);
        }
        else if (this.energy == 5) {
            this.mul(matrix);
        }
        
    }
    mul(matrix) {
        var newCell = randomInRange(this.chooseCell(0, matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Bee(newX, newY, 5);
            stat.Bee.born ++;
            stat.Bee.current ++;
        }
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
        stat.Flower.dead ++;
        stat.Flower.current --;
    }
}
function randomInRange(mas)
{
    var i = Math.floor((Math.random() * mas.length));
    return mas[i];
}
