var questions =  [
	"What is the name of BMW's Vehicle App?",
	"What is the traffic service BMW provides?",
	"What field did BMW begin manufacturing in?",
	"When did BMW release their first electrical vehicle?",
	"What color is not a BMW color?"
];
var choices = [
	[
		{answer:"BMW Connected", correct:false},
		{answer:"BMW ConnectedDrive", correct:true},
		{answer:"BMW ConnectedApp", correct:false},
		{answer:"BMW Connected Drive", correct:false},
	],
	[
		{answer:"ARTHUR", correct:false},
		{answer:"ARTIE", correct:false},
		{answer:"ARTTI", correct:true},
		{answer:"ARTIST", correct:false},
	],
	[
		{answer:"Automobiles", correct:false},
		{answer:"Boats/Ships", correct:false},
		{answer:"Airplanes", correct:true},
		{answer:"Agriculture", correct:false},
	],
	[
		{answer:"2017", correct:false},
		{answer:"1999", correct:false},
		{answer:"1983", correct:false},
		{answer:"1972", correct:true},
	],
	[
		{answer:"Bavarian Racing Green II", correct:true},
		{answer:"Austin Yellow Metallic", correct:false},
		{answer:"Yas Marina Blue Metallic", correct:false},
		{answer:"Sakhir Orange II Metallic", correct:false},
	]
];
var questionNo;
var correctAnswer;
var iter = 0;
var perfect = true;

function game() {
	if (iter < questions.length) {
		questionNo = iter + 1;
		document.getElementById("question-no").innerHTML = questionNo;
		document.getElementById("question-container").innerHTML = 
			questions[iter];

		for (var i = 0; i < choices[iter].length; i++) {
			var btn = i + 1;
			document.getElementById("button" + btn).innerHTML = 
			choices[iter][i].answer;
			if (choices[iter][i].correct) {
				correctAnswer = choices[iter][i].answer;
			}
		}
	} else if (iter = questions.length) {
			endPrompt();
	}
}

function checkAnswer(e) {
	if (e == correctAnswer) {
		document.getElementById("question-container").innerHTML = 
			"Correct";
	} else {
			document.getElementById("question-container").innerHTML =
				"Wrong";
			perfect = false;
	}
	iter++;
	setTimeout(game(), 2000);
}

function endPrompt() {
	hideAnswers();
	if (perfect) {
		document.getElementById("question-container").innerHTML = 
			"Congrats you got 5/5 correct. Come put your knowledge to the test Oct. 4 in building 150 at the EG open house."
			// width:500px; padding:0 134px
	} else {document.getElementById("question-container").innerHTML =  
		"Maybe you should come to the EG Open House Oct. 4 in building 150."
	}
	document.getElementById("prompt").style.display = "block";
}

function hideAnswers() {
	document.getElementById("button-container").style.display = "none";
	document.getElementById("progress").style.visibility = "hidden";
}
function sendEmail() {
	var msg = document.getElementById("input").value;
	var toEmail = "karim.dallas-newell@partner.bmwgroup.com";
	var subj = "Open House Trivia"
// https://meyerweb.com/eric/tools/dencoder/
	var link = "mailto:" + 
		toEmail +
		"?subject=" + 
		subj + 
		"&body=" +
		msg;
	window.open(link);
}