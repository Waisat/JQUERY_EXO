"use strict";
$(document).ready(function () {

$('.platypus').click(function () {
  $(this).animate({
    marginRight: "-=150px",

     marginBottom: "-=200px"


  },1000, function () {
    $(this).css("backgroundColor", "green")

  })

})
});

