var input = document.getElementsByClassName("govsa-search__input");
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function() {
        var buttons2 = document.getElementsByClassName("govsa-search__input");
        for (var i = 0; i < buttons2.length; i++) {
            if(this.value == ""){
                this.nextElementSibling.children[i].classList.add("d-none");
                this.parentElement.nextElementSibling.classList.add("d-none");
            
                if (document.dir == "ltr") {
                    this.style.borderBottomLeftRadius= "8px";
                    this.nextElementSibling.nextElementSibling.children[i].style.borderBottomRightRadius= "8px";
                } else {
                    this.style.borderBottomRightRadius= "8px";
                    this.nextElementSibling.nextElementSibling.children[i].style.borderBottomLeftRadius= "8px";
                }
            
            }else{
                this.nextElementSibling.children[i].classList.remove("d-none");
                this.parentElement.nextElementSibling.classList.remove("d-none");

                if (document.dir == "ltr") {
                    this.style.borderBottomLeftRadius= "0px";
                    this.nextElementSibling.nextElementSibling.children[i].style.borderBottomRightRadius= "0px";
                } else {
                    this.style.borderBottomRightRadius= "0px";
                    this.nextElementSibling.nextElementSibling.children[i].style.borderBottomLeftRadius= "0px";
                }
        }
      }
  });
}

var clearButton = document.getElementsByClassName("govsa-clear__button");
for (var i = 0; i < clearButton.length; i++) {
    clearButton[i].addEventListener("click", function() {
        this.parentElement.previousElementSibling.value="";
        this.classList.add("d-none");
        this.parentElement.parentElement.nextElementSibling.classList.add("d-none");
        var clearButton2 = document.getElementsByClassName("govsa-search__input");
        for (var i = 0; i < clearButton2.length; i++) {
        if (document.dir == "ltr") {
            this.parentElement.previousElementSibling.style.borderBottomLeftRadius= "8px";
            this.parentElement.nextElementSibling.children[i].style.borderBottomRightRadius= "8px";
        } else {
            this.parentElement.previousElementSibling.style.borderBottomRightRadius= "8px";
            this.parentElement.nextElementSibling.children[i].style.borderBottomLeftRadius= "8px";
        }
    }
  });
}