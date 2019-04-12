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
