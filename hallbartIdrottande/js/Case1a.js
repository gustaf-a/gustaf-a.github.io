 //GET COORDS HERE: http://imagemap-generator.dariodomi.de/


var Case1a = (function(self){
self.ID = {"text":"Case1a", "bottombar":"", "saveForUnlocked":"false"};
self.preload = {"images":
[{"url":"3_4_2.jpg"},
{"url":"Antagning.jpg"},
{"url":"Allra_first_sidan.jpg"},
{"url":"arena.jpg"},
{"url":"FramsidaNy.jpg"}
]};

 
self.nodes = {"content": [
//PASTE JSON HERE:


	{  	"ID": "10",
		"type":"info",
		"background":{"type":"image","url":"Allra_first_sidan.jpg"},
		"text":"<br><br><span class='normaltext'>Vad kan du göra för att ditt idrottande ska bli mer hållbart?<br>Häng med Alex, Kim och Robin på deras resa till hållbart idrottande<br><span class='instruction_touch'>Svep till höger</span><span class='instruction_notouch'>Klicka på pilen till höger</span> för att gå vidare.</span></div>",
        "justify":"center",
	
     	"showNextButton":"0"
	},
    {   "ID": "11",
        "type":"info",
        "background":{"type":"image","url":"Allra_first_sidan.jpg"},
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
        "background":{"type":"image","url":"FramsidaNy.jpg"},
        "hubimage":[
            {"url":"FramsidaNy.jpg"},
                        // {"url":"FramsidaNy.jpg"},
        //                {"url":"FramsidaNy.jpg"},
        //                 {"url":"FramsidaNy.jpg"},
        //                 {"url":"FramsidaNy.jpg"}
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
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
        
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

