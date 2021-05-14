# scroll.js

```javascript
var sl = new Scroll(200); // after 200 ms of inactivity, "end" event will fire; default = 150

sl.addEventListener("start", function (e) {
    console.log("started", e);
});

sl.addEventListener("scroll", function () {
    console.log("scrolling");
});

sl.addEventListener("end", function () {
    console.log("ended");
});
```