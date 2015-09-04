$(document).ready(function () {
    var usrSelect
    var leaderboard
    
    $('.menuButton').click(function () {

        $(menu).hide('slow');

        usrSelect = $(this).attr('id');
        switch (usrSelect) {
            case "animals" :
                $(jqslider).attr('src', "./animals.jpg");
                break;
            case "politicians" :
                $(jqslider).attr('src', "./dickheads.jpg");
                break;
            case "landmarks" :
                $(jqslider).attr('src', "./landmarks.jpg");
                break;
        }

        $(puzzle).fadeTo('slow', 1);
    });

    $('.solveButton').click(function () {
        var imgHeight, imgWidth;

        $(puzzle).fadeTo('slow', 0.5);
        imgHeight = $(jqslider).height() - 50;
        imgWidth = $(jqslider).width() - 50;

        $(explanation).width(imgWidth).height(imgHeight);
        $(playAgain).fadeTo('slow', 1);
    });

    $('.endButton').click(function () {
        $(puzzle).hide('slow');
        $(playAgain).hide('slow');
        $(menu).show('slow');
    });
});
