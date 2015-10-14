$(document).ready(main);

function main () {
    var usrSelect
    var leaderboard
	$('.leaderButton').click(open_leaderboard);
	$('.navButton').click(open_homepage);
	$('.playButton').click(open_menu);
	$('.menuButton').click(open_difficutly);
    $('.difficultyButton').click(start_game);
    $('.solveButton').click(game_end);
    $('.endButton').click(play_again);
}

function open_homepage() {
    $(leaderboard).hide('slow');
    $(homepage).hide('slow');
    $(menu).show('slow');
    $(difficulty).hide('slow');
    $(puzzle).hide('slow');
    $(playAgain).hide('slow');
    kill_slider($(".jqPuzzle"));
}

function open_menu(){
    $(homepage).hide('slow');
    $(menu).show('slow');
}

function open_leaderboard() {
    $(leaderboard).show('slow');
    $(homepage).hide('slow');
    $(menu).hide('slow');
    $(difficulty).hide('slow');
    $(puzzle).hide('slow');
    $(playAgain).hide('slow');
    kill_slider($(".jqPuzzle"));
}

//from w3school
function showScore(str) {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET","testForm/pull"+str+".php",true);
        xmlhttp.send();
}

function open_difficutly() {
    $(menu).hide('slow');
    $(difficulty).show('slow');

    usrSelect = $(this).attr('id');
    //troveResult = trove_search(usrSelect);


    switch (usrSelect) {
        case "animals" :
            $("#slider").attr('src', "./assets/animals.jpg");
            break;
        case "politicians" :
            $("#slider").attr('src', "./assets/dickheads.jpg");
            break;
        case "landmarks" :
            $("#slider").attr('src', "./assets/landmarks.jpg");
            break;
        case "usr" :
            $("#slider").attr('src', "./assets/usr.jpg");
            break;
    }

}


function start_game() {


    //troveResult = trove_search(usrSelect);
    //dump_asset(troveResult);



    var troveResult;
    $(difficulty).hide('slow');
    //$("#jqslider").attr('src', "./assets/troveResult.jpg");

    $(puzzle).fadeTo('slow', 1);
    console.log("hello");
    init_slider($("#slider"));
    mix_slider($("#slider"));
    start_clock();
    play_slider();
}

function game_end() {
    var imgHeight, imgWidth;

    $("#puzzle").fadeTo('slow', 0.5);
    imgHeight = $("#slider").height() - 50;
    imgWidth = $("#slider").width() - 50;

    $("#explanation").width(imgWidth).height(imgHeight);
    $("#explanation").css('margin-left', (998 - imgWidth) / 2);
    $("#playAgain").fadeTo('slow', 1);
}

function play_again() {
    $("#puzzle").hide('slow');
    $("#playAgain").hide('slow');
    $("#menu").show('slow');
    kill_slider($(".jqPuzzle"));
}
