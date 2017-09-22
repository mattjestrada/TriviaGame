// My Global variables
var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



//Game Functions
$(document).ready(function(){

	// Intialize the game with hidden Divs
	$("#main-container").hide();
	$("#end-container").hide();

	$("#start_button").on("click", function(){

		// Hide the start Div from the user
		$("#directions").hide();


		// Show the Game Div
		$("#main-container").show();

		startCountdown();
		return;

	});



	// Counts down and displays the time to the user
	function countdown(){
		count--;
    	$('#timer_number').html(count + " Seconds");

    	
			// User finishes before time is up and clicks done
			$("#done_button").on("click", function(){

			// Stop the countdown and run the timeUp function
			//clearInterval(startCountdown);
			count = 0; 
			return;

			});


			// Finish the game after the timer reaches 0
			if(count == -1){

				// Collect the radio inputs
				timeUp();

				// Hide the game Div from the user
				$("#main-container").hide();

			}


	}


	// Show the countdown
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// Function to be run after the timer is up
	function timeUp(){


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



		// Determine the right/wrong/unanswered counts ( This count be a lot more DRY :/ )
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "Clark Kent"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "Steve Trevor"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "The Flash"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Hal Jordan"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Atlantis"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Green Arrow"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "Joe Chill"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "All of the Above"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "Black Widow"){
			correctCount++;
		}
		else{
			wrongCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "Teen Titans"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		// Show the completed Score Div
		$("#end-container").show();


		//show final results
		$('#correct-answers').html(correctCount);
		$('#wrong-answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);



	}

});

