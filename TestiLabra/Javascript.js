var choices = ["Rock", "Paper", "Scissors"];
function hmm (){
	alert("Welcome! Welcome! You have arrived to the greatest game: 'Rock, paper or scissors?'");
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
		$("#scissors").hide('slow'),
		$("#paper").hide('slow'),
		$("#rock").animate({top: '200px'}, 'fast'),
		$("#rock").animate({left: '200px'}, 'fast')
	});
});
$(document).ready(function(){
	$("#scissors").click(function(){
		$("#rock").hide('slow'),
		$("#paper").hide('slow'),
		$("#scissors").animate({top: '200px'}, 'fast'),
		$("#scissors").animate({left: '200px'}, 'fast')
	})
})
$(document).ready(function(){
	$("#paper").click(function(){
		$("#scissors").hide('slow'),
		$("#rock").hide('slow'),
		$("#paper").animate({top: '200px'}, 'fast'),
		$("#paper").animate({left: '200px'}, 'fast')
	})
})

