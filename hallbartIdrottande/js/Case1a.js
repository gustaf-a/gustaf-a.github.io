 //GET COORDS HERE: http://imagemap-generator.dariodomi.de/


var Case1a = (function(self){
self.ID = {"text":"Case1a", "bottombar":"", "saveForUnlocked":"false"};
self.preload = {"images":
[{"url":"3_4_2.jpg"},
{"url":"Antagning.jpg"},
{"url":"arena.jpg"},

   {"url":"menu.png"}

]};

 
self.nodes = {"content": [
//PASTE JSON HERE:


	{  	"ID": "10",
		"type":"info",
		"background":{"type":"image","url":"3_4_2.jpg"},
		"text":"<br><br><span class='normaltext'>Hur kan idrottande bli säkrare och vad kan du göra för att undvika vanliga problem?<br>Häng med i några olika situationer!<br><span class='instruction_touch'>Svep till höger</span><span class='instruction_notouch'>Klicka på pilen till höger</span> för att gå vidare.</span></div>",
        "justify":"center",
	
     	"showNextButton":"0"
	},
    {   "ID": "11",
        "type":"info",
        "background":{"type":"image","url":"3_4_2.jpg"},
        "title":"",
        "titlecenter":"true",
      "text":"<div class='extratopmargin'></div><span class='normaltext'>Hållbart Idrottande handlar om skador, sömn och kost.<br>Du får välja vilken person du vill följa och hur du tycker att den personen ska göra i olika situationer</span>",
    
       
         "showNextButton":"0"
    },
    {
        "ID": "12",
        "type": "info",
        "background": { "type": "image", "url": "Antagning.jpg" },
        "text": "<span class='normaltext'>Grattis! Du är en av 8 som blivit antagen till Riksidrottsgymnasiet. Inflyttning på internat sker den 15/8 och vi ser framemot att vara en del av din utbildning de närmaste tre åren.<br class='nospacebr'/> Vi ses till terminsstarten.<br class='nospacebr'/>Mvh Skolledningen.</span>",
        "title": "",
        "titlecenter": "true",
        "textclass": "phototext",
        "showNextButton": "0",
    },
    {
        "ID": "12a",
        "type": "info",
        "background": { "type": "image", "url": "arena.jpg" },
        "text": "<span class='normaltext'>Skolklassen tränar 6-8 pass i veckan och trots att träningen tar mycket tid är det annat som ska hinnas med så som studier, vänskapsrelationer och hushållning.</span>",
        "title": "",
        "titlecenter": "true",
        "textclass": "phototext",
        "showNextButton": "0",
    },
    

    {  "ID": "huvudmeny",
        "type":"hub", 
        "unlockedID":"main",
        "background":{"type":"image","url":"menu.png"},
        "hubimage":[
            {"url":"1_2.jpg"},
                        {"url":"1_2.jpg"},
                       {"url":"1_2.jpg"},
                        {"url":"1_2.jpg"},
                        {"url":"1_2.jpg"}
           
        ],
        "imagewidth":"640",
        "imageheight":"960",
        "bottombar":"#bottombar-main",


        "chapters":[        
                            {"icon":"", 
                                "ID":"0",
                                "caseName":"Case3_HI_Alex",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"20,218,291,203,303,478,81,507,86,490,35,491",
                                "callback":"Case3_HI_Alex"
                                },
                            {"icon":"", 
                                "ID":"1",
                                "caseName":"Case7_HI_Kim",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"335,375,609,350,634,621,599,626,606,635,401,667,412,643,362,649",
                                "callback":"Case7_HI_Kim"},
                               
                            {"icon":"", 
                                "ID":"2",
                                "caseName":"Case6_HI_Robin",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"53,535,319,636,244,870,252,889,222,893,218,906,173,889,40,893,54,869,42,848,53,846,2,823,1,664",
                                "callback":"Case6_HI_Robin" },

                            {"icon":"", 
                                "ID":"3",
                                "caseName":"sexigfakta",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"438,701,638,712,638,757,434,750,451,724", 
                                 "gotoID":"13"},

                            {"icon":"", 
                                "ID":"4",
                                "caseName":"tipslinks",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"387,785,638,776,637,841,385,857,403,817", 
                                 "gotoID":"14"},

                            {"icon":"", 
                                "ID":"5",
                                "caseName":"lararhandledning",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"360,874,510,871,639,879,636,930,357,932,377,902", 
                                "action":"download",
                                "actioncontext":"http://srhr.se/sites/default/files/Handledning_reslust.pdf"},
                            {"icon":"", 
                                "ID":"6",
                                "caseName":"facebook",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"547,60,551,44,575,26,590,26,607,36,619,59,612,81,594,95,567,92,551,76", 
                                 "action":"share",
                                 "actioncontext":"facebook"}, 
                             {"icon":"", 
                                "ID":"7",
                                "caseName":"google",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"548,152,554,136,575,123,590,126,610,136,615,162,607,181,586,194,565,187,551,172", 
                                 "action":"share",
                                 "actioncontext":"google"},      
                             {"icon":"", 
                                "ID":"8",
                                "caseName":"twitter",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"550,236,566,220,587,216,604,225,614,243,614,266,604,280,581,287,559,277,548,262,548,248", 
                                "action":"share",
                                 "actioncontext":"twitter"},         
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
        
        },
        {   "ID": "13",
        "type":"info",
        "background":{"type":"image","url":"menu.png"},
        "template":"mainfact",
        "text":"<span class='mainfactheader'>Sexig fakta</span><br><br><span class='mainfacttext'>Här kan du läsa på om vad som kan vara <span class='lovescript'>viktigt att veta</span> för att relationer och sex ska bli sköna, särskilt när du reser utomlands.<br><ul class='mainfactlinks'><li onclick='FS.gotoID(\"13a\");'>Lagstiftning</li><li onclick='FS.gotoID(\"13b\");'>Hälso- och sjukvård</li><li onclick='FS.gotoID(\"13c\");'>Preventivmedel</li><li onclick='FS.gotoID(\"13d\");'>Könssjukdomar</li><li onclick='FS.gotoID(\"13e\");'>Utsatt för sexualbrott</li></ul><br><a class='backtomenu' onclick='FS.gotoID(\"huvudmeny\");'></a><br><br></span>",
      
        "showNextButton":"-1"
    },
          {   "ID": "13a",
        "type":"info",
        "background":{"type":"image","url":"menu.png"},
        "template":"mainfact",
        "text":"<span class='mainfactheader'>Lagstiftning</span><br><br><span class='mainfacttext'><span class='lovescript'>Lagar ser olika ut i olika länder.</span> Är du i ett annat land måste du följa det landets lagstiftning. Om du bryter mot den kan du åtalas och dömas även om du inte är medborgare i landet.<br><br>Exempelvis kan det vara olagligt att göra <span class='lovescript'>abort</span> eller använda preventivmedel i vissa länder. Det kan också vara <span class='lovescript'>lagligt och/eller olagligt att köpa eller sälja sex.</span> I flera länder är det <span class='lovescript'>straffbart med olika typer av sex,</span> exempelvis samkönat sex.<br><br>Oavsett hur lagar ser ut, är det viktigt att komma ihåg att den som säljer sex har rätt till sina gränser i ett sexuellt möte. <span class='lovescript'>Ett ja och ett nej ska alltid respekteras.</span> Om du utnyttjar någon sexuellt som är under 15 år kan du dömas för sexuella övergrepp i Sverige, oavsett vad lagen i det landet du befinner dig i säger.<br><br><span class='mainfactheader small'>Tips!</span><br><br><ul><li><span class='lovescript'>Ta med kondom/femidom och preventivmedel från Sverige</span> för att skydda dig mot könssjukdomar och oönskad graviditet.</li><li>Ta reda på hur <span class='lovescript'>lagstiftning</span> om abort, preventivmedel, akut p-piller och olika sexuella praktiker/läggningar ser ut i olika länder.</li><li>Tänk efter innan du har <span class='lovescript'>sex på en offentlig plats.</span> Det kan vara förbjudet, även på stranden!</li><li>Ta reda på vad din <span class='lovescript'>reseförsäkring</span> täcker för sjukvård utomlands.</li></ul><br><a class='backtomenu' onclick='FS.gotoID(\"13\");'></a><br><br></span>",
       
        "showNextButton":"-1",
        "gotoID":"13",
        "gotoIDBack":"13"
    },
          {   "ID": "13b",
        "type":"info",
        "background":{"type":"image","url":"menu.png"},
      "template":"mainfact",
        "text":"<span class='mainfactheader'>Hälso- och sjukvård</span><br><br><span class='mainfacttext'>Vilken rätt du har till vård i andra länder kan skilja sig från Sverige. Både vilken vårdmottagning du ska vända dig till och hur mycket det kostar. Ungdomsmottagningar finns exempelvis inte överallt.<br><br><span class='lovescript'>I Sverige är det gratis att testa sig</span> för olika sexuellt överförbara infektioner (STI, könssjukdomar). Du kan göra det på ungdomsmottagning, vårdcentral, gynekologer och vissa student- och skolhälsovård. Även behandling av de vanligaste STI är gratis. <span class='lovescript'>I andra länder kan det se helt annorlunda ut.</span><br><br><span class='mainfactheader small'>Tips!</span><br><br><ul><li><span class='lovescript'>Ta med kondom/femidom och preventivmedel från Sverige</span> för att skydda dig mot könssjukdomar och oönskad graviditet.</li><li>Ta reda på vad din <span class='lovescript'>reseförsäkring</span> täcker för sjukvård utomlands. Reser du inom Europa kan du beställa ett Europeiskt sjukförsäkringskort hos Försäkringskassan.</li><li><span class='lovescript'>Undvik självmedicinering</span> och beställ inte receptbelagd medicin på nätet.</li><li>Om du haft osäkrare sex bör du <span class='lovescript'>testa dig eller följa upp en behandling</span> du fått utomlands när du är i Sverige igen.</li></ul><br><a class='backtomenu' onclick='FS.gotoID(\"13\");'></a><br><br></span>",
       
       "showNextButton":"-1",
        "gotoID":"13",
        "gotoIDBack":"13"
    },
          {   "ID": "13c",
        "type":"info",
        "background":{"type":"image","url":"menu.png"},
   "template":"mainfact",
        "text":"<span class='mainfactheader'>Preventivmedel</span><br><br><span class='mainfacttext'><span class='lovescript'>Tillgång och kvalitet på preventivmedel varierar</span> på olika ställen i världen. I en del länder kan det även vara <span class='lovescript'>olagligt att använda vissa preventivmedel.</span> Akut p-piller, vilket är en akutpreventivmetod, finns inte heller att få tag på överallt.<br><br><span class='lovescript'>I många länder är förekomsten av hiv och STI (könssjukdom) högre än i Sverige.</span> Den är ofta högre bland resenärer än befolkningen i allmänhet. Risken att få en könssjukdom <span class='lovescript'>beror framför allt på hur du har sex,</span> om du har osäkrare sex finns alltid en risk att få eller ge någon en könssjukdom, oavsett vilket land du är i.<br><br>Bär du på en obehandlad könssjukdom, som till exempel klamydia, är du <span class='lovescript'>mer mottaglig för andra infektioner.</span> Ta hand om din hälsa genom att ha säkrare sex. <span class='lovescript'>Kondom och femidom ger dig frihet</span> att kunna ha sex på en massa olika sätt utan att oroa dig!<br><br><span class='mainfactheader small'>Tips!</span><br><br><li>Ta reda på hur <span class='lovescript'>lagstiftning</span> om abort, preventivmedel och akut p-piller ser ut i olika länder. Även om akut p-piller är lagligt, kan det krävas ett läkarbesök för att få det utskrivet.</li> <li><span class='lovescript'>Ta med preventivmedel från Sverige</span> för att skydda dig mot könssjukdomar och oönskad graviditet.</li> <li><span class='lovescript'>Undvik självmedicinering</span> och beställ inte receptbelagd medicin på nätet.</li><li>Om du inte har kondom tillgängligt går det att ha <span class='lovescript'>sex som är säkrare!</span> Klicka <a onclick='FS.gotoID(\"36d\");'>här för att komma till Säkrare sex-skalan</a> och läs <a href='http://www.rfsu.se/Bildbank/Dokument/Praktikor/sakraresex_72.pdf?epslanguage=sv' target='_blank'>Säkrare sex med och utan kondom av RFSU</a></li></ul><br><a class='backtomenu' onclick='FS.gotoID(\"13\");'></a><br><br></span>",
       
        "showNextButton":"-1",
        "gotoID":"13",
        "gotoIDBack":"13"
    },
          {   "ID": "13d",
        "type":"info",
        "background":{"type":"image","url":"menu.png"},
        "template":"mainfact",
        "text":"<span class='mainfactheader'>Könssjukdomar<br><span class='smaller'>(även kallat STI – sexuellt överförbara infektioner)</span></span><br><br><span class='mainfacttext'><span class='lovescript'>I många länder är förekomsten av hiv och STI (könssjukdom) högre än i Sverige.</span> Den är ofta högre bland resenärer än befolkningen i allmänhet. Risken att få en könssjukdom <span class='lovescript'>beror framför allt på hur du har sex,</span> om du har osäkrare sex finns alltid en risk att få eller ge någon en könssjukdom, oavsett vilket land du är i.<br><br>Det syns oftast inte utanpå om personen har en könssjukdom. Och du kanske <span class='lovescript'>bär på en könssjukdom utan att ha symtom.</span> Bär du på en obehandlad könssjukdom är du mer mottaglig för andra infektioner. <span class='lovescript'>Ta därför hand om din hälsa genom att ha säkrare sex och testa dig regelbundet!</span><br><br><span class='lovescript'>Risken att få en STI eller hiv är störst vid vaginal- och analsex utan kondom.</span> Men vissa STI överförs även via oralsex, fingrar och leksaker. <br><br>Kondom och femidom ger frihet i att kunna ha sex på en massa olika sätt utan att oroa dig för könssjukdomar.<br><br><span class='mainfactheader small'>Tips!</span><br><br><li><span class='lovescript'>Ha alltid med dig kondom/femidom!</span> Ta med dig från Sverige eftersom det kan vara svårt att få tag på i andra länder.</li><li><span class='lovescript'>Testa dig för könssjukdomar innan du reser</span> så du vet din egen status.</li><li><span class='lovescript'>Läs på</span> om hiv, klamydia, kondylom, herpes, gonorré, syfilis och hepatit B och C. Vilka symtom ger de och vilken behandling finns det?</li><li>Om du haft oskyddat sex bör du testa dig och alltid <span class='lovescript'>följa upp en behandling</span> du fått utomlands när du är i Sverige igen.</li><li>Om du inte har kondom tillgängligt går det att ha <a href='http://www.rfsu.se/Bildbank/Dokument/Praktikor/sakraresex_72.pdf?epslanguage=sv' target='_blank'>sex som är säkrare!</a></li></ul><br><a class='backtomenu' onclick='FS.gotoID(\"13\");'></a><br><br></span>",
       
       "showNextButton":"-1",
        "gotoID":"13",
        "gotoIDBack":"13"
    },
          {   "ID": "13e",
        "type":"info",
        "background":{"type":"image","url":"menu.png"},
        "template":"mainfact",
        "text":"<span class='mainfactheader'>Sexuellt våld och utsatthet</span><br><br><span class='mainfacttext'>Sexuella trakasserier, våld och tvång finns i alla länder.<br><br><span class='lovescript'>Vid resor förändras en del trygghetsfaktorer</span> och det kan bli svårare att identifiera riskfyllda situationer. En ökad <span class='lovescript'>alkohol- och drogkonsumtion gör oss sämre på att sätta gränser</span> i olika situationer och vi kanske gör saker som vi dagen efter ångrar. Att bli utsatt för ett något, till exempel ett sexuellt övergrepp som t ex ofredande eller våldtäkt, kan vara särskilt <span class='lovescript'>jobbigt utomlands när vård och stöd inte är som i Sverige.</span> <br><br>Det är därför bra att veta att <span class='lovescript'>Svenska Utrikesdepartementet</span> (UD), som exempelvis finns på ambassader och konsulat i andra länder, <span class='lovescript'>hjälper svenskar som råkat illa ut utomlands.</span> De kan stötta brottsoffer med läkarkontakt, stödperson, advokat, tolk och resor hem. På <a class='normallink' href='http://www.regeringen.se/resklar' target='_blank'>www.regeringen.se/resklar</a> finns information, tips och kontaktuppgifter. <span class='lovescript'>Svenska kyrkan</span> kan också finnas som stöd.<br><br>Om du åker med en paketresa har <span class='lovescript'>researrangören stort ansvar</span> för sina resenärer.<br><span class='lovescript'>Försäkringsbolagens alarmcentraler</span> är bemannade dygnet runt och erbjuder en hjälp. <br><br>Om du är med om ett sexuellt övergrepp:<ol><li>Förflytta dig till en säker plats och be om hjälp.</li><li>Uppsök omedelbart sjukvård. För att bevis ska kunna säkras är det viktigt att du inte tvättar dig eller byter kläder.</li> <li>Kontakta ambassaden/konsulatet eller på internet om du är utomlands.</li> <li>Gör en brottsanmälan till den lokala polisen i landet du är i.</li> <li>Sök krishjälp.</li><li>Kontakta polis och vård för mer hjälp när du är tillbaka i Sverige.</li></ol><br><a class='backtomenu' onclick='FS.gotoID(\"13\");'></a><br><br></span>",
       
       "showNextButton":"-1",
        "gotoID":"13",
        "gotoIDBack":"13"
    },
          {   "ID": "14",
        "type":"info",
        "background":{"type":"image","url":"menu.png"},

        "text":"<span class='mainfactheader'>Livsviktiga tips och länkar</span><br><br><span class='mainfacttext'><span class='mainfactheader small'>Tips!</span><br><br><ul><li>Ladda ner viktiga telefonnummer för landet du ska till via <a href='http://www.regeringen.se/resklar' target='_blank'>www.regeringen.se/resklar</a></li><li>Ha med kontaktuppgifter till ditt försäkringsbolag och kika igenom din reseförsäkring om vad som gäller vid nödfall.</li><li>Ring och maila hem så ofta du kan och berätta var du befinner dig.</li><li>Ha kontakt med dina researrangörer om du åker med en paketresa (t ex charterresa).</li><li>Kontakta hälso- och sjukvården när du är i Sverige för att få vidare vård och stöd.</li></ul><br><br><span class='mainfactheader small'>Länkar</span><br><br><ul><li><a href='http://www.umo.se' target='_blank'>UMO.se – hitta din ungdomsmottagning och en massa bra information om sex, kroppen, känslor och relationer.</a></li><li><a href='http://www.1177.se' target='_blank'>1177.se – Sjukvårdsupplysningen/Vårdguiden med bra fakta och råd om hälsa och vård.</a></li><li><a href='http://www.regeringen.se/resklar' target='_blank'>regeringen.se/resklar – råd och information inför och under din resa. Ladda ner viktiga telefonnummer inom olika länder!</a></li><li><a href='http://www.tjejjouren.se' target='_blank'>tjejjouren.se – om du som identifierar dig som tjej behöver någon att prata eller chatta med.</a></li><li><a href='http://www.killfragor.se' target='_blank'>killfrågor.se – om du som identifierar dig som kille behöver någon att prata eller chatta med.</a></li><li><a href='http://www.preventell.se' target='_blank'>preventell.se eller 020-667788 – hjälplinje vid oönskad sexualitet, om du känner oro för tankar och handlingar, eller är rädd att göra dig själv eller andra illa.</a></li><li><a href='http://www.rfsu.se/Bildbank/Dokument/Praktikor/sakraresex_72.pdf?epslanguage=sv' target='_blank'>Säkrare sex med och utan kondom av RFSU</a></li><li><a href='http://www.folkhalsomyndigheten.se' target='_blank'>folkhalsomyndigheten.se – Folkhälsomyndigheten med information om sexuell hälsa</a></li><li><a href='http://www.rfsu.se' target='_blank'>rfsu.se – Riksförbundet för sexuell upplysning</a></li><li><a href='http://www.rfslungdom.se' target='_blank'>rfslungdom.se – Riksförbundet för homosexuella, bisexuell och transpersoners rättigheter ungdomsförbund</a></li></ul><br><a class='backtomenu' onclick='FS.gotoID(\"huvudmeny\");'></a><br><br></span>",
       "template":"mainfact",

       "showNextButton":"-1",
        "gotoID":"huvudmeny",
        "gotoIDBack":"huvudmeny"
    },





//END OF JSON

	  ]
};

	return self;

})({});

