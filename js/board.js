(function () {
    if (typeof Snake === "undefined") {
        window.Snake = {};
    }

    var BOARD_SIZE = 40;

    var Board = Snake.Board = function () {
        this.body = new Snake.Body();
    }

    Board.prototype.render = function() {
        var theString = "";

        for (var i = 0; i < BOARD_SIZE; i++) {
            for (var j = 0; j < BOARD_SIZE; j++) {
                var matched = false
                for (var k = 0; k < this.body.segments.length; k++) {
                    if (this.body.segments[k].compare([i, j])) {
                        matched = true;
                    }
                }
                theString += (matched) ? "S" : "."
            }
        theString += "\n";
        }
        console.log(theString);
        return this.body
    }




})();
