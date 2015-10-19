function init_slider(image) {
  //turn the DOM element image into a sliding puzzle
  //image.jqPuzzle();
}

function mix_slider(image) {
}

function get_score() {
  //returns the user's current score
}

function query_solution() {
  //probably don't worry about this one till last, needs to autosolve
  //the puzzle and return how many moves it took
}

function start_clock() {

}

function play_slider() {

}

function kill_slider(slider) {
    slider.remove();
    $('#puzzle').append('<img id=slider>');
	$('#timer').empty('readonly');
	$('#moves').empty('readonly');
<<<<<<< HEAD
	$('#hint').empty('readonly');
	
=======


>>>>>>> e4c5d743344297f048914e1f03b3222e2f9a9799
}
