"use strict";
$(document).ready(function () {
let stock_parameter;
$('button').click(function () {
 stock_parameter= $('#listltem').val();
$('#listltem').after('<div>'+ stock_parameter + '</div>')

})
});

