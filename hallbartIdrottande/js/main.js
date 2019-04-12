/*global $, jQuery, _, TweenMax, console, Case1a, Case2,Case_122,Case_123,Case_124,Case_621,Case_622,Case_623,Case_624,Case_625,Case_energi,Case_giftfri,Case_gronstad,Case_konsumtion,Case_mat,Case_resor,ET,Modernizer*/

/***********************
project name: Hitta Rätt (Based on THE NETWORK-project by the same author)
author: Jonas Hörberg, Tinkerton AB

This is a technical platform that allows content to be stored in separate json-files, called CASE-files. This project can be used to just show information, but also complex
video_sequences connected to a set of questions, special animations, complex menu systems with locked areas, making it possible to create game like experiences.
Example of real use can be found here:
http://realstars.eu/fairsex-natverket/
Or even more specifically here:
http://realstars.eu/fairsex-natverket/thenetwork.html

Each project have a start CASE (hardcoded). The function startMain specify that (this can be altered by querystring params). In each CASE one ore more json objects in
a CASE file stores info on what the user will se on the screen. Each object is a complete window view. Only one object at a time is shown. When the user interacts with
the content (by answering a question, have seen a video, pressed the next button or choosed an option i a HUB (menuview)), the app goes to another object. Most often
the next object in the hierarcy but this can be overridden with the "callback"-parameter.

The system supports one or more json-files, and lots of different views. 

Each view is generated in the "main_div" div only, all other DOM-elements are fixed.
From the start html-file:
 <div class="row centered_box scrollable" id="main_div">
             <!-- IT IS HERE ALL THE CONTENT WILL BE GENERATED-->
 </div>


Example of views:


if "type":

"info"  = shows a header, a text, maybe an image, another text
"video" = shows one or more videos side by side
"video_seq" = show one video or a set of question, when a video is complete, go to another video or back to the questions, can be used to create
			  very complex games. If user shows answer A or B, show different videos. When video is complete, show another set of questions B or C and so on. 
			  Remember to keep it simple or be structured or you will get lost ;-)
"question" = Shows a question-text and 2 or more answers. Lets the user select only one answer. When user have answered goto next node (or node specified in "callback")
"agent" = shows a text that types one character after another like an old typewriter
"hub" = a special menu view with one or more options on an image. Each option could lead to another node or a new CASE-file. By using the "lockedUntil"-parameter, you can
		block a user to go to specific option until x other options have been visited before.
"piechart" = show a piechart with text labels, each pie chart is clickable and the answer saved to a DB. Can be modified to allow navigation to other nodes/CASES when
			 clicked upon
"abc_question" = A user selects on of three questions, when done, save answer to DB, but also generates a resultpage showing how many answers of A, B or C alternatives
				 other users have answered (in percentage).
"mark_question" = shows a questions and x answers. This differs from "question" because you can allow more than one answers. For example, user must select 3 options in a list
"int_question" = shows a text and a inputfield that the user must enter a number in. Stored to DB (for instance, "how old are you?" answer: 30)
"freetext_question" = shows a text and a textfield where the user can enter text. Stored in DB
"checklist" = shows a resultpage with local storage variables. Used in the end of some projects to give the user some kind of reciept
"tradequestion"= Shows a number of images that is clickable. The user must select one image (called tradequestion instead of imagequestion because the first time
				 we used this was when asking what trade a user was working in...)
"comic" = shows one image on top of each other, as a comic book, handles scrolls, clicking on an image to go back and forth in the comic page
					result += addNodeComic(nodeId);
"comicparallel" = same as comic but supports more than one image, side by side.
				

Example of use of a video sequence CASE:
	{  	"ID": "3.2.1",
		"type":"video_seq",
		"background":{"type":"image","url":"bg.jpg"},
		"sequences":[
		{
				"sequenceID":"0",
				"type":"question",
				"text":"Fråga Maria:",
				"answers":[
							{"text":"Berätta lite om dig själv", "gotoID":"1"}, 
							{"text":"Varför sökte du det här jobbet?", "gotoID":"2"},  
							{"text":"Vad är dina främsta styrkor?", "gotoID":"3"},
							{"text":"Vad är dina svagheter?", "gotoID":"4"} ,
							{"text":"Avsluta intervjun", "gotoID":"-1"} 
						]
					},
							{	
								"sequenceID":"1",
								"type":"video",
							 	"url":"http://player.vimeo.com/video/91707282", 
							 	 "gotoID":"0"
							},
							{	
								"sequenceID":"2",
								"type":"video",
								"url":"http://player.vimeo.com/video/91707335", 
								 "gotoID":"0"
							},

							{	
								"sequenceID":"3",
								"type":"video",
								"url":"http://player.vimeo.com/video/91707390", 
								 "gotoID":"0"
							},
							{	
								"sequenceID":"4",
								"type":"video",
								"url":"http://player.vimeo.com/video/91707389", 
								 "gotoID":"0"
							}
			],
     	"animation":"fade",
		"showNextButton":"-1",
		"callback":"Case1a",
		"callbackNode":"2"
	}

More examples and implementation can be found by examining the actual CASE-files. The main CASE-file is Case1a.js



Typical flow of the application:

1. startMain (read content from Case1a.js)
2. startCase 
3. gotoNode (first node/object from Case1a.js)
4. onCompleteFadeoutNode (always reset/fade out the old content in main_div)
5. startNode (fade in new node, trigger one of many startFunctions based on type,  example: startVideoListener, startMarkedQuestion, checkToUnlockChapters (if HUB), start animations

6. Pause and wait for user interaction. 
 
		3. gotoNode
		4. onCompleteFadeoutNode
		5. startNode

		6. Pause and wait for user interaction.
		[...]

			2. startCase [...]

until a node has the "callback":"OUTRO", which exits the app and takes the user to a new URL (end screen).





Supports local storage
The application will continue where the user were the next time it comes back to this page, we use local storage for this, can be resetted

Supports DB storage via Ajax
Please search ".php" to understand how to store data to the dabase. Also see the php-files in the php-folder.
************************/

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



