var Case6_HI_Robin = (function (self) {

    self.ID = {
        "text": "Case6_HI_Robin", "saveForUnlocked": "true", "unlockedID": "main", "backgroundParallax": "0",
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
            { "url": "currygrytafärdig.jpg" },
            { "url": "currypizza.jpg" },

            { "url": "bild_3.png" },
            { "url": "bild_4.png" },
            { "url": "bild_5.png" },
            { "url": "bild_8.png" },
            { "url": "bild_10.png" },
            { "url": "bild_11.png" },
            { "url": "gym.jpg" },

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

            { "url": "3_5_4.jpg" }

            ]
    };
    self.nodes = {
        "content":
            [


                // ROBIN

                {
                    "ID": "60",
                    "type": "info",
                    "background": { "type": "image", "url": "bild_8.png" },
                    "text": "<span class='normaltext instruktionstext'><span class='instruction_touch'>Swipe:a från höger till vänster för att navigera.</span><span class='instruction_notouch'>Klicka på pilarna till höger och vänster för att navigera.</span></span>",

                    "justify": "center",
                    "showNextButton": "0",
                    "gotoIDBack": "huvudmeny",
                },
                {
                    "ID": "61",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Det är fredag förmiddag. Robin och hennes klass har precis avslutat dagens träningspass. Det är äntligen dags för lunch! Robin har sedan träningspasset inleddes varit hungrig och är nu vrålhungrig. På dagens meny står curry, en av Robins favoriträtter</span>",
                    "showNextButton": "0"
                },               

                {
                    "ID": "62",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Robins kompisar frågar om hon inte hellre vill hänga med och käka lunch på stan istället. De vill testa det nya pizzastället i centrum</span>",
                    "showNextButton": "0"
                },
                {
                    "ID": "62a",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Robin har ingen lust att lämna sina närmaste kompisar. Samtidigt är hon mer sugen på att äta i skolmatsalen, inte minst eftersom tränaren tjatat om att det är viktigt att grunda med bra mat inför tävlingar för att prestera på topp.</span>",
                    "showNextButton": "0"
                },
                {
                    "ID": "63",
                    "type": "question",
                    "question_id": "10",
                    "question": "Vad ska Robin göra?",
                    "html": "<span class='normaltext'>Vad ska Robin göra?</span>",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "answers": [
                        { "text": "Gå och äta i matsalen", "gotoID": "63a1" },
                        { "text": "Gå med kompisarna till pizzastället", "gotoID": "63b1" },
                    ]
                    ,
                    "showNextButton": "-1"
                },
                //Matsalen
                {
                    "ID": "63a1",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Robin förklarar för kompisarna att hon inte vill lägga pengar på lunch ute, när det blir god mat i skolan. Hon bestämmer sig därför att gå till matsalen själv. Dessutom är det tävlingar under morgondagen, och Robin vill ha en så optimal uppladdning som möjligt.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "63a2",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>En av kompisarna lägger då kommentaren: Sluta vara så tråkig, är du rädd för lite skräpmat? Du följer ju aldrig med...</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "63a3",
                    "type": "info",
                    "background": { "type": "image", "url": "currygrytafärdig.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>I matsalen träffar Robin andra klasskompisar och de har riktigt trevligt. Currygrytan var supergod men Robin kan inte sluta tänka på kommentaren hon fick innan lunchen. Hon gjorde ett bra val gällande hennes uppladdning inför helgens tävling men gjorde hon ett bra val att skippa lunchen tillsammans med kompisarna ytterligare en gång?</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "63a4",
                    "type": "info",
                    "background": { "type": "image", "url": "sprint.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Lördagens tävling blev en succé. Robin slog sin tuffaste konkurrent Sofia. På kvällen är hon glad och lättad över framgångarna under dagen, men hon har svårt att släppa kommentarerna som hon fick under gårdagen. Prioriterar jag bort mina vänner för mycket? Hur kommer mitt förhållande till mina vänner att påverkas av mina val?</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "63a5",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Måndagen kommer och Robin åker till skolan. Hon träffar sitt kompisgäng i korridoren som frågar hur helgen varit. Det visar sig att hon oroat sig i onödan och allt kändes snabbt som vanligt.</span>",
                    "navigationDirection": "fade",
                    "gotoID": "63abMatSlut",
                    "showNextButton": "0"
                },
                //END OF Matsalen

                //Pizzastället med kompisarna
                {
                    "ID": "63b1",
                    "type": "info",
                    "background": { "type": "image", "url": "pizza.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Robin och kompisarna går till pizzastället. Hon beställer en pizza och en stor cola. Det var gott och stället var lika bra som de hade hört. När de är klara går de tillbaka till skolan för svenskalektionen som börjar efter lunch.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0",
                    "gotoIDBack": "63"
                },
                {
                    "ID": "63b2",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>I korridoren möter Robin och gänget de andra klasskompisarna. De märkte att de inte hade varit i matsalen och frågar var de hade ätit lunch. Robin svarar att de testat det nya pizzastället.<br> Sofia som har varit Robins tuffaste konkurrent den senaste terminen säger då: 'Jasså... snabbmat igen'<br> Robin tar illa upp trots att denna fredagslunch var ett undantag och tänker på om hon gjorde rätt val, det är ju ändå tävling i helgen.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "63b3",
                    "type": "info",
                    "background": { "type": "image", "url": "gym.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Lördagen kommer och det är tävlingsdags. Robin känner sig i bra form, och hoppas att hon äntligen ska lyckas slå Sofia. De har varit otroligt jämna under de senaste träningarna så det kommer vara små marginaler som skiljer dem åt. Tänk om valet vid lunchen igår kommer vara det avgörandet? Tränaren har ju alltid sagt att uppladdningen är det viktigaste.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0"
                },
                {
                    "ID": "63b4",
                    "type": "info",
                    "background": { "type": "image", "url": "sprint.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Under tävlingen så lyckades Robin stå för en stark prestation och besegrade Sofia. Hon hade oroat sig i onödan.</span>",
                    "navigationDirection": "fade",
                    "gotoID": "63abMatSlut",
                    "showNextButton": "0"
                },

                //END OF Pizzastället med kompisarna

                //SHARED ENDING
                {
                    "ID": "63abMatSlut",
                    "type": "info",
                    "background": { "type": "image", "url": "currypizza.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Oberoende vilket val du gör, äta snabbmat eller skolmat spelar det ingen roll om du sköter din kost över tid. Att äta snabbmat någon gång då och då kommer inte att påverka dina träningsprestationer. Det handlar om att träna och leva hållbart och att majoriteten av valen är bra. Att må bra utanför friidrott är minst lika viktigt för att kunna prestera.</span>",
                    "navigationDirection": "fade",
                    "showNextButton": "0",
                    "gotoID": "64",
                },
                //END OF SHARED ENDING

                //Fakta om rehab 
                {
                    "ID": "64",
                    "type": "info",
                    "background": { "type": "image", "url": "3_5_4.jpg" },
                    "title": "",
                    "titlecenter": "false",
                    "textclass": "phototext",
                    "text": "<span class='faktatext'>Syftet med att äta är att få energi, energi till att leva livet och en ganska stor del av ditt liv är kanske just friidrottsträning och då krävs det ännu mer energi för att den ska räcka till såväl friidrottsträningen som till livet i stort.<br>En friidrottande ungdom har – jämfört med ungdomar som inte är fysiskt aktiva i samma omfattning – vanligen förhöjt behov av energi och näring. För att tillgodose det behovet är det viktigt att äta en bra varierad kost och tillräcklig mängd. Det är dessutom extra viktigt med måltidsplanering för såväl prestation som för återhämtning i samband med träning och tävling.<br class='nospacebr'/> <a href='https://www.friskfriidrott.se/portfolio/aterhamtning/#1' target='_blank'>Källa: Frisk Friidrott</a></span>",
                    "showNextButton": "0",
                    "gotoIDBack": "63"
                },
                //END Fakta om rehab 
                {
                    "ID": "65",
                    "type": "info",
                    "background": { "type": "image", "url": "arena.jpg" },
                    "title": "",
                    "titlecenter": "true",
                    "textclass": "phototext",
                    "text": "<span class='normaltext'>Tack för att du följt med Robin och hennes tankar kring kost!</span>",
                    "showNextButton": "0",
                    "gotoID": "huvudmeny"
                },
            ]
    };
    return self;

})({});


