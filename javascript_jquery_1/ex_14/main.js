"use strict";
$(document).ready(function () {

$('p').mouseover(function () {

    $('p').addClass('blue');
    if($(this).attr('class')==="blue"){
        $(this).css("color" ,"blue")

    }

});
$('.highlighted').click(function () {

$(this).css("position", "absolute");

        $(this).toggle();

})
});

