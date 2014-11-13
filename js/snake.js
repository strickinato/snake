(function () {
    if (typeof Snake === "undefined") {
        window.Snake = {};
    };

    var DIRECTION_COORDS = {
        "N": [-1, 0],
        "E": [0, 1],
        "S": [1, 0],
        "W": [0, -1]
    };

     var Body = Snake.Body = function() {
        this.dir = "S";
        this.segments = [new Snake.Coord([0,0]), new Snake.Coord([1,0]), new Snake.Coord([2,0])];
    };

    Body.prototype.move = function () {
        var face = this.segments.slice(-1)[0].plus(DIRECTION_COORDS[this.dir])
        this.segments.push(face)
        this.segments.shift()
        return this.segments
    };

    Body.prototype.turn = function (newDir) {
        if (DIRECTION_COORDS[this.dir].indexOf(0) == DIRECTION_COORDS[newDir].indexOf(0)) {
            this.dir = this.dir;
        } else {
            this.dir = newDir;
        }
    }

    Body.prototype.grow = function() {
        var face = this.segments.slice(-1)[0].plus(DIRECTION_COORDS[this.dir])
        this.segments.push(face)
    }




})();
