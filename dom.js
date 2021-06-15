let userCount = 0;
let compCount = 0;
let totRounds = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreCard_div = document.querySelector(".score-card");
const result_div = document.querySelector("#result>p");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");
const rounds_span = document.getElementById("rounds");
const button_div = document.querySelector(".button-red");

function generateCompChoice()
{
	var options = ['r' , 'p' , 's'] ;

	var result = Math.floor(Math.random()*3);

	return options[result];
}

function convertToWord(letter)
{
	if(letter === 'r') return "Rock";
	if(letter === 'p') return "Paper";
	return "Scissor";
}


function win(userChoice,compChoice) {

	userCount++;
	userScore_span.innerHTML = userCount;
	compScore_span.innerHTML = compCount;
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} defeats ${convertToWord(compChoice)}${smallCompWord} .You Win!!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow');} , 500);
	//console.log(`${userChoice} beats ${compChoice}.You Win!!`);
}

function lose(userChoice,compChoice) {

	compCount++;
	userScore_span.innerHTML = userCount;
	compScore_span.innerHTML = compCount;
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	result_div.innerHTML = `${convertToWord(compChoice)}${smallCompWord} defeats ${convertToWord(userChoice)}${smallUserWord} .You Lose...`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow');} , 500);
	//console.log(`${compChoice} beats ${userChoice}.You Lose....`);
}


function draw(userChoice,compChoice) {

	result_div.innerHTML = "It's A Draw...";
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow');} , 500);

	//console.log(`It's a Draw`);
}


function game(userChoice)
{
	var compChoice = generateCompChoice();
	var combined = userChoice + compChoice;
	//console.log(combined);

	switch(combined)
	{
		case "rs":
		case "pr":
		case "sp":win(userChoice,compChoice);
		          break;
		case "sr":
		case "rp":
		case "ps":lose(userChoice,compChoice);
		          break;
		case "rr":
		case "pp":
		case "ss":draw(userChoice,compChoice);
		          break;              
	}
}




function main()
{
    rock_div.addEventListener('click',function(){
    	totRounds++;
    	rounds_span.innerHTML = totRounds;
	    game('r');
    });

    scissor_div.addEventListener('click',function(){
    	totRounds++;
    	rounds_span.innerHTML = totRounds;
	    game('s');
    });

    paper_div.addEventListener('click',function(){
    	totRounds++;
    	rounds_span.innerHTML = totRounds;
	    game('p');
    });

    button_div.addEventListener('click',function(){

    	totRounds = 0;
    	userCount = 0;
    	compCount = 0;
    	userScore_span.innerHTML = userCount;
	    compScore_span.innerHTML = compCount;
	    rounds_span.innerHTML = totRounds;
	    result_div.innerHTML = "Start The Game!";
    });
}

main();