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

