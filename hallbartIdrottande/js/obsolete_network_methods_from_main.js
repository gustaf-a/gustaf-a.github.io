
	function addHubMenu(nodeId) {
		var res ="", 
			nrOfChapters,
			myObj,
		 	zoomFactor =($(window).width()/960) -0.05,
			wWidth = 960,
			wHeight =720, //$(window).height()*0.7;
			
			hubImage = contentObj[nodeId].hubimage,
			addStyle,

			nrOfChaptersPerPerson = 4,

			sam=false,
			maria=false,
			adriana=false,
			chapterItemClass = "chapterItem";


			if (contentObj[nodeId].subtype=="hub2") {
				//project specific query
				nrOfChaptersPerPerson = 2;
				if ($.totalStorage("staff1")=="Sam" || $.totalStorage("staff2")=="Sam") sam=true;
				if ($.totalStorage("staff1")=="Maria" || $.totalStorage("staff2")=="Maria") maria=true;
				if ($.totalStorage("staff1")=="Adriana" || $.totalStorage("staff2")=="Adriana") adriana=true;

				if(sam && maria) hubImage +="ms.png";
				if(sam && adriana) hubImage +="sa.png";
				if(adriana && maria) hubImage +="ma.png";

				chapterItemClass ="chapterItem hub2Item";

			}


			//DESKTOP
			//res ="<div class='hubtitle desktop'>"+contentObj[nodeId].title+"</div>";
			
			if (zoomFactor<1) {
				wWidth = wWidth *zoomFactor;	
			}  else {
				zoomFactor=1;
			}
			res += "<div class='chapterWrapper desktop' style='height:"+wHeight+"px; width:"+wWidth+"px; background: url(img/"+hubImage+");  background-repeat: no-repeat; background-size:100%;'>";

			myObj = contentObj[nodeId].chapters;
			nrOfChapters = _.size(myObj);

			for (var i=0; i<nrOfChapters; i++) {
				if(myObj[i].owner=="sam" && !sam) continue;
				if(myObj[i].owner=="maria" && !maria) continue;
				if(myObj[i].owner=="adriana" && !adriana) continue; 

				res +="<div id='chapter_"+myObj[i].ID+"' class='"+chapterItemClass;
				//if(myObj[i].lockeduntil!=undefined) {
				//		res +=" locked";
				//		}

				res +="' style='left:"+Math.round(parseInt(myObj[i].left)*zoomFactor)+"px; top:"+Math.round(parseInt(myObj[i].top)*zoomFactor)+"px;  width:"+Math.round(87*zoomFactor)+"px;   height:"+Math.round(87*zoomFactor)+"px; '  onClick=FS.respondToHUB("+i+")></div>";
			
			}

			res+="</div>";


			//MOBILE
			//res +="<div class='hubtitle mobile'>"+contentObj[nodeId].title+"</div>";
			res += "<div class='chapterWrapper mobile cw"+nrOfChaptersPerPerson+"' style='background: url(img/mobile_"+hubImage+");  background-repeat: no-repeat;'>";

			myObj = contentObj[nodeId].chapters;
			nrOfChapters = _.size(myObj);

			var addClass="";
			for (var j=0; j<nrOfChapters; j++) {
				addClass="";
				if(myObj[j].owner=="maria" && !maria) addClass="hiddenItem"; 
				if(myObj[j].owner=="sam" && !sam) addClass="hiddenItem"; 
				if(myObj[j].owner=="adriana" && !adriana) addClass="hiddenItem";
				if(j%nrOfChaptersPerPerson==0) {
					if (j>0) {
						res +="</div>";}
					res +="<div class='chapterRow"+((j/nrOfChaptersPerPerson)+1)+" cr"+nrOfChaptersPerPerson+"'>";
				}
				res +="<div id='chapter_"+myObj[j].ID+"' class='chapterItem mobileitem"+j +" itemSize"+nrOfChaptersPerPerson +" " + addClass;
				/*if(myObj[j].lockeduntil!=undefined) {
					res +=" locked";
				}*/
				res +="' onClick=FS.respondToHUB("+j+")></div>";
				
			}
			res+="</div></div>";
			//res+="<div id='mobileNextButton'>GÅ VIDARE ></div>";







		return res;
	}


	


