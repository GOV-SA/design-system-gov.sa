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