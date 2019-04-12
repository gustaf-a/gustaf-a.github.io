/*global $, jQuery, _, TweenMax, FS*/
//ClickAndPopUp
var CLICKPOP = (function(self){
	"use strict";
	

	var nodeId,
	 	nrOfItemsToFind,
	 	bgImageSmallerThanWindow = false,
	 	clickAreasCounted = [],
        touchNavLeftPossible=true;
		 

	self.addContent = function(nId) {
			var res ="", 
			nrOfClickAreas,
			myObj =FS.contentObj[nId],
			wWidth = $(window).width(),
			wHeight =$(window).height() - $("#bottombar-main").innerHeight() - 40,
			zoomFactor,
			margintop,
			hubImageAspectRatio = myObj.imageheight / myObj.imagewidth,
			hubImage = myObj.hubimage,
			addStyle,
			chapterItemClass = "chapterItem";
			clickAreasCounted = [];
			CLICKPOP.nodeId = nId;

			zoomFactor =  wHeight / wWidth;
			if (zoomFactor<hubImageAspectRatio) {
				wWidth = wWidth *zoomFactor/hubImageAspectRatio;		
			}  
			

			var myObj2 = myObj.clickareas;
			nrOfClickAreas = _.size(myObj2);
			nrOfItemsToFind=myObj.nrOfItemsToFind;	
			var clicktype = myObj.clicktype;
            $("#inner").addClass(clicktype);  
        
            if(clicktype!="image_gotoID") {
                 
                    res+='<div id="modalcontainer_overlay" class="modal_overlay" style="width:100%; display:none; margin:0 auto;"></div>';
                    for (var i=0; i<nrOfClickAreas; i++) {		

                        res+='<div id="modal_text_'+i+'" class="modalgeneral"><div class="modal_text"><div class="modalheader"><h1>'+myObj2[i].textcontent[0].header+'</h1>';
                        if(myObj.showCorrectIcon=="true") {res +='<img src="img/correctanswer.png"/>';}
                        res +='<img class="closemodal" src="img/closemodal.png"/></div><div class="modalcontent">'+myObj2[i].textcontent[0].contenttext+'</div></div></div>';
                    }		
            }
            else {
                   FS.navigationDirection ="fade";
                touchNavLeftPossible =false;
            }
      
     
              
        
       

			//res+='<div id="modal_text_end" class="modal_text"><div class="modalheader"><h1>'+myObj.gametexts[0].header+'</h1></div><div class="modalcontent">'+myObj.gametexts[0].completetext+'</div><a class="modalexit" OnClick="CLICKPOP.exitGame(); return false;">OK</a></div>';
				var nodemaxwidth = wWidth;
				if (myObj.nodemaxwidth!=undefined) {
					nodemaxwidth = myObj.nodemaxwidth;
				} 

				var myclass = myObj.class || "";
				//res += "<div class='chapterWrapper desktop' style='max-width:"+nodemaxwidth+"px;' >";
				res += "<div class='clickpopwrapper "+myclass+"'>";
				if (nrOfItemsToFind>0) {
					res +="<div id='scorekeeper'><div class='innerscore'>0 / "+nrOfItemsToFind+"</div></div>";
				}
				//res +='<div id="modal_text_end"><div class="modal_text"><div class="modalheader"><h1>'+myObj.gametexts[0].header+'</h1></div><div class="modalcontent">'+myObj.gametexts[0].completetext+'</div><a class="modalexit" OnClick="CLICKPOP.exitGame(); return false;">OK</a></div></div>';
				

				
					
			
			
				
					
					var images = FS.contentObj[nId].image; 

					if (clicktype == "question") {
						res += "<div class='clickpopquestion'>";
							
								res += FS.addNodeImages(nId);

								if (images === undefined) {  
									res += "<div class='fullcol'>";
								} 
								else {
									res +="<div class='rightcol'>" ;
								}

								res += FS.addNodeTitle(nId) + FS.addNodeText(nId) ;
								res +="<div class='questionHeadline'>"+myObj.question +"</div>";
									res +="<div class='bubbleholder'>";
					}
					else if (clicktype=="text" || clicktype=="klamydiaquiz"){
							res += "<div class='clickpop textbubbles'>";

							res += FS.addNodeImages(nId);

								if (images === undefined) {  
									res += "<div class='fullcol'>";
								} 
								else {
									res +="<div class='rightcol'>" ;
								}
								res += FS.addNodeTitle(nId) + FS.addNodeText(nId) ;

								
							
							
	
							if (images === undefined) { 
								res +="<div class='bubbleholder fullwidth center'>";
							}
							else {
								res +="<div class='bubbleholder'>";
							}
					}
					else {
						res += "<div class='clickpop'>";
							res += FS.addNodeTitle(nId) + FS.addNodeText(nId) ;
							//res += FS.addNodeImages(nId);
							res +="<div class='bubbleholder fullwidth'>";
						
					}
					
					

					for (i=0; i<nrOfClickAreas; i++) {
							if (clicktype == "image_gotoID") {
                               
									
										res+='<div  class="'+ myObj.template+'" onclick="FS.gotoID(\''+myObj2[i].gotoID+'\');" style="cursor:pointer;">';
								
									
									
									
											
									res+='<img src="img/'+myObj2[i].url+'"/>';
									res+='</div>';	
							}
							else if (clicktype == "images") {
                                var textObj =myObj2[i].textcontent[0];
									if (myObj2[i].link == undefined || myObj2[i].link =="")	{
										res+='<div  class="'+ myObj.template+'" onclick="CLICKPOP.setOverlay('+i+'); return false;">';
								
									}	
									else {
										if (myObj2[i].forcedownload == "true") {
												res+='<div  class="'+ myObj.template+'" onclick="CLICKPOP.downloadme(\''+myObj2[i].link+'\'); CLICKPOP.setOverlay('+i+');">' ;
										}
										else {
												res+='<div  class="'+ myObj.template+'" onclick="CLICKPOP.openLinkInTab(\''+myObj2[i].link+'\'); CLICKPOP.setOverlay('+i+');">' ;		
										}
									
									}			
									res+='<img src="img/'+myObj2[i].url+'"/>';
									res+='</div>';	
							}
							else if (clicktype =="text" || clicktype =="klamydiaquiz") {
                                var textObj =myObj2[i].textcontent[0];
									var rotation;// = Math.floor((Math.random() * 10) -5);
									if (clicktype =="klamydiaquiz") {
										rotation =0;
									}
									else {
										rotation = Math.floor((Math.random() * 10) -5);
									}
									//var offsetx =Math.floor((Math.random() * 600) -300);
									var myID = (myObj2[i].dbID!=undefined ? myObj2[i].dbID : "id"+i);
									res+='<div  class="'+ myObj.template+' textbubble'+i+'" id="'+myID+'" onclick="CLICKPOP.setOverlay('+i+'); return false;" style="-ms-transform: rotate('+rotation+'deg); -webkit-transform: rotate('+rotation+'deg); -moz-transform: rotate('+rotation+'deg); transform: rotate('+rotation+'deg); ">';
									res+='<span>'+myObj2[i].text+'<span/>';
									res+='</div>';		

							}
							else if (clicktype =="question") {
                                var textObj =myObj2[i].textcontent[0];
								
								//	res +="<div class='sequenceAnswer "+questclass+ "' onClick=FS.saveAnswer("+i+")>"+ myObj.answers[i].text +"</div>";

									res+='<div  class="'+ myObj.template+' textbubble'+i+' sequenceAnswer" onclick="CLICKPOP.setOverlay('+i+'); return false;">';
									res+=myObj2[i].text;
									res+='</div>';
							
							}

							
							
					}
				 	if (clicktype=="text" || clicktype=="question" || clicktype =="klamydiaquiz"){ 
				 		res+='</div></div>'; //rightcol + bubbleholder
				 	}
					res+='</div>'; //CLICKPOP
					res+='</div>'; //CHAPTERWRAPPER
						
		return res;

	}
	self.downloadme = function(x) {
		

			$.fileDownload(x, {
			    successCallback: function (url) {
			 
			        alert('You just got a file download dialog or ribbon for this URL :' + url);
			    },
			    failCallback: function (html, url) {
			 
			        alert('Your file download just failed for this URL:' + url + '\r\n' +
			                'Here was the resulting error HTML: \r\n' + html
			                );
			    }
			});
 
	}


	self.openLinkInTab = function(link) {
		setTimeout(function(){window.open(link, '_blank');},3000)
		

	}

	self.setOverlay = function(overlayID) {

 
		var 	wWidth = $(window).width(),
			wHeight =$(window).height(),
			modal = $("#modal_text_"+overlayID),
			xpos,
			ypos;
        
        
                    if (FS.contentObj[CLICKPOP.nodeId].nopopup=="true") {

                    		if($(".textbubble"+overlayID).hasClass("visited")) {
                    				$(".textbubble"+overlayID).removeClass("visited")
                    				//remove this from save object
                    				  clickAreasCounted.splice(clickAreasCounted.indexOf(overlayID),1);	
                    		}
                    		else {
                    			  $(".textbubble"+overlayID).addClass("visited");
                        			//add this to save object 

                        			 if (!_.contains(clickAreasCounted, overlayID)) {
			                            clickAreasCounted.push(overlayID);	
			                            

                       			 }

                    		}
                    	
                         	$("#scorekeeper .innerscore").text(clickAreasCounted.length+" / " + nrOfItemsToFind);

			                            var mc = $("#scorekeeper");

			                            TweenMax.from(mc, 0.25, {css:{scale:0.05, opacity:0}});

                        


                        if (clickAreasCounted.length == nrOfItemsToFind && nrOfItemsToFind>0) { 

                                $("#modalcontainer_overlay, .modalgeneral").fadeOut();
                                CLICKPOP.saveAndGetResult();
                                
                            }
                    }

        else {

        	$("#middle, .clickpopwrapper").addClass("darken");
            $(".modalgeneral").fadeOut();
            try {
                event.preventDefault();
            }
            catch(err) {}


            $(".textbubble"+overlayID).addClass("visited");

            $("#overlayhubimage_"+overlayID).css("z-index","200");
            $("#outer").css("z-index","500");
            $("#overlayhubimage_"+overlayID).fadeIn("slow");


            $("#modalcontainer_overlay").fadeIn();

            var modaltext = $(".modal_text");

             //  modaltext.center();
            modal.fadeIn();

            if (!_.contains(clickAreasCounted, overlayID)) {
                clickAreasCounted.push(overlayID);	
                $("#scorekeeper .innerscore").text(clickAreasCounted.length+" / " + nrOfItemsToFind);

                var mc = $("#scorekeeper");

                TweenMax.from(mc, 0.25, {css:{scale:0.05, opacity:0}});

            }

            $("#modalcontainer_overlay, .modalgeneral").on("click", function(){
                //if (clickAreasCounted.length == nrOfItemsToFind) return false;
                $("#outer").css("z-index","10");
                    modal.fadeOut();
                    $("#middle, .clickpopwrapper").removeClass("darken");
                $("#overlayhubimage_"+overlayID).css("z-index","90");


                if (clickAreasCounted.length == nrOfItemsToFind && nrOfItemsToFind>0) { 

                    $("#modalcontainer_overlay, .modalgeneral").fadeOut();

                    CLICKPOP.exitNode();
                }else {

                    $("#modalcontainer_overlay, .modalgeneral").fadeOut();

                }
                });
        }
		//return false;
	}



	self.exitNode = function() {
				clickAreasCounted = [];
		$("#outer").css("z-index","10");
		/*if (FS.contentObj[FS.currentNodeNr].gotoID!=undefined) { 
				  	 		FS.gotoID(FS.contentObj[FS.currentNodeNr].gotoID);
				
		}else {
			FS.showNext();
		
			
		}*/


        if(FS.contentObj[CLICKPOP.nodeId].autoGotoID =="true") {
        	 $(".modal_text").hide();
        		//TweenMax.to($("#inner"),0.5, {opacity:0, y:-2000});
        		FS.gotoID(FS.contentObj[CLICKPOP.nodeId].gotoID);
        			//TweenMax.fromTo($("#inner"),0.5, {opacity:0, y:2000 },{opacity:1, y:0,delay:0.4});
        				
            }
            else {
    			FS.showNext();
	        	
            }             

	}

 	self.startNode= function() {
 		TweenMax.set(".sequenceAnswer, .klamydiaquiz h4", {transformPerspective:300, opacity:0, rotationX:90, force3D:true});
				TweenMax.staggerTo(".sequenceAnswer, .klamydiaquiz h4", 0.5, {rotationX:0, opacity:1, delay:0.5}, 0.25);
	 FS.touchNavLeftPossible=touchNavLeftPossible;			
	}


	self.saveAndGetResult = function() {
		var myObj = FS.contentObj[CLICKPOP.nodeId].clickareas;
	
		 var jsonObj = {"question_id":  FS.contentObj[CLICKPOP.nodeId].savetodb_ID};
   						jsonObj[myObj[clickAreasCounted[0]].dbID] = 1;
   						jsonObj[myObj[clickAreasCounted[1]].dbID] = 1;
   						jsonObj[myObj[clickAreasCounted[2]].dbID] = 1;

	console.log(jsonObj);
		$.ajax({
        	type: "GET",
        	url: "php/saveClickWords.php",
         	datatype:'json',
        	data: jsonObj,
        	success:function(data) {
        		formatClickWordsAfterDatabase(data);
				//continueAfterDatabaseSave(myObj, myCallback);
        	}
        });
	
		//FS.gotoID(FS.contentObj[CLICKPOP.nodeId].gotoID);
	}
   

	function formatClickWordsAfterDatabase(data) {
		if (document.location.hostname == "127.0.0.1" || document.location.hostname =="localhost")  { //ONLY WHEN IN LOCALHOST
			FS.gotoID(FS.contentObj[CLICKPOP.nodeId].gotoID);
			return;
		
		}
		var myObj =  JSON.parse(data)[0];
		console.log(myObj);
		var windWidth = $(window).innerWidth();
		$(".innerscore, #scorekeeper").addClass("resultvisible");

		$(".innerscore").text("Andra har svarat så här");
		$(".clickwords").addClass("clickwordsResult");
		TweenMax.set($(".clickwords"), {css:{rotation:0}});

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

	}

	return self;

})({});