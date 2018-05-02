var choices = ["Rock", "Paper", "Scissors"];
var chs;
var plrChs;

$(document).ready(function(){
		var chsRock = "";
		var chsPaper = "";
		var chsScissors = "";
		hmm();	
});

function hmm (){
	alert("Welcome! You have arrived to the greatest gamecenter! " );
	menu();
}

function menu(){
	$("#gmeTitle").text("Choose a game");
	$(".button").remove();
	$("#buttonDiv").append(
	    '<button class="button" id="rps">Rock, Paper and Scissors!</button>',
		'<button class="button" id="hangMan">Hangman!</button>'
	);
	$("#rps").click(function(){
		R_P_S();
	});
	$("#hangMan").click(function(){
		hangManGme();
	});
};

function hangManGme(){
	
	
};

function cmpr(plrChs, chs){
	
	switch(plrChs){
	
	case "rock":
		plrChs = 0;
		if(chs==0){
			alert("Tie!");
			again();
		}else if (chs==1){
            alert("You lose!");
			again();
        }else{
            alert("You win!");
			again();
        }		
	break;
	
	case "paper":
		plrChs = 1;
		if(chs==1){
			alert("Tie!");
			again();
		}else if (chs==2){
            alert("You lose!");
			again();
        }else{
            alert("You win!");
			again();
        }		
	break;
	case "scissors":
		plrChs = 2;
		if(chs==2){
			alert("Tie!");
			again();
		}else if (chs==0){
            alert("You lose!");
			again();
        }else{
            alert("You win!");
			again();
        }		
	break;
	
	
	default:
		alert("?Something went wrong?");
		again();
	}
}

function aiChs() {
	var rndNum = Math.random()*2;
	rndNum = Math.round(rndNum);
	chs = choices[rndNum];
	$("#buttonDiv").append(
		'<button class="button" id="aiChoice"></button>'),
		$("#aiChoice").animate({left: '300px'}, 1000),
		$("#aiChoice").animate({top: '200px'}, 1000, function(){
			$("#aiChoice").text(chs)
		}),
		$("#aiChoice").animate({top: '200px'}, "fast", function(){
			chs = rndNum;
			cmpr(plrChs, chs)
		});
}
	
function again(){
	
	$(".button").remove();
	$("#buttonDiv").append(
	    '<button class="button" id="yes">Yes, again!</button>',
		'<button class="button" id="nope">No, not again</button>',
		'<button class="button" id="change">Change game</button>'
		);
	$("#yes").click(function(){
		
		R_P_S();
		
	});	
	$("#nope").click(function(){
		/*alert("There is no escape!");
		start();*/
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank", "width=500, height=500");
	});
	$("#change").click(function(){
		menu();
	});
}

function R_P_S(){
	$("#gmeTitle").text("Rock, Paper, Scissors");
	$(".button").remove();
	$("#buttonDiv").append(
			'<button class="button" id="rock">Rock</button>',
			'<button class="button" id="scissors">Scissors</button>',
			'<button class="button" id="paper">Paper</button>'
		
		);
		$("#rock").click(function(){
			plrChs = "rock";
			$("#scissors").hide('fast'),
			$("#paper").hide('fast'),
			$("#rock").animate({top: '200px'}, 'fast'),
			$("#rock").animate({left: '200px'}, 'fast')
			aiChs();
				

		});


		$("#scissors").click(function(){
			plrChs = "scissors";
			$("#rock").hide('fast'),
			$("#paper").hide('fast'),
			$("#scissors").animate({top: '200px'}, 'fast'),
			$("#scissors").animate({left: '200px'}, 'fast')
			aiChs();
		});


		$("#paper").click(function(){
			plrChs = "paper";
			$("#scissors").hide('fast'),
			$("#rock").hide('fast'),
			$("#paper").animate({top: '200px'}, 'fast'),
			$("#paper").animate({left: '200px'}, 'fast')
			aiChs();
			});
};