var FS = (function(self){
	"use strict";
	

	var activeCase,
		activeSound,
		caseNodeId,
		currentNodeType,
		currentSequence,
		currentNodeNr,
		comicsToFadeIn,
		currentComic,
		comicTimeout,
		currentlyClickedWallText,
		maxNodeNr,
		contentObj,
		initComplete,
		oldBackground,
		nrOfVideos,
		video_player,
		nextArrowTimeout,
		animateTextTimeout,
		DEBUG,
		GAMEMODE,
		touchNavPossible,
		touchNavLeftPossible,
		touchNavRightPossible,
		touchx,
		touchy,
		globalAnimation,
		unlockedChapters,
		storeCase,
		ABCArray=["A","B","C"],
		localHostTrue,
		interceptPrevButton = false,
		numberOfMarkedAnswers,
		arrayOfWallTweens =[],
		markedAnswers =[],
		navigationDirection = "fade",
		oldBottombar = "#bottom-nav",
		showAnimations = true,
		availableCases = ["Case1a", "Case3","Case3_HI_Alex",  "Case6_HI_Robin", "Case7_HI_Kim",]; //"Case4"




	
	//*GENERAL METHODS FOR NODE TEMPLATES,  Called by function self.addContent---------------------------------------------------------------------------------
			function addNodeHeader (nodeId) {
				var addClass = "ten";
				if (FS.contentObj[nodeId].size!==undefined) {
					addClass = FS.contentObj[nodeId].size;

				}
				if (FS.contentObj[nodeId].template!==undefined) {
					var templateclass=FS.contentObj[nodeId].template;
					if (templateclass == 'clickwords') templateclass = templateclass +"column";
					addClass = addClass + " " + templateclass;
				}
				
				return "<div class='centered " + addClass + " columns' id='nodeHeader'>";
			}


			function addNodeFooter () {
				return "</div>";
			}


			self.addNodeTitle =function(nodeId) {
				var titleArr, 
					res;
				
				if (FS.contentObj[nodeId].title === undefined || FS.contentObj[nodeId].title=="") {
					return "";
				}
				
				titleArr = FS.contentObj[nodeId].title.split("<br/>");
				if (FS.contentObj[nodeId].titlecenter == "true") {
						res ="<div class='titleDiv center'>";
				}
				else {
					res ="<div class='titleDiv'>";
					
				}
				
				for (var i=0; i<_.size(titleArr); i++) {
					if (i>0) res+="<br/>";
				 res += "<span class='text-black-bg title'>"+titleArr[i]+"</span>"; 
				}
				res +="</div>";
				return res;
			}


			function setnewBG(url) {
				//$(".backstretch").remove();
				
				if(url.substring(0,1)=="#") {
					$('.backstretch').css('background-color', url);	
					$('.backstretch').css('background-image', 'none');	

				}
				else {

					var imageUrl = "img/"+url
					$('.backstretch').css('background-color', 'transparent');	
					$('.backstretch').css('background-image', 'url(' + imageUrl + ')');	

					/*var moveX = FS.currentNodeNr* (activeCase.ID.backgroundParallax || 150);
				
					if (showAnimations) {
							TweenMax.from('.backstretch',5, {scale:1.05,  force3D:true});
						TweenMax.to(".backstretch", 0, {x:-moveX});	
						
					}
					else {
						TweenMax.set(".backstretch", {x:-moveX});	
						
					}*/
				}
}

			function setupBackground(nodeId) {
				//change background only if next node have a different background	

				if (FS.contentObj[nodeId].background == undefined || FS.contentObj[nodeId].background.url==oldBackground) {
					var moveX = FS.currentNodeNr* (activeCase.ID.backgroundParallax || 150);
				
					if (FS.navigationDirection!="keynotefade") {
						
						if (showAnimations) {
							//TweenMax.to(".backstretch", 1.75, {x:-moveX, ease:Circ.easeOut, force3D:true});	
                            TweenMax.to(".backstretch", 1.75, {autoAlpha:1, ease:Circ.easeOut});
						}
						else {
					//		TweenMax.set(".backstretch", {x:-moveX});	
						 TweenMax.set(".backstretch", {alpha:1});
						}
					}
					
	
					return;
				}
				oldBackground = FS.contentObj[nodeId].background.url;
				
				if(FS.initComplete){
					if (showAnimations) {
								TweenMax.to($(".backstretch"),1.75, {autoAlpha:1,delay:0});
							TweenMax.to($(".backstretch"),0, {autoAlpha:0, onComplete:setnewBG, onCompleteParams:[oldBackground]});
						}
						else {
							TweenMax.set($(".backstretch"),{autoAlpha:0});
							TweenMax.set($(".backstretch"),{autoAlpha:1});	
								setnewBG(oldBackground);
						}
				
				}
				else {
					setnewBG(oldBackground);
					
			
				//	$.backstretch("img/"+oldBackground);
					


				}
			}

	//*END OF: GENERAL METHODS FOR NODE TEMPLATES------------------------------------------------------------------------












	// GENERAL TEMPLATE METHODS ----------------------------------------------------------------------------------------------------------------------

	self.addNodeImages = function(nodeId,imageClass) {
		var images,
			nrOfImages,
			res;
			images = FS.contentObj[nodeId].image;

			if (images === undefined) { return "";}

			if (imageClass ==undefined) imageClass ="node-image";

			nrOfImages=  _.size(images);

			res="";
			for (var i=0; i<nrOfImages; i++) {
				res+="<div class='"+imageClass+"'><img class='imgOfNode "+images[i].class+"' src='img/"+images[i].url+"'/></div>"
			}
			return res;
	}

	function addNodeAudio(nodeId) {
		
		if (FS.contentObj[nodeId].audio != undefined) {
			$('#audiobar').html('<audio id="audioplayer" src="audio/'+FS.contentObj[nodeId].audio+'" type="audio/mp3" controls="controls"></audio>');
			
		}
		return "";
			
	}


	function addNodeQuestion(nodeId) {
		var res="",
			myObj=FS.contentObj[nodeId];
			
		

			res +="<div class='centered eleven columns'>";
			
			res +="<article class='questionDiv'>";
			res +="<div class='questionHeadline'>"+myObj.html +"</div>";
			for (var i =0; i<_.size(myObj.answers); i++) {
				var questclass = myObj.class || "";
			res +="<div class='sequenceAnswer "+questclass+ "' id='"+myObj.question_id+"_"+i+"' onClick=FS.saveAnswer("+i+")>"+ myObj.answers[i].text +"</div>";
				
			}
			res +="</article></div>";

			return res;

	}


	self.addNodeText = function(nodeId) {
		var res,
		myObj = FS.contentObj[nodeId];
		if (myObj.text == undefined) return "";

		res = "<div class='textnode";
	
		if (myObj.justify!=undefined)  {
				res +=" " + myObj.justify;
		}
		if (myObj.textclass!=undefined)  {
				res +=" " + myObj.textclass;
		}
		res +="'>";
		//res +=FS.addNodeImages(nodeId);
		res +=   myObj.text;
		res += "</div>";

		
		return res;
		
	}
	
	function addNodePreText (nodeId) {
		var res,
		myObj = FS.contentObj[nodeId];
		if (myObj.pretext == undefined) return "";

		res = "<div class='pretext";
		
		if (myObj.justify!=undefined)  {
				res +=" " + myObj.justify;
		}
		res +="'>" + myObj.pretext + "</div>";

		
		return res;
		
	}
		
	function addNodeTextlist (nodeId) {
		var res,
			myObj = FS.contentObj[nodeId];

		
		if (myObj.ul == undefined) return "";

		res = "<div class='textlist'><ul>";
		for (var i =0; i<_.size(myObj.ul); i++) {
				
			res +="<li id='li_"+i+"'>"+ myObj.ul[i].li +"</li>";
				
			}
		res +="</ul></div>";

		
		return res;

	}

	function addNodeTextlistAnimation (nodeId) {
		var myObj = FS.contentObj[nodeId];
		
		if (myObj.ul == undefined) return "";

		for (var i =0; i<_.size(myObj.ul); i++) {
			
				var myDelay = parseInt(myObj.ul[i].delay) + parseInt(myObj.ul_delay);
				
				if (showAnimations) {
					TweenMax.set($("li#l"+i),  {opacity:0});

					var myTween = TweenMax.to($('#li_'+i),1,{opacity:1, delay:myDelay});
					arrayOfWallTweens.push(myTween);
				}
			
				
			}
	

		
	
	}

	function addNodePostText (nodeId) {
		var posttext = FS.contentObj[nodeId].posttext;
		if (posttext == undefined) return "";
		return "<p class='posttext'>"+ FS.contentObj[nodeId].posttext+"</p>";
		
	}


	function addHubMenu(nodeId) { //MILJÖ
		var res ="", 
			nrOfChapters,
			myObj =FS.contentObj[nodeId],
			wWidth = $(window).width() ,
			wHeight =$(window).height() - $("#bottombar-main").innerHeight()+20, //-40
			zoomFactor,
			margintop,
			hubImageAspectRatio = myObj.imageheight / myObj.imagewidth,
			hubImage,
			addStyle,
			chapterItemClass = "chapterItem";

           
                if (myObj.hubimage[0].url !=undefined) {
                    //console.log(_.size(myObj.hubimage));

                    var result = $.grep(FS.unlockedChapters, function(e){ return e.unlockID == myObj.unlockedID; });

                    var hubNr = _.size(result);
                    if (hubNr>= _.size(myObj.hubimage)) {hubNr = _.size(myObj.hubimage)-1;}
                        hubImage = myObj.hubimage[hubNr].url;

                }
                else {
                        hubImage = myObj.hubimage;
                }
            



			zoomFactor =  wHeight / wWidth;
			if (zoomFactor<hubImageAspectRatio) {
				wWidth = wWidth *zoomFactor/hubImageAspectRatio;		
			}  
		

			var myObj2 = myObj.chapters;
			nrOfChapters = _.size(myObj2);
			
	
			res += "<div class='chapterWrapper' style='width:100%;' >";
			//res += "<div class='chapterWrapper desktop' >";
			res +="<img src='img/"+hubImage+"' BORDER=0 width='100%' style='height:"+wHeight+"px; max-height:"+myObj.imageheight+"px' />";
		
			//Add overlayimages for on mouseOver
			if (myObj2[0].overlayimage !=undefined) {
				for (var i=0; i<nrOfChapters; i++) {	
						res+='<div id="overlayhubimage_'+i+'" class="overlayhubimage" style="height:100%; width:100%; display:none; background-image:url(\'img/'+myObj2[i].overlayimage+'\');"></div>'; 
				}
			}
		
				res+="<div class='svg-container' style='width:100%;' >";
				for (i=0; i<nrOfChapters; i++) {	
					}
						res+='<svg version="1.1" viewBox="0 0 '+myObj.imagewidth+' '+myObj.imageheight+'" preserveAspectRatio="xMinYMin meet" class="svg-content" style="height:'+wHeight+'px; max-height:'+myObj.imageheight+'px">';
								//res+='<defs><filter id="blur" x="-200%" y="-200%" width="400%" height="400%"><feGaussianBlur in="SourceGraphic" stdDeviation="20" /></filter></defs>';
								res+='<defs><filter id="blur" x="-0" y="-0" width="100%" height="100%"><feGaussianBlur in="SourceGraphic" stdDeviation="10" /></filter></defs>';
						
							for (i=0; i<nrOfChapters; i++) {
								
									res+='<polygon id="chapter_'+myObj2[i].ID+'" class="chapteritem" filter="url(#blur)" OnMouseOver="FS.setOverlay('+i+'); return true"  OnMouseOut="FS.setOverlay(\'none\'); return true" OnClick="FS.respondToHUB('+i+'); return false;" points="'+myObj2[i].coords+'"/>'; 
							
							}
						res+='</svg>';
					res+='</div></div>';

/*
			res +="<map name='hub'>";


			for (i=0; i<nrOfChapters; i++) {
				res+='<area shape="'+myObj2[i].shape+'" coords="'+myObj2[i].coords+'" href="" alt="" title="" OnMouseOver="FS.setOverlay('+i+'); return true" OnMouseOut="FS.setOverlay(\'none\'); return true" OnClick="FS.respondToHUB('+i+'); return false"  style="outline:none;" target="_self" >'; 
			}

			res+="</map></div>";
		*/
        
        
        
       
        
        
        
        
        
        
		return res;
	}
	self.setOverlay = function(overlayID) {
		
		/*
		$(".overlayhubimage").fadeOut();
		if (overlayID!="none") {
				$("#overlayhubimage_"+overlayID).fadeIn("slow");
		}*/
		
	}


	function addNodeAgent(nodeId) {
		var res="";
			if (FS.contentObj[nodeId].image != undefined) {
				res +="<ul class='two_up tiles agentul'><li>"+FS.addNodeImages(nodeId,"agentImage")+"</li><li><div id='agent'>";
				res +="<p>"+FS.contentObj[nodeId].text + "</p></div></li></ul>";
			}else { 
				res +="<div class='twelve columns row agentul' id='agent'>";
				res +="<p>"+FS.contentObj[nodeId].text + "</p></div>";
			}
			
			return res;


	}

	function animateText(elements, callback) {  //USED BY AGENT NODE TEMPLATE ONLY
			/* get: array with hidden elements to be displayes, callback function */
   		 var i = 0;

    	(function iterate() {
       		 if (i < elements.length) {
         	    elements[i].style.display = "block"; // show
       	     	animateNode(elements[i], iterate); 
           		i++;
        	 } else if (callback != undefined)
            	callback();
    	})();    
    
    function animateNode(element, callback) { //USED BY AGENT NODE TEMPLATE ONLY
        	var pieces = [];
        	if (element.nodeType==1) {
            	while (element.hasChildNodes())
                	pieces.push(element.removeChild(element.firstChild));
           			animateTextTimeout = setTimeout(function childStep() {
                	if (pieces.length) {
                    	animateNode(pieces[0], childStep); 
                    	element.appendChild(pieces.shift());
                	} else if (callback != undefined)
                    	callback();
            		}, 2000/60);
        	} else if (element.nodeType==3) {
            	pieces = element.data.match(/.{0,2}/g); // 2: Number of chars per frame
            	element.data = "";
            	(function addText(){
                	element.data += pieces.shift();
                	animateTextTimeout = setTimeout(pieces.length
                    ? addText
                    : callback,
                  	2000/60);
            	})();
        	}
    	}
	}




	self.addContent = function(nodeId) {  //When a new NODE is presented this function checks the "type" from the json-file and creates page using different templates
		var myObj =FS.contentObj[nodeId];
			FS.currentNodeType = myObj.type;

			var result = addNodeHeader(nodeId);
			
			switch (FS.currentNodeType) { //checks the type
				case "info":
				case "A":
					if (myObj.imagecenter == "true") {
						result +="<div class='infofullcol'>" + FS.addNodeTitle(nodeId) +  FS.addNodeText(nodeId) + FS.addNodeImages(nodeId,"imagecenter");


					}
					else {
						result +=FS.addNodeImages(nodeId);

						if (myObj.titlecenter == "true") {
							result  += "<div class='infofullcol'>";
						}
						else {

							result  += "<div class='rightcol'>";
						}
							result  += FS.addNodeTitle(nodeId)+ addNodeVideos(nodeId) + FS.addNodeText(nodeId) + addNodeTextlist(nodeId) + "</div>" + addNodePostText(nodeId) + addNodeAudio(nodeId);	   	

					
					}
					

				break;
				case "video":
					result +=addNodeVideos(nodeId);
				break;
				case "video_seq":
				case "B":
					result  += addNodeVideoSequence(nodeId);
			   
				break;
				case "C":
				case "D":
				case "F":
					result += CLICKPOP.addContent(nodeId) +addNodeAudio(nodeId);
		
				break;
				case "chapter":
					//add no more
			   
				break;
				case "question":
		
					result  +=  addNodeQuestion(nodeId);
			   
				break;
			


				case "agent":
					result += addNodeAgent(nodeId);
			   
				break;
				case "energitjuvar":
					result += addNodePreText(nodeId) + FS.addNodeText(nodeId) + ET.addGame(nodeId);
				break;
				case "sorteringsspel":
					result = AS.addGame(nodeId);
				break;
				case "selectalternativegame":
					result = SA.addGame(nodeId);
				break;

				case "hub":

					result = addHubMenu(nodeId);
				break;
				case "piechart":
					result += addPieChart(nodeId);
				break;
				case "abc_question":
					result += addNodeABCQuestion(nodeId);
				break;
				case "mark_question": 
					result  +=  addNodeMarkQuestion(nodeId);
				break;
				case "int_question": 
					result  +=  addNodeIntQuestion(nodeId);
				break;
				case "freetext_question": 
					result  +=  addNodeFreetextQuestion(nodeId);
				break;
				case "checklist": 
					result  +=  addNodeChecklist(nodeId);
				break;
				case "tradequestion": 
					result = addNodeTradeQuestion(nodeId);
				break;
					case "comic":
					result += addNodeComic(nodeId);
			   
				break;
				case "comicparallel":
					result += addNodeComicParallel(nodeId);
				break;
				case "comicsingle":
					result += addNodeComicSingle(nodeId);
				break;
				
				/*THENETWORK-project SPECIFIC NODES? REMOVE?
			
			
				case "walloftext":
					result += addNodeWalloftext(nodeId);
			   

				break;
				*/

			}
				result += addNodeFooter();
		 		return result;
		};



// END OF: GENERAL TEMPALTE METHODS ----------------------------------------------------------------------------------------------------------------------









// COMIC NODES TEMPLATES ------------------------------------------------------------------------------------------------------------------------
	function emptyWallTweens() {
			for (var i=0; i<_.size(arrayOfWallTweens); i++) {
				
				arrayOfWallTweens[i].kill();

			}
		arrayOfWallTweens=[];
		currentlyClickedWallText=0;
	
	}

	function startComicSingle(nrOfSlides) {
		var winHeight = 0;
		TweenMax.to($("#comicScroller"),0,{top:winHeight});
		TweenMax.to($(".comicSingleWrapper"),1,{css:{"opacity":"1"},delay:0});
	}

	function startComicParallel(nrOfSlides) {
		var winHeight,
		comicHeight,
		myObj = FS.contentObj[FS.currentNodeNr].comicparallel[0].slide; 

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
		for (var i=0; i<nrOfSlides; i++) {
			
				$("#slide_"+i).removeClass("comicActive")
				
			
		}
		
	}

	function startComicHint(nrOfSlides) {
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
			

			comicSlides = FS.contentObj[nodeId].comicparallel; 
			if (comicSlides === undefined) {
				comicsToFadeIn=0;
				return "";}

			nrOfSlides= comicsToFadeIn = _.size(comicSlides);

			//comic_row_height = FS.contentObj[nodeId].comic_row_height;

			res ="<div class='comicParallelWrapper'>";
			res +="<div id='comicScroller'>";
			//width:280px;
			if (comicSlides[0].slide.url !=undefined) {comicWidth = 660;}
		 	if (comicSlides[0].slide.url2 !=undefined) {comicWidth =460;}
			if (comicSlides[0].slide.url3 !=undefined) {comicWidth =300;}
			if (comicSlides[0].slide.url4 !=undefined){ comicWidth =220;}
			
			comicHeight = FS.contentObj[nodeId].comic_row_height;

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
			

			comicSlides = FS.contentObj[nodeId].comicsingle; 
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

		comicImages = FS.contentObj[nodeId].comic; 
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


		comic_row_height = FS.contentObj[nodeId].comic_row_height;

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


















	//VIDEO TEMPLATES, used by type "video_seq" ---------------------------------------------------------------------------------------------------
	//Using the Vimeo API to check when a video is complete in order to show the next sequence in the video-sequence. Could be a new video or more common a set of 
	//questions that leads to new videos or exits the sequence. See example in CaseMaria_Video.js			

			function addNodeVideoSequence(nodeId) {
				var res ="",
					seq_type,
					myObj;
					
					
					myObj=FS.contentObj[nodeId].sequences[FS.currentSequence];
					seq_type=myObj.type;
				//	if (FS.currentSequence == 0) {res ="<div class='row' id='seqWrapper'>"}

					switch (seq_type) {
						case "video":
							res +="<div class='videowrapper'><div class='loading' id='loader_0'><div class='track'></div><div class='spinner'><div class='mask'><div class='maskedCircle'></div></div></div></div>";
							res +="<article class='vimeo video videoBg'>";
							res +="<iframe id='iframe_"+myObj.sequenceID+"' style='visibility:hidden;' onload='FS.showIframe("+myObj.sequenceID+")' ";
							res += "src='" + myObj.url + "?title=0&byline=0&portrait=0&autoplay=0&api=1&player_id=iframe_"+myObj.sequenceID+"' width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
							res +="</iframe></article></div>";

						break;
						case "question":
							case "F":
							res +="<div class='centered eleven columns'>";
							res +="<article class=''>";
							res +="<div class='sequenceHeadline'>"+myObj.text +"</div>";
							for (var i=0; i<_.size(myObj.answers); i++) {
								res +="<div class='sequenceAnswer videoQuestion' onClick='FS.gotoSequence("+myObj.answers[i].gotoID+")'>"+ myObj.answers[i].text +"</div>";
							//if(myObj.answers[1]!=undefined) res +="<div class='sequenceAnswer videoQuestion' onClick='FS.gotoSequence("+myObj.answers[1].gotoID+")'>"+ myObj.answers[1].text +"</div>";
							}

							res +="</article></div>";
						
						break;
						case "text":
							res +="<div class='centered eleven columns'>";
							res +="<article class=''>";
							if  (myObj.header!=undefined) res +="<div class='sequenceHeadline'>"+myObj.header +"</div>";
							if  (myObj.content!=undefined) res +="<div class='sequenceText'>"+ myObj.content +"</div>";
							res +="</article></div>";
						
							
						break;
						


					}
					//if (FS.currentSequence == 0) res+="</div>"
				
				return res;
			}


			

			function addNodeVideos (nodeId) {

				var videos,
					nrOfCols,
					res, 
					autoplay;
				
				videos = FS.contentObj[nodeId].videos; 
				if (videos === undefined) {return "";}

				autoplay=0;


				FS.nrOfVideos = _.size(videos);
				if (FS.nrOfVideos>1) autoplay=0;

				nrOfCols="twelve";
				
				switch (FS.nrOfVideos) {
					case 1:
						nrOfCols = "twelve";
					break;
					case 2:
						nrOfCols = "six";
					break;
					case 3:
						nrOfCols = "four";
					break;
					case 4:
						nrOfCols = "three";
					break;

				}

				res ="<div class='row'>";

				for (var i=0; i<FS.nrOfVideos; i++) {
					if(FS.nrOfVideos<=1) res +="<div class='centered "+nrOfCols+"'>";
					else res +="<div class='"+nrOfCols+"'>";
					res +="<div class='loading' id='loader_"+i+"'><div class='track'></div><div class='spinner'><div class='mask'><div class='maskedCircle'></div></div></div></div>";
					
					if ( videos[i].source  == "youtube") { //No need since we only use VIMEO now
						res +="<article class='youtube video videoBg'>";
						res +="<iframe width='560' height='315' src='"+ videos[i].videoURL + "?showinfo=0' frameborder='0' allowfullscreen></iframe>";
						res +="</iframe>";
						FS.nrOfVideos = 0;

					}
					else {
						//KEEP ONLY THIS, SHOW ONLY ONE VIDEO AT A TIME ANYWAY
						res +="<article class='vimeo video videoBg'>";
						res +="<iframe id='iframe_"+i+"'' style='visibility:hidden;' onload='FS.showIframe("+i+")' ";
						res += "src='" + videos[i].videoURL + "?title=0&byline=0&portrait=0&autoplay="+autoplay+"&api=1&player_id=iframe_"+i+"' width='500' height='281' frameboder='0' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen=''>";
						res +="</iframe>";

					}
					res +="</article></div>";
				}
				res+"</div>";


				return res;
			}
			
			

			

			function removeLoader(iframeId) { 
				$('#loader_'+iframeId).remove();
			}
			
			

			

			self.showIframe = function(iframeId) { 
				if (showAnimations) {
							TweenMax.to($('#iframe_'+iframeId),0.75, {autoAlpha:1, onComplete:removeLoader, onCompleteParams:[iframeId]});
						}
						else {
							TweenMax.set($('#iframe_'+iframeId),{autoAlpha:1});	
							removeLoader(iframeId);
						}
			}



			self.video_onSingleVideoFinish =function(id) {
					var iframe = $('#iframe_0');
		   			if(iframe==undefined) return;
					FS.video_player = $f(iframe);
		    	
		   			FS.video_player.removeEvent('ready');
					FS.video_player.removeEvent('finish');
				
					FS.gotoNode(FS.currentNodeNr,1);
				
			}



			self.video_onFinish = function(id) { //When Vimeo API sends event Finish, check the json object and either exit through "callbackNode" or go to next sequence
				  	 removeVideoListener();
				  	 FS.currentSequence =  FS.contentObj[FS.currentNodeNr].sequences[FS.currentSequence].gotoID;
				   	 if ( FS.currentSequence!=undefined) {
				   	 	if (showAnimations) {
							 TweenMax.to($("#seqWrapper"), 0.5, {alpha:0, onComplete:FS.populateSequence});
						}
						else {
							 TweenMax.set($("#seqWrapper"), {alpha:0});
							 FS.populateSequence();
						}
				   	 }
				  	
				  	 else {
				  	 	if (FS.contentObj[FS.currentNodeNr].gotoID!=undefined) { 
				  	 		FS.gotoID(FS.contentObj[FS.currentNodeNr].gotoID);
				  	 	}
				  	 	else if (FS.contentObj[FS.currentNodeNr].callback!=undefined) {
				  	 		var nodeToGo = -1;
				  	 		if (FS.contentObj[FS.currentNodeNr].callbackNode !=undefined) nodeToGo=FS.contentObj[FS.currentNodeNr].callbackNode;
				  	 		exitChapter(FS.contentObj[FS.currentNodeNr].callback,nodeToGo);

				  	 	}else {
				  	 		FS.gotoNode(FS.currentNodeNr,1);
				  	 	}
				  	 }
			}



			function removeVideoListener() {

		   		var iframe = $('#iframe_'+FS.currentSequence)[0];

		   		
		   		if(iframe==undefined) return;
		   			
		   		FS.video_player = $f(iframe);
		    	
		    	// When the player is ready, add listeners for pause, finish, and playProgress
				FS.video_player.removeEvent('ready');
				FS.video_player.removeEvent('finish');
				$('button').unbind();		
			}


			self.startSingleVideoListener = function () {
				var iframe = $('#iframe_0');
				FS.video_player = $f(iframe);
		    		
				FS.video_player.addEvent('ready', function() {
		    		    FS.video_player.addEvent('finish',  FS.video_onSingleVideoFinish);
				});
			}



			self.startVideoListener = function() {
		   		var iframe = $('#iframe_'+FS.currentSequence)[0];
		   		
		   		if(iframe==undefined) return;
		   		FS.video_player = $f(iframe);
		    	
		   		// When the player is ready, add listeners for pause, finish, and playProgress
				FS.video_player.addEvent('ready', function() {

		 	    	FS.video_player.addEvent('finish',  FS.video_onFinish);
		 		});
		 
				// Call the API when a button is pressed
				$('button').bind('click', function() {
				    FS.video_player.api($(this).text().toLowerCase());
				});

			
			}


			self.populateSequence = function() {
				$("#seqWrapper").html(addNodeVideoSequence(FS.currentNodeNr));
				if (showAnimations) {
							 TweenMax.to($("#seqWrapper"), 0.5, {alpha:1, onComplete:FS.startVideoListener})
						}
						else {
							 TweenMax.set($("#seqWrapper"), {alpha:1});
							 FS.startVideoListener();
						}
			}

			

			self.gotoSequence = function(sequenceID) {
				 if (sequenceID == "-1") {
			 	FS.gotoNode(FS.currentNodeNr,1); 
				 return; 
				}
				 FS.currentSequence =  sequenceID;
				 if (showAnimations) {
							TweenMax.to($("#seqWrapper"), 0.5, {alpha:0, onComplete:FS.populateSequence})
						}
						else {
							TweenMax.set($("#seqWrapper"), {alpha:0});
							FS.populateSequence();
						}
				 
			
			}

	//*END OF: VIDEO TEMPLATE -----------------------------------------------------------------------------------------------------------------

/**START AUDIO *** ----------------*/

			self.startAudio = function () {
			
				if ($('#audioplayer').length) {
					
						activeSound = new MediaElementPlayer('#audioplayer',{pauseOtherPlayers: true,   alwaysShowControls:true, features: ['playpause','progress','current','duration','volume']});
				$("#audiobar").slideDown();
				$("#navigationbar").addClass("audiopresent");
				console.log("startAudio");
					activeSound.play();
			

				}
				
				
			}

			self.killAudio = function () {
			
					if ($('#audioplayer').length) {
						try {
							activeSound.pause();
							activeSound = {};
						} catch (error) {}
						$("#audiobar").slideUp();
							$("#navigationbar").removeClass("audiopresent");
					}
			}


/**END OF AUDIO**/

			self.startTextList = function () {
				if (showAnimations) {
					TweenMax.set(".textnode p, .textnode li, .instruktionstext", {opacity:0, y:20});
					TweenMax.staggerTo(".textnode p, .textnode li", 1, {opacity:1, y:0}, 0.5);
					TweenMax.to(".instruktionstext", 1, {opacity:1, y:0, delay: 3});
					
					addNodeTextlistAnimation(FS.currentNodeNr);
				}
				else {

					TweenMax.set(".textnode p, .textnode li, .instruktionstext", {opacity:1});
					TweenMax.set(".instruktionstext", {opacity:1, y:0});

				}
			}



function phpCallSaveAnswerToDatabase(userid, question_id, question, answer_id, answer, myObj, myCallback) {
//	continueAfterDatabaseSave(myObj, myCallback);
//	return; //REMOVE WHEN DB IS OK


	if(localHostTrue) { //ONLY WHEN IN LOCALHOST
		

				continueAfterDatabaseSave(myObj, myCallback);
		return;
		
	}
	//console.log("saveAnswerToDatabase");
		$.ajax({
        	type: "GET",
        	url: "php/saveAnswerToDatabase.php",
         	datatype:'json',
        	data: {ID: userid, question_id: question_id, question: question, answer_id: answer_id, answer: answer},
        	success:function(data) {
        		if (myObj.showresponse=="true") {
        			showResultAfterDatabaseSave(myObj, myCallback,data);	
        		}
        		else {
        			continueAfterDatabaseSave(myObj, myCallback);	
        		}
				
        	}
        });

}


function showResultAfterDatabaseSave(myObj, myCallback,data) {
	
	if (data == undefined) {
		continueAfterDatabaseSave(myObj, myCallback);
	}
	else {
		var nrOfAnswers = JSON.parse(data).length;
		var totalAnswers = JSON.parse(data)[JSON.parse(data).length-1].total;
		
		$(".questiontext").text("Andra har svarat så här");
		$("#nodeHeader").addClass("expanded");
		$(".sequenceAnswer").addClass("result");
		$(".questiontext").addClass("result");
		
		$("#nextButton").css("display","block" );

		

		for (var i=0; i<nrOfAnswers-1; i++) {
			var myObj =  JSON.parse(data)[i];
			console.log(myObj.answer.id + " = " + myObj.answer.count);
			var percentwidth = myObj.answer.count/totalAnswers*100;
			console.log( ": " + percentwidth +"%");
			$("#"+myObj.answer.id).html($("#"+myObj.answer.id).text() + " (" +Math.round(percentwidth)+"%)<div class='resultwidth'/>");
			
			TweenMax.to($("#"+myObj.answer.id+" .resultwidth"), 1,{delay:i/100, css:{"width": percentwidth +"%"}} );
		}	
		TweenMax.to($(".backstretch"),0.5, {opacity:0.1});

		$(document).on('click', 'body', function() {
			$(document).off('click', 'body');
			continueAfterDatabaseSave(myObj, myCallback);
		});
		
		/*var windWidth = $(window).innerWidth();
		$(".innerscore, #scorekeeper").addClass("resultvisible");

		
		$(".clickwords").addClass("clickwordsResult");
		$("#nodeHeader").addClass("expanded");
		$(".clickwords").css("width",($(window).innerWidth() ) + "px" );
		$(".backstretch").css("opacity","0.1" );
		$("#nextButton").css("display","block" );
		
		for (var i=1; i<=16; i++) {
			var percentwidth = myObj["col"+i].value/(myObj.total)*100 * 3;
			//console.log( i + " : " + percentwidth +"%");
			TweenMax.to($("#col"+i), 1,{delay:i/100, css:{"width": percentwidth +"%"}} );
		}
		console.log(myObj.col1.value);	
		console.log(myObj.total);
		$(document).on('click', 'body', function() {
			$(document).off('click', 'body');
			FS.gotoID(FS.contentObj[CLICKPOP.nodeId].gotoID);
		});
*/

	}

}


function continueAfterDatabaseSave(myObj, myCallback) {
	



	if(myCallback!=undefined) { //IF THIS ANSWER HAS ITS OWN EXIT NODE GO THERE
			FS.navigationDirection = "question";
		
			FS.gotoID(myCallback);
			return;
			
		}



		//ELSE IF NO NEXT NODE IS SPECIFIED, JUST GO TO NEXT IN LINE IN SAME CASE FILE
				globalAnimation=0;
				FS.navigationDirection = "left";
				if (showAnimations) {
							TweenMax.fromTo ($("#main_div"), 0.35, { css:{"left": "0", "opacity":"1"}}, {autoAlpha:1, css:{"left": "-200px", "opacity":"0"}, onComplete: FS.gotoNode,onCompleteParams:[FS.currentNodeNr,1]});
	
						}
				else {
						TweenMax.set ($("#main_div"), {autoAlpha:1, css:{"left": "-200px", "opacity":"0"}});
						FS.gotoNode(FS.currentNodeNr,1);
						}
				
}



//END OF PHP METHODS -----------------------------------------------------------------------------------------------------------------------------------



//*HUB SPECIFIC METHODS----------------------------------------------------------------------------------------------------------------------------
	//The HUB is a in game menu, that can lock some of the options until a number of other options have been visited
/*
	function unlockChapters(nr) {

		var chapterNamesArray = new Array(
			"Case_energi",
			"Case_giftfri",
			"Case_gronstad",
			"Case_konsumtion",
			"Case_mat",
			"Case_rentvatten",
			"Case_resor"

		
		);

		FS.unlockedChapters = new Array();
		FS.unlockedChapters.length=0;


		for (var i=0; i<nr; i++) {
			FS.unlockedChapters.push(chapterNamesArray[i]);
		
		}

		$.totalStorage('unlockedChapters', FS.unlockedChapters);
	}
*/

	function checkToUnlockChapters() {
		
		var myObj=FS.contentObj[FS.currentNodeNr];
		var unlockedForThisCase = $.grep(FS.unlockedChapters, function(e){ return e.unlockID ==myObj.unlockedID; });
	
			var cases = _.pluck(unlockedForThisCase,"case");
			var nrOfUnlocks = _.size(cases);
		
		//FS.unlockedChapters.length = 0;
		//FS.unlockedChapters = [];

		for (var i=0; i<_.size(myObj.chapters); i++) {
				if (myObj.chapters[i].lockeduntil<=nrOfUnlocks) {
					
					//$("#overlayhubimage_"+myObj.chapters[i].ID).css("background-image","url('img/"+myObj.chapters[i].overlayimage+"')");
					//("#overlayhubimage_"+myObj.chapters[i].ID).addClass("unlocked");
					$("#chapter_"+myObj.chapters[i].ID).attr("class","unlocked chapteritem");
					
				}
				/*else {
									$("#overlayhubimage_"+myObj.chapters[i].ID).css({"background":"url('img/locked_"+myObj.chapters[i].overlayimage+"')","background-size" : "100% 100%"});
									$("#overlayhubimage_"+myObj.chapters[i].ID).css('display','block');
							
				}
					*/
					if (_.contains(cases, myObj.chapters[i].caseName)) {
						//	$("#overlayhubimage_"+i).addClass("unlocked chapteritem visitedChapter");
						
							//$("#overlayhubimage_"+i).addClass("visitedChapter");
						$("#chapter_"+i).attr("class","unlocked chapteritem visitedChapter");
					}
			
		}
		
			
	}

	self.respondToHUB = function (chapter) {	
		if(globalAnimation==1) return;
		FS.navigationDirection = "fade";

		var myObj=FS.contentObj[FS.currentNodeNr];
		var unlockedForThisCase = $.grep(FS.unlockedChapters, function(e){ return e.unlockID == myObj.unlockedID; });

		

		if (myObj.chapters[chapter].lockeduntil > _.size(unlockedForThisCase)) {
					return;
		}
		globalAnimation=1;

		//IF GOTOID IS SET:

		if (myObj.chapters[chapter].gotoID!=undefined) {
			FS.gotoID(myObj.chapters[chapter].gotoID);
			return;
		}
		

		//IF ACTION IS SET:

		if (myObj.chapters[chapter].action!=undefined) {
					if (myObj.chapters[chapter].action == "download") {	
							console.log("download");
							 window.open(myObj.chapters[chapter].actioncontext, "_blank");
					}
					else {
							FS.socialShare(myObj.chapters[chapter].actioncontext, 'http://srhr.se/reslust/', 'Fb share', 'Facebook share popup', 'http://srhr.se/reslust/img/share.jpg', 520, 350);		
					}
						

					globalAnimation=0;

					return;
				}
		

		//*OBSOLETE WHEN GOTOID IS USED/*
					if(myObj.chapters[chapter].callback!=undefined) {
						
						var myCallback = myObj.chapters[chapter].callback;
						
						if (myCallback == "Case1_outro" && parseInt(GAMEMODE)==1) myCallback = "Case1_mode1_outro";
						exitChapter(myCallback,-1);
						//TweenMax.to($("#main_div"),1,{css:{"opacity":"0"}, onComplete:FS.startCase, onCompleteParams:[myCallback]});
					}
					else {
						
						globalAnimation=0;
						FS.gotoNode(FS.currentNodeNr,1);
		}
		//*END OF OBSOLETE WHEN GOTOID IS USED/*
		//else console.log("HUB error: could not found callback action in function respondToHUB");
	}



//*END OF: HUB SPECIFIC METHODS----------------------------------------------------------------------------------------------------------------------------

	self.socialShare = function(type, url, title, descr, image, winWidth, winHeight) {
	        var winTop = (screen.height / 2) - (winHeight / 2);
	        var winLeft = (screen.width / 2) - (winWidth / 2);
	        if (type=="facebook") {
	       		 window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight); 	
	        }
	        if (type=="google") {
	       		 window.open('https://plus.google.com/share?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight); 	
	        } 
	        if (type=="twitter") {
	       		 window.open('https://twitter.com/intent/tweet?url=' + url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight); 	
	        }
	      }



//*STORAGE METHODS-----------------------------------------------------------------------------------------------------------------------------------------
//save and reset local storage, giving a possiblity to auto-save progress for the user

self.saveAnswer = function (answer_id) {
		if(globalAnimation==1) return;
		globalAnimation=1;

		var myObj=FS.contentObj[FS.currentNodeNr],
			myCallback = myObj.answers[answer_id].gotoID;
		

			ga('send', 'event', 'answers: '+ myObj.html , myObj.answers[answer_id].text);
			//var nrOfAnswers = myObj.answers.length;
			//console.log("nrOfAnswers " +nrOfAnswers);
			phpCallSaveAnswerToDatabase($.totalStorage('RESLUST_ID'), myObj.question_id, myObj.question, answer_id, myObj.answers[answer_id].text, myObj, myCallback);

		
	}



	self.confirmResetProgress = function () {
		$("#modalresetbg").fadeIn();
	
	 	$(".modal_text").center();
 		$(".modal_text").fadeIn();
		$("#modalresettext").fadeIn();

		$("#modalresetbg").on("click", function(){
				$("#modalresettext").fadeOut();
				$(this).fadeOut(400, function(){
				
						$(this).unbind('click');
				});

		});
				
		$("#page-menu-container").toggleClass("animate");
	}

	self.resetProgress =function() {
		
	 	$.totalStorage('RESLUST_storeCase','');
	 	$.totalStorage('RESLUST_ID', FS.uniqueid()); //create a new user for DB
	 	$.totalStorage('RESLUST_currentNodeNr','-1');
	 	$.totalStorage('RESLUST_tradeQuestion','-1');
	 	
	 	FS.unlockedChapters = new Array();
		FS.unlockedChapters.length=0;
		oldBackground ="";
		$(".bottombar").hide();
		FS.oldBottombar = "#bottom-nav";



		$.totalStorage('RESLUST_unlockedChapters',FS.unlockedChapters);
	 	// $('.modal#modal1').removeClass('active');
		// FS.startMain();
	
	 	window.location = window.location.href;
	}


	self.uniqueid =function(){
	    // always start with a letter (for DOM friendlyness)
	    var idstr=String.fromCharCode(Math.floor((Math.random()*25)+65));
	    do {                
	        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
	        var ascicode=Math.floor((Math.random()*42)+48);
	        if (ascicode<58 || ascicode>64){
	            // exclude all chars between : (58) and @ (64)
	            idstr+=String.fromCharCode(ascicode);    
	        }                
	    } while (idstr.length<32);

	    return (idstr);
	}

//*END OF: STORAGE METHODS-----------------------------------------------------------------------------------------------------------------------------------------




//*GENERAL METHODS----------------------------------------------------------------------------------------------------------------------------
		
			


	function exitChapter(nextHUB, startNode) {  //when reaching last node/object in a json-file, probably go back to a HUB
		var foundNextHUB =false,
			currentCase = activeCase.ID.text;	

		

		try {
			FS.removeVideoListener();
		}catch(err){}

		for (var i=0; i<=_.size(FS.unlockedChapters); i++) {
			if (FS.unlockedChapters[i] == currentCase) {
				foundNextHUB = true;

				break;
			}
			
		}


		$.totalStorage('RESLUST_currentNodeNr',  startNode);
			if(activeCase.ID.saveForUnlocked=="true") {
			var unlockedForThisCase = $.grep(FS.unlockedChapters, function(e){ return e.unlockID == activeCase.ID.unlockedID; });
	
			var cases = _.pluck(unlockedForThisCase,"case");
				
			if (!_.contains((cases),activeCase.ID.text )) {
				FS.unlockedChapters.push({"unlockID":activeCase.ID.unlockedID, "case":currentCase});
			}


		}


		 $.totalStorage('RESLUST_unlockedChapters', FS.unlockedChapters);
		
		
		$(".svg-container").remove();
		$("html").removeClass(currentCase);
		
		
		if (showAnimations) {
							TweenMax.to($("#main_div"),0.35,{css:{"opacity":"0"}, onComplete:FS.startCase, onCompleteParams:[nextHUB,startNode]});
						}
		else {
						TweenMax.set($("#main_div"), {css:{"opacity":"0"}});
						FS.startCase(nextHUB,startNode);
		}
		
	}
	


	self.showNext = function () {  //show nextbutton and possibly prev-button
		
		$("#nextButton").fadeIn();
		$("#mobileNextButton").fadeIn();
		if (FS.currentNodeNr>0) $("#prevButton").fadeIn();
		else {
			$("#prevButton").hide();
		}
		var targetID = FS.contentObj[FS.currentNodeNr].gotoIDBack;
		if (targetID!=undefined) {
			$("#prevButton").fadeIn();
		}
			/*if(activeCase.ID.type=="hub" || activeCase.ID.type=="sub")  {
				
				$("#prevButton").fadeIn();
			}*/

	}
function showMobileNext() {
		$("#mobileNextButton").fadeIn();
		$("#nextButton").fadeIn();
		$("#prevButton").fadeIn();
}

	function showPrev(showPrevButton) {
		
		if (FS.currentNodeNr>0 && showPrevButton>=0) {
			
			$("#prevButton").fadeIn();
		} else {
			$("#prevButton").hide();
		}
		$("#mobileNextButton").hide();
		$("#nextButton").hide();

	}

function checkBottomBar(bottombarref, forceReset) {
	var newBottomBar = bottombarref;
	forceReset = forceReset || false;

		if ( newBottomBar !=undefined) { //IF NODE HAS ITS OWN BOTTOMBAR
			if (FS.oldBottombar != newBottomBar) { //AND IT IS NOT THE SAME AS THE ONE VISIBLE 
				$(FS.oldBottombar).hide();
				$(newBottomBar).show();
				FS.oldBottombar =newBottomBar;
			}
		}
		else {
			newBottomBar ="#bottom-nav"; 
			if (FS.oldBottombar != newBottomBar || forceReset) {
				$(FS.oldBottombar).hide();
				
				if (activeCase.ID.bottombar !=undefined) {
					$(newBottomBar).html(activeCase.ID.bottombar);
					
				}
				else {
					$(newBottomBar).html('<div class="rootnav" onclick="FS.gotoID(\'huvudmeny\');">GÅ TILL HUVUDMENY</div>');
				}
				
				$(newBottomBar).show();
				FS.oldBottombar =newBottomBar;
			}
		}
		updateProgressBar();
		

}

	function updateProgressBar() {

			$(".progresstext").html("Sida " + (FS.currentNodeNr+1)+ " / " + maxNodeNr);
			var percent =((FS.currentNodeNr+1) /maxNodeNr *100);
			$(".progresspercent").css("width",""+percent+"%");

			
			var thumbwidth = (100 / maxNodeNr);
			$(".progresschapterthumbs").html("");
			for (var i = 0; i<maxNodeNr; i++) {

				$(".progresschapterthumbs").append("<div class='cthumb' onclick='FS.gotoID(\""+ FS.contentObj[i].ID+"\");' style='width:"+thumbwidth+"%'></div>");
			}
			
	}

	function startNode() { //when self.addContent have generated the new page based on "type", start the node if neccessary (listen to video events, start animations...)
	
		var showNextButton = FS.contentObj[FS.currentNodeNr].showNextButton || 0,
			showPrevButton =  FS.contentObj[FS.currentNodeNr].showPrevButton || 0,
			forceHideButton =  FS.contentObj[FS.currentNodeNr].forceHideNextButton || 0,
			currentNode = FS.currentNodeType;

		setTimeout(FS.resize(), 10);
		globalAnimation=0;
		
		//updateProgressBar();
	
		//window.clearTimeout(comicTimeout,);
		
		if (currentNode=="hub" || FS.currentNodeNr==0) {
			checkBottomBar(FS.contentObj[FS.currentNodeNr].bottombar, true);
		}
		else {
				checkBottomBar(FS.contentObj[FS.currentNodeNr].bottombar, false);
		}
	
		FS.checkArrows(FS.currentNodeNr, FS.contentObj[FS.currentNodeNr]);
	
		$.totalStorage('RESLUST_currentNodeNr',FS.currentNodeNr-1);
		
		FS.touchNavPossible =true;
		
		if (showAnimations) {
							TweenMax.to($(".backstretch"),1.5, {css:{"position":"fixed"}});
						}
		else {
							TweenMax.set($(".backstretch"), {css:{"position":"fixed"}});
		}
		
        $("#middle").addClass("middleoverlay");
     
        TweenMax.to($("#inner"),0.5, {opacity:1, x:0, delay:0});
		switch(currentNode) {
			case "info":
			case "energitjuvar":
			case "A":

							
					FS.startTextList();

					FS.startAudio();


			break;
			case "C":
			case "D":
			case "F":
					CLICKPOP.startNode();
					FS.startAudio();
                    	
			break;
			case "video_seq":
				 FS.startVideoListener();
				 if (showAnimations) {
					 TweenMax.to($(".backstretch"),1.5, {css:{"position":"fixed"}});
				}
				else {
					 TweenMax.set($(".backstretch"), {css:{"position":"fixed"}});
				}
				
			break;
			case "video":
				 FS.startSingleVideoListener();
				 if (showAnimations) {
							 TweenMax.to($(".backstretch"),1.5, {css:{"position":"fixed"}});
				}
				else {
					 TweenMax.set($(".backstretch"), {css:{"position":"fixed"}});
				}
			break;
			case "agent":
				 $("#agent").css("visibility","visible");
				animateText($("#agent").children(), FS.showNext);
			break;
			case "energitjuvar":
			//	$('img[usemap]').mapster({fillOpacity: 0, stroke: false});
			//	$("#prevButton").fadeIn();
				ET.startgame();

				FS.touchNavPossible =false;
			break;
			case "sorteringsspel":
				AS.startgame();
			
				FS.touchNavPossible =false;


			break;
			case "selectalternativegame":
			 	SA.startgame(); 
			 	setTimeout(function () { $(".svg-container").css("display","block"); }, 500);
				FS.touchNavPossible =false;
			break;
			case "hub":
				checkToUnlockChapters();
				//$('img[usemap]').mapster({fillOpacity: 0, stroke: false});
				
				//showMobileNext();
				//$("#prevButton").fadeIn();
				FS.touchNavPossible =false;
				if (forceHideButton == 1) {
					setTimeout(function(){
						 $("#nextButton").fadeOut();	
					$("#prevButton").fadeOut();	
						}, 500);
					
				}

				/*if (showNextButton<0) {
								$("#nextButton").hide();	
								
	
				}else {
					$("#nextButton").fadeIn();	
				} 
					*/
				//$("#prevButton").fadeOut();
			break;
			case "question": 
		
			if (showAnimations) {
				TweenMax.set(".sequenceAnswer", {transformPerspective:300, opacity:0, rotationX:90, force3D:true});
				TweenMax.staggerTo(".sequenceAnswer", 0.5, {rotationX:0, opacity:1}, 0.25);
			}
			else {
				
				TweenMax.set(".sequenceAnswer", {rotationX:0, opacity:1});
			}
				
				FS.touchNavLeftPossible	=false;

			break;
			case "piechart":
				showPieChart();			
			break;
			case "mark_question": 
				startMarkedQuestion();
				FS.touchNavLeftPossible	=false;

			break;
			case "int_question": 
					startIntQuestion();
				FS.touchNavLeftPossible	=false;

			break;
			case "freetext_question":
				startFreetextQuestion();
				FS.touchNavLeftPossible	=false;

			break;
			case "tradequestion":
				startNodeTradeQuestion();
			break;
			case "checklist": 
    			startCheckList();
   			break;
   			case "comicparallel": 
				 startComicParallel(comicsToFadeIn);
				 comicsToFadeIn =0;
			break;
			case "comicsingle":
				 startComicSingle(comicsToFadeIn);
				 comicsToFadeIn =0;
			break;
														/*NETWORK SPECIFIC NODES, REMOVE?
														case "comic":
															 showComics(comicsToFadeIn);
															 comicsToFadeIn =0;
														break;
														
														case "walloftext":
															  startWallOfText(FS.IDWallOfText);
															  FS.IDWallOfText=-1;
														break
														*/


		}

		//if(FS.currentNodeType!=("hub") && FS.currentNodeType!="video_seq" && FS.currentNodeType!="video") {
			if (showPrevButton>=0) { 
					$("#prevButton").show();
			}
			else {
					$("#prevButton").hide();
				}
			

			if (showNextButton>=0) {
			
				nextArrowTimeout = setTimeout(FS.showNext,parseInt(showNextButton));	
			}
			else {showPrev(showPrevButton);}
		}
	//}

	

	function onCompleteFadeoutNode(maindiv, nextNodeId, speed, animationType) {  //when user hits next or leaves a node, the content fades out, when fade is done, this function triggers
		var maindiv,
			nextIsHub;
            
            $("#inner").removeClass();  
        
			maindiv = maindiv = $('#main_div');

		maindiv.html(FS.addContent(nextNodeId)).promise().done(function(){
			$(".textnode").css("height", $(window).innerHeight() + "px" );	
			$(".textnode").css("width", ($(window).innerWidth()) + "px" );	

			$(".bubbleholder img").css("width", $(window).innerWidth() + "px" );	

			if (FS.contentObj[nextNodeId].type=="hub")  {
					
				FS.navigationDirection ="fade";
			}
		
			if (!FS.initComplete){ 
				FS.initComplete = true;
				TweenMax.set($("#nodeHeader"),{opacity:1});
				maindiv.fadeIn('slow');
				startNode();
			}else {
				
				switch (FS.navigationDirection) {//animationType) {
					/*case "up":
						TweenMax.fromTo (maindiv, speed, { css:{"top": "1000px", "opacity":"0"}}, {alpha:1, css:{"top": "0px", "opacity":"1"},  onComplete:startNode, ease:Quad.easeInOut});
					break;
					case "down":
						TweenMax.fromTo (maindiv, speed, {css:{"top": "-1000px", "opacity":"0"}}, {autoAlpha:1, css:{"top": "0px", "opacity":"1"},  onComplete:startNode, ease:Quad.easeInOut});
		
					break;
					case "zoom":
						TweenMax.fromTo (maindiv, speed, {autoAlpha:0, scaleX:0.5, scaleY:0.5},{autoAlpha:1, scaleX:1, scaleY:1, onComplete:startNode, ease:Quad.easeInOut});
			
					break;
					case "none": default:
						TweenMax.fromTo (maindiv, 0, {autoAlpha:0 },{autoAlpha:1, onComplete:startNode, ease:Quad.easeInOut});
			
					break;
					*/
					case "left":
						TweenMax.set($("#nodeHeader"),{opacity:1});
						if (showAnimations) {
								TweenMax.fromTo (maindiv, speed, { css:{"left": "20px", "opacity":"0"}}, {autoAlpha:1, css:{"left": "0px", "opacity":"1"},  onComplete:startNode, ease:Back.easeOut});
						}
						else {
								TweenMax.set (maindiv, {autoAlpha:1, css:{"left": "0px", "opacity":"1"}});
								startNode();
						}
						
					
					break;
					case "right":
						TweenMax.set($("#nodeHeader"),{opacity:1});
						if (showAnimations) {
							TweenMax.fromTo (maindiv, speed, { css:{"left": "-20px", "opacity":"0" }}, {autoAlpha:1, css:{"left": "0px", "opacity":"1"},  onComplete:startNode, ease:Back.easeOut});
						}
						else {
								TweenMax.set (maindiv, {autoAlpha:1, css:{"left": "0px", "opacity":"1"}});
								startNode();
						}
						
					break;
					
					case "fade":
                        console.log("will fade");
						TweenMax.set($("#nodeHeader"),{opacity:1});	
						maindiv.css("left","0");
						if (showAnimations) {
							TweenMax.fromTo (maindiv, speed, {css:{ "opacity":"0"} },{css:{ "opacity":"1"} ,onComplete:startNode, ease:Quad.easeInOut});
						}
						else {
							TweenMax.set (maindiv, {autoAlpha:1, css:{"opacity":"1"}});
							startNode();
						}
							
							
							
			
					break;
					case "keynotefade":

							var nodeheader = $("#nodeHeader")
							TweenMax.set(nodeheader.children(),{opacity:0});
							if (showAnimations) {
								TweenMax.to(nodeheader,0.05,{opacity:1, delay:0.05});
							
								TweenMax.to (nodeheader.children(), 0.4, {opacity:1 ,onComplete:startNode, ease:Quad.easeInOut});
							}
							else {
								TweenMax.set(nodeheader,{opacity:1});
							
								TweenMax.set (nodeheader.children(),  {opacity:1});
								startNode();
							}
							
			
					break;

				}
			}
		});
	}



	self.gotoNode = function(nextNodeId, direction) {   //goto a specific node, based on user interaction
		var oldNodeId, maindiv, speed;
		
		if (!interceptPrevButton) {
			 	
			if ((nextNodeId+direction == FS.currentNodeNr) && FS.initComplete) {
				return;
			}
		}
		if(globalAnimation==1) return;
		globalAnimation =1;
		interceptPrevButton = false;
		 removeVideoListener();

		speed=0.7;
		maindiv = $('#main_div');

			FS.killAudio();

		oldNodeId = currentNodeNr;
	
		if (oldNodeId == undefined) {
			
			oldNodeId =  nextNodeId;
		}
		

	   	FS.currentSequence = 0;
	 
		FS.nrOfVideos = 0;
		
	   	FS.currentNodeNr = nextNodeId + direction;
	   	updateProgressBar();

	  /* 	switch (direction) {

	   		case 0: //interceptPrevButton, go to same node, since it is a twostep node with back button
	   			$.totalStorage('currentNodeNr', String(oldNodeId));
	   		break;
	   		case -1:

	   			$.totalStorage('currentNodeNr', String(FS.currentNodeNr)); //FS.currentNodeNr
	   		break;
		   case 1:
		   		$.totalStorage('currentNodeNr', String(nextNodeId));
		   	break;
		}
		*/
		try{
	  
			//ga('send', 'event', 'startNode',  activeCase.ID.text, FS.contentObj[FS.currentNodeNr].ID);
		
		 }catch(err) {}
		//REMOVE POSSIBILTY TO NAVIGATE FREELY
		//	FS.checkArrows(FS.currentNodeNr);
		FS.checkDebugArrows(FS.currentNodeNr);
		
		if(direction >0) {
			
				/*if (FS.contentObj[oldNodeId].callbackNode!=undefined) {
								

	  						
	  							//var nextNodeObject = findNextTargetNode(FS.contentObj[nextNodeId].callbackNode);
	  							exitChapter(nextNodeObject[0],nextNodeObject[1]);	
	  							return;
	  						

				}
			*/
			try
 		 	{

  				if (FS.contentObj[oldNodeId].callback!=undefined) {
  						
  					if (FS.contentObj[oldNodeId].callback=="OUTRO") {
  						$(".svg-container").remove();
  						if (showAnimations) {
							TweenMax.to($("#main_div"),1,{css:{"opacity":"0"}, onComplete:FS.exitGame});
						}
						else {
							TweenMax.set($("#main_div"),{css:{"opacity":"0"}});
							FS.exitGame();
						}
  						
  						return;
  						
  					} 
  					else {
  				 		
						var nodeToGo = -1;
						
						if (FS.contentObj[nextNodeId].callbackNode !=undefined) {
							nodeToGo=FS.contentObj[oldNodeId].callbackNode;
						}
  						exitChapter(FS.contentObj[nextNodeId].callback,nodeToGo);
  					
  						return;	
  					}	
  				
  				};
		 	}catch(err) {}
	
		}

		if (FS.DEBUG == "true") $("#nodeNrDebug").html("Node " + FS.contentObj[FS.currentNodeNr].ID);

		 clearTimeout(nextArrowTimeout);
		 clearTimeout(animateTextTimeout);

		emptyWallTweens();
		
		
			
		try {
		var nType = FS.contentObj[FS.currentNodeNr].type;
		}
		catch(err) {
			FS.resetProgress();
		}



		    		
		

		if (!FS.initComplete){  
			
			maindiv.hide();
			FS.navigationDirection ="keynotefade";	
			onCompleteFadeoutNode(maindiv, FS.currentNodeNr , speed,"keynotefade");
			updateProgressBar();

		}else {
			
			//$("#nextButton").fadeOut();	
			//$("#prevButton").fadeOut();	
			$("#mobileNextButton").hide();
			
			var animationType;
			var tmpDirection = FS.navigationDirection;
			animationType = tmpDirection;
		

		
		
			if (tmpDirection == "left" && FS.contentObj[nextNodeId].animationForward!=undefined) {

				animationType =FS.contentObj[nextNodeId].animationForward;
			}
			if (tmpDirection == "right" && FS.contentObj[nextNodeId].animationBack!=undefined) {
				animationType =FS.contentObj[nextNodeId].animationBack;

			}
				if (animationType == "keynotefade") {

					FS.navigationDirection = animationType;
				}
            $("#middle").removeClass("middleoverlay");

            
            
			switch (animationType) {
			/*	case "up":
					TweenMax.to (maindiv, speed, { css:{"top": "-1000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
				case "down":
					TweenMax.to (maindiv, speed, { css:{"top": "1000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
			*/	case "left":

					if (showAnimations) {
						TweenMax.to (maindiv, speed, {css:{"left": "-2000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
						   TweenMax.to($("#inner"),0.5, {opacity:0, x:10, delay:0});
					}
					else {
						TweenMax.set (maindiv, {css:{"left": "-2000px", "opacity":"0"}});
						onCompleteFadeoutNode(maindiv, FS.currentNodeNr , speed, animationType);
					}
						break;
				case "right":
					if (showAnimations) {
						   TweenMax.to($("#inner"),0.5, {opacity:0, x:-10, delay:0});
						TweenMax.to (maindiv, speed, { css:{"left": "2000px", "opacity":"0"}, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
					}
					else {
						TweenMax.set (maindiv, {css:{"left": "2000px", "opacity":"0"}});
						onCompleteFadeoutNode(maindiv, FS.currentNodeNr , speed, animationType);
					}
					
				break;
			/*	case "zoom":
					TweenMax.to (maindiv, speed, {autoAlpha:0, scaleX:1.5, scaleY:1.5, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
			*/	break;
				case "fade":
					if (showAnimations) {
						TweenMax.to (maindiv, speed, {alpha:0, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
					}
					else {
						TweenMax.set (maindiv, {alpha:0});
						onCompleteFadeoutNode(maindiv, FS.currentNodeNr , speed, animationType);
					}
					
				break;
				case "keynotefade":
				console.log("keynotefade");
					if (showAnimations) {
						TweenMax.to ($("#nodeHeader").children(), 0, {opacity:0, onComplete:onCompleteFadeoutNode, onCompleteParams:[$("nodeHeader"), FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
					}
					else {
						TweenMax.set ($("#nodeHeader").children(), {opacity:0});
						onCompleteFadeoutNode($("nodeHeader"), FS.currentNodeNr , speed, animationType);
					}
					
				break;
			/*	case "none": default:
					TweenMax.to (maindiv, 0, {autoAlpha:0, onComplete:onCompleteFadeoutNode, onCompleteParams:[maindiv, FS.currentNodeNr , speed, animationType],  ease:Quad.easeInOut});
				break;
			*/
			}


		}
		setupBackground(FS.currentNodeNr);

	}

	
	self.resize = function() {  //when user resize the window, make sure everything stays where it should be
		var inner =  $('#inner');
		var wind =  $(window);
		var scrollwidth=17;
		var aspect = wind.height() / wind.width();
		

/*
			var canvas = $("#outer");
			var scaleX = canvas.width / window.innerWidth;
			var scaleY = canvas.height / window.innerHeight;
			var scaleToFit = Math.min(scaleX, scaleY);
			console.log(scaleToFit);
			stage.style.transformOrigin = "0 0";
			stage.style.transform = "scale("+scaleToFit+")";
			return;
*//*

		if (aspect <(9/16)) { //if wider than 16:9 
				//console.log("wider thant 16:9 " +wind.height());
				$('.videowrapper iframe').css('height', function( index ) {
					return wind.height()-187;
				});
				$('.videowrapper iframe').css('width', function( index ) {
					return (1/(9/16)) * (wind.height()-187) -1;
				});
				if ($('.videowrapper').length) {
					inner.addClass('inner_sixteennine');
					$('.videowrapper iframe').addClass('iframe_sixteennine');
					$('.videowrapper article').addClass('article_sixteennine');
				}
				else {
					inner.removeClass('inner_sixteennine');
				$('.videowrapper iframe').removeClass('iframe_sixteennine');
				$('.videowrapper article').removeClass('article_sixteennine');
				}
				//inner.css('zoom', aspect);
					
		}
		else {
				inner.removeClass('inner_sixteennine');
				$('.videowrapper iframe').removeClass('iframe_sixteennine');
				$('.videowrapper article').removeClass('article_sixteennine');
				$('.videowrapper iframe').css('max-width', $('.videowrapper').innerWidth()+'px');
				$('.videowrapper iframe').css('max-height', $('.videowrapper').innerHeight() -20+'px');
				//inner.css("overflow-y","auto");

			
		}
		*/
		inner.css('max-height', (wind.height())+'px');
		//
	
			if (showAnimations) {
					TweenMax.to($('#prevButton'), 0.125,{css:{"left": "0px"}});		
			}
			else {
				TweenMax.set($('#prevButton'),{css:{"left": "0px"}});
			}
	

		
			
	

		
	//	if (inner.height() > $(window).height()) {
			
			//$("#innershowmore").show();
			if (navigator.userAgent.match(/webkit/i)) {
			 		//scrollwidth=8;
			 		scrollwidth=0;
    		}
    			if (showAnimations) {
					TweenMax.to($('#nextButton'), 0.125,{css:{"right": scrollwidth + "px"}});
				}
				else {
					TweenMax.set($('#nextButton'), {css:{"right": scrollwidth + "px"}});		
				}
    /*		
    	}else {
			inner.css("overflow-y","hidden");
			//$("#innershowmore").hide();
			if (showAnimations) {
						TweenMax.to($('#nextButton'), 0.125,{css:{"right":"0px"}});	
			}
			else {
				TweenMax.set($('#nextButton'), {css:{"right":"0px"}});
			}
			
		}
	*/
		

	}




	self.checkArrows = function(currentNodeNr, myObj) {  //check if next or prev button is available, for instance don't show prev button on first node
			if (currentNodeNr<_.size(activeCase.nodes.content)-1 || FS.contentObj[currentNodeNr].gotoID!=undefined ) {
 			
 				$("#nextButton").fadeIn();
 					FS.touchNavLeftPossible =true;
 			}
 			else{
 			
 				FS.touchNavLeftPossible =false;
 				$("#nextButton").hide();
 			}

 	 			
 			if(currentNodeNr==0 && myObj.ID.typ!="sub" && FS.contentObj[currentNodeNr].gotoIDBack==undefined) {
 				$("#prevButton").hide();
 				FS.touchNavRightPossible =false;
 				
 			}else{
 					FS.touchNavRightPossible =true;
 					$("#prevButton").fadeIn();
 			}
 			

	}


	self.checkDebugArrows = function(currentNodeNr) {  //showing the debug-arrows
			if (currentNodeNr<_.size(activeCase.nodes.content)-1) {
 				$("#debugNextButton").fadeIn();
 			}
 			else{
 				$("#debugNextButton").hide();
 			}

 	 			
 			if(currentNodeNr==0) {
 				$("#debugPrevButton").hide();
 				
 			}else{
 					$("#debugPrevButton").fadeIn();
 			}
 			

	}


	self.preloadImages = function() {  //preload all images specified in a json-file. Put them in an invisible div so when needed the images are available
		var nrOfImages = _.size(activeCase.preload.images);
		if (activeCase.preload.images[0].url=="") return;
		var prelObj = $("#js-preload");
		var res ="";

		for (var i=0; i<nrOfImages; i++) {
			if (i>0) res +=", ";
			res +="url('img/"+ activeCase.preload.images[i].url+"')";

		}
		prelObj.css("background-image",res);
	}

	self.exitGame = function() {
		FS.resetProgress();
		ga('send', 'event', 'training_complete',  'completed training successfully' );
		window.location = "outro.html";
	}
	
	self.gotoID = function(targetID) {
		if (targetID=="OUTRO") {
			FS.exitGame();
			return;
		}
		
		
		var nextNodeObject = FS.findNextTargetNode(targetID);

		exitChapter(nextNodeObject[0],nextNodeObject[1]-1);
		//FS.gotoNode(FS.currentNodeNr, 1);

	}

	self.findNextTargetNode = function(searchForID) {
		var foundID = false;
		var nextNodeObject =[];
					
		 			for (var i = 0; i<availableCases.length; i++) {
		 				if (foundID) break;
		 				
		 				var data = eval(availableCases[i]).nodes.content;
		 				for (var j = 0; j<data.length; j++) {
		 					
	 						if(data[j].ID == searchForID) {
	 							nextNodeObject.push(availableCases[i]);
	 							nextNodeObject.push(j);
	 							foundID = true;

	 							return nextNodeObject;
	 							break;
	 						}
	 					
				

		 				}
							
		 			}

	}
	self.toggleanimation = function() {
		if (showAnimations) {
			showAnimations = false;
			$(".toggleanimation").html("Slå på animationer");
		}
		else {
			showAnimations = true;
			$(".toggleanimation").html("Stäng av animationer");
		}

	}
//END OF: GENERAL METHODS-------------------------------------------------------------------------------------------------------------------














//START APPLICATION -------------------------------------------------------------------------------------------------------------------------



	self.startCase = function(newActiveCase, startNode) {  //start a new case, that is a new json-file. Triggers on start of the application 
														   //and when a user reached the last object in a jsonfile and the app follows the "callback"-parameter.
			

		activeCase = eval(newActiveCase);
		globalAnimation=0;
		caseNodeId = 0;
		
		nrOfVideos = 0;
		currentNodeType= "";
		currentSequence = 0;
			if (showAnimations) {
				TweenMax.to($("#main_div"),1,{css:{"opacity":"1"}});			
			}
			else {
				TweenMax.set($("#main_div"),{css:{"opacity":"1"}});
			}
		
	
		FS.initComplete = false;
		//	IDWallOfText = -1;
		arrayOfWallTweens = [];
		currentlyClickedWallText=-1;

		FS.contentObj = activeCase.nodes.content;

		currentNodeNr = startNode;
		if ($.totalStorage('RESLUST_currentNodeNr')!=undefined)   currentNodeNr =  parseFloat($.totalStorage('RESLUST_currentNodeNr'));

	
		maxNodeNr = activeCase.nodes.content.length;

		//$(".backstretch").remove();
	
		FS.preloadImages();

	
		//ga('send', 'event', 'startcase',  activeCase.ID.text );


			//Store progress
		
		$.totalStorage('RESLUST_storeCase', activeCase.ID.text);

		
		
		
		$("html").addClass(activeCase.ID.text);
		
	
		var userAgent = window.navigator.userAgent;

		if (navigator.userAgent.indexOf('Safari') != -1 && 
    			navigator.userAgent.indexOf('Chrome') == -1) {
			if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
  			 $("html").addClass("ios");
		}
		else {
		   $("html").addClass("safari");

				
		

		}
       		
  		  }


		FS.gotoNode(currentNodeNr,1);
	}


										
	self.startMain = function() { //THIS IS THE MAIN FUNCTION. IT ALL STARTS HERE
								 // this function triggers by the html-file when all js-files are loaded and jquery/gumby is ready
		
				//$("#prevButton").hide();
			
			localHostTrue = false;
			if (document.location.hostname == "127.0.0.1" || document.location.hostname =="localhost") {
				localHostTrue = true; //Used on local debugging when PHP is not available
			}

			
			//SET TO TRUE TO ENABLE DEBUG MODE FOR FEEDBACK
			DEBUG = "false";
				if (params.debug ==1) DEBUG = "true";

				if (DEBUG == "false") {
					$("#case-nav-wrapper").hide();
					$("#debugNextButton").hide();
					$("#debugPrevButton").hide();
				}
				else {
					$("#case-nav-wrapper").css("display","block");
				}

				GAMEMODE = params.mode;
				if(GAMEMODE == undefined) GAMEMODE=0;
			

			//BV = new $.BigVideo();
			//BV.init();
		 	
			var testKey = 'qeTest', storage = window.sessionStorage; try { // Try and catch quota exceeded errors 
				storage.setItem(testKey, '1'); storage.removeItem(testKey); } 
				catch (error) { if (error.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) alert('Det verkar som att du surfar i Privat läge. Stäng av detta för att kunna ta del av innehållet på denna sida.'); else throw error; }


			FS.globalAnimation = 0;


			if($.totalStorage('RESLUST_unlockedChapters')==undefined) {
				FS.unlockedChapters = new Array();
				FS.unlockedChapters.length=0;
				}

			else FS.unlockedChapters = $.totalStorage('RESLUST_unlockedChapters');
			

			if($.totalStorage('RESLUST_gameMode')!=GAMEMODE) {
			 	//new game mode
			 	$.totalStorage('RESLUST_gameMode',  GAMEMODE);
				FS.resetProgress();
			 	
			}

			if (params.unlock != undefined) {
					unlockChapters(parseInt(params.unlock));
			}

			//TODO REMOVE
			//FS.resetProgress();  //clear localstorage for Debug purpose
			var userid = $.totalStorage('RESLUST_ID');
			if (userid==undefined) {
					$.totalStorage('RESLUST_ID', FS.uniqueid());
		
			}
		
			storeCase = $.totalStorage('RESLUST_storeCase');
			
			if (storeCase==undefined || storeCase=='') {
				storeCase = "Case1a";
				if (parseInt(GAMEMODE) ==1) storeCase ="Case1a";	
				if (parseInt(GAMEMODE) ==2) storeCase ="Case2";
				if (parseInt(GAMEMODE) ==3) storeCase ="Case3";		
				if (parseInt(GAMEMODE) ==4) storeCase ="Case3_HI_Alex";		
				if (parseInt(GAMEMODE) ==6) storeCase ="Case6_HI_Robin";		
				if (parseInt(GAMEMODE) ==7) storeCase ="Case7_HI_Kim";		
				
				 
			}

		
			FS.startCase(storeCase);
	//		FS.startCase(CaseIntro);
			if($("html").hasClass("safari")) {
					showAnimations = false;
				$(".toggleanimation").html("Slå på animationer");
				
			}
			if(params.gotoid !=undefined) {
				FS.gotoID(params.gotoid);
			}
			
	










// NAVIGATION AND EVENT HANDLERS-----------------------------------------------------------------------------------------------------------------------------
			  $(document).keydown(checkKey);

				function checkKey(e) {

				    e = e || window.event;
				 
				     if (e.keyCode == '27') {
				        // esc 
				        FS.gotoID("huvudmeny");
				     }

				    if (e.keyCode == '38') {
				        // up arrow
				    }
				    else if (e.keyCode == '40') {
				        // down arrow
				    }
				    else if (e.keyCode == '37') {
				    	
				     		 $("#prevButton:visible").trigger( "click" );
				     		
				    }
				    else if (e.keyCode == '39') {
				    
				    	
				    		$("#nextButton:visible").trigger( "click" );
				    
				    	
				    }

				}

			$(document).on('click', '#nextButton', function() {
				
					if ($(".modal_overlay").css('display') != 'block' ){
						if (showAnimations) {
							TweenMax.to($('#nextButton'), 0.25,{css:{"right": "-65px"}});
						}
						else {
							TweenMax.set($('#nextButton'), {css:{"right": "-65px"}});
						}
			 			
			 			FS.navigationDirection = "left";
			 			var targetID = FS.contentObj[FS.currentNodeNr].gotoID;
			 			if (targetID!=undefined) {
			 				FS.gotoID(targetID);
			 				return;
			 			}
			 			FS.gotoNode(FS.currentNodeNr,1);
			 		}
		 		
		 	
			});

			$(document).on('click', '#prevButton', function() {

					if ($(".modal_overlay").css('display') != 'block' ){
						if (showAnimations) {
							TweenMax.to($('#prevButton'), 0.25,{css:{"left": "-65px"}});
						}
						else {
							TweenMax.set($('#prevButton'), {css:{"left": "-65px"}});
						}
						
				 			FS.navigationDirection = "right";
				 		
				 			var targetID = FS.contentObj[FS.currentNodeNr].gotoIDBack;
				 			if (targetID!=undefined) {
				 				FS.gotoID(targetID);
				 				return;
				 			}
							/*if(activeCase.ID.type=="hub" || activeCase.ID.type=="sub" && FS.currentNodeNr==0) {
							
								exitChapter(activeCase.ID.prevcase,activeCase.ID.lastNodeNr);
							}
							else {*/
				 			 if (interceptPrevButton) {
				 			 	
				 			 	FS.gotoNode(FS.currentNodeNr,0);	
				 			 } 	
							else {
								
								FS.gotoNode(FS.currentNodeNr,-1);
								
								}
				//	}
			}
		 	
			});
			$(document).on('click', '#mobileNextButton', function() {
		 			FS.navigationDirection = "fade";
		 	
		 			
		 			
		 			FS.gotoNode(FS.currentNodeNr,1);

		 		
		 	
			});
			
			$(document).on('click', '#debugNextButton', function() {
		 			
		 			FS.gotoNode(FS.currentNodeNr,1);
		 			

		 		
		 	
			});
			$(document).on('click', '#debugPrevButton', function() {
					 		
		 			FS.gotoNode(FS.currentNodeNr,-1);

		 	
			});

			
			$("body").on("touchmove", function(event) {
				//return; //remove this to allow touchnNavPossible
				//event.preventDefault();
				var new_touchx = event.originalEvent.touches[0].pageX;
				 



			   	 if (FS.touchNavPossible) { 
			   	 	
			       	TweenMax.to($("#main_div"),1,{x:new_touchx - FS.touchx, ease: Back.easeOut.config(1.7)});
			     	TweenMax.to($(".backstretch"),1,{x: -(new_touchx - FS.touchx)/20,ease: Back.easeOut.config(1.7)});
			       
			       if ((new_touchx - FS.touchx) <- 75 && FS.touchNavLeftPossible){
			       		$("body").trigger('touchend');
			       			TweenMax.to($("#main_div"),0.25,{x:0, delay:1});
			     	TweenMax.to($(".backstretch"),0.25,{x: 0,delay:1});
			       
			      FS.touchNavLeftPossible=false;
			       	FS.touchx = new_touchx;

			     	
			       	
			       			FS.navigationDirection = "left";
					       var targetID = FS.contentObj[FS.currentNodeNr].gotoID;
				 			if (targetID!=undefined) {
				 				FS.gotoID(targetID);
				 				return;
				 			}

				 			FS.gotoNode(FS.currentNodeNr,1);
				 			
   				
				     

				    }
				    else if ((new_touchx  - FS.touchx) >75 && FS.touchNavRightPossible){
				    	$("body").trigger('touchend');
				    		TweenMax.to($("#main_div"),0.25,{x:0, delay:1});
			     	TweenMax.to($(".backstretch"),0.25,{x: 0,delay:1});
				    	 FS.touchNavRightPossible=false;
				       	FS.navigationDirection = "right";
				       	FS.touchx = new_touchx;
				       	 var targetID = FS.contentObj[FS.currentNodeNr].gotoIDBack;
				 			if (targetID!=undefined) {
				 				FS.gotoID(targetID);
				 				return;
				 			}
						 if (interceptPrevButton) {
		 			 	
		 				 	FS.gotoNode(FS.currentNodeNr,0);	
		 			 	} 	
						else {
						
							FS.gotoNode(FS.currentNodeNr,-1);
							
						}
					
				    }	 
				   	
				}
				
			    
			});
			$("body").on("touchend", function(event) {
				TweenMax.to($("#main_div"),1,{x: 0,ease: Back.easeOut.config(1.7)});
				TweenMax.to($(".backstretch"),1,{x: 0,ease: Back.easeOut.config(1.7)});
			});

			$("body").on("touchstart", function(event) {
				
				 if (FS.touchNavPossible) { 
				 	 FS.touchx = event.originalEvent.touches[0].pageX;
   					 FS.touchy = event.originalEvent.touches[0].pageY;
				 }
				 else {
				 	//event.preventDefault();
				 }
			});

			
			$("#toggleMenu, .page-menu").not(".page-menu a").on("click", function(event) {
				$("#page-menu-container").toggleClass("animate");



			}); 
		



			$(window).resize(function() {
				FS.resize();

			});
		
			jQuery.fn.hasScrollBar = function() {
			        return this.get(0).scrollHeight > this.height();
			}
			

			jQuery.fn.center = function () {
				// setTimeout ( function () {

			    this.css("position","fixed");
			   // this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2)) + 10 + "px");
			   // this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2)) + "px");
			//},10);
			 
			 /* this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
			                                                $(window).scrollTop()) + "px");
			    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
			                                                $(window).scrollLeft()) + "px");
			   */  
			  return this;

	
			
			}


		
	
//END OF: NAVIGATION AND EVENT HANDLERS-----------------------------------------------------------------------------------------------------------------------------

}


	return self;

})({});

	//get the querystring params and store them in js-variable. Can be used to debug, jump to specific json-files depending on project
 
	var delay = ( function() {
	    var timer = 0;
	    return function(callback, ms) {
	        clearTimeout (timer);
	        timer = setTimeout(callback, ms);
	    };
	})();

 var prmstr = window.location.search.substr(1);
    var prmarr = prmstr.split ("&");
    var params = {};

    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }


 