//WALL OF TEXT
	function emptyWallTweens() {
			for (var i=0; i<_.size(arrayOfWallTweens); i++) {
			
				arrayOfWallTweens[i].kill();

			}
		arrayOfWallTweens=[];
		currentlyClickedWallText=0;
	
	}



	function addNodeWalloftext(nodeId) {
		var walltext, canvasHeight, canvasWidth;
	
		walltext = contentObj[nodeId].walloftext;
		if (walltext === undefined) {
			if (_.size(arrayOfWallTweens)>0) {emptyWallTweens();}
			return "";}

		FS.IDWallOfText = nodeId;
		return "<div id='myCanvas'  style='height:"+$(document).height() * 1+"px' ></div>";


	}

	self.zoomIn = function(wallID) {
		//console.log("wallID clicked "+ wallID + "(old:"+currentlyClickedWallText+") size:"+_.size(arrayOfWallTweens));


		if(currentlyClickedWallText==wallID) { //click on a zoomed in walltext
			
					var currTween = arrayOfWallTweens[wallID];
					$("#wall_"+wallID).removeClass("wallSelected");

				//	currTween = TweenMax.to($("#wall_"+wallID), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
					currentlyClickedWallText=-1;
		}
		else{  //clicked on another walltext, not the zoomed in
			if (currentlyClickedWallText!=-1){ //in some walltext is zoomed in
				var currTween = arrayOfWallTweens[currentlyClickedWallText];
				$("#wall_"+currentlyClickedWallText).removeClass("wallSelected");
				//currTween = TweenMax.to($("#wall_"+currentlyClickedWallText), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+currentlyClickedWallText, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			}
				
		
			//arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+currentlyClickedWallText),20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			$("#wall_"+wallID).removeClass("wallSelected");
			currentlyClickedWallText=wallID;
			
			//arrayOfWallTweens[wallID].kill();

			//arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+wallID),0.25,{scaleX:1,scaleY:1, alpha:1, zIndex:550+wallID});
			$("#wall_"+wallID).addClass("wallSelected");

		}

	
		}

self.zoomIn_BUP = function(wallID) {
		//console.log("wallID clicked "+ wallID + "(old:"+currentlyClickedWallText+") size:"+_.size(arrayOfWallTweens));


		if(currentlyClickedWallText==wallID) { //click on a zoomed in walltext
			
					var currTween = arrayOfWallTweens[wallID];
					$("#wall_"+wallID).removeClass("wallSelected");

					currTween = TweenMax.to($("#wall_"+wallID), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
					currentlyClickedWallText=-1;
		}
		else{  //clicked on another walltext, not the zoomed in
			if (currentlyClickedWallText!=-1){ //in some walltext is zoomed in
				var currTween = arrayOfWallTweens[currentlyClickedWallText];
				$("#wall_"+currentlyClickedWallText).removeClass("wallSelected");
				currTween = TweenMax.to($("#wall_"+currentlyClickedWallText), 20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+currentlyClickedWallText, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			}
				
		
			arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+currentlyClickedWallText),20, {scaleX:0, scaleY:0, autoAlpha:0, zIndex:100+wallID, yoyo:true, repeat:-1, repeatDelay:3, delay:0, ease:Linear.easeNone});
			$("#wall_"+wallID).removeClass("wallSelected");
			currentlyClickedWallText=wallID;
			
			arrayOfWallTweens[wallID].kill();

			arrayOfWallTweens[wallID] = TweenMax.to($("#wall_"+wallID),0.25,{scaleX:1,scaleY:1, alpha:1, zIndex:550+wallID});
			$("#wall_"+wallID).addClass("wallSelected");

		}

	
		}
	
	function startWallOfText(myIDWallOfText) {
 		var walloftext = contentObj[myIDWallOfText].walloftext;
			
      		var rownr = 0;
   			var myDiv = $("#myCanvas");

   			var maxX = $("#nodeHeader").width()-500;
   			currentlyClickedWallText =0;
   		 	myDiv.append("<ignorefirstchild/><div class='centered twelve columns' id='myDiv_column'><div class='row quoterow' id='myDiv_row"+rownr+"'><ignorefirstchild/>");
    	   for (var i = 0; i<_.size(walloftext); i++) {
    	   		//var randx = 0 +150*(i%4);//0 + Math.floor((Math.random()*480)+1);
    	   		//var randy = Math.floor((Math.random()*$(window).height()*0.6)+1);
    	   		//var rando  = 1 / ((i+1));
    	   		
    	   		
    	   		//(i/_.size(walloftext)
    	   		//var style ="top:"+ randy + "px; left:"+randx+"px;" ;
    	   		if (i==3 || i==6) {
    	   				 $("#myDiv_column").append("</div>");
    	   				rownr++;
    	   				 $("#myDiv_column").append("<div class='row quoterow' id='myDiv_row"+rownr+"'><ignorefirstchild/>");
    	   		}
    	   		if(i==0) $("#myDiv_row"+rownr).append("<div id='wall_"+i+"' class='three columns walloftextcontent2 wallSelected'><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    	   		else if(i<6) $("#myDiv_row"+rownr).append("<div id='wall_"+i+"' class='three columns walloftextcontent2'><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    			else  $("#myDiv_row"+rownr).append("<div id='wall_"+i+"' class='five columns walloftextcontent2'><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    			 /*TweenMax.set($("#wall_"+i), {zIndex:100+i, autoAlpha:0, scaleX:0.5, scaleY:0.5});
    			 var myDelay = i;
    			 if (i>2) myDelay = (i-2)*5 +(i-2); 
    	   		 var myT = TweenMax.to($("#wall_"+i), 20, {scaleX:1, scaleY:1, autoAlpha:1, zIndex:500+i, yoyo:true, repeat:-1, repeatDelay:3, delay:myDelay,  ease:Linear.easeNone});
    	   			arrayOfWallTweens.push(myT);
				*/
    	   		 myDiv.append("<script>$('#wall_"+i+"').click(function() {FS.zoomIn("+ i +")});</script>");
    	   		
    	   }
    	   myDiv.append("</div></div>");


	}

	function startWallOfText_BUP(myIDWallOfText) {
 		var walloftext = contentObj[myIDWallOfText].walloftext;
			
      	
   			var myDiv = $("#myCanvas");

   			var maxX = $("#nodeHeader").width()-500;

    	   for (var i = 0; i<_.size(walloftext); i++) {
    	   		var randx = 0 + Math.floor((Math.random()*maxX)+1);//0 + Math.floor((Math.random()*480)+1);
    	   		var randy = Math.floor((Math.random()*$(window).height()*0.6)+1);
    	   		var rando  = 1 / ((i+1));
    	   		
    	   		
    	   		//(i/_.size(walloftext)
    	   		var style ="top:"+ randy + "px; left:"+randx+"px;" ;
    	   		myDiv.append("<div id='wall_"+i+"' class='walloftextcontent' style='"+style+"''><span class='wallOfTextHitarea'>- ” "+walloftext[i].text+" ”</span></div>");
    			
    			 TweenMax.set($("#wall_"+i), {zIndex:100+i, autoAlpha:0, scaleX:0.5, scaleY:0.5});
    			 var myDelay = i;
    			 if (i>2) myDelay = (i-2)*5 +(i-2); 
    	   		 var myT = TweenMax.to($("#wall_"+i), 20, {scaleX:1, scaleY:1, autoAlpha:1, zIndex:500+i, yoyo:true, repeat:-1, repeatDelay:3, delay:myDelay,  ease:Linear.easeNone});
    	   			arrayOfWallTweens.push(myT);

    	   		 myDiv.append("<script>$('#wall_"+i+"').click(function() {FS.zoomIn("+ i +")});</script>");
    	   		
    	   }


	}





















// COMIC NODES TEMPLATES ------------------------------------------------------------------------------------------------------------------------

	function startComicSingle(nrOfSlides) {
		var winHeight = 0;
		TweenMax.to($("#comicScroller"),0,{top:winHeight});
		TweenMax.to($(".comicSingleWrapper"),1,{css:{"opacity":"1"},delay:0});
	}

	function startComicParallel(nrOfSlides) {
		var winHeight,
		comicHeight,
		myObj = contentObj[FS.currentNodeNr].comicparallel[0].slide; 

		if (myObj.url !=undefined) {
			comicHeight = 200;
			winHeight=0;
		}
		if (myObj.url2 !=undefined) {
			comicHeight =370;
			winHeight= $(window).height()/4;
	}
		if (myObj.url3 !=undefined) {
			comicHeight =225;
			winHeight= $(window).height()/3 -20;
	}
		if (myObj.url4 !=undefined) {
			comicHeight =185;
			winHeight= $(window).height()/3 -30;
		}

		TweenMax.to($("#comicScroller"),0,{top:winHeight});
		TweenMax.to($(".comicParallelWrapper"),1,{css:{"opacity":"1"},delay:0});
		currentComic = 0;
		for (var i=0; i<nrOfSlides; i++) {
			$("#slide_"+i).data("nr",i)
			$("#slide_"+i).click(function(){
				var currentNr = parseInt($(this).data("nr"));
				emptyWallTweens();
				if(currentComic==currentNr && currentNr < nrOfSlides-1) {
					currentNr++;
				}
				else if (currentComic<currentNr && currentComic<nrOfSlides-1) currentNr = currentComic+1;
				else if (currentComic>currentNr && currentComic>0) currentNr = currentComic-1;
			
				resetAllComicParallels(nrOfSlides, currentNr);
					
				var scrollto = winHeight -(comicHeight)* currentNr;
				//console.log("scrollto "+ scrollto + "  currentNr="+currentNr + "            currentComic="+currentComic);
				TweenMax.to($("#comicScroller"),0,{top:scrollto});
				currentComic = currentNr;
	
				$("#slide_"+currentNr).addClass("comicActive");
				TweenMax.to($("#slide_"+currentNr),0, {css:{"opacity":"1"}});
				startComicHint(nrOfSlides);
			});
		}
		resetAllComicParallels(nrOfSlides, 0);
		startComicHint(nrOfSlides);
		$("#slide_0").addClass("comicActive");
	}
	
	function resetAllComicParallels(nrOfSlides,exceptSlide) {
			window.clearTimeout(comicTimeout);
		 //console.log("resetAllComicParallels " + nrOfSlides+ ","+exceptSlide);
		for (var i=0; i<nrOfSlides; i++) {
			
				$("#slide_"+i).removeClass("comicActive")
				
			
		}
		
	}

	function startComicHint(nrOfSlides) {
		//console.log("startComicHint " + nrOfSlides+ ","+currentComic);
		window.clearTimeout(comicTimeout);
		var myT;
			for (var i=0; i<nrOfSlides; i++) {
				if (i != currentComic) {
				$("#slide_"+i).removeClass("comicActive")
				myT = TweenMax.fromTo($("#slide_"+i),0.15,{css:{"opacity":"0.1"}}, {css:{"opacity":"0.5"}, yoyo:true, repeat:3, repeatDelay:0.25, delay:5});
				arrayOfWallTweens.push(myT);
				
				}
			}
			comicTimeout = setTimeout(function(){startComicHint(nrOfSlides)},8000);
	}

	function addNodeComicParallel(nodeId) {
		var res,
			comicSlides,
			nrOfSlides,
			myObj,
			comicWidth,
			comicHeight;
			

			comicSlides = contentObj[nodeId].comicparallel; 
			if (comicSlides === undefined) {
				comicsToFadeIn=0;
				return "";}

			nrOfSlides= comicsToFadeIn = _.size(comicSlides);

			//comic_row_height = contentObj[nodeId].comic_row_height;

			res ="<div class='comicParallelWrapper'>";
			res +="<div id='comicScroller'>";
			//width:280px;
			if (comicSlides[0].slide.url !=undefined) {comicWidth = 660;}
		 	if (comicSlides[0].slide.url2 !=undefined) {comicWidth =460;}
			if (comicSlides[0].slide.url3 !=undefined) {comicWidth =300;}
			if (comicSlides[0].slide.url4 !=undefined){ comicWidth =220;}
			
			comicHeight = contentObj[nodeId].comic_row_height;

			for (var i=0; i<nrOfSlides; i++) {
				myObj = comicSlides[i].slide;
				res +="<div id='slide_"+i+"' class='comicSlide";
				if (i==0) res +=" comicActive";
				res +="'  style='height:"+comicHeight+";'>";
				//if (myObj.text != undefined) res +="<div id='li_"+i+"text' class='comicHeader'>"+myObj.text+"</div>";
				if (myObj.url != undefined) res +="<div id='li_"+i+"a' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url+"' /></div>";
				if (myObj.url2 != undefined) res +="<div id='li_"+i+"b' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url2+"' /></div>";
				if (myObj.url3 != undefined) res +="<div id='li_"+i+"c' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url3+"' /></div>";
				if (myObj.url4 != undefined) res +="<div id='li_"+i+"c' class='parallelcomic' style='width:"+comicWidth+"px;'><img src='img/"+myObj.url4+"' /></div>";
			
				
				res +="</div>";
			}
			res +="</div></div>";


		return res;



	}

	function addNodeComicSingle(nodeId) {
		var res,
			comicSlides,
			nrOfSlides,
			myObj;
			

			comicSlides = contentObj[nodeId].comicsingle; 
			if (comicSlides === undefined) {
				comicsToFadeIn=0;
				return "";}

			nrOfSlides= comicsToFadeIn = _.size(comicSlides);


			res ="<div class='comicSingleWrapper' style='height:"+nrOfSlides * 517+"px;'>";
			res +="<div id='comicScroller'>";
			for (var i=0; i<nrOfSlides; i++) {
				myObj = comicSlides[i].slide;
				res +="<div id='slide_"+i+"' class='singleComicSlide";
				if (i==0) res +=" comicActive";
				res +="'>";
				if (myObj.url != undefined) res +="<div id='li_"+i+"a' class='singlecomic'><img src='img/"+myObj.url+"' /></div>";
				if (myObj.text != undefined) res +="<div id='li_"+i+"text' class='comicSingleHeader'>"+myObj.text+"</div>";
					
				res +="</div>";
			}
			res +="</div></div>";


		return res;



	}

	function addNodeComic (nodeId) {
		var comicImages,
			nrOfImages,
			nrOfCols1,
			nrOfCols2,
			res,
			addedSecondRow,
			comic_row_height;

		comicImages = contentObj[nodeId].comic; 
		if (comicImages === undefined) {
			comicsToFadeIn=0;
			return "";}
	
		nrOfImages= comicsToFadeIn = _.size(comicImages);
		
		switch (nrOfImages/2) {
			case 4: //8 images
				nrOfCols1 = nrOfCols2= "four_up";
			break;
			case 3: //6 images
				nrOfCols1 = nrOfCols2= "three_up";
			break;
			case 2: //4 images
				nrOfCols1 = nrOfCols2=  "two_up";
			break;
			case 1: //2 images
				nrOfCols1 = nrOfCols2= "one_up";
			break;

			case 3.5: //7 images
				nrOfCols1 = "tree_up";
				nrOfCols2= "four_up";
			break;
			case 2.5: //5 images
				nrOfCols1 = "two_up";
				nrOfCols2= "three_up";
			break;
			case 1.5: //3 images
				nrOfCols1 = "one_up";
				nrOfCols2=  "two_up";
			break;
			default: //? images
				nrOfCols1 = "one_up";
				nrOfCols2= "one_up";
			break;


		}


		comic_row_height = contentObj[nodeId].comic_row_height;

		res ="<div class='comicWrapper'>";
		for (var i=0; i<nrOfImages; i++) {
			res +="<div id='li_"+i+"' class='hiddenComic'><img src='img/"+comicImages[i].url+"' style='max-height:"+comic_row_height+";' class='comicImg'/></div>";
		}
		res +="</div>";

		return res;


	}


		function showComics(comicsToFadeIn) {
		for (var i=0; i<comicsToFadeIn; i++) {
			TweenMax.to($('#li_'+i),1,{opacity:1, delay:(i*2)});
		} 
	}


	// END OF: COMIC NODES TEMPLATES

















//*OBSOLETE METHODS
	function addNodeNextButton() {
		return "<div class='medium warning btn' id='nextButton'><a href='#'>Next</a></div>";

	}
		function addNodeMusic(nodeId) {
		return;
		var res ="",
			musicURL = contentObj[nodeId].music ;
		if ( musicURL== undefined) return "";
		res +="<audio id='soundtrack'  loop='loop' preload='auto' volume='1' autoplay='autoplay'>";
		res +="<source src='"+musicURL+".mp3' type='audio/mpeg'>";
		res +="<source src='"+musicURL+".ogg' type='audio/ogg'>";
    	res +="</audio>";
    	return res;
	}



self.setUpThumbs = function() {
		var nrOfNodes = _.size(activeCase.nodes.content);
		var navObj = $("#case-nav");
		var res ="";

		//HIDE THUMBS********************************************************************
																				return;


		//*******************************************************************************																		
																
		if (FS.maxNodeNr<FS.currentNodeNr) {
			FS.maxNodeNr = FS.currentNodeNr;
			
		} 

		for (var i=0; i<nrOfNodes; i++) {
			switch (contentObj[i].type) {
				case "info": case "chapter": default:
					res += "<div class='node-thumb node-info";
					if (FS.currentNodeNr==i) { res += " node-selected";}
					if (FS.maxNodeNr>=i) {
						res +=" node-visited";
						res +="' onclick='FS.gotoNode("+i+",0);'>";
					}
					else{
						res +="'>"
					}

					res +="</div>";
				break;
				case "question":
				  res += "<div class='node-thumb node-question";
				  if (FS.currentNodeNr==i) { res += " node-selected";}
				  if (FS.maxNodeNr>=i) {
				  	res +=" node-visited";
				  	res +="' onclick='FS.gotoNode("+i+",0);'>";
				   }
				   else{
						res +="'>"
					}
					res +="</div>";
				break;
				case "hidden":

				break;
				
			}
		}
			
		navObj.html(res);

	}













//ABC Question METHODS -----------------------------------------------------------------------------------------------------------------------------------
//Sends ajax request to PHP-page and gets a json-object back from DB, show percentage for each answers of type A, B, C and total number of answers in DB for given question

function addNodeABCQuestion(nodeId) {

	var res="",
			myObj=FS.contentObj[nodeId];
			
		

			res +="<div class='centered eleven columns'>";
			
			res +="<article class='ABCquestionDiv'>";
			res +="<div class='titleDiv ABCquestionHeadline'>"+myObj.question +"</div>";
			for (var i =0; i<_.size(myObj.answers); i++) {
				
			
			res +="<div class='ABCsequenceAnswer' onClick='FS.selectABCAnswerAndContinue("+myObj.ABC_ID+","+i+","+nodeId+")'><div class='ABCHolder'>"+ABCArray[i]+"</div><div class='ABCQuestion'>"+ myObj.answers[i].text +"</div></div>";
				
			}
			res +="</article></div>";

			return res;

}

 self.selectABCAnswerAndContinue =function(ABC_ID, optionSelected,nodeId,abc_string) {
		
		$.totalStorage('answer'+ABC_ID,optionSelected);  //e.g answer1 = 0  use ABCArray[optionSelected] to get A,B or C
		$.totalStorage('answer'+ABC_ID+"_text",FS.contentObj[nodeId].answers[optionSelected].text);

		 phpCallSaveABCAnswer(ABC_ID,optionSelected,nodeId);
		 //phpCallSaveABCAnswer will execute: maindiv.html(FS.addABCResult(ABC_ID, optionSelected,nodeId,result));
		


		//FS.gotoNode(FS.currentNodeNr,1);
	}



self.addABCResult = function(ABC_ID, optionSelected,nodeId,result) {
	var res,A,B,C,total,percentA, percentB, percentC, resultText,myObj, resObj,
	widthA, widthB, widthC;
		
	if(localHostTrue) { //ONLY WHEN IN LOCALHOST
		result = result[0];
	}
	else {
		resObj = $.parseJSON(result);
		result = resObj[0];
	}

		
		

		A = parseInt(result.A);
		B = parseInt(result.B);
		C = parseInt(result.C);
		total = parseInt(result.total);
		
		percentA = Math.round(A / total * 100);
		percentB = Math.round(B / total * 100);
		percentC = Math.round(C / total * 100);

			
		if (percentA <= 8) widthA = 8; else widthA=percentA;
		if (percentB <= 8) widthB = 8; else widthB=percentB;
		if (percentC <= 8) widthC = 8; else widthC=percentC;

		if (percentA>(widthB+widthC)) widthA =100-widthB-widthC; 
		if  (percentB>(widthA+widthC)) widthB =100-widthA-widthC; 
		if  (percentC>(widthA+widthB)) widthC =100-widthA-widthB;


		resultText ="";
		

		switch (ABCArray[optionSelected]) {

			case "A":
				 resultText = A + " personer ("+percentA;
			break;
			case "B":
				 resultText = B + " personer ("+percentB;
			break;
			case "C":
				 resultText = C + " personer ("+percentC;
			break;
		}
		resultText +="%) tycker samma sak som dig.";


		res="",
		myObj=FS.contentObj[nodeId];
		res +="<div class='centered eleven columns'>";	
			res +="<article class='nohover ABCquestionDiv'>";
				res +="<div class='ABCsequenceAnswer nohover'><div class='ABCHolder'>"+ABCArray[optionSelected]+"</div><div class='ABCQuestion'>"+ myObj.answers[optionSelected].text +"</div></div>";
				res +="<div class='ABCresultText'>" + resultText + "</div>";
				res +="<div class='ABCresultCompareHolder'>";
					res +="<div class='ABCresultCompareItem ABC_item1";
						if (ABCArray[optionSelected] == "A") res +=" ABC_selected";
					res+="' style='width:"+(widthA-1)+"%'><div class='ABCresultCompareHeader'>A</div><div class='ABCresultComparePercent'>"+percentA+"%</div></div>";
					res +="<div class='ABCresultCompareItem  ABC_item2";
						if (ABCArray[optionSelected] == "B") res +=" ABC_selected";
						res+="' style='width:"+(widthB-1)+"%'><div class='ABCresultCompareHeader'>B</div><div class='ABCresultComparePercent'>"+percentB+"%</div></div>";
				
					res +="<div class='ABCresultCompareItem ABC_item3";
						if (ABCArray[optionSelected] == "C") res +=" ABC_selected";
						res+="' style='width:"+(widthC-1)+"%'><div class='ABCresultCompareHeader'>C</div><div class='ABCresultComparePercent'>"+percentC+"%</div></div>";
				
				res +="</div>"; 
			res +="</article>";
		res +="</div>"

	interceptPrevButton=true;
	showNext();

	return res;
}

//END OF ABC Question METHODS -----------------------------------------------------------------------------------------------------------------------------------

















//PIE CHART METHODS---------------------------------------------------------------------------------------------------------------------------------------
//Obsolete, removed from the new specification. This method uses jquery.flot.pie to present a clickable pie chart.
function showPieChart() {

var pienumber = Math.random();

		var piedata = [ //should get data from external json-file.
			{ label: "Kreativitet",  data: pienumber},
			{ label: "Fysiskt arbete",  data: pienumber},
			{ label: "Undervisning",  data: pienumber},
			{ label: "Vård",  data: pienumber},
			{ label: "Service",  data: pienumber},
			{ label: "Ledarskap",  data: pienumber}
		];

	

		
		
		var placeholder =  $("#pieplaceholder");

		$.plot(placeholder, piedata, {
				series: {
					pie: { 
					 	innerRadius: 0.1,
						show: true,
						label: {
			                show: true,
			                radius: 0.5,
			                formatter: pieLabelFormatter,
			                threshold: 0.1
			            }
					}
				},
				legend: {
        			show: false
    			},
				grid: {
					hoverable: true,
					clickable: true
				}
			});




		
			placeholder.bind("plothover", function(event, pos, obj) {

				if (!obj) {
					return;
				}

				$("#hover").html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label +"</span>");
			});

			placeholder.bind("plotclick", function(event, pos, obj) {

				if (!obj) {
					return;
				}

				//TODO:
				//insert a modal here, showing text for different options. Add cancel and OK button.
				//reference: http://gumbyframework.com/docs/components/#!/modals
				//When OK is clicked let this function be called:
				selectPieChartAndContinue(obj.series.label);

			});


	}
	
	function pieLabelFormatter(label, series) {
		return "<div class='pieLabel'>" + label +"</div>";
	}


	function selectPieChartAndContinue(optionSelected) {
		
		
		$.totalStorage('pieOption',optionSelected);
		phpCallSavePieOption(optionSelected);


		FS.gotoNode(FS.currentNodeNr,1);
	}





	


	function addPieChart(nodeId) {
		var res="";
			var wWidth =$(window).width();
			
		
			if (wWidth<768) {
				res +="<div id='pieplaceholder' style='height:"+wWidth+"px; width:"+wWidth+"px;'></div>";
			
			}
			else  {
				res +="<div id='pieplaceholder'></div>";
			}
			
			
			return res;

	}

//END OF PIE CHART METHODS---------------------------------------------------------------------------------------------------------------------------------------








//TRADE QUESTION ----------------------------------------------------------------------------------------
//project specific, lets the user select what trade the want to work in
/*
function addNodeTradeQuestion(nodeId) {
			var res="",
			myObj=FS.contentObj[nodeId];
			
	
			//FOR DESKTOP - need to layout icons one way - hidden in mobile
			res +="<div class='centered eleven columns tradeHolderDesktop'>";
			res +="<div class='tradeQuestionText'>"+myObj.pretext +"</div>";	
			res +="<div class='tradeQuestionDiv1'>";
			for (var i =0; i<_.size(myObj.trades)/2; i++) {
				res +="<div class='tradeQuestionIcon' id='trade"+i+"' answerid='"+myObj.trades[i].answer_id+"' t='"+myObj.trades[i].trade+"'><img src='img/"+myObj.trades[i].image +"'></div>";
			}
			res +="</div>";



			res +="<div class='tradeQuestionDiv2'>";
			for (var j =_.size(myObj.trades)/2; j<_.size(myObj.trades); j++) {
			res +="<div class='tradeQuestionIcon' id='trade"+j+"' answerid='"+myObj.trades[j].answer_id+"' t='"+myObj.trades[j].trade+"'><img src='img/"+myObj.trades[j].image +"'></div>";
			}
			res +="</div></div>";
			


			//FOR MOBILE - need to layout icons differently - hidden in desktop
					res +="<div class='centered eleven columns tradeHolderMobile'>";
					res +="<div class='tradeQuestionTextMobile'>"+myObj.pretext +"</div>";	
					res +="<div class='tradeQuestionDivMobile'>";
					for (var i =0; i<_.size(myObj.trades); i++) {
						res +="<div class='tradeQuestionIcon' id='tradem"+i+"' answerid='"+myObj.trades[i].answer_id+"' t='"+myObj.trades[i].trade+"'><img src='img/"+myObj.trades[i].image +"'></div>";
					}
					res +="</div></div>";

			
			return res;

}

function startNodeTradeQuestion() {
	var myObj=FS.contentObj[FS.currentNodeNr];
	for (var i=0; i<_.size(myObj.trades); i++) {  

			//Add click handler for each object
			//DESKTOP
			$('#trade'+i).click(function() {
   			  var answerid_id = $(this).attr('answerid');
   			 	 exitTradeQuestion(myObj.question_id, answerid_id);
     			 
				}   			
   			  
 			);
 			//MOBILE
 			$('#tradem'+i).click(function() {
   			  var answerid_id = $(this).attr('answerid');
   			 	 exitTradeQuestion(myObj.question_id, answerid_id);
     			 
				}   			
   			  
 			);
		}

}


function exitTradeQuestion(question_id, answer_id) {

		$.totalStorage("tradeQuestion",answer_id);
		phpCallSaveAnswer(question_id,answer_id);
}

*/
//--------------------------------------------------------------------------------------------------------








//FREETEXT QUESTION ---------------------------------------------------------------------------------------
//shows textfield and saves input to DB via ajax
/*
function addNodeFreetextQuestion(nodeId) {

	var res="",
	myObj=FS.contentObj[nodeId];

	res +="<div class='centered eleven columns'>";
			
	res +="<article class='markedQuestionDiv'>";
			res +="<div class='questionHeadline'>"+myObj.question +"</div>";
			res +="<div class='markedPreText'>"+myObj.pretext +"</div>";
			

			res +="<div><textarea rows='10' cols='84' id='freetextAnswer'></textarea></div>";


			for (var i =0; i<_.size(myObj.answers); i++) {
				res +="<div class='sequenceAnswer markedQuestionAnswer freetextAnswer' id='markedAnswer"+i+"' n='"+i+"' answerid='"+myObj.answers[i].answer_id+"' t='"+myObj.answers[i].text+"'>"+ myObj.answers[i].text;
				res +="</div>";
			}
		
					
		res +="</article>";
		res +="<div id='errortext'>Du måste skriva något eller välja Avsluta</div>";
		res+"</div>";
return res;
	
}


function startFreetextQuestion() {
		var myObj=FS.contentObj[FS.currentNodeNr];
		$("#errortext").hide();
		$('#markedAnswer0').click(function() {
   				
				var term = $("#freetextAnswer").val();
				
   				
	   			if (term) {
	   				$("#errortext").hide();
	   				exitFreetextQuestion(myObj.question_id, term);
	   				}
     			else {
     				$("#errortext").show();
     			}
				   			
   			  
 			});

			$('#markedAnswer1').click(function() {
   				FS.gotoNode(FS.currentNodeNr,1);
					
   			  
 			});
		

	}


function exitFreetextQuestion(question_id, term) {

		$.totalStorage("freetext",term);			
		phpCallSaveFreetext(question_id,term);	
	
}

*/


// END OF FREETEXT QUESTION ----------------------------------------------------------------------------------




// INT QUESTION --------------------------------------------------------------------------------------------
//let user answer on the age question, saves to DB via ajax
/*function addNodeIntQuestion(nodeId) {
	var res="",
	myObj=FS.contentObj[nodeId];
	

	res +="<div class='centered eleven columns'>";
			
	res +="<article class='markedQuestionDiv fakecenter'>";
			res +="<div class='questionHeadline'>"+myObj.question +"</div>";
			res +="<div class='markedPreText'>"+myObj.pretext +"</div>";
			

			res +="<div class='left'><input type='number' class='intField' name='intAnswer'  id='intAnswer' min='1' max='99'></div>";
			res +="<div class='sequenceAnswer markedQuestionAnswer left' id='markedAnswer0' n='0' answerid='"+myObj.answers[0].answer_id+"' t='"+myObj.answers[0].text+"'>"+ myObj.answers[0].text;
			res +="</div>";
		
					
	res +="</article>";
		res +="<div id='errortext'>Du måste ange en ålder</div>";
		res+"</div>";
return res;

}

function startIntQuestion() {
		var myObj=FS.contentObj[FS.currentNodeNr];
		$("#errortext").hide();
		$('#markedAnswer0').click(function() {
   				
				var term = $("#intAnswer").val();
   				
	   			if (term) {
	   				$("#errortext").hide();
	   				exitIntQuestion(myObj.question_id, term);
	   				}
     			else {
     				$("#errortext").show();
     			}
				   			
   			  
 			});

		

	}



function exitIntQuestion(question_id, term) {

		$.totalStorage("age",term);			
		phpCallSaveAge(question_id,term);	
	
}
*/
// END OF INT QUESTION --------------------------------------------------------------------------------------------













//MARK (3) QUESTION ------------------------------------------------------------------------------------
//Shows x answers to a question, user selects 1 or more answers (like a delux checkbox) based on "nrOfAnswers" in json object
/*
	function addNodeMarkQuestion(nodeId) {
		var res="",
			myObj=FS.contentObj[nodeId];
			
			var sam, maria, adriana = false;
			if (myObj.subtype =="mq3") {
					if ($.totalStorage("staff1")=="Sam" || $.totalStorage("staff2")=="Sam") sam=true;
					if ($.totalStorage("staff1")=="Maria" || $.totalStorage("staff2")=="Maria") maria=true;
					if ($.totalStorage("staff1")=="Adriana" || $.totalStorage("staff2")=="Adriana") adriana=true;
			}



			res +="<div class='centered eleven columns'>";
			
			res +="<article class='markedQuestionDiv'>";
			res +="<div class='questionHeadline'>"+myObj.question +"</div>";
			res +="<div class='markedPreText'>"+myObj.pretext +"</div>";
			for (var i =0; i<_.size(myObj.answers); i++) {
				if(myObj.subtype =="mq3") {
					if(i==0 && !sam) continue;
					if(i==1 && !maria) continue;
					if(i==2 && !adriana) continue;
				}
			res +="<div class='sequenceAnswer markedQuestionAnswer' id='markedAnswer"+i+"' n='"+i+"' answerid='"+myObj.answers[i].answer_id+"' t='"+myObj.answers[i].text+"'>"+ myObj.answers[i].text;
			res +="</div>";
				if (myObj.modal == "true") {
			 		res +="<div class='marked_modal_btn' onclick='FS.openmodal("+i+")'></div>";



				}
				
			}
			res +="</article></div>";
			

			if (myObj.modal =="true") {
				for (var i =0; i<_.size(myObj.answers); i++) {
					res +='<div class="modal vsmodal" id="markedmodal'+i+'"><div class="content"><a class="close switch" onclick="FS.closemodal('+i+')"><i class="icon-cancel" /></i></a>';
    				
    				res +='<h2 class="modalheader">'+myObj.answers[i].text+'</h3> <p class="modaltext">'+myObj.answers[i].modal+'</p>';
    				res +='<p class="btn info medium"><a href="#" class="switch" onclick="FS.closemodal('+i+')">OK</a>';
      				res +='</p></div></div>';

				}

			}

			numberOfMarkedAnswers = _.size(myObj.answers);

			return res;

	}


	self.openmodal = function(id) {
		$("#markedmodal"+id).addClass("active");
	}
	self.closemodal = function(id) {
		$("#markedmodal"+id).removeClass("active");
	}

	function startMarkedQuestion() {
		var myObj=FS.contentObj[FS.currentNodeNr];
		markedAnswers = [];

		for (var i =0; i<numberOfMarkedAnswers; i++) {  

			//set selected when going back here
		

		
			$('#markedAnswer'+i).click(function() {
   			  var id = $(this).attr('n');
   			  var answer_id = $(this).attr('answerid'); 

   			  if ( $(this).hasClass("markedSelected")) {
   			  		$(this).removeClass('markedSelected');
   			  		removeItem(markedAnswers,answer_id);
   			  }
   			  else {
   			  	$(this).addClass('markedSelected');
	   			markedAnswers.push(answer_id);	
	   			
	   			if (_.size(markedAnswers) ==myObj.nrOfAnswers) exitMarkedQuestion(myObj.subtype, myObj.question_id);
     			  
				}   			
   			  
 			});

		}

	}

	function exitMarkedQuestion(subtypeQ, question_id) {
		_(markedAnswers).sortBy(function(obj) { return +obj.home })
   		
		switch(subtypeQ) {
			case "mq1":
			case "mq4":
			case "mq6":

				$.totalStorage("findstaff1",$('#markedAnswer'+markedAnswers[0]).attr("t"));
   				$.totalStorage("findstaff2",$('#markedAnswer'+markedAnswers[1]).attr("t"));
   				$.totalStorage("findstaff3",$('#markedAnswer'+markedAnswers[2]).attr("t"));
   				phpCallSaveMultipleAnswers(question_id,markedAnswers);

			break;
			
			case "mq2":
				
				var sam, maria, adriana = false;
				var answer_id =0;
				for (var i=0; i<=_.size(markedAnswers); i++) {
					switch(markedAnswers[i]) {
						case "Sam":
							sam = true;
						break;
						case "Maria":
							maria = true;
						break;
						case "Adriana":
							adriana = true;
						break;
					}
				}
				
				if (sam && maria) answer_id = 16;
				if (adriana && maria) answer_id = 17;
				if (sam && adriana) answer_id = 18;

				$.totalStorage("staff1",markedAnswers[0]);
   				$.totalStorage("staff2",markedAnswers[1]);
   				phpCallSaveAnswer(question_id,answer_id);

			break;

			case "mq3":
				var answer_id = markedAnswers[0];
				if (markedAnswers[0] == "both") {
					var sam, maria, adriana = false;
					if ($.totalStorage("staff1")=="Sam" || $.totalStorage("staff2")=="Sam") sam=true;
					if ($.totalStorage("staff1")=="Maria" || $.totalStorage("staff2")=="Maria") maria=true;
					if ($.totalStorage("staff1")=="Adriana" || $.totalStorage("staff2")=="Adriana") adriana=true;
					if (sam && maria) answer_id = 22;
					if (adriana && maria) answer_id = 24;
					if (sam && adriana) answer_id = 23;
				}
				
				$.totalStorage("keepwork",answer_id);
   				phpCallSaveAnswer(question_id,answer_id);

			break;


		}

   	
	}
*/
	function removeItem(array, item){
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
            }
    }
}

