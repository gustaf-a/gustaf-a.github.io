var Case3_HI_Alex = (function (self) {

    self.ID = {
        "text": "Case3_HI_Alex", "saveForUnlocked": "true", "unlockedID": "main", "backgroundParallax": "0",
        "bottombar":
            "<div class='rightcorner'><div class='progresstext'></div></div><div class='progressbar'><div class='progresschapterthumbs'></div><div class='progresspercent'></div></div>"
        /*<div class='toggleanimation' onclick='FS.toggleanimation();'>[Stäng av animationer]</div>
        <div onclick='FS.gotoID(\'avfallstrappan\');'>AVFALLSTRAPPAN</div>*/
    };

    self.preload = {
        "images":
            [{ "url": "placeholder640x960.jpg" },
            { "url": "Antagning.jpg" },
            { "url": "arena.jpg" },
            { "url": "bild_1.png" },
            { "url": "bild_3.png" },
            { "url": "bild_4.png" },
            { "url": "bild_5.png" },
            { "url": "bild_8.png" },
            { "url": "bild_10.png" },
            { "url": "bild_11.png" },
            { "url": "gym.png" },

            { "url": "3_0.jpg" },
            { "url": "3_1.jpg" },
            { "url": "3_2.jpg" },

            { "url": "3_2_1.jpg" },
            { "url": "3_2_2.jpg" },
            { "url": "3_3.jpg" },

            { "url": "3_3_1.jpg" },
            { "url": "3_3_2.jpg" },
            { "url": "3_3_4.jpg" },
            { "url": "3_3_4_unlocked.jpg" },

            { "url": "3_6_1.jpg" },
            { "url": "3_6_2.jpg" },
            { "url": "3_6_3.jpg" },
            { "url": "3_5_3.jpg" },
            { "url": "3_4_4.jpg" },
            { "url": "3_6_4.jpg" },
            { "url": "3_5_4.jpg" },
            { "url": "3_4_1.jpg" },
            { "url": "3_4_2.jpg" },
            { "url": "3_5_1.jpg" },
            { "url": "3_5_2.jpg" },
            { "url": "3_7.jpg" },
            { "url": "3_8.jpg" },
            { "url": "3_9.jpg" },
            { "url": "3_10.jpg" },
            { "url": "3_11.jpg" }

            ]
    };
    self.nodes = {
        "content":
            [


                // ALEX

                {
                    "ID": "30",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_8.png" },
                    "text": "<span class='normaltext instruktionstext'><span class='instruction_touch'>Swipe:a från höger till vänster för att navigera.</span><span class='instruction_notouch'>Klicka på pilarna till höger och vänster för att navigera.</span></span>",

                    "justify": "center",
                    "showNextButton": "0",
                    "gotoIDBack": "huvudmeny",
                },
                {
                    "ID": "31",
                    "type": "info",
                    "background": { "type": "image", "url": "3_1.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "text": "<div class='sms'>Kommer du ihåg i juli när vi spelade fotboll och jag fick ont i låret? Det är kvar... Jag tränar som vanligt men det går inte jättebra. Jag vill absolut inte hamna efter! Känns som att de andra undrar hur jag kunde komma in.. </div>",

                    //  "imagecenter":"true",
                    "showNextButton": "0"
                },

                {
                    "ID": "32",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_5.png" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>IUSM väntar runt hörnet och då ser Alex sin chans att visa sina nya träningskompisar att han minsann har det som krävs. Samtidigt känner han att skadan inte blir bättre, men han vill inte berätta detta för tränaren, eftersom han är rädd för att tvingas stå över IUSM.</span>",
                    "showNextButton": "0"
                },
                {
                    "ID": "33",
                    "type": "question",
                    "question_id": "10",
                    "question": "Hur ska Alex göra med sin skada?",
                    "html": "<span class='normaltext'>Hur ska Alex göra med sin skada?</span>",
                    "background": { "type": "image", "url": "bild_5.png" },
                    "answers": [
                        { "text": "Fortsätta träna på som vanligt, men riskera att skadan blir värre.", "gotoID": "33a1" },
                        { "text": "Berätta för tränaren om situationen, men riskera att missa tävlingen.", "gotoID": "33b1" },
                    ]
                    ,
                    "showNextButton": "-1"
                },
                //FORTSÄTTA TRÄNA SOM VANLIGT
                {
                    "ID": "33a1",
                    "type": "info",
                    "background": { "type": "image", "url": "2_neutral.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Alex masserar alltid igång låret med tigerbalsam och fortsätter att träna på. Han känner hur baksidan känns lite stel och gör mer och mer ont. Efter att ha fortsatt med träningen ett tag till halkar han allt mer efter. Han behöver konstant linda om sitt lår efter varje träning.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "33a2",
                    "type": "info",
                    "background": { "type": "image", "url": "2_neutral.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Det börjar bli jobbigt på riktigt och nu är Alex inte särskilt nära den övriga träningsgruppen, vilket gör att han måste pressa sin ömma baksida ännu mer för att prestera på IUSM.</span>",
                    "navigationDirection": "fade",
                    "gotoID": "33abSkadaEnd1",
                    "showNextButton": "0"
                },
                //END OF FORTSÄTTA TRÄNA SOM VANLIGT

                //BERÄTTA FÖR TRÄNAREN

                //Skulle kunna börja med en "vad tror du tränaren känner?"
                {
                    "ID": "33b1",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_1.png" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Alex berättar för sin tränare som visar stor förståelse och snarare blir besviken för att Alex inte sagt något tidigare.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0",
                    "gotoIDBack": "33"
                },
                {
                    "ID": "33b2",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_6.png" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Tränaren bokar direkt in ett möte med en fysioterapeut som ger honom några rehab-övningar för att hjälpa honom tillbaka.<br class='nospacebr'/>Visste du att bristningar i baksida lår är en av de vanligaste skadorna inom friidrotten? <a href='https://www.friskfriidrott.se/portfolio/de-vanligaste-skadorna-inom-ungdomsfriidrott/' target='_blank'>Mer om vanliga skador</a></span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "33b3",
                    "type": "info",
                    "background": { "type": "image", "url": "gym.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Alex får ett rehabprogram på 6 veckor av sjukgymnasten. Han börjar redan efter 3 veckor känna sig bra och kanske till och med så start att han kan vara med på IUSM nästa vecka.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "33b4",
                    "type": "question",
                    "question_id": "10",
                    "question": "Vad ska Alex göra?",
                    "html": "<span class='normaltext'>Hur ska Alex göra med sin skada?</span>",
                    "background": { "type": "image", "url": "gym.jpg" },
                    "answers": [
                        { "text": "Avstå IUSM och slutföra sitt rehabprogram", "gotoID": "33b5a1" },
                        { "text": "Lägga programmet åt sidan, träna fullt ut och delta i tävlingen", "gotoID": "33b5b1" },
                    ]
                    ,
                    "showNextButton": "-1"
                },
                //AVSTÅ FRÅN IUSM OCH SLUTFÖR REHAB
                {
                    "ID": "33b5a1",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_8.png" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Alex slutför sin rehab. Styrka och rörlighet i låret är helt tillbaka. Han missade IUSM men med utomhussäsongen i intåg där Alex imponerat på träningarna så kommer han att vara en av guldfavoriterna på IUSM i augusti.</span>",
                    "navigationDirection": "fade",
                    "gotoID": "34",
                    "showNextButton": "0"
                },
                //END OF AVSTÅ FRÅN IUSM

                //SLUTA MED REHAB OCH TÄVLA
                {
                    "ID": "33b5b1",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_10.png" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Alex känner ju ingen smärta, så han börjar gå för fullt på träningarna med de andra i gruppen. Alex längtar efter IUSM</span>",
                    "navigationDirection": "fade",
                    "gotoID": "33abSkadaEnd1",
                    "showNextButton": "0",
                    "gotoIDBack": "33b4"
                },
                //END OF SLUTA MED REHAB OCH TÄVLA

                //END OF BERÄTTA FÖR TRÄNAREN

                //SHARED ENDING
                {
                    "ID": "33abSkadaEnd1",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_10.png" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Då händer det som inte får hända...</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0",
                    "gotoIDBack": "33"
                },
                {
                    "ID": "33abSkadaEnd2",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_3.png" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>På sista träningen innan IUSM håller inte baksidan för mer tryck utan den brister. Alex skriker ut sin smärta och tränaren kan snabbt se att Alex har dragit på sig en bristning i baksida lår. Nu väntar en rehab och ett långt uppehåll från träning, en marddröm för Alex som fått en tung start på gymnasiet.</span>",
                    "navigationDirection": "fade",
                    "gotoID": "34",
                    "showNextButton": "0"
                },
                //END OF SHARED ENDING

                //Fakta om rehab 
                {
                    "ID": "34",
                    "type": "info",
                    "background": { "type": "image", "url": "3_5_4.jpg" },
                    "title": "",
                    "titlecenter": "false",
                    "textclass": "phototext",
                    "text": "<span class='faktatext'><br class='nospacebr'/>Vid en muskelbristning av grad I är muskeln öm, men det finns inte några blåmärken. Muskelbristningar av grad II leder till blåmärken i det område där muskelfibrerna brustit. Vid en muskelbristning av grad III uppstår blåmärken och muskeln slits av. Skadan läks bäst genom vila och att skadeområdet kyls ner. Efter läkning kan övningar som stärker hamstringsmusklerna hjälpa till att förhindra att skadan uppstår igen. Vid en så kallad proximal hamstringsruptur har senan helt eller delvis rivits av från infästningen i bäckenbenet. Denna typ av skada kräver ofta operation som ska göras inom 3 veckor för bästa prognos.<br class='nospacebr'/> <a href='https://medibas.se/handboken/filmer/animationer/muskler-och-skelett/strackning-i-hamstringsmuskeln/' target='_blank'>Källa: Medibas</a></span>",
                    "showNextButton": "0",
                    "gotoIDBack": "33"
                },
                {
                    "ID": "342",
                    "type": "info",
                    "background": { "type": "image", "url": "3_5_4.jpg" },
                    "title": "",
                    "titlecenter": "false",
                    "textclass": "phototext",
                    "text": "<span class='faktatext'>Ännu mer viktig information om muskelbristningar finns att läsa på <br class='nospacebr'/> <a href='https://idrottsskadespecialisterna.se/behandling/muskelbristning/' target='_blank'>Idrottsskadespecialisterna.se</a></span>",
                    "showNextButton": "0"
                },
                {
                    "ID": "343",
                    "type": "info",
                    "background": { "type": "image", "url": "3_5_4.jpg" },
                    "title": "",
                    "titlecenter": "false",
                    "textclass": "phototext",
                    "text": "<span class='faktatext'>Rehabilitering måste påbörjas så snabbt som möjligt efter en skada. Regelbunden träning gör nämligen att styrkan kommer tillbaka, det ska dock sägas att det kan ta månader innan ledbandet fått tillbaka sin normala funktion och styrka.<br class='nospacebr'/>Källa: Vinnare I långa loppet</span>",
                    "showNextButton": "0"
                },
                {
                    "ID": "343",
                    "type": "info",
                    "background": { "type": "image", "url": "3_5_4.jpg" },
                    "title": "",
                    "titlecenter": "false",
                    "textclass": "phototext",
                    "text": "<span class='faktatext'>Cirka 95 procent av skadorna inom friidrott är relaterade till överbelastningar. De vanligaste orsakerna till överbelastningar går ofta att finna i en obalans mellan träningsplanering och återhämtning, exempelvis:<br class='nospacebr'/>- Träningen är alltför ensidig, har för hög intensitet (för ”hård”).<br class='nospacebr'/>- Träningsdosen ökas för snabbt.<br class='nospacebr'/>- När träningen skiftar underlag, till exempel går från utomhus till inomhus.<br class='nospacebr'/>- Kroppen har inte, efter en tidigare skada, fått tillräckligt med tid att anpassa sig för höga träningsbelastningar (träningen ökas för snabbt).<br class='nospacebr'/>Källa: friskfriidrott.se</span>",
                    "showNextButton": "0"
                },

                //END Fakta om rehab 
                {
                    "ID": "35",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Tack för att du följt med Alex och hans träning!</span>",
                    "showNextButton": "0",
                    "gotoID": "huvudmeny"
                },
            ]
    };
    return self;

})({});


