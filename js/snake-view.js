(function () {
    if (typeof Snake === "undefined") {
        window.Snake = {};
    }

    var BOARDSIZE = 35;

    var View = Snake.View = function ($el) {
        this.$el = $el;
        this.body = new Snake.Body();
        this.moveApple();
        this.render();
        this.apple_count = 0;

        this.start();

        $(window).on("keydown", this.handleKeyEvent.bind(this));
}


    Snake.View.prototype.moveApple = function() {
      this.currentApple = [(Math.floor(Math.random() * BOARDSIZE)), (Math.floor(Math.random() * BOARDSIZE))]
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


    Snake.View.prototype.appleCheck = function() {
      if (this.body.segments[0].compare(this.currentApple)) {
        this.moveApple();
        this.body.grow();
        this.appleCount += 1;

      }
    }

    Snake.View.prototype.start = function() {
      window.setInterval((function() {
        this.step();
      }).bind(this), 1000 / 30)
    }

    Snake.View.prototype.step = function() {
      this.body.move();
      this.appleCheck();
      this.render();
    }

    Snake.View.prototype.render = function () {
        var theString = "";

        for (var i = 0; i < BOARDSIZE; i++) {
            for (var j = 0; j < BOARDSIZE; j++) {
                var matched = false
                var isApple = false
                for (var k = 0; k < this.body.segments.length; k++) {
                    if (this.body.segments[k].compare([i, j])) {
                        matched = true;
                    }
                    if ((this.currentApple[0] == i) && (this.currentApple[1] == j)) {
                      isApple = true;
                    }
                }
                var klass = (matched) ? "bodyPart" : "empty";
                var apple = (isApple) ? "apple" : "";
                theString += "<div class='square " + klass + " " + apple + "'></div>";
            }
        }
        this.$el.html(theString)
    }




})();
