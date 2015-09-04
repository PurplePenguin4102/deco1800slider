//CODING RESTRUCTURRRREEEEE

$(document).ready(main);

function main () {
    var usrSelect
    var leaderboard
    $('.menuButton').click(start_game);
    $('.solveButton').click(game_end);
    $('.endButton').click(play_again);
}

function start_game() {
    var troveResult;

    $(menu).hide('slow');
    usrSelect = $(this).attr('id');
    troveResult = trove_search(usrSelect);
    dump_asset(troveResult);

    switch (usrSelect) {
        case "animals" :
            $(jqslider).attr('src', "./assets/animals.jpg");
            break;
        case "politicians" :
            $(jqslider).attr('src', "./assets/dickheads.jpg");
            break;
        case "landmarks" :
            $(jqslider).attr('src', "./assets/landmarks.jpg");
            break;
        case "usr" :
            $("#jqslider").attr('src', "./assets/usr.jpg");
            break;
    }

    $("#jqslider").attr('src', "./assets/troveResult.jpg");

    $(puzzle).fadeTo('slow', 1);

    init_slider($("#jqslider"));
    mix_slider($("#jqslider"));
    start_clock();
    play_slider();
}

function game_end() {
    var imgHeight, imgWidth;

    $(puzzle).fadeTo('slow', 0.5);
    imgHeight = $(jqslider).height() - 50;
    imgWidth = $(jqslider).width() - 50;

    $(explanation).width(imgWidth).height(imgHeight);
    $(playAgain).fadeTo('slow', 1);
}

function play_again() {
    $(puzzle).hide('slow');
    $(playAgain).hide('slow');
    $(menu).show('slow');
}
