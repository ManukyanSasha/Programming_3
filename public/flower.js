class Flower {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
    chooseCell(num) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    eat() {
        this.energy--;
        var newCell1 = random(this.chooseCell(2));
        var newCell2 = random(this.chooseCell(3));
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
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Bee(newX, newY, 5);
        }


    }
    die() {
        matrix[this.y][this.x] = 0;
    }


}