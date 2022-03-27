$(document).ready(() => {

    $(".btn-left").click(() => {
        let firstInFirstRow = $(".row-first").children("img:nth-child(1)");
        let lastInFirstRow = $(".row-first").children("img:nth-child(9)");

        let firstInSecondRow = $(".row-second").children("img:nth-child(1)");
        let lastInSecondRow = $(".row-second").children("img:nth-child(9)");

        $(firstInFirstRow).fadeOut(1, () => {
            $(firstInFirstRow).insertAfter(lastInFirstRow).fadeIn(1500);
        })

        $(firstInSecondRow).fadeOut(1, () => {
            $(firstInSecondRow).insertAfter(lastInSecondRow).fadeIn(1500);
        })
    })

    $(".btn-right").click(() => {
        let firstInFirstRow = $(".row-first").children("img:nth-child(1)");
        let lastInFirstRow = $(".row-first").children("img:nth-child(9)");

        let firstInSecondRow = $(".row-second").children("img:nth-child(1)");
        let lastInSecondRow = $(".row-second").children("img:nth-child(9)");

        $(lastInFirstRow).fadeOut(500, () => {
            $(lastInFirstRow).insertBefore(firstInFirstRow).fadeIn(1);
        })

        $(lastInSecondRow).fadeOut(500, () => {
            $(lastInSecondRow).insertBefore(firstInSecondRow).fadeIn(1);
        })

    })

})