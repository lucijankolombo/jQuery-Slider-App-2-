"use strict";

$(document).ready(function () {

    $(".btn-left").click(function () {
        var firstInFirstRow = $(".row-first").children("img:nth-child(1)");
        var lastInFirstRow = $(".row-first").children("img:nth-child(9)");

        var firstInSecondRow = $(".row-second").children("img:nth-child(1)");
        var lastInSecondRow = $(".row-second").children("img:nth-child(9)");

        $(firstInFirstRow).fadeOut(1, function () {
            $(firstInFirstRow).insertAfter(lastInFirstRow).fadeIn(1500);
        });

        $(firstInSecondRow).fadeOut(1, function () {
            $(firstInSecondRow).insertAfter(lastInSecondRow).fadeIn(1500);
        });
    });

    $(".btn-right").click(function () {
        var firstInFirstRow = $(".row-first").children("img:nth-child(1)");
        var lastInFirstRow = $(".row-first").children("img:nth-child(9)");

        var firstInSecondRow = $(".row-second").children("img:nth-child(1)");
        var lastInSecondRow = $(".row-second").children("img:nth-child(9)");

        $(lastInFirstRow).fadeOut(500, function () {
            $(lastInFirstRow).insertBefore(firstInFirstRow).fadeIn(1);
        });

        $(lastInSecondRow).fadeOut(500, function () {
            $(lastInSecondRow).insertBefore(firstInSecondRow).fadeIn(1);
        });
    });
});