/*global $, jQuery, _, TweenMax, FS*/
//Select alternative (välj resa)
var SA = (function(self){
	"use strict";
	

	var nodeId,
	 	maxAlternatives,
	 	AlternativesToCollect,
	 	arrayOfAlternatives ,
	 	//arrayOfSortTargets = [],
	 	sortImgageStartPointX,
	 	sortImgageStartPointY,
	 	bgZoom,
		nrOfAvailableAlternatives,
		backgroundImage,
		gameIsInitiated = false;


	self.addGame = function(nId) {
			var res ="", 
			nrOfHitareas,
			contentJSONObject =FS.contentObj[nId],
			browserWidth = $(window).width() *0.95,
			browserHeight =$(window).height()*0.95,
			margintop,
			zoomFactor,
			backgroundImageAspectRatio = contentJSONObject.imageheight / contentJSONObject.imagewidth;


			backgroundImage = contentJSONObject.hubimage;
			
			sortImgageStartPointX = browserWidth/2 -75;
		 	sortImgageStartPointY = -browserHeight*0.05;

			if(!gameIsInitiated) {
	 		
		 		
			
				AlternativesToCollect = [];
				arrayOfAlternatives = [];
		 		bgZoom =contentJSONObject.imagewidth;
				SA.nodeId = nId;
				nrOfAvailableAlternatives = contentJSONObject.alternatives.length;
				maxAlternatives = parseInt(contentJSONObject.nrOfCorrectAlternatives);
				for (var n=0; n<nrOfAvailableAlternatives; n++) {
					arrayOfAlternatives.push(contentJSONObject.alternatives[n]);
				}

			}
			

			
		
			AlternativesToCollect = _.sample(arrayOfAlternatives,maxAlternatives);	
			
			sortImgageStartPointY += browserWidth/2;
			
			zoomFactor =  browserHeight / browserWidth;
			if (zoomFactor<backgroundImageAspectRatio) {
				browserWidth = browserWidth *zoomFactor/backgroundImageAspectRatio;		
			}  
		

			var contentJSONObject2 = contentJSONObject.chapters;
			nrOfHitareas = _.size(contentJSONObject2);
			
			


			res+='<div id="modalenergi_overlay" class="modal_overlay" style="width:100%; display:none; margin:0 auto;"></div>';
			for (var i=0; i<nrOfHitareas; i++) {		
				res+='<div id="modal_text_'+i+'" class="modal_text"><div class="modalheader"><h1>'+contentJSONObject2[i].textcontent[0].header+'</h1><img class="closemodal" src="img/closemodal.png"/></div><div class="modalcontent">'+contentJSONObject2[i].textcontent[0].contenttext+'</div></div>';
			}		
			

			res += "<div class='chapterWrapper desktop' style='width:"+browserWidth+"px;' >";
				res +="<div id='scorekeeper'><div class='innerscore'>0 / "+maxAlternatives+"</div></div>";
				res+='<div id="modal_text_end" class="modal_text"><div class="modalheader"><h1>'+contentJSONObject.gametexts[0].header+'</h1></div><div class="modalcontent">'+contentJSONObject.gametexts[0].completetext+'</div><a class="modalexit" OnClick="SA.exitGame(); return false;">OK</a></div>';
				
		
					res +="<img id='hitareas' src='img/"+backgroundImage+"' BORDER=0  style='z-index:0; opacity:1'/>";
					res +='<div id="selectgamecontent"><div class="selectgametext">'+arrayOfAlternatives[0].header+'</div><div class="selectgameimage"><img id="iconholder" src="img/'+arrayOfAlternatives[0].icon+'"/></div></div>';
					res+='<div class="svg-container">';
						res+='<svg version="1.1" viewBox="0 0 '+contentJSONObject.imagewidth+' '+contentJSONObject.imageheight+'" preserveAspectRatio="xMinYMin meet" class="svg-content">';
						//	res+='<defs><filter id="blur" x="-100%" y="-100%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="70" /></filter></defs>';
							for (i=0; i<nrOfHitareas; i++) {
								res+='<polygon id="'+contentJSONObject2[i].textcontent[0].header+'"  class="dropzone" style="fill:lime; fill-opacity:0.5" onclick="SA.setOverlay('+i+'); return false;" points="'+contentJSONObject2[i].coords+'"/>'; 
									// filter="url(#blur)"
							}
						res+='</svg>';
					res+='</div>';

		return res;
	}

	self.setOverlay = function(overlayID) {
		
		var mousex = event.clientX,
			mousey = event.clientY,
			browserWidth = $(window).width(),
			browserHeight = browserHeight =$(window).height(),
			modal = $("#modal_text_"+overlayID),
			xpos,
			ypos;
			
		if (mousex > browserWidth/2) {
			xpos = mousex-modal.width() - 50;
		}
		else {
				xpos =mousex +10;
		}

		if (mousey > browserHeight/2) {
			ypos = mousey-modal.height() - 10;
		}
		else {
				ypos = mousey -modal.height();
					if (ypos<20) ypos=20;
		}

		$(".modal_overlay").fadeOut();
		$(".modal_text").fadeOut();
		try {
			event.preventDefault();
		}
		catch(err) {}

		modal.css({top: ypos, left: xpos});
		
		$("#modalenergi_overlay").fadeIn();
		
		modal.fadeIn();

		
		$("#modalenergi_overlay").on("click", function(){
				modal.fadeOut();
				$(this).fadeOut();
		});

		return false;
	}


	self.sortSuccess = function () {
			var modal = $("#modal_text_end");
			

			modal.css({top: "50%", left: "50%", "margin-left": -modal.width()/2, "margin-top":-modal.height()});
			$(".modal_text").fadeOut();
			modal.fadeIn();
	}

	self.exitGame = function() {
		AlternativesToCollect = [];
		if (FS.contentObj[FS.currentNodeNr].gotoID!=undefined) { 
				  	 		FS.gotoID(FS.contentObj[FS.currentNodeNr].gotoID);
				
		}else {
			FS.respondToHUB(0);
		}

	}

	self.setupSortObject = function() {
		$("#scorekeeper .innerscore").text(maxAlternatives - parseInt(AlternativesToCollect.length)+" / " + maxAlternatives);
		var mc = $("#scorekeeper");
		
		TweenMax.from(mc, 0.25, {css:{scale:0.05, opacity:0}});

		if(AlternativesToCollect.length==0) {
			SA.sortSuccess();
			return;
		} 

		 var sortImage= $('#sortobject img'),
		   target = $('#sortobject');


		   console.log("setupSortObject");
	 		sortImage.attr("src","img/"+AlternativesToCollect[0].image);
        			
            		TweenMax.to(target, 0, {x:sortImgageStartPointX, y:sortImgageStartPointY, ease:Expo.easeOut});
            	   	
            	   	target.attr('data-x', sortImgageStartPointX);
			      	target.attr('data-y', sortImgageStartPointY);

					target.css({"z-index": 300}).show("fast");
	}


	self.startgame = function() {
		var hitareas = $('#hitareas'),
        sortobject = $('#sortobject');
    
    	
       
   	    if (!gameIsInitiated) {
   	    	

			hitareas.one("load", function(){
				
        	 	 bgZoom = this.width/bgZoom; 
        	 	 sortobject.find("img").css("width",bgZoom*100 + "%");
        	  	 SA.setupSortObject();
			}).each(function() {
				if(this.complete) $(this).load();
			});

			


           
   	    	//SET UP DRAG OBJECT
	       interact("#sortobject")
				.draggable({
					inertia:true,
					enabled:true,
					restrict: {
			      restriction: '#hitareas',
			    }
					
				})
				.on('dragmove', function(event){
						
					         var target = event.target,
					          // keep the dragged position in the data-x/data-y attributes
					          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
					          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
					          if (x>0 && x<$(window).width()*0.9 && y>0 && y<$(window).height()*0.9 -100) {
					          
						          TweenMax.to($("#sortobject"),0.5, {x:x, y:y, force3D:true, ease:Back.easeOut });
							      // update the posiion attributes
							      target.setAttribute('data-x', x);
							      target.setAttribute('data-y', y);
						      }
					  
					
				})
				.on('dragstart', function(event) {
					var target = event.target;
					$("#sortobject").css('z-index', 5);
					$(".modal_overlay").fadeOut();
					$(".modal_text").fadeOut();
				})
				.on('dragend', function(event){
					
					$("#sortobject").css('z-index', 20);
					
				});
			/*-------------------------------------------------*/
			}
			else {

        	 	 	 sortobject.find("img").css("width",bgZoom*100 + "%");
					 SA.setupSortObject();
			
			}
			gameIsInitiated=true;
				
			/*DROP ZONE SETUP -----------------------------------*/


	       	interact(".dropzone")
	       		.dropzone ({

						  ondropactivate: function (event) {
						    // add active dropzone feedback
						    event.target.classList.add('drop-active');
						  },
						  ondragenter: function (event) {
						    var draggableElement = event.relatedTarget,
						        dropzoneElement = event.target;

						    // feedback the possibility of a drop
						    dropzoneElement.classList.add('drop-target');
						    draggableElement.classList.add('can-drop');
						  },
						  ondragleave: function (event) {
						    // remove the drop feedback style
						    event.target.classList.remove('drop-target');
						    event.relatedTarget.classList.remove('can-drop');
						  },
						  ondrop: function (event) {
						  	    
	                			var landing = event.target.id;
	                			if (landing == AlternativesToCollect[0].targetAreaID) {
	               				 
	               				  	sortobject.hide('slow', SA.setupSortObject);
	                				AlternativesToCollect.shift();
	                
	           					}
	            				else if(landing) {
	            					
	            					var x=sortImgageStartPointX,
	            					y=sortImgageStartPointY,
	            					target = $("#sortobject");
	            					TweenMax.to(target, 0.5, {x:x, y:y,force3D:true, ease:Expo.easeOut});
	            					target.attr('data-x', x);
				      				target.attr('data-y', y);
	            		   		}


	                		},
						  ondropdeactivate: function (event) {
						    // remove active dropzone feedback
						    event.target.classList.remove('drop-active');
						    event.target.classList.remove('drop-target');
						  }

	       

	      	 });


	}
 

	return self;

})({});