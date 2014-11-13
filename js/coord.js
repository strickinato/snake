(function () {
    if (typeof Snake === "undefined") {
        window.Snake = {};
    }
    
    var Coord = Snake.Coord = function (pos) {
        this.pos = pos;
        
    }
    
    Coord.prototype.plus = function (dir) {
        return new Coord([(this.pos[0] + dir[0]), (this.pos[1] + dir[1])]);
    }

    Coord.prototype.compare = function (newPos) {
        if (this.pos[0] == newPos[0] && this.pos[1] == newPos[1]) {
            return true;
        } else {
            return false;
        }
    }



})();