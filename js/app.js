
$(document).ready(function () {

// Front Page //

      $(".heading").effect("bounce", 1000);
	  $("#start").on("click", function() {
		$(".front").hide("fold", 600);
		$(".quiz").show("slide", {direction: "right"}, 700, getQuestion);

	  });


// Quiz Questions //

	var questions = [
		 {
		 	num: 1,
			ques: "What's an accelerator?",
			options: ["Where startups grow rapidly from the beginning", "Where startups are assisted with resources and mentorship", "A program to visit as many investors as possible"],
			feedback: "It's where startups are helped in their beginning stages with resources, mentorship, and if they're really lucky, CASH!",
			correct: "2"},

		{
			num: 2,
			ques: "What does FMA stand for?",
			options: ["First Mover Advantage", "Financial Management Association", "Fiscal Management Accelerator"],
			feedback: "Having the First Mover Advantage means the startup is one of the first to enter that industry.",
			correct: "1"},

		{
			num: 3,
			ques: "What is in an exit strategy?",
			options: ["The plan to sell the company", "The plan to reorganize the company with role changes or layoffs", "The plan to pivot the company to another direction and exit the current market"],
			feedback: "Sell, sell, sell! The founders are always looking for ways to make money from the company and make sure the investors make a lot as well.",
			correct: "1"},

		{
			num: 4,
			ques: "Tell us about an MVP.",
			options: ["Maximum Viable Product", "Most Valuable Product", "Minimum Viable Product"],
			feedback: "Minimum Viable Product. It's the bare-bones initial product that you can release with the minimum requirements.",
			correct: "3"},

		{
			num: 5,
			ques: "What's a valuation?",
			options: ["It's how much the startup has earned", "It's the amount the startup is being valued at", "It's the initial profit from the first years"],
			feedback: "The amount the startup is being valued at is crucial to what investors will put in.",
			correct: "2"}
			];

// Variables //

var correctAnswers = 0;
var questionIndex = 0;

// Load Questions //

 function getQuestion() {
 	$(".question").text(questions[questionIndex].ques);
 	$("#option1").text(questions[questionIndex].options[0]);
 	$("#option2").text(questions[questionIndex].options[1]);
 	$("#option3").text(questions[questionIndex].options[2]);
 	$("#questionnumber").text(questions[questionIndex].num + "/5");
 }
  
  
  // Next Question //

 $("button[id='next']").on("click",function(){ 
   
   questionIndex++; 
   
      if (questionIndex === questions.length){
           $(".quiz").hide();
           $(".feedback").hide();
           $(".results").hide();
           $(".end").show("shake", 700);
           $(".grade").text("You got " + correctAnswers + " out of 5");
           
             
	}
      else {
 
   $(".feedback").hide("slow");
   $(".results").hide("slow");
   
   
 
   $(".question").text(questions[questionIndex].ques);
 	$("#option1").text(questions[questionIndex].options[0]);
 	$("#option2").text(questions[questionIndex].options[1]);
 	$("#option3").text(questions[questionIndex].options[2]);
 	$("#questionnumber").text(questions[questionIndex].num + "/5"); }
   
   
   
 });

// Checking Answers //

var userChoice = $("button[name='buttons']").click(function() {
    $(this).attr( "value", function(i, val ) {
      var userChoice = val;
          
  
      
      if (userChoice == questions[questionIndex].correct) {
			$(".results").show();
			$(".feedback").html("<h3>Right!</h3>" + "<p>" + questions[questionIndex].feedback);
			$(".feedback").show("bounce", { times: 3 }, "slow");
        	console.log(correctAnswers++ + 1);
			

		} else {
			$(".results").show();
			$(".feedback").show().html("<h3>Wrong!</h3>" + "<p>" + questions[questionIndex].feedback);
			
		}
      
// Results Page Feedback //

  		if (correctAnswers <= 2) {
           	$(".label").text("You might need some brushing up!")
           }
           else if (correctAnswers === 3) {
           	$(".label").text("You're off to a good start!")
           }
           else {
           	$(".label").text("You'll be the next Zuckerberg!")
           }

});
		
	});	


// Reset Button //
  
 
  $("button[id='reset']").on("click",function(){ 
   
    location.reload();
  });
  

  
});


                                    


