//END OF MARK (3) QUESTION -----------------------------------------------------------------








//CHECKLIST ------------------------------------------------------------------------------------
//OBSOLETE due to new specification. Shows all answers made in the app
function addNodeChecklist(nodeId) {

	var res="",
			myObj=FS.contentObj[nodeId];
			
		

			res +="<div class='centered eleven columns'>";
			res +="<p>Du har valt:<br>";
			res +=$.totalStorage("pieOption") +"<br><br>";
			res +=$.totalStorage("markedQuestion1")+"<br>";
			res +=$.totalStorage("markedQuestion2")+"<br>";
			res +=$.totalStorage("markedQuestion3")+"<br>";
			res +="<br>Du valde dessa söksätt för att...<br>";
			
			res +=$.totalStorage("answer1_text")+"<br></p>";

			if(myObj.showButton == "true") {
 			res +="<div id='checkListBtn'>"+myObj.btnText+"</div>";
			}

			return res;

		}

		function startCheckList() {
  		$(document).on('click', '#checkListBtn', function() {
   		window.location=FS.contentObj[FS.currentNodeNr].btnURL;

   		}	
    
   )};



//END OF CHECKLIST------------------------------------------------------------------------------





//PHP METHODS ----------------------------------------------------------------------------------------------------------------------------------------



