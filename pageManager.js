$(document).ready(main);

var myVar;


function main () {
    var usrSelect;
    var leaderboard;
	myVar = 1;
	
    //set up callbacks for divs
    $('.navButton').click(open_homepage);
	$('.leaderButton').click(open_leaderboard);
    $('.playButton').click(open_menu);
    $('.menuButton').click(open_difficutly);
    $('.difficultyButton').click(start_game);
    $('.solveButton').click(game_end);
    $('.endButton').click(play_again);
    //load trove images
    trove_search("animals");
    trove_search("politicians");
    trove_search("landmarks");
    //remove loading div to activate site
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
    dump_asset_to_slider(usrSelect);
}


function start_game() {
    var troveResult;

    $(difficulty).hide('slow');

    $(puzzle).fadeTo('slow', 1);
    console.log("hello");
    init_slider($("#slider"));
    mix_slider($("#slider"));
    start_clock();
    play_slider();
	control = 0;
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
