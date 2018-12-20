var LivingCreature = require("./LivingCreature.js");
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
        var newCell1 = random(this.chooseCell(2, matrix));
        var newCell2 = random(this.chooseCell(3, matrix));
        var arr = [newCell1, newCell2];
        var newCell = random(arr);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = matrix[this.y][this.x];
            this.x = newX;
            this.y = newY;
        }
       
        if (this.energy <= 0) {
            this.die();
        }
        else if (this.energy == 5) {
            this.mul();
        }
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0, matrix));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Bee(newX, newY, 5);
        }


    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
    }


}