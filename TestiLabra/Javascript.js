var choices = ["Rock", "Paper", "Scissors"];
var chs;
var plrChs;
function hmm (){
	alert("Welcome! Welcome! You have arrived to the greatest game: 'Rock, paper or scissors?'");
}
function cmpr(plrChs, chs){
	
	switch(plrChs){
	
	case "rock":
		plrChs = 0;
		if(chs==0){
			alert("Tie!");
		}else if (chs==1){
            alert("You lose!");
        }else{
            alert("You win!");
        }		
	break;
	
	case "paper":
		plrChs = 1;
		if(chs==1){
			alert("Tie!");
		}else if (chs==2){
            alert("You lose!");
        }else{
            alert("You win!");
        }		
	break;
	case "scissors":
		plrChs = 2;
		if(chs==2){
			alert("Tie!");
		}else if (chs==0){
            alert("You lose!");
        }else{
            alert("You win!");
        }		
	break;
	
	
	default:
		alert("?Something went wrong?");
	}
}
$(document).ready(function(){
	var chsRock = "";
	var chsPaper = "";
	var chsScissors = "";
	
	$("#buttonDiv").append(
	    '<button class="button" id="rock">Rock</button>',
	    '<button class="button" id="scissors">Scissors</button>',
		'<button class="button" id="paper">Paper</button>'
		
		);
	
	hmm();
	$("#rock").click(function(){
		plrChs = "rock";
		$("#scissors").hide('slow'),
		$("#paper").hide('slow'),
		$("#rock").animate({top: '200px'}, 'fast'),
		$("#rock").animate({left: '200px'}, 'fast')
		aiChs();
		

	});


	$("#scissors").click(function(){
		plrChs = "scissors";
		$("#rock").hide('slow'),
		$("#paper").hide('slow'),
		$("#scissors").animate({top: '200px'}, 'fast'),
		$("#scissors").animate({left: '200px'}, 'fast')
		aiChs();
	});


	$("#paper").click(function(){
		plrChs = "paper";
		$("#scissors").hide('slow'),
		$("#rock").hide('slow'),
		$("#paper").animate({top: '200px'}, 'fast'),
		$("#paper").animate({left: '200px'}, 'fast')
		aiChs();
	});
	function aiChs() {
		var rndNum = Math.random()*2;
		rndNum = Math.round(rndNum);
		chs = choices[rndNum];
		$("#buttonDiv").append(
		'<button class="button" id="aiChoice">chs</button>'),
			$("#aiChoice").text(chs),
			$("#aiChoice").animate({left: '300px'}, 'slow'),
			$("#aiChoice").animate({top: '200px'}, 'slow', function(){
				chs = rndNum;
				cmpr(plrChs, chs);
			});
	}
	
});


