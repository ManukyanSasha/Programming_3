var LivingCreature = require("./LivingCreature.js");
module.exports = class Grass extends LivingCreature{

    chooseCell(num) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var newCell = randomInRange(this.chooseCell(0));
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;
        }
    }
}

function randomInRange(mas)
{
    var i = Math.floor((Math.random() * (mas.length-1)));
    return mas[i];
}