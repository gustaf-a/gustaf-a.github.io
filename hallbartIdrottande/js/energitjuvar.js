/*global $, jQuery, _, TweenMax, FS*/
//ENERGITJUVAR
var ET = (function(self){
	"use strict";
	

	var nodeId,
	 	maxThieves,
	 	bgImageSmallerThanWindow = false,
	 	thievesCounted = [];
		 

	self.addGame = function(nId) {
			var res ="", 
			nrOfChapters,
			myObj =FS.contentObj[nId],
			wWidth = $(window).width() ,
			wHeight =$(window).height() - $("#bottombar-main").innerHeight() - 40,
			zoomFactor,
			margintop,
			hubImageAspectRatio = myObj.imageheight / myObj.imagewidth,
			hubImage = myObj.hubimage,
			addStyle,
			chapterItemClass = "chapterItem";
			thievesCounted = [];
			ET.nodeId = nId;

			zoomFactor =  wHeight / wWidth;
			if (zoomFactor<hubImageAspectRatio) {
				wWidth = wWidth *zoomFactor/hubImageAspectRatio;		
			}  
			

			var myObj2 = myObj.chapters;
			nrOfChapters = _.size(myObj2);
			maxThieves=myObj.nrOfItemsToFind;	
				res+='<div id="modalenergi_overlay" class="modal_overlay" style="width:100%; display:none; margin:0 auto;"></div>';
			for (var i=0; i<nrOfChapters; i++) {		
			
				res+='<div id="modal_text_'+i+'" class="modalenergi"><div class="modal_text"><div class="modalheader"><h1>'+myObj2[i].textcontent[0].header+'</h1>';
				if(myObj.showCorrectIcon=="true") {res +='<img src="img/correctanswer.png"/>';}
				res +='<img class="closemodal" src="img/closemodal.png"/></div><div class="modalcontent">'+myObj2[i].textcontent[0].contenttext+'</div></div></div>';
			}		

			//res+='<div id="modal_text_end" class="modal_text"><div class="modalheader"><h1>'+myObj.gametexts[0].header+'</h1></div><div class="modalcontent">'+myObj.gametexts[0].completetext+'</div><a class="modalexit" OnClick="ET.exitGame(); return false;">OK</a></div>';
				var nodemaxwidth = wWidth;
				if (myObj.nodemaxwidth!=undefined) {nodemaxwidth = myObj.nodemaxwidth;} 
				res += "<div class='chapterWrapper desktop' style='max-width:"+nodemaxwidth+"px;' >";
				if (maxThieves>0) {res +="<div id='scorekeeper'><div class='innerscore'>0 / "+maxThieves+"</div></div>";}
				res +='<div id="modal_text_end"><div class="modal_text"><div class="modalheader"><h1>'+myObj.gametexts[0].header+'</h1></div><div class="modalcontent">'+myObj.gametexts[0].completetext+'</div><a class="modalexit" OnClick="ET.exitGame(); return false;">OK</a></div></div>';
				
		
					res +="<img id='hitareas' src='img/"+hubImage+"' BORDER=0  style='z-index:0; opacity:1'/>";
					for (i=0; i<nrOfChapters; i++) {	
				if(myObj2[i].overlayimage != undefined) {
					res+='<div id="overlayhubimage_'+i+'" class="overlayhubimage" style="height:100%; width:100%; display:none; background-image:url(\'img/'+myObj2[i].overlayimage+'\');"></div>'; 
				}
			
			}

			//	if ($(window).width()<myObj.imagewidth) {
						res+='<div class="svg-container" id="svg-container">';
			/*	}
				else {
					
						bgImageSmallerThanWindow = true;
						res+='<div class="svg-container" id="svg-container" style="width:'+myObj.imagewidth+'px">';
				}
			*/	
						res+='<svg version="1.1" viewBox="0 0 '+myObj.imagewidth+' '+myObj.imageheight+'" preserveAspectRatio="xMinYMin meet" class="svg-content">';
							//res+='<defs><filter id="blur" x="-100%" y="-100%" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="70" /></filter></defs>';
							for (i=0; i<nrOfChapters; i++) {
								var textObj =myObj2[i].textcontent[0];
								res+='<polygon id="'+myObj2[i].ID+'"  class="dropzone" onclick="ET.setOverlay('+i+'); return false;"  points="'+myObj2[i].coords+'"/>'; 

									
							}
						res+='</svg>';
					res+='</div></div>';

		return res;


			/*
			res += "<div class='chapterWrapper desktop' style='width:"+wWidth+"px;' >";
			if (maxThieves>0) {res +="<div id='scorekeeper'><div class='innerscore'>0 / "+maxThieves+"</div></div>";}
		

			res +="<img src='img/"+hubImage+"' USEMAP='#hub'BORDER=0 width='"+myObj.imagewidth+"' height='"+myObj.imageheight+"'/>";
		
			//Add overlayimages for on mouseOver
			for (i=0; i<nrOfChapters; i++) {	
				if(myObj2[i].overlayimage != undefined) {
					res+='<div id="overlayhubimage_'+i+'" class="overlayhubimage" style="height:100%; width:100%; display:none; background-image:url(\'img/'+myObj2[i].overlayimage+'\');"></div>'; 
				}
			
			}
				

			res +="<map name='hub'>";


			for (i=0; i<nrOfChapters; i++) {
				res+='<area shape="'+myObj2[i].shape+'" coords="'+myObj2[i].coords+'" href="" alt="" title="" onClick="ET.setOverlay('+i+'); return false"  style="outline:none;" target="_self" >'; 
			}

			res+="</map></div>";

		return res;*/
	}

	self.setOverlay = function( overlayID) {

 
		//	mousex = event.clientX,
		//	mousey = event.clientY,
		var 	wWidth = $(window).width(),
			wHeight =$(window).height(),
			modal = $("#modal_text_"+overlayID),
			xpos,
			ypos;
		
/*
		if (mousex > wWidth/2) {
			xpos = mousex-modal.width() - 50;
			
		}
		else {
				xpos =mousex +10;
				
		}

		if (mousey > wHeight/2) {
			ypos = mousey-modal.height() - 10;
			
		}
		else {
				ypos = mousey -modal.height()*1.5;
				
		}
		
		if (xpos + modal.width() > wWidth*0.9) xpos = wWidth*0.9-modal.width();
		if (xpos<20) xpos=20;
		if (ypos + modal.height() > wHeight*0.9) ypos = wHeight-modal.height() -20;
		if (ypos<20) ypos=20;

*/
	//console.log("x " + xpos + " y " + ypos + " modal.width() " + modal.width());

		//$(".modal_overlay").fadeOut();
		$(".modalenergi").fadeOut();
		try {
			event.preventDefault();
		}
		catch(err) {}

		$("#overlayhubimage_"+overlayID).css("z-index","200");
		$("#outer").css("z-index","500");
		$("#overlayhubimage_"+overlayID).fadeIn("slow");
		
			//modal.css({top: ypos, left: xpos});//, "margin-left": margleft, "margin-top":-modal.height()/2});
		//	modal.css({"margin-left": -modal.width()/2, "margin-top":-modal.height()});

		$("#modalenergi_overlay").fadeIn();
		
		var modaltext = $(".modal_text");
		
			modaltext.center();
		modal.fadeIn();

		if (!_.contains(thievesCounted, overlayID)) {
			thievesCounted.push(overlayID);	
			$("#scorekeeper .innerscore").text(thievesCounted.length+" / " + maxThieves);
			//TweenMax.to($("#scorekeeper .innerscore"),0,{css: {xscale: "900", top: "300"}});
			var mc = $("#scorekeeper");
			
			TweenMax.from(mc, 0.25, {css:{scale:0.05, opacity:0}});
						
		}
		
		$("#modalenergi_overlay, .modalenergi").on("click", function(){
			if (thievesCounted.length == maxThieves && $("#modal_text_end").css('display') == 'block') return false;
			$("#outer").css("z-index","10");
				modal.fadeOut();
			$("#overlayhubimage_"+overlayID).css("z-index","90");
			

			if (thievesCounted.length == maxThieves && maxThieves>0) { 
			modal = $("#modal_text_end");
			

		//	modal.css({top: "50%", left: "50%", "margin-left": -modal.width()/2, "margin-top":-modal.height()});
			$(".modalenergi").fadeOut();
			modal.fadeIn();

			}else {
				$("#modalenergi_overlay, .modalenergi").fadeOut();
				
			}
			});

		return false;
	}



	self.exitGame = function() {
		thievesCounted = [];
		$("#outer").css("z-index","10");
		if (FS.contentObj[FS.currentNodeNr].gotoID!=undefined) { 
				  	 		FS.gotoID(FS.contentObj[FS.currentNodeNr].gotoID);
				
		}else {
			FS.respondToHUB(0);
		}
	}

 	self.startgame = function() {
 		  if (bgImageSmallerThanWindow) {
 		  	$("#svg-container").css("left", Math.max(0, (($(window).width() -$("#svg-container").outerWidth()) / 2) + $(window).scrollLeft()) + "px");
 		  }

	}

	return self;

})({});