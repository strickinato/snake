(function () {
    if (typeof Snake === "undefined") {
        window.Snake = {};
    }
    
    var BOARD_SIZE = 20;
    
    var View = Snake.View = function ($el) {
        this.$el = $el;
        this.body = new Snake.Body();
        this.render();
        this.();
    }
    
    Snake.View.prototype.handleKeyPress = function(event) {
        // if (event.keyCode == 87
    }
    
    Snake.View.prototype.render = function () {
        var theString = "";
    
        for (var i = 0; i < BOARD_SIZE; i++) {
            for (var j = 0; j < BOARD_SIZE; j++) {
                var matched = false
                for (var k = 0; k < this.body.segments.length; k++) {
                    if (this.body.segments[k].compare([i, j])) {
                        matched = true;
                    }
                }
                var klass = (matched) ? "bodyPart" : "empty";
                theString += "<div class='square " + klass + "'></div>"; 
            }
        }
        this.$el.html(theString)
    }
    
    


})();