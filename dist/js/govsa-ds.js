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

$('.govsa-header__search-btn').click(function () {
    activeatsearchbox();
 });

   $('.govsa-header__srarch__input').on('keypress',function(e) {
     if(e.which == 13) {    
        redirectToAdvSearch(this.value);
     }
 });

 $(".govsa-header__srarch__input").on('input', function () {
 if ($(this).val() == "") {
     $(".govsa-header__clear-bnt").addClass('d-none');
 }else{
     $(".govsa-header__clear-bnt").removeClass('d-none');
 }
 });

 $(".govsa-header__clear-bnt").click(function () {
     $(".govsa-header__srarch__input").val("");
     $(this).addClass('d-none');
     $('.govsa-header__srarch__input').focus();
 }); 

 $('.govsa-advanced-search__btn').click(function(){
    redirectToAdvSearch(document.querySelector('.govsa-header__srarch__input').value);
 });

 function deactivateSearch () {

    $('.govsa-header__srarch__input').addClass('d-none');
    $('.govsa-header__clear-bnt').addClass('d-none');
    $('.navbar-nav').removeClass('d-none');
    $('.govsa-header__search-btn').css('border-radius', '50%');
    $('.gosa-header__search-box').removeClass('active-search-box');
    $('.gosa-header__search-box').css({
        position: 'relative',
        width: 'auto',
        marginLeft: '0px',
        marginRight: '0px'
        });
    $('.govsa-header__advanced-search').addClass('d-none');
    $('.govsa-logo').css('opacity', '1');
}

function activateSearch () {
    $('.govsa-header__srarch__input').removeClass('d-none');
    $('.gosa-header__search-box').removeClass('w-auto');
    $('.govsa-header__advanced-search').removeClass('d-none');
    $('.gosa-header__search-box').addClass('active-search-box');
    $('.govsa-header__srarch__input').focus();
    $('.navbar-collapse').removeClass('show');
    $('.navbar-nav').addClass('d-none');
   
    if( $(window).width()<= 991){
        $('.govsa-logo').css('opacity', '0');
        
        $('.gosa-header__search-box').css({
            position: 'absolute',
            width: '92%',
            });
    }
    else{
        $('.navbar-nav').css('display', 'inherit');
        $('.gosa-header__search-box').css({
            position: 'absolute',
            width: '60%',
            marginLeft: '20%',
            marginRight: '20%'
            });
    }
    if (document.dir == "ltr") {
        $('.govsa-header__search-btn').css('border-radius', '0px 8px 0px 0px'); 
    }else{
        $('.govsa-header__search-btn').css('border-radius', '8px 0px 0px 0px'); 
    }
}

function redirectToAdvSearch(keyword) {
    window.location.href = "/wps/portal/snp/pages/Search?q=" + keyword;
}

function activeatsearchbox (){
    if($('.gosa-header__search-box').hasClass('active-search-box')){
        redirectToAdvSearch(document.querySelector('.govsa-header__srarch__input').value);
      }else{
          activateSearch();  
      }
}

$(document).mouseup(function (e) {
    var container = $(".gosa-header__search-box");
    if (!container.is(e.target) &&
        container.has(e.target).length === 0) {
        deactivateSearch();
    }
});



$(".govsa-search__input").on('input', function () {
    if ($(this).val() == "") {
        $(this).next().children(".govsa-clear__button").addClass('d-none');
        //to hid search results div
        $(this).parent().next(".govsa-search__results").addClass('d-none');
        if (document.dir == "ltr") {
            $(this).css("border-radius", "8px 0px 0px 8px");
            $(this).next().next().children(".govsa-search__button").css("border-radius", "0px 8px 8px 0px");
        } else {
            $(this).css("border-radius", "0px 8px 8px 0px");
            $(this).next().next().children(".govsa-search__button").css("border-radius", "8px 0px 0px 8px");
        }
    }
    else {
        $(this).next().children(".govsa-clear__button").removeClass('d-none');
        //to show search results div
        $(this).parent().next(".govsa-search__results").removeClass('d-none');

        if (document.dir == "ltr") {
            $(this).css("border-radius", "8px 0px 0px 0px");
            $(this).next().next().children(".govsa-search__button").css("border-radius", "0px 8px 0px 0px");
        }
        else {
            $(this).css("border-radius", "0px 8px 0px 0px");
            $(this).next().next().children(".govsa-search__button").css("border-radius", "8px 0px 0px 0px");
        }
    }
});


$(".govsa-clear__button").click(function () {
    $(this).parent().prev(".govsa-search__input").val("");
    $(this).addClass('d-none');
    //to hid search results div
    $(this).parent().parent().next(".govsa-search__results").addClass('d-none');
    if (document.dir == "ltr") {
        $(this).parent().prev(".govsa-search__input").css("border-radius", "8px 0px 0px 8px");
        $(this).parent().next().children(".govsa-search__button").css("border-radius", "0px 8px 8px 0px");
    } else {
        $(this).parent().prev(".govsa-search__input").css("border-radius", "0px 8px 8px 0px");
        $(this).parent().next().children(".govsa-search__button").css("border-radius", "8px 0px 0px 8px");
    }
});

var dropdown = document.getElementsByClassName("govsa-sideNavigation__dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {

    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("govsa-active");
        var dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
    
}

// to remove tag javascript
var buttons = document.getElementsByClassName("colsed-tag");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.parentNode.remove();
  });
}

