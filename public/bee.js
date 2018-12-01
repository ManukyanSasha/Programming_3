class Bee {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
    chooseCell(num) {
        this.getNewCoordinates();
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
    move() {
        var newCell = random(this.chooseCell(0));
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
            this.die();
        }
    }
    die() {
        for (var i in this.dieDir) {
            var x = this.dieDir[i][0];
            var y = this.dieDir[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                matrix[x][y] = 0;
            }
        matrix[this.y][this.x] = 0;
    }
}
}