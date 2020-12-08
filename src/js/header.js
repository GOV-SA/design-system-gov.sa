// on click search button
var searchButton = document.getElementsByClassName("govsa-header__search-button");
for (var i = 0; i < searchButton.length; i++) {
    searchButton[i].addEventListener("click", function() {
        this.parentElement.classList.toggle("active");
        if( this.parentElement.classList.contains("active")){
            if (screen.width < 991){
                this.parentElement.previousElementSibling.classList.add("d-none");
                this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.classList.add("d-none");
            }
            this.parentElement.previousElementSibling.previousElementSibling.style.opacity= "0";
            this.parentElement.previousElementSibling.previousElementSibling.style.visibility= "hidden";
        }else{
            this.parentElement.previousElementSibling.classList.remove("d-none");
            this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove("d-none");
            this.parentElement.previousElementSibling.previousElementSibling.style.opacity= "1";
            this.parentElement.previousElementSibling.previousElementSibling.style.visibility= "visible";
        }
  
  });
}

// on write show search results and clear button
var input = document.getElementsByClassName("govsa-header__search-input");
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function() {
        var buttons2 = document.getElementsByClassName("govsa-header__search-input");
        for (var i = 0; i < buttons2.length; i++) {
            if(this.value == ""){
                this.nextElementSibling.nextElementSibling.classList.add("d-none");
                this.nextElementSibling.classList.add("d-none");
                if (document.dir == "ltr") {
                    this.style.borderBottomLeftRadius= "8px";
                } else {
                    this.style.borderBottomRightRadius= "8px";
                }
            
            }else{
                this.nextElementSibling.nextElementSibling.classList.remove("d-none");
                this.nextElementSibling.classList.remove("d-none");

                if (document.dir == "ltr") {
                    this.style.borderBottomLeftRadius= "0px";
                } else {
                    this.style.borderBottomRightRadius= "0px";
                }
        }
      }
  });
}

// on click clear button
var clearButton = document.getElementsByClassName("govsa-header__search-clear");
for (var i = 0; i < clearButton.length; i++) {
    clearButton[i].addEventListener("click", function() {
        this.previousElementSibling.value="";
        this.nextElementSibling.classList.add("d-none");
        this.classList.add("d-none");

        if (document.dir == "ltr") {
            this.previousElementSibling.style.borderBottomLeftRadius= "8px";
        } else {
            this.previousElementSibling.style.borderBottomRightRadius= "8px";
        }
  
  });
}

//burger menu
var navigationCheckbox = document.getElementsByClassName("govsa-header__navigation__checkbox");
for (var i = 0; i < navigationCheckbox.length; i++) {
    navigationCheckbox[i].addEventListener("change", function() {
        if(this.checked) {
            this.parentElement.nextElementSibling.classList.add("active");
            document.getElementsByTagName('body')[0].classList.add("overflow-hidden");
         }
         else{
            this.parentElement.nextElementSibling.classList.remove("active");
            document.getElementsByTagName('body')[0].classList.remove("overflow-hidden");
         }
  });
}

//on click navigation dropdown
var navigationDropdown = document.getElementsByClassName("govsa-header__navigation__dropdown");
for (var i = 0; i < navigationDropdown.length; i++) {
    navigationDropdown[i].addEventListener("click", function() {
        this.classList.toggle("show");
  });
}

// on click out side
document.addEventListener("click", function(){
    var resultsBox = document.getElementsByClassName("govsa-header__search__container");
    for (var i = 0; i < resultsBox.length; i++) {
        resultsBox[i].classList.remove("active");
        resultsBox[i].previousElementSibling.classList.remove("d-none");
        resultsBox[i].previousElementSibling.previousElementSibling.previousElementSibling.classList.remove("d-none");
        resultsBox[i].previousElementSibling.previousElementSibling.style.opacity= "1";
        resultsBox[i].previousElementSibling.previousElementSibling.style.visibility= "visible";
    }

    var navigationHeader = document.getElementsByClassName("govsa-header__navigation");
    for (var i = 0; i < navigationHeader.length; i++) {
        navigationHeader[i].nextElementSibling.classList.remove("active");
        document.getElementsByTagName('body')[0].classList.remove("overflow-hidden");
        navigationHeader[i].children[i].checked = false;
    }

    var navigationMenu = document.getElementsByClassName("govsa-header__navigation__dropdown");
    for (var i = 0; i < navigationMenu.length; i++) {
        navigationMenu[i].classList.remove("show");
    }
});

var resultsBox2= document.getElementsByClassName("govsa-header__search__container");
for (var i = 0; i < resultsBox2.length; i++) {
    resultsBox2[i].addEventListener("click", function(e){
        e.stopPropagation();
    });
}

var navigationHeader2= document.getElementsByClassName("govsa-header__navigation");
for (var i = 0; i < navigationHeader2.length; i++) {
    navigationHeader2[i].addEventListener("click", function(e){
        e.stopPropagation();
    });
}

var navigationMenu2= document.getElementsByClassName("govsa-header__navigation__dropdown");
for (var i = 0; i < navigationMenu2.length; i++) {
    navigationMenu2[i].addEventListener("click", function(e){
        e.stopPropagation();
    });
}
