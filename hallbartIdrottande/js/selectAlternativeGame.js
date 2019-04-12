/*global $, jQuery, _, TweenMax, FS*/
//Select alternative (välj resa)
var SA = (function(self){
	"use strict";
	

	var nodeId,
	 	maxAlternatives,
	 	draggableObjectsToCollect,
	 	arrayOfAlternatives ,
	 	//arrayOfSortTargets = [],
	 	sortImgageStartPointX,
	 	sortImgageStartPointY,
	 	bgZoom,
		nrOfAvailableAlternatives,
		backgroundImage,
		IEtrue = false,
		

		gameIsInitiated = false;


	self.addGame = function(nId) {
			var res ="", 
			nrOfHitareas,
			contentJSONObject =FS.contentObj[nId],
			browserWidth = $(window).width() ,
			browserHeight =$(window).height() - $("#bottombar-main").innerHeight() - 40,
			margintop,
			zoomFactor,
			backgroundImageAspectRatio = contentJSONObject.imageheight / contentJSONObject.imagewidth;

			IEtrue =  (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject")) || ("ActiveXObject" in window);

			backgroundImage = contentJSONObject.hubimage;
			
				
			if (contentJSONObject.dragObjectStartX != undefined ) {
			
					
					sortImgageStartPointX = contentJSONObject.dragObjectStartX;
				
			}else {
				sortImgageStartPointX = browserWidth/2 -75;
		 		
			}
			
			if (contentJSONObject.dragObjectStartY !=undefined) {
				sortImgageStartPointY = contentJSONObject.dragObjectStartY;
			}else {
				sortImgageStartPointY =  -browserHeight*0.15;
		 		
			}

			

			
			if(!gameIsInitiated) {
	 		
		 		
			
				draggableObjectsToCollect = [];
				arrayOfAlternatives = [];
		 		bgZoom =contentJSONObject.imagewidth;
				SA.nodeId = nId;
				nrOfAvailableAlternatives = contentJSONObject.arrayOfAlternatives.length;
				maxAlternatives = parseInt(contentJSONObject.nrOfCorrectarrayOfAlternatives);
				for (var n=0; n<nrOfAvailableAlternatives; n++) {
					arrayOfAlternatives.push(contentJSONObject.arrayOfAlternatives[n]);
				}
					draggableObjectsToCollect = arrayOfAlternatives;//;_.sample(arrayOfAlternatives,maxAlternatives);	
		
			}
			

			
		
			
			//sortImgageStartPointY += browserWidth/2;
			
			zoomFactor =  browserHeight / browserWidth;
			if (zoomFactor<backgroundImageAspectRatio) {
				browserWidth = browserWidth *zoomFactor/backgroundImageAspectRatio;		
			}  
		

			var contentJSONObject2 = contentJSONObject.chapters;
			nrOfHitareas = _.size(contentJSONObject2);
			
			

			res +="<div id='sortobject' style='position:absolute; z-index: 1000; display:block; opacity:0; text-align: center; cursor:pointer; '><img src='img/"+draggableObjectsToCollect[0].image+"' /></div>";
			res +="<div id='failicon' style='position:absolute; z-index: 15; display:block; opacity:0; text-align: center;'><img src='img/fail.png' /></div>";
		
			res+='<div id="modalenergi_overlay" class="modal_overlay" style="width:100%; display:none; margin:0 auto;"></div>';
			
			res+='<div id="modal_text"><div class="modal_text"><div class="modalheader"><h1>'+contentJSONObject2[0].textcontent[0].header+'</h1>';
			if(contentJSONObject.showCorrectIcon=="true") {res +='<img class="correcticon" src="img/correctanswer.png"/>';}
			res +='<img class="closemodal" src="img/closemodal.png"/></div><div class="modalcontent">'+contentJSONObject2[0].textcontent[0].contenttext+'</div></div></div>';
		
			/*for (var i=0; i<nrOfHitareas; i++) {		
				res+='<div id="modal_text_'+i+'" class="modal_text"><div class="modalheader"><h1>'+contentJSONObject2[i].textcontent[0].header+'</h1><img class="closemodal" src="img/closemodal.png"/></div><div class="modalcontent">'+contentJSONObject2[i].textcontent[0].contenttext+'</div></div>';
			}		
			*/

			res += "<div class='chapterWrapper desktop' style='width:"+browserWidth+"px;' >";
				res +="<div id='scorekeeper'><div class='innerscore'>0 / "+maxAlternatives+"</div></div>";
				res+='<div id="modal_text_end"><div class="modal_text"><div class="modalheader"><h1>'+contentJSONObject.gametexts[0].header+'</h1></div><div class="modalcontent">'+contentJSONObject.gametexts[0].completetext+'</div><a class="modalexit" OnClick="SA.exitGame(); return false;">OK</a></div></div>';
				
		
					res +="<img id='hitareas' src='img/"+backgroundImage+"' BORDER=0  style='z-index:0; opacity:1'/>";
			res +='<div id="selectgamecontent"><div class="selectgametext">'+arrayOfAlternatives[0].header+'</div><div class="selectgameimage"><img id="iconholder" src="img/'+arrayOfAlternatives[0].icon+'"/></div></div>';
				
					res+='<div class="svg-container" style="display:none">';
						
						res+='<svg version="1.1" viewBox="0 0 '+contentJSONObject.imagewidth+' '+contentJSONObject.imageheight+'" preserveAspectRatio="xMinYMin meet" class="svg-content">';
						//res+='<defs><filter id="blur" x="-100%" y="-100%" width="400%" height="400%"><feGaussianBlur in="SourceGraphic" stdDeviation="70" /></filter></defs>';
						
						for (i=0; i<nrOfHitareas; i++) {
								var textObj =contentJSONObject2[i].textcontent[0];
								res+='<polygon id="'+contentJSONObject2[i].ID+'"  class="dropzone" onclick="SA.checkIfCorrectTarget(\''+contentJSONObject2[i].ID+'\'); return false;" points="'+contentJSONObject2[i].coords+'"/>'; 
									// filter="url(#blur)"
							}
						res+='</svg>';
					res+='</div></div>';

		return res;
	}
	self.checkIfCorrectTarget = function (ID) {
		var landing = ID;
		var theObj =draggableObjectsToCollect[0];
		var targetAreaIDs = theObj.targetAreaID.split(",");
		var targetfound = false;
	
		for (var i=0; i<targetAreaIDs.length;i++) {
				if (landing == targetAreaIDs[i]) {
				 	
				  		$("#sortobject").hide('slow', SA.setOverlay(theObj.feedbackheader, theObj.feedback, true));


					draggableObjectsToCollect.shift();
					targetfound = true;
					break;

				}

	
		}
	                
		
	 if(!targetfound && landing) {
		
		var x=sortImgageStartPointX,
		y=sortImgageStartPointY,
		target = $("#sortobject");
		TweenMax.to(target, 0.5, {x:x, y:y,force3D:true, ease:Expo.easeOut});
		
		var failicon = $("#failicon");
		var iconwidth = failicon.width()/2;
		var failx, faily;
		var  iEOffsetx = $("#sortobject").width()/4,
			 iEOffsety = $(".svg-container").offset().top + $("#sortobject").height()/4;
					
		// keep the dragged position in the data-x/data-y attributes
	      
	      	  failx = event.pageX - iEOffsetx ;
	      	  faily = event.pageY -iEOffsety;
	     
	    

		 
		TweenMax.set(failicon, {x:failx, y:faily, opacity:1});
		TweenMax.to(failicon, 1, {opacity:0, y:"-=50", ease:Back.easeIn});
	
		target.attr('data-x', x);
			target.attr('data-y', y);
		}


	}

	self.setOverlay = function(header, contenttext, showNextAlternative) {
		
		var modal = $("#modal_text");
		
						


		modal.find("h1").html(header);
		modal.find(".modalcontent").html(contenttext);
		

		$("#modalenergi_overlay").fadeOut();
		$("#modal_text").fadeOut();
		try {
			event.preventDefault();
		}
		catch(err) {}

		if (showNextAlternative) {
			$(".correcticon").show();
		} else {
				$(".correcticon").hide();
		}

		//modal.css({top: ypos, left: xpos});
		
		$("#modalenergi_overlay").fadeIn();
		
		
		var modaltext = $(".modal_text");
		
			modaltext.center();
		modal.fadeIn();

		
		$("#modalenergi_overlay, #modal_text").on("click", function(){
				modal.fadeOut();
				
				$("#modalenergi_overlay").fadeOut(400, function(){
					if(showNextAlternative) {
						SA.setupSortObject();
						$(this).unbind('click');
				}

				});
				
		});

		return false;
	}


	self.sortSuccess = function () {
			var modal = $("#modal_text_end");
			

		//	modal.css({top: "50%", left: "50%", "margin-left": -modal.width()/2, "margin-top":-modal.height()});
			$("#modal_text").fadeOut();
			$("#modalenergi_overlay").fadeIn();
			modal.fadeIn();
	}

	self.exitGame = function() {
		draggableObjectsToCollect = [];
		if (FS.contentObj[FS.currentNodeNr].gotoID!=undefined) { 
				  	 		FS.gotoID(FS.contentObj[FS.currentNodeNr].gotoID);
				
		}else {
			FS.respondToHUB(0);
		}

	}

	self.setupSortObject = function() {
		$("#scorekeeper .innerscore").text(maxAlternatives - parseInt(draggableObjectsToCollect.length)+" / " + maxAlternatives);
		var mc = $("#scorekeeper");
		
		TweenMax.from(mc, 0.25, {css:{scale:0.05, opacity:0}});

		if(draggableObjectsToCollect.length==0) {
			
			SA.sortSuccess();
			return;
		} 

		 var sortImage= $('#sortobject img'),
		   target = $('#sortobject');


			
	 		sortImage.attr("src","img/"+draggableObjectsToCollect[0].image);
        	$(".selectgametext").html(draggableObjectsToCollect[0].header);
        	$("#iconholder").attr("src","img/"+draggableObjectsToCollect[0].icon);	


            		TweenMax.to(target, 0, {x:sortImgageStartPointX, autoAlpha:1, y:sortImgageStartPointY, ease:Expo.easeOut});
            	   	
            	   	target.attr('data-x', sortImgageStartPointX);
			      	target.attr('data-y', sortImgageStartPointY);

					target.css({"z-index": 300}).show("fast");
	}


	self.startgame = function() {
		var hitareas = $('#hitareas'),
        sortobject = $('#sortobject'),
     	iEOffsetx = false,
    	iEOffsety = false;
    	
    	
       
   	    if (!gameIsInitiated) {
   	    	

			hitareas.one("load", function(){
				  
        	 	
        	 	 if (isNaN(parseInt(sortImgageStartPointX))) {
					
					sortImgageStartPointX = $("#hitareas").offset().left  + sortobject.width()/2  -20; //hitareas left corner
				}
				


        	 	 bgZoom = this.width/bgZoom*2; 
        	 	 sortobject.find("img").css("width",bgZoom*100 + "%");
        	 	 if (bgZoom*100 < 100) { $("#iconholder").css("max-width",bgZoom*100 + "%");}
        	 	 $("#failicon").find("img").css("width",bgZoom*100 + "%");
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
				

							if (IEtrue && !iEOffsetx) {
							
								 iEOffsetx = $("#sortobject").width()/2;
         						 iEOffsety = $(".svg-container").offset().top + $("#sortobject").height()/2;
							}

					         	
					         	var target = event.target,
					        	 	x,
					        		y;
					          // keep the dragged position in the data-x/data-y attributes
					           if (IEtrue) {
					          	  x = event.pageX - iEOffsetx ;
					          	  y = event.pageY -iEOffsety;
					         
					          }
					          else {
						          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
						          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
						        

						      }
					   			
					   			 if (x>0 && x<$(window).width()*0.9 && y>0 && y<$(window).height()*0.9 -100) {
						          
							          TweenMax.set($("#sortobject"),{x:x, y:y});
								      // update the posiion attributes
								      target.setAttribute('data-x', x);
								      target.setAttribute('data-y', y);
								  }
					
				})
				.on('dragstart', function(event) {
					
					var target = event.target;
					$("#sortobject").css('z-index', 5);
					$("#modalenergi_overlay").fadeOut();
					$("#modal_text").fadeOut();
				})
				.on('dragend', function(event){
					
					

					$("#sortobject").css('z-index', 20);
					
				});
			/*-------------------------------------------------*/
			}
			else {
					console.log("1");
        	 	 	 sortobject.find("img").css("width",bgZoom*100 + "%");
        	 	 	 $("#failicon").find("img").css("width",bgZoom*100 + "%");
					 SA.setupSortObject();
			
			}
			gameIsInitiated=true;
				
			/*DROP ZONE SETUP -----------------------------------*/


	       	interact(".dropzone")
	       		.dropzone ({

						  ondropactivate: function (event) {
						    // add active dropzone feedback
						    if (IEtrue) {
						    	$(event.target).addClass('drop-active');
						    }
						    else {
						    	 event.target.classList.add('drop-active');
						    }
						   
						  },
						  ondragenter: function (event) {
						  
						    var draggableElement = event.relatedTarget,
						        dropzoneElement = event.target;

						    // feedback the possibility of a drop
						        if (IEtrue) {
						    	
						   	 	 	$(dropzoneElement).addClass('drop-target');
						    		$(draggableElement).addClass('can-drop');
						   	 
						    	}
						    	else {
						    		 dropzoneElement.classList.add('drop-target');
						    		draggableElement.classList.add('can-drop');
						    	}
						   

						   
						  },
						  ondragleave: function (event) {
						    // remove the drop feedback style

						     if (IEtrue) {
						    	$(event.target).removeClass('drop-target');
						   		$(event.relatedTarget).removeClass('can-drop');
						    }
						    else {
						    	 event.target.classList.remove('drop-target');
						  	  event.relatedTarget.classList.remove('can-drop');
						    }
						   
						  },
						  ondrop: function (event) {
						  	  
	                			var landing = event.target.id;
	                			var theObj =draggableObjectsToCollect[0];
	                			var targetAreaIDs = theObj.targetAreaID.split(",");
	                			var targetfound = false;
	                			
	                			for (var i=0; i<targetAreaIDs.length;i++) {
	                					if (landing == targetAreaIDs[i]) {
		               				 		
		               				  		sortobject.hide('slow', SA.setOverlay(theObj.feedbackheader, theObj.feedback, true));


		                					draggableObjectsToCollect.shift();
		                					targetfound = true;
		                					break;

	                					}

	                		
	                			}
	                
	           					
	            				 if(!targetfound && landing) {
	            					
	            					var x=sortImgageStartPointX,
	            					y=sortImgageStartPointY,
	            					target = $("#sortobject");
	            					TweenMax.to(target, 0.5, {x:x, y:y,force3D:true, ease:Expo.easeOut});
	            					
	            					var failicon = $("#failicon");
	            					var iconwidth = failicon.width()/2;
	            					var failx = parseInt(target.attr('data-x'))+20;
	            					var faily = parseInt(target.attr('data-y'))+20;
	            					TweenMax.set(failicon, {x:failx, y:faily, opacity:1});
	            					TweenMax.to(failicon, 1, {opacity:0, y:"-=50", ease:Back.easeIn});
	            				
	            					target.attr('data-x', x);
				      				target.attr('data-y', y);
	            		   		}


	                		},
						  ondropdeactivate: function (event) {
						    // remove active dropzone feedback
						       if (IEtrue) {
							    $(event.target).removeClass('drop-active');
							   $(event.target).removeClass('drop-target');
							}
							else {
								 event.target.classList.remove('drop-active');
							    event.target.classList.remove('drop-target');
							}
						  }

	       

	      	 });
	 	

		
	}
 

	return self;

})({});