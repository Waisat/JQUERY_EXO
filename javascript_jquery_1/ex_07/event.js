"use strict";
$(document).ready(function () {

  $('p').mouseenter(function () {
    console.log('click')
  $(this).css("background", "gray");
  });
  $('p').mouseleave(function () {
  $(this).css("background", "white")
  })

  $('p').click(function () {
  $(this).hide();
  })
});

