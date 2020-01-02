// to remove tag javascript
var buttons = document.getElementsByClassName("colsed-tag");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.parentNode.remove();
  });
}

// to remove tag jquery
// $(".colsed-tag").click(function() {
//   $(this).parent(".govsa-tag").remove();
// });


