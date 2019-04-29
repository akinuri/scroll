function Scroll(delay) {
    // scroll event occurs if the page is refreshed when scrollY > 0
    // this suggests that the browser scrolls to previous (before refresh) position
    this.initialY = scrollY;
    this.callbacks = {
        start  : null,
        scroll : null,
        ended  : null,
    };
    this.timeout = {
        delay  : delay || 100,
        handle : null,
    };
    this.handler = Scroll.handler.bind(this);
    window.addEventListener("scroll", this.handler);
}

Scroll.handler = function (e) {
    if (this.initialY == 0) {
        if (this.timeout.handle == null) {
            if (this.callbacks.start) {
                this.callbacks.start.call(this, e);
            }
        }
        if (this.timeout.handle !== null) {
            clearTimeout(this.timeout.handle);
        }
        if (this.callbacks.scroll) {
            this.callbacks.scroll.call(this, e);
        }
        var self = this;
        this.timeout.handle = setTimeout(function () {
            self.timeout.handle = null;
            if (self.callbacks.ended) {
                self.callbacks.ended.call(self, e);
            }
        }, this.timeout.delay);
    } else {
        this.initialY = 0;
    }
};

Scroll.prototype.addEventListener = function (event, callback) {
    if (Object.keys(this.callbacks).includes(event)) {
        this.callbacks[event] = callback;
    } else {
        console.warn("Invalid scroll event: " + event);
    }
};