function phpCallSavePieOption(optionSelected) {
	//OBSOLETE
	//TODO: Implement the PHP-script

/*	$.ajax({
        type: "GET",
        url: "php/savePieOption.php",
        data: {ID: $.totalStorage('ID'), option: optionSelected},
        });

*/
}


function phpCallSaveABCAnswer(ABC_ID, optionSelected,nodeId) {
	var maindiv = $('#main_div');

	if(localHostTrue) { //ONLY WHEN IN LOCALHOST
		var jsonResult = [{A:21,B:6,C:9,total:36}];
		maindiv.html(FS.addABCResult(ABC_ID, optionSelected,nodeId,jsonResult));
		return;
	}

	
	$.ajax({
        type: "GET",
      
        //url: "saveAndGetABCanswer.php",
        url: "php/saveAndGetABCanswer.php",
        datatype:'json',
        data: {ID: $.totalStorage('ID'), question:ABC_ID, answer: ABCArray[optionSelected]},
        success:function(data) {
        	maindiv.html(FS.addABCResult(ABC_ID, optionSelected,nodeId,data));
        }
        });

}










function phpCallSaveAnswer(question, answer) {

	if(localHostTrue) { //ONLY WHEN IN LOCALHOST
		//	FS.animationType="keynotefade";
			FS.gotoNode(FS.currentNodeNr,1);
		return;
	}


	$.ajax({
        type: "GET",
        url: "php/saveAnswer.php",
         datatype:'json',
        data: {ID: $.totalStorage('ID'), question_id: question, answer_id:answer},
        success:function(data) {

		
        //	FS.animationType="keynotefade";
        	FS.gotoNode(FS.currentNodeNr,1);
        }
        });

}

