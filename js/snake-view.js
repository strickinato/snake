(function () {
    if (typeof Snake === "undefined") {
        window.Snake = {};
    }

    var BOARDSIZE = 35;

    var View = Snake.View = function ($el) {
        this.$el = $el;
        this.body = new Snake.Body();
        this.render();
        this.start();

        $(window).on("keydown", this.handleKeyEvent.bind(this));
}


    Snake.View.prototype.handleKeyEvent = function(event) {
      switch(event.keyCode) {
        case 87:
          this.body.turn("N")
          break;
        case 68:
          this.body.turn("E")
          break;
        case 83:
          this.body.turn("S")
          break;
        case 65:
          this.body.turn("W")
          break;
      }
    }

    Snake.View.prototype.start = function() {
      window.setInterval((function() {
        this.step();
      }).bind(this), 1000 / 30)
    }

    Snake.View.prototype.step = function() {
      this.body.move();
      this.render();
    }

    Snake.View.prototype.render = function () {
        var theString = "";

        for (var i = 0; i < BOARDSIZE; i++) {
            for (var j = 0; j < BOARDSIZE; j++) {
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
