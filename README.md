# scroll.js

```javascript
var sl = new Scroll(200);

sl.addEventListener("start", function (e) {
    console.log("started", e);
});

sl.addEventListener("scroll", function () {
    console.log("scrolling");
});

sl.addEventListener("ended", function () {
    console.log("ended");
});
```