//Add the following code if you want the name of the file appear on select
var fileupload_buttons = document.getElementsByClassName("govsa-fileupload__input");
for (var i = 0; i < fileupload_buttons.length; i++) {
  fileupload_buttons[i].addEventListener("change", function() {
    var fileName = this.value.split("\\").pop();
    console.log(i);
    this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML= fileName;
    this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("d-none");

    var fileupload_buttons2 = document.getElementsByClassName("govsa-fileupload__bnt");
    for (var i = 0; i < fileupload_buttons2.length; i++) {
    this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[i].removeAttribute("disabled");
    }
  });
}

var clear_buttons = document.getElementsByClassName("clear");
for (var i = 0; i < clear_buttons.length; i++) {
  clear_buttons[i].addEventListener("click", function() {
  
   if (document.dir == "ltr") {
       this.previousElementSibling.innerHTML="No file choosen";
      } else {
        this.previousElementSibling.innerHTML="لا يوجد مرفق";
      }

   var fileupload_buttons3 = document.getElementsByClassName("govsa-fileupload__bnt");
   for (var i = 0; i < fileupload_buttons3.length; i++) {
    this.nextElementSibling.children[i].setAttribute("disabled",false);
   }
   this.classList.add("d-none");
   this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value="";
  });
}
