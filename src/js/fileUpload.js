// Add the following code if you want the name of the file appear on select
$(".govsa-fileupload__input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".govsa-fileupload__name").html(fileName);

    $(this).parent().children().next().next().next().next(".clear").removeClass("d-none");
    $(this).parent().children().next().next().next().next().next().children('.govsa-fileupload__bnt').removeAttr("disabled");
});
//to clear file name slected 
$(".clear").click(function () {
    if (document.dir == "ltr") {
        $(this).parent().children().next().next().next(".govsa-fileupload__name").text("No file choosen");
    } else {
        $(this).parent().children().next().next().next(".govsa-fileupload__name").text("لا يوجد مرفق");
    }

    $(this).parent().children().next().next().next().next().next().children('.govsa-fileupload__bnt').attr('disabled', 'disabled');
    $(this).parent().children(".govsa-fileupload__input").val('');
    $(this).parent().children().next().next().next().next(".clear").addClass("d-none");
});

// to remove tag
$(".colsed-tag").click(function () {
    $(this).parent(".govsa-tag").remove();
});
// for img carousel
$('.carousel').carousel({
    interval: false
});
