// My Global variables
var count = 60;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var panel = $("#main-container");

$("#main-container").hide();
$("#end-container").hide();

//Game Functions
var game = {

	// Counts down and displays the time to the user
	countdown: function(){
		count--;
    	$('#timer_number').html(count + " seconds");
			// Finish the game after the timer reaches 0
			if(count === 0){
				game.timeUp();
				// Hide the game Div from the user
				 $("#main-container").hide();
			}
	},

	// Show the countdown
	startCountdown: function() {
		$("#main-container").show();

		timer = setInterval(game.countdown, 1000);

		$('#directions').remove();

		panel.append("<br><button type='submit' id='done_button'>Done</button>");
	},


	// Function to be run after the timer is up
	timeUp: function() {


		// Checked values of Radio Buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();



		// Determine the right/wrong/unanswered counts
		if(Q1 == undefined){
			unanswered++;
		}
		else if(Q1 == "Clark Kent"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q2 == undefined){
			unanswered++;
		}
		else if(Q2 == "Steve Trevor"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q3 == undefined){
			unanswered++;
		}
		else if(Q3 == "The Flash"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q4 == undefined){
			unanswered++;
		}
		else if(Q4 == "Hal Jordan"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q5 == undefined){
			unanswered++;
		}
		else if(Q5 == "Atlantis"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q6 == undefined){
			unanswered++;
		}
		else if(Q6 == "Green Arrow"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q7 == undefined){
			unanswered++;
		}
		else if(Q7 == "Joe Chill"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q8 == undefined){
			unanswered++;
		}
		else if(Q8 == "All of the Above"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q9 == undefined){
			unanswered++;
		}
		else if(Q9 == "Black Widow"){
			correct++;
		}
		else{
			wrong++;
		}

		if(Q10 == undefined){
			unanswered++;
		}
		else if(Q10 == "Teen Titans"){
			correct++;
		}
		else{
			wrong++;
		}

		this.results();
	},

	results: function(){
		clearInterval(timer);

		// Show the completed Score Div
		$("#end-container").show();

		//show final results
		$('#correct-answers').html(correct);
		$('#wrong-answers').html(wrong);
		$('#unanswered').html(unanswered);
	}
};

//Click Events
$(document).on("click", "#start_button", function () {
	game.startCountdown();
	$("#main-container").show();
});

$(document).on("click", "#done_button", function () {
  game.timeUp();
  $("#main-container").hide();
});