function phpCallSaveAge(question_id,term) {
		if(localHostTrue) { //ONLY WHEN IN LOCALHOST
				FS.animationType="keynotefade";
			FS.gotoNode(FS.currentNodeNr,1);
		return;
	}


	$.ajax({
        type: "GET",
        url: "php/saveAge.php",
         datatype:'json',
        data: {ID: $.totalStorage('ID'), question_id: question_id, answer_int:term},
        success:function(data) {

        	FS.gotoNode(FS.currentNodeNr,1);
        }
        });


}


function phpCallSaveFreetext(question_id,term) {
		if(localHostTrue) { //ONLY WHEN IN LOCALHOST
			FS.gotoNode(FS.currentNodeNr,1);
		return;
	}


	$.ajax({
        type: "GET",
        url: "php/saveFreetext.php",
         datatype:'json',
        data: {ID: $.totalStorage('ID'), question_id: question_id, answer_text:term},
        success:function(data) {

        	FS.gotoNode(FS.currentNodeNr,1);
        }
        });


}


function phpCallSaveMultipleAnswers (question, answerArray) {
	if(localHostTrue) { //ONLY WHEN IN LOCALHOST
			FS.gotoNode(FS.currentNodeNr,1);
		return;
	}

	var nrOfSavedEntries =0;

	for (var i=0; i<_.size(answerArray); i++) {
		$.ajax({
        type: "GET",
        url: "php/saveAnswer.php",
         datatype:'json',
        data: {ID: $.totalStorage('ID'), question_id: question, answer_id:answerArray[i]},
          success:function(data) {
          	nrOfSavedEntries++;
          	
          	if (nrOfSavedEntries>=_.size(answerArray)) {
          			
          		FS.gotoNode(FS.currentNodeNr,1);
          	}
        }
		});
	}
	


}