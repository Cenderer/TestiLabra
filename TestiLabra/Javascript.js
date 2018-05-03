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
	//$("style").hide();
	menu();
}

function menu(){
	$("#gmeTitle").text("Choose a game");
	$(".button").remove();
	$("#buttonDiv").append(
	    '<button class="button" id="rps">Rock, Paper and Scissors!</button>',
		'<button class="button" id="hangMan">Hangman!</button>',
		'<button class="button" id="mtg">Move The Guy</button>'
	);
	$("#rps").click(function(){
		R_P_S();
	});
	$("#hangMan").click(function(){
		hangManGme();
	});
	$("#mtg").click(function(){
		mtggme();
	});
};


function mtggme(){
	
}


function hangManGme(){
	//clear page from buttons
	$(".button").hide();
	//change game title
	$("#gmeTitle").text("Hangman");
	var counter = 0;
	//great words that the game will use as a right words
	var correct = ["ability","able","aboard","about","above","accept","accident","according",
	  "account","accurate","acres","across","act","action","active","activity",
	  "actual","actually","add","addition","additional","adjective","adult","adventure",
	  "advice","affect","afraid","after","afternoon","again","against","age",
	  "ago","agree","ahead","aid","air","airplane","alike","alive",
	  "all","allow","almost","alone","along","aloud","alphabet","already",
	  "also","although","am","among","amount","ancient","angle","angry",
	  "animal","announced","another","answer","ants","any","anybody","anyone",
	  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
	  "appropriate","are","area","arm","army","around","arrange","arrangement",
	  "arrive","arrow","art","article","as","aside","ask","asleep",
	  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
	  "attention","audience","author","automobile","available","average","avoid","aware",
	  "away","baby","back","bad","badly","bag","balance","ball",
	  "balloon","band","bank","bar","bare","bark","barn","base",
	  "baseball","basic","basis","basket","bat","battle","be","bean",
	  "bear","beat","beautiful","beauty","became","because","become","becoming",
	  "bee","been","before","began","beginning","begun","behavior","behind",
	  "being","believed","bell","belong","below","belt","bend","beneath",
	  "bent","beside","best","bet","better","between","beyond","bicycle",
	  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
	  "black","blank","blanket","blew","blind","block","blood","blow",
	  "blue","board","boat","body","bone","book","border","born",
	  "both","bottle","bottom","bound","bow","bowl","box","boy",
	  "brain","branch","brass","brave","bread","break","breakfast","breath",
	  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
	  "broad","broke","broken","brother","brought","brown","brush","buffalo",
	  "build","building","built","buried","burn","burst","bus","bush",
	  "business","busy","but","butter","buy","by","cabin","cage",
	  "cake","call","calm","came","camera","camp","can","canal",
	  "cannot","cap","capital","captain","captured","car","carbon","card",
	  "care","careful","carefully","carried","carry","case","cast","castle",
	  "cat","catch","cattle","caught","cause","cave","cell","cent",
	  "center","central","century","certain","certainly","chain","chair","chamber",
	  "chance","change","changing","chapter","character","characteristic","charge","chart",
	  "check","cheese","chemical","chest","chicken","chief","child","children",
	  "choice","choose","chose","chosen","church","circle","circus","citizen",
	  "city","class","classroom","claws","clay","clean","clear","clearly",
	  "climate","climb","clock","close","closely","closer","cloth","clothes",
	  "clothing","cloud","club","coach","coal","coast","coat","coffee",
	  "cold","collect","college","colony","color","column","combination","combine",
	  "come","comfortable","coming","command","common","community","company","compare",
	  "compass","complete","completely","complex","composed","composition","compound","concerned",
	  "condition","congress","connected","consider","consist","consonant","constantly","construction",
	  "contain","continent","continued","contrast","control","conversation","cook","cookies",
	  "cool","copper","copy","corn","corner","correct","correctly","cost",
	  "cotton","could","count","country","couple","courage","course","court",
	  "cover","cow","cowboy","crack","cream","create","creature","crew",
	  "crop","cross","crowd","cry","cup","curious","current","curve",
	  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
	  "dark","darkness","date","daughter","dawn","day","dead","deal",
	  "dear","death","decide","declared","deep","deeply","deer","definition",
	  "degree","depend","depth","describe","desert","design","desk","detail",
	  "determine","develop","development","diagram","diameter","did","die","differ",
	  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
	  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
	  "disease","dish","distance","distant","divide","division","do","doctor",
	  "does","dog","doing","doll","dollar","done","donkey","door",
	  "dot","double","doubt","down","dozen","draw","drawn","dream",
	  "dress","drew","dried","drink","drive","driven","driver","driving",
	  "drop","dropped","drove","dry","duck","due","dug","dull",
	  "during","dust","duty","each","eager","ear","earlier","early",
	  "earn","earth","easier","easily","east","easy","eat","eaten",
	  "edge","education","effect","effort","egg","eight","either","electric",
	  "electricity","element","elephant","eleven","else","empty","end","enemy",
	  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
	  "environment","equal","equally","equator","equipment","escape","especially","essential",
	  "establish","even","evening","event","eventually","ever","every","everybody",
	  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
	  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
	  "exist","expect","experience","experiment","explain","explanation","explore","express",
	  "expression","extra","eye","face","facing","fact","factor","factory",
	  "failed","fair","fairly","fall","fallen","familiar","family","famous",
	  "far","farm","farmer","farther","fast","fastened","faster","fat",
	  "father","favorite","fear","feathers","feature","fed","feed","feel",
	  "feet","fell","fellow","felt","fence","few","fewer","field",
	  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
	  "film","final","finally","find","fine","finest","finger","finish",
	  "fire","fireplace","firm","first","fish","five","fix","flag",
	  "flame","flat","flew","flies","flight","floating","floor","flow",
	  "flower","fly","fog","folks","follow","food","foot","football",
	  "for","force","foreign","forest","forget","forgot","forgotten","form",
	  "former","fort","forth","forty","forward","fought","found","four",
	  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
	  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
	  "full","fully","fun","function","funny","fur","furniture","further",
	  "future","gain","game","garage","garden","gas","gasoline","gate",
	  "gather","gave","general","generally","gentle","gently","get","getting",
	  "giant","gift","girl","give","given","giving","glad","glass",
	  "globe","go","goes","gold","golden","gone","good","goose",
	  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
	  "graph","grass","gravity","gray","great","greater","greatest","greatly",
	  "green","grew","ground","group","grow","grown","growth","guard",
	  "guess","guide","gulf","gun","habit","had","hair","half",
	  "halfway","hall","hand","handle","handsome","hang","happen","happened",
	  "happily","happy","harbor","hard","harder","hardly","has","hat",
	  "have","having","hay","he","headed","heading","health","heard",
	  "hearing","heart","heat","heavy","height","held","hello","help",
	  "helpful","her","herd","here","herself","hidden","hide","high",
	  "higher","highest","highway","hill","him","himself","his","history",
	  "hit","hold","hole","hollow","home","honor","hope","horn",
	  "horse","hospital","hot","hour","house","how","however","huge",
	  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
	  "hurt","husband","ice","idea","identity","if","ill","image",
	  "imagine","immediately","importance","important","impossible","improve","in","inch",
	  "include","including","income","increase","indeed","independent","indicate","individual",
	  "industrial","industry","influence","information","inside","instance","instant","instead",
	  "instrument","interest","interior","into","introduced","invented","involved","iron",
	  "is","island","it","its","itself","jack","jar","jet",
	  "job","join","joined","journey","joy","judge","jump","jungle",
	  "just","keep","kept","key","kids","kill","kind","kitchen",
	  "knew","knife","know","knowledge","known","label","labor","lack",
	  "lady","laid","lake","lamp","land","language","large","larger",
	  "largest","last","late","later","laugh","law","lay","layers",
	  "lead","leader","leaf","learn","least","leather","leave","leaving",
	  "led","left","leg","length","lesson","let","letter","level",
	  "library","lie","life","lift","light","like","likely","limited",
	  "line","lion","lips","liquid","list","listen","little","live",
	  "living","load","local","locate","location","log","lonely","long",
	  "longer","look","loose","lose","loss","lost","lot","loud",
	  "love","lovely","low","lower","luck","lucky","lunch","lungs",
	  "lying","machine","machinery","mad","made","magic","magnet","mail",
	  "main","mainly","major","make","making","man","managed","manner",
	  "manufacturing","many","map","mark","market","married","mass","massage",
	  "master","material","mathematics","matter","may","maybe","me","meal",
	  "mean","means","meant","measure","meat","medicine","meet","melted",
	  "member","memory","men","mental","merely","met","metal","method",
	  "mice","middle","might","mighty","mile","military","milk","mill",
	  "mind","mine","minerals","minute","mirror","missing","mission","mistake",
	  "mix","mixture","model","modern","molecular","moment","money","monkey",
	  "month","mood","moon","more","morning","most","mostly","mother",
	  "motion","motor","mountain","mouse","mouth","move","movement","movie",
	  "moving","mud","muscle","music","musical","must","my","myself",
	  "mysterious","nails","name","nation","national","native","natural","naturally",
	  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
	  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
	  "never","new","news","newspaper","next","nice","night","nine",
	  "no","nobody","nodded","noise","none","noon","nor","north",
	  "nose","not","note","noted","nothing","notice","noun","now",
	  "number","numeral","nuts","object","observe","obtain","occasionally","occur",
	  "ocean","of","off","offer","office","officer","official","oil",
	  "old","older","oldest","on","once","one","only","onto",
	  "open","operation","opinion","opportunity","opposite","or","orange","orbit",
	  "order","ordinary","organization","organized","origin","original","other","ought",
	  "our","ourselves","out","outer","outline","outside","over","own",
	  "owner","oxygen","pack","package","page","paid","pain","paint",
	  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
	  "park","part","particles","particular","particularly","partly","parts","party",
	  "pass","passage","past","path","pattern","pay","peace","pen",
	  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
	  "person","personal","pet","phrase","physical","piano","pick","picture",
	  "pictured","pie","piece","pig","pile","pilot","pine","pink",
	  "pipe","pitch","place","plain","plan","plane","planet","planned",
	  "planning","plant","plastic","plate","plates","play","pleasant","please",
	  "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
	  "point","pole","police","policeman","political","pond","pony","pool",
	  "poor","popular","population","porch","port","position","positive","possible",
	  "possibly","post","pot","potatoes","pound","pour","powder","power",
	  "powerful","practical","practice","prepare","present","president","press","pressure",
	  "pretty","prevent","previous","price","pride","primitive","principal","principle",
	  "printed","private","prize","probably","problem","process","produce","product",
	  "production","program","progress","promised","proper","properly","property","protection",
	  "proud","prove","provide","public","pull","pupil","pure","purple",
	  "purpose","push","put","putting","quarter","queen","question","quick",
	  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
	  "rain","raise","ran","ranch","range","rapidly","rate","rather",
	  "raw","rays","reach","read","reader","ready","real","realize",
	  "rear","reason","recall","receive","recent","recently","recognize","record",
	  "red","refer","refused","region","regular","related","relationship","religious",
	  "remain","remarkable","remember","remove","repeat","replace","replied","report",
	  "represent","require","research","respect","rest","result","return","review",
	  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
	  "rise","rising","river","road","roar","rock","rocket","rocky",
	  "rod","roll","roof","room","root","rope","rose","rough",
	  "round","route","row","rubbed","rubber","rule","ruler","run",
	  "running","rush","sad","saddle","safe","safety","said","sail",
	  "sale","salmon","salt","same","sand","sang","sat","satellites",
	  "satisfied","save","saved","saw","say","scale","scared","scene",
	  "school","science","scientific","scientist","score","screen","sea","search",
	  "season","seat","second","secret","section","see","seed","seeing",
	  "seems","seen","seldom","select","selection","sell","send","sense",
	  "sent","sentence","separate","series","serious","serve","service","sets",
	  "setting","settle","settlers","seven","several","shade","shadow","shake",
	  "shaking","shall","shallow","shape","share","sharp","she","sheep",
	  "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
	  "shoe","shoot","shop","shore","short","shorter","shot","should",
	  "shoulder","shout","show","shown","shut","sick","sides","sight",
	  "sign","signal","silence","silent","silk","silly","silver","similar",
	  "simple","simplest","simply","since","sing","single","sink","sister",
	  "sit","sitting","situation","six","size","skill","skin","sky",
	  "slabs","slave","sleep","slept","slide","slight","slightly","slip",
	  "slipped","slope","slow","slowly","small","smaller","smallest","smell",
	  "smile","smoke","smooth","snake","snow","so","soap","social",
	  "society","soft","softly","soil","solar","sold","soldier","solid",
	  "solution","solve","some","somebody","somehow","someone","something","sometime",
	  "somewhere","son","song","soon","sort","sound","source","south",
	  "southern","space","speak","special","species","specific","speech","speed",
	  "spell","spend","spent","spider","spin","spirit","spite","split",
	  "spoken","sport","spread","spring","square","stage","stairs","stand",
	  "standard","star","stared","start","state","statement","station","stay",
	  "steady","steam","steel","steep","stems","step","stepped","stick",
	  "stiff","still","stock","stomach","stone","stood","stop","stopped",
	  "store","storm","story","stove","straight","strange","stranger","straw",
	  "stream","street","strength","stretch","strike","string","strip","strong",
	  "stronger","struck","structure","struggle","stuck","student","studied","studying",
	  "subject","substance","success","successful","such","sudden","suddenly","sugar",
	  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
	  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
	  "swept","swim","swimming","swing","swung","syllable","symbol","system",
	  "table","tail","take","taken","tales","talk","tall","tank",
	  "tape","task","taste","taught","tax","tea","teach","teacher",
	  "team","tears","teeth","telephone","television","tell","temperature","ten",
	  "tent","term","terrible","test","than","thank","that","thee",
	  "them","themselves","then","theory","there","therefore","these","they",
	  "thick","thin","thing","think","third","thirty","this","those",
	  "thou","though","thought","thousand","thread","three","threw","throat",
	  "through","throughout","throw","thrown","thumb","thus","thy","tide",
	  "tie","tight","tightly","till","time","tin","tiny","tip",
	  "tired","title","to","tobacco","today","together","told","tomorrow",
	  "tone","tongue","tonight","too","took","tool","top","topic",
	  "torn","total","touch","toward","tower","town","toy","trace",
	  "track","trade","traffic","trail","train","transportation","trap","travel",
	  "treated","tree","triangle","tribe","trick","tried","trip","troops",
	  "tropical","trouble","truck","trunk","truth","try","tube","tune",
	  "turn","twelve","twenty","twice","two","type","typical","uncle",
	  "under","underline","understanding","unhappy","union","unit","universe","unknown",
	  "unless","until","unusual","up","upon","upper","upward","us",
	  "use","useful","using","usual","usually","valley","valuable","value",
	  "vapor","variety","various","vast","vegetable","verb","vertical","very",
	  "vessels","victory","view","village","visit","visitor","voice","volume",
	  "vote","vowel","voyage","wagon","wait","walk","wall","want",
	  "war","warm","warn","was","wash","waste","watch","water",
	  "wave","way","we","weak","wealth","wear","weather","week",
	  "weigh","weight","welcome","well","went","were","west","western",
	  "wet","whale","what","whatever","wheat","wheel","when","whenever",
	  "where","wherever","whether","which","while","whispered","whistle","white",
	  "who","whole","whom","whose","why","wide","widely","wife",
	  "wild","will","willing","win","wind","window","wing","winter",
	  "wire","wise","wish","with","within","without","wolf","women",
	  "won","wonder","wonderful","wood","wooden","wool","word","wore",
	  "work","worker","world","worried","worry","worse","worth","would",
	  "wrapped","write","writer","writing","written","wrong","wrote","yard",
	  "year","yellow","yes","yesterday","yet","you","young","younger",
	  "your","yourself","youth","zero","zebra","zipper","zoo","zulu"
	];
	//Choose the correct word from the list
	var rndNum = Math.random()*correct.length;
	rndNum = Math.round(rndNum);
	var correctAns = correct[rndNum];
	console.log(correctAns);
	console.log(correctAns.length);
	
	//new div for guess stuff
	var guessDiv = document.createElement('div');
	guessDiv.id = 'guessDiv';
	document.body.appendChild(guessDiv);
	$("#guessDiv").append(
		'<br>',
		'<input id="plrInput" type="text" value="Give a letter or quess the correct word">',		
		'<button id="submit">Try</button>'
	);
	$("#plrInput").attr("size", "35");
	$("#buttonDiv").append('<p id="hei">Right word: </p>');
	$("#buttonDiv").css({"background-color":"grey", "height":"100px"});
	$("#hei").text("Correct word: ");
	$("#buttonDiv").append('<p>Word length: ' + correctAns.length +'</p>');
	
	for(var i=0;i<correctAns.length;i++){
		$('#hei').append('<span class="spans" id="div'+ i +'"></span>');
		
		$("#div"+ i+"").text(correctAns.charAt(i));
		$("#div"+ i+"").hide();
	}
	

	
	//Melkein valmis funktio tarkastuksiin
	
	$("#submit").click(function(){	
		var input  = $("#plrInput").val();
		var counter1 = correctAns.length;
		for(var i = 0;i<correctAns.length;i++){
			if(input === correctAns.charAt(i)){
			
				counter = counter + 1;
				counter1 -= 1;
				console.log(counter+"C");
				console.log(counter1+"c1");
				
				alert("Correct!");
				$("#div" + i +"").show()
				$("#plrInput").val("");
				
				if(counter === correctAns.length){
					alert("Correct! You guessed the word!")
					againHM()
				}
				
			}else if(input === correctAns){
				alert("Correct! You guessed the word!");
				for(i=0;i<correctAns.length;i++){
					$("#div" + i +"").show()
				}
				againHM();
				$("#plrInput").val("");
				
			}
			
		}
		if(counter1 == correctAns.length){
				alert("Wrong letter!")
				$("#plrInput").val("");
				console.log(counter1+"c1");
				
			}
	});

	
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
	$("#gmeTitle").text("Again?");
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
		menu();
	});
	$("#change").click(function(){
		menu();
	});
}

function againHM(){
	
	$("#buttonDiv").css("background-color", "white");
	$("#buttonDiv").text("");
	$("#plrInput").hide();
	$("#submit").hide();
	$("#guessDiv").remove();
	$("#gmeTitle").show();
	$("#gmeTitle").show();
	$("#gmeTitle").text("Again?");
	$("#buttonDiv").append(
	    '<button class="button" id="yes">Yes, again!</button>',
		'<button class="button" id="nope">No, not again</button>',
		'<button class="button" id="change">Change game</button>'
		);
	$("#yes").click(function(){
		
		hangManGme();
		
	});	
	$("#nope").click(function(){
		/*alert("There is no escape!");
		start();*/
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank", "width=500, height=500");
		menu();
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




