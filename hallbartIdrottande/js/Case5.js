var Case5 = (function(self){
self.ID = {"text":"Case5", "saveForUnlocked":"true", "unlockedID":"main","backgroundParallax":"50",
 "bottombar":
    "<div class='rightcorner'><div class='nolink'>Del 4</div><div class='progresstext'></div></div><div class='toggleanimation' onclick='FS.toggleanimation();'>[Stäng av animationer]</div><div class='progressbar'><div class='progresschapterthumbs'></div><div class='progresspercent'></div></div>" //<div onclick='FS.gotoID(\'avfallstrappan\');'>AVFALLSTRAPPAN</div>
};
self.preload = {"images":
[{"url":"bg.png"}

]};

   self.nodes = {"content": 
    [
    



    {   "ID": "51",
    "type":"A",
    "background":{"type":"image","url":"bg.png"},
    "title":"5.1 Så här gör du del 2.2",
    "image": [
            {"url":"5_1.jpg"}
            ],
    "text":"Inledningstext",
    "ul": [
            {"li":"Minnespunkt", "delay":"0"},
            {"li":"Minnespunkt", "delay":"3"},
            {"li":"Minnespunkt", "delay":"6"} 
            ],
    "ul_delay":"5",
    "audio":"5_1.mp3",
    "showNextButton":"0",
       "gotoIDBack":"huvudmeny"
    },


    {   "ID": "52",
    "type":"A",
    "background":{"type":"image","url":"bg.png"},
    "title":"5.2 Starta Dagen",
    "image": [
            {"url":"5_2.jpg"}
            ],
    "text":"Inledningstext",
    "ul": [
            {"li":"Minnespunkt", "delay":"0"},
            {"li":"Minnespunkt", "delay":"3"},
            {"li":"Minnespunkt", "delay":"6"} 
            ],
    "ul_delay":"5",
    "audio":"5_2.mp3",
    "showNextButton":"0"
    },



     {  "ID": "53",
        "type":"C", 
        "title":"5.3 Presentationsövningar",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_3.mp3",
        "template":"twocols",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {
                                "url":"5_3_1.jpg",
                                "link":" assets/presentation_kanner_varandra.pdf",
                                  "textcontent":[{
                                    "header":"Länken öppnas i ett nytt fönster.",
                                    "contenttext":"Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/presentation_kanner_varandra.pdf' target='_blank'>här</a>"
                                }]
                            },
                              {
                                "url":"5_3_2.jpg",
                                "link":" assets/presentation_kanner_inte_varandra.pdf",
                                  "textcontent":[{
                                    "header":"Länken öppnas i ett nytt fönster.",
                                    "contenttext":"Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/presentation_kanner_inte_varandra.pdf' target='_blank'>här</a>"
                                }]
                            }        
                            
                ],
         "animation":"fade",
         "showNextButton":"0"
       
    },
 
 {   "ID": "55",
    "type":"A",
    "background":{"type":"image","url":"bg.png"},
    "title":"5.5 Utgångspunkter och bakgrund",
    "image": [
            {"url":"5_5.jpg"}
            ],
    "text":"Inledningstext",
    "ul": [
            {"li":"Minnespunkt", "delay":"0"},
            {"li":"Minnespunkt", "delay":"3"},
            {"li":"Minnespunkt", "delay":"6"} 
            ],
    "ul_delay":"5",
    "audio":"5_5.mp3",
    "showNextButton":"0"
    },


 {   "ID": "56",
    "type":"A",
    "background":{"type":"image","url":"bg.png"},
    "title":"5.6 Lär känna materialet",
    "image": [
            {"url":"5_6.jpg"}
            ],
    "text":"Inledningstext",
    "ul": [
            {"li":"Minnespunkt", "delay":"0"},
            {"li":"Minnespunkt", "delay":"3"},
            {"li":"Minnespunkt", "delay":"6"} 
            ],
    "ul_delay":"5",
    "audio":"5_6.mp3",
    "showNextButton":"0"
    },

     {  "ID": "57",
        "type":"C", 
        "title":"5.7 Lär känna materialet",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_5.mp3",
       
        "template":"threecols",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {   
                                "url":"5_7_1.jpg",
                                "link":"assets/dummy.zip",
                                "forcedownload":"true",
                                  "textcontent":[{
                                    "header":"Filen sparas på din dator.",
                                    "contenttext":"Filen sparas som en zip-fil.<br>Dubbelklicka på zip-filen i mappen Hämtade filer på din dator, därefter kan du dra/flytta videofilen till t.ex skrivbordet."
                                }]
                            }
                ],
         "animation":"fade",
         "showNextButton":"0"
       
    },

 {  "ID": "58",
        "type":"C", 
        "title":"5.8 Lär känna materialet - Övning",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_8.mp3",
        "template":"threecols",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {
                                "url":"5_8_1.jpg",
                                "link":"assets/egetarbete.pdf",
                                  "textcontent":[{
                                    "header":"Eget arbete (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/egetarbete.pdf' target='_blank'>här</a>"
                                }]
                            },
                             {
                                "url":"5_8_2.jpg",
                                "link":"assets/grupparbete.pdf",
                                  "textcontent":[{
                                    "header":"Grupparbete (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/grupparbete.pdf' target='_blank'>här</a>"
                                }]
                            },
                             {
                                "url":"5_8_2.jpg",
                                "link":"assets/rundan.pdf",
                                  "textcontent":[{
                                    "header":"Rundan (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/rundan.pdf' target='_blank'>här</a>"
                                }]
                            }              
                            
                ],
         "animation":"fade",
         "showNextButton":"0"
       
    },

    {   "ID": "59",
    "type":"A",
    "background":{"type":"image","url":"bg.png"},
    "title":"5.9 Aktivt lärande",
    "image": [
            {"url":"5_9.jpg"}
            ],
    "text":"Inledningstext",
    "ul": [
            {"li":"Minnespunkt", "delay":"0"},
            {"li":"Minnespunkt", "delay":"3"},
            {"li":"Minnespunkt", "delay":"6"} 
            ],
    "ul_delay":"5",
    "audio":"5_9.mp3",
    "showNextButton":"0"
    },

 {  "ID": "510",
        "type":"D", 
        "title":"5.10 Lokalanpassning",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_10.mp3",
        "image": [
            {"url":"5_10.jpg"}
            ],
        "template":"clickwords",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "clickareas":[        
                            {
                                "text":"Klickbart_ord1",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            },
                             {
                                "text":"Klickbart_ord2",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            },
                             {
                                "text":"Klickbart_ord3",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            }
 
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },


     {  "ID": "511",
        "type":"C", 
        "title":"5.11 Lokalanpassning grupparbete",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_11.mp3",
        "template":"twocols",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {
                                "url":"5_8_1.jpg",
                                "link":"assets/mindregrupp.pdf",
                                  "textcontent":[{
                                    "header":"Mindre grupp (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/mindregrupp.pdf' target='_blank'>här</a>"
                                }]
                            },
                             {
                                "url":"5_8_2.jpg",
                                "link":"assets/storgrupp.pdf",
                                  "textcontent":[{
                                    "header":"Stor grupp (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/storgrupp.pdf' target='_blank'>här</a>"
                                }]
                            }        
                            
                ],
         "animation":"fade",
         "showNextButton":"0"
       
    },



 {  "ID": "512",
        "type":"D", 
        "title":"5.12 Att arbeta med hitta rätt",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_12.mp3",
        "image": [
            {"url":"5_12.jpg"}
            ],
        "template":"clickwords",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "clickareas":[        
                            {
                                "text":"Klickbart_ord1",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            },
                             {
                                "text":"Klickbart_ord2",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            },
                             {
                                "text":"Klickbart_ord3",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            }
 
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },


     {  "ID": "513",
        "type":"C", 
        "title":"5.13 Att arbeta med Hitta Rätt - Övning",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_13.mp3",
        "template":"twocols",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {
                                "url":"5_13_1.jpg",
                                "link":"assets/reflektion.pdf",
                                  "textcontent":[{
                                    "header":"Reflektion (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/reflektion.pdf' target='_blank'>här</a>"
                                }]
                            },
                             {
                                "url":"5_13_2.jpg",
                                "link":"assets/pararbete.pdf",
                                  "textcontent":[{
                                    "header":"Par-arbete (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/pararbete.pdf' target='_blank'>här</a>"
                                }]
                            }        
                            
                ],
         "animation":"fade",
         "showNextButton":"0"
       
    },

    {  "ID": "514",
        "type":"D", 
        "title":"5.14 Vinster",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_14.mp3",
        "template":"clickwords",
        "nrOfItemsToFind":"4",
        "clicktype":"text", //"clicktype":"images"
        "clickareas":[        
                            {
                                "text":"Trygghet & Kvalitetssäkring",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Trygghet & Kvalitetssäkring",
                                    "contenttext":"Arbetet med Hitta rätt ger en trygghet åt personalen då det är ett tydligt verktyg när man jobbar med ensamkommande ungdomar. Det hjälper på så sätt till att kvalitetssäkra arbetet med ungdomarna."
                                }]
                            },

                            
              
                            {
                                "text":"Synliggörande & Delaktighet",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Synliggörande & Delaktighet",
                                    "contenttext":"Hitta rätt synliggör lärandet för ungdomarna och fungerar som ett stöd för dem. Det gör ungdomarna delaktiga i sin utveckling mot ett mer självständigt liv."
                                }]
                            },
                            {
                                "text":"Inflytande",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Inflytande",
                                    "contenttext":"Ungdomarnas inflytande är ett redskap för att ta del i utformandet av sin vård i genomförandeplanen."
                                }]
                            },
                            {
                                "text":"Samarbete",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Samarbete",
                                    "contenttext":"Hitta rätt kan ge ett enklare samarbete med andra aktörer runt ungdomen, då det tydliggör arbetet i boendet för samarbetspartners så som skola och gode män."
                                }]
                            }               
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },


 {  "ID": "515",
        "type":"C", 
        "title":"5.15 Vinster - Övning",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_15.mp3",
        "template":"",
        "nrOfItemsToFind":"1",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {
                                "url":"5_15_1.jpg",
                                "link":"assets/ovning_vinster.pdf",
                                  "textcontent":[{
                                    "header":"Övning - Vinster (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/ovning_vinster.pdf' target='_blank'>här</a>"
                                }]
                            }
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },




 {  "ID": "516",
        "type":"D", 
        "title":"5.16 Tips från Göteborgs stad för att utforma Hitta Rätt-arbetet",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_16.mp3",
        "image": [
            {"url":"5_16.jpg"}
            ],
        "template":"clickwords",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "clickareas":[        
                            {
                                "text":"Klickbart_ord1",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            },
                             {
                                "text":"Klickbart_ord2",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            },
                             {
                                "text":"Klickbart_ord3",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Header",
                                    "contenttext":"Text"
                                }]
                            }
 
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },



     {  "ID": "517",
        "type":"C", 
        "title":"5.17 Hur vill ni göra för att utforma ert hitta Rätt-arbete? - Övning",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_17.mp3",
        "template":"twocols",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {
                                "url":"5_17_1.jpg",
                                "link":"assets/swot-analys.pdf",
                                  "textcontent":[{
                                    "header":"SWOT-analys (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/swot-analys.pdf' target='_blank'>här</a>"
                                }]
                            },
                             {
                                "url":"5_17_2.jpg",
                                "link":"assets/handlingsplan.pdf",
                                  "textcontent":[{
                                    "header":"Handlingsplan(PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/handlingsplan.pdf' target='_blank'>här</a>"
                                }]
                            }        
                            
                ],
         "animation":"fade",
         "showNextButton":"0"
       
    },

    {   "ID": "518",
    "type":"A",
    "background":{"type":"image","url":"bg.png"},
    "title":"5.18 Utvärdering",
    "image": [
            {"url":"5_18.jpg"}
            ],
    "text":"Inledningstext",
    "ul": [
            {"li":"Minnespunkt", "delay":"0"},
            {"li":"Minnespunkt", "delay":"3"},
            {"li":"Minnespunkt", "delay":"6"} 
            ],
    "ul_delay":"5",
    "audio":"5_18.mp3",
    "showNextButton":"0"
    },

    {  "ID": "519",
        "type":"C", 
        "title":"5.19 Utvärdering - Övning",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_19.mp3",
        "template":"twocols",
        "nrOfItemsToFind":"2",
        "clicktype":"images", //"clicktype":"text"
        "clickareas":[        
                            {
                                "url":"5_19_1.jpg",
                                "link":"assets/ordmoln.pdf",
                                  "textcontent":[{
                                    "header":"Ordmoln(PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/ordmoln.pdf' target='_blank'>här</a>"
                                }]
                            },
                             {
                                "url":"5_19_2.jpg",
                                "link":"assets/ja_nej_fraga.pdf",
                                  "textcontent":[{
                                    "header":"Ja/Nej-fråga (PDF)",
                                    "contenttext":"Länken öppnas i ett nytt fönster. Om din webbläsare blockerar popup-fönster kan du klicka <a href='assets/ja_nej_fraga.pdf' target='_blank'>här</a>"
                                }]
                            }        
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },





 {  "ID": "520",
        "type":"F", 
        "image": [
            {"url":"kontrollfraga.jpg"} 
            ],
        "title":"Kontrollfråga 1 av 3",
          "question":"Fall/fråga formuleras här",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_20.mp3",
        "template":"clickquestions",
        "nrOfItemsToFind":"1",
        "clicktype":"question", //"clicktype":"images"
        "clickareas":[        
                            {
                                "text":"Svar 1",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Svar 1",
                                    "contenttext":"Text 1"
                                }]
                            },
                             {
                                "text":"Svar 2",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Svar 2",
                                    "contenttext":"Text 2"
                                }]
                            }
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },






 {  "ID": "521",
        "type":"F", 
        "image": [
            {"url":"kontrollfraga.jpg"} 
            ],
        "title":"Kontrollfråga 2 av 3",
        "question":"Fall/fråga formuleras här",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_21.mp3",
        "template":"clickquestions",
        "nrOfItemsToFind":"1",
        "clicktype":"question", //"clicktype":"images"
        "clickareas":[        
                            {
                                "text":"Svar 1 (fråga 2)",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Svar 1  (fråga 2)",
                                    "contenttext":"Text 1"
                                }]
                            },
                             {
                                "text":"Svar 2 (fråga 2)",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Svar 2 (fråga 2)",
                                    "contenttext":"Text 2"
                                }]
                            }
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },
     {  "ID": "522",
        "type":"F", 
        "image": [
            {"url":"kontrollfraga.jpg"} 
            ],
        "title":"Kontrollfråga 3 av 3",
        "question":"Fall/fråga för fråga 3 formuleras här",
        "background":{"type":"image","url":"bg.png"},
        "audio":"5_22.mp3",
        "template":"clickquestions",
        "nrOfItemsToFind":"1",
        "clicktype":"question", //"clicktype":"images"
        "clickareas":[        
                            {
                                "text":"Svar 1 (fråga 3)",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Svar 1  (fråga 3)",
                                    "contenttext":"Text 1"
                                }]
                            },
                             {
                                "text":"Svar 2  (fråga 3)",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Svar 2 (fråga 3)",
                                    "contenttext":"Text 2"
                                }]
                            }
                            
                ],
         "animation":"fade",
         "showNextButton":"-1",
       
    },
     {   "ID": "523",
    "type":"B",
    "title":"5.23 Avrundning",
    "background":{"type":"image","url":"bg.png"},
    "sequences":[
                {
                "sequenceID":"0",
                "type":"video",
                "url":"http://player.vimeo.com/video/46926279"
                }],
   
    "showNextButton":"0"
    },

    {   "ID": "6.1",
        "type":"question", 
            "question_id":"6.1", //must be unique
        
        "question":"Sluttest fråga 1",
        "background":{"type":"image","url":"bg.png"},
        "answers":[
                            {"text":"Svar 1"},  //,"gotoID":"2.1"
                            {"text":"Svar 2"},
                            {"text":"Svar 3"}
                           ]
         ,
         
         "showNextButton":"-1"
    },

    {   "ID": "6.2",
        "type":"question", 
            "question_id":"6.1", //must be unique
        
        "question":"Sluttest fråga 2",
        "background":{"type":"image","url":"bg.png"},
        "answers":[
                            {"text":"Svar 1"},  //,"gotoID":"2.1"
                            {"text":"Svar 2"},
                            {"text":"Svar 3"}
                           ]
         ,
         
         "showNextButton":"-1",
         "gotoID":"huvudmeny"
    }

]};


    return self;

})({});


