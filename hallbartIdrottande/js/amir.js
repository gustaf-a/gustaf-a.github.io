var Case3_amir = (function (self) {
    
self.ID = {"text":"Case3_amir", "saveForUnlocked":"true", "unlockedID":"festresan","backgroundParallax":"0",
  "bottombar":
    "<div class='rightcorner'><div class='progresstext'></div></div><div class='progressbar'><div class='progresschapterthumbs'></div><div class='progresspercent'></div></div>" 
           /*<div class='toggleanimation' onclick='FS.toggleanimation();'>[Stäng av animationer]</div>
           <div onclick='FS.gotoID(\'avfallstrappan\');'>AVFALLSTRAPPAN</div>*/
};
 
self.preload = {"images":
[ {"url":"3_6.jpg"},
  {"url":"3_6_1.jpg"},
  {"url":"3_6_2.jpg"},
  {"url":"3_6_3.jpg"},
  {"url":"3_2_2.jpg"},
  {"url":"3_6_4.jpg"},
  {"url":"3_5_4.jpg"}
 
]};
   self.nodes = {"content": 
    [
    


   /*

    AMIR
    */

   {   "ID": "36a",
        "type":"info",
        "background":{"type":"image","url":"3_6.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>På festen finns även säsongsarbetaren Matthieu från Frankrike som är instruktör på dykkursen Amir har gått.</span>",
        "showNextButton":"0",
         "gotoIDBack":"33c"
       
    },       
       {   "ID": "36a0",
        "type":"info",
        "background":{"type":"image","url":"3_6_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>De dansar och skrattar mycket tillsammans och helt plötsligt...</span>",
        "showNextButton":"0"
       
    },       
      {   "ID": "36a1",
        "type":"info",
        "background":{"type":"image","url":"3_6_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>...befinner de sig i sängen i Matthieus bungaloo. <br> <span class='lovescript'>Amir är kåt och vill gärna ha sex, men han har ingen kondom</span><br class='nospacebr'/> och vill inte fråga om Matthieu har det. </span>",
        "showNextButton":"0",
       
    },
     {   "ID": "36b",
        "type":"info",
        "background":{"type":"image","url":"3_6_3.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Amir känner!</span>",
        "showNextButton":"0"
    },    
       {  "ID": "35b1",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_6_3.jpg"},
        
        "template":"clickwords",
        "savetodb_ID":"1",
        "nrOfItemsToFind":"3",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"true",
        "clickareas":[        
                            {
                                "text":"Lycka",
                                "dbID":"col1",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },{
                                "text":"Lättnad",
                                "dbID":"col2",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Stress",
                                "dbID":"col3",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Maktlös",
                                "dbID":"col4",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
                        {
                                "text":"Makt",
                                "dbID":"col5",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
                            {
                                "text":"Pirr",
                                "dbID":"col6",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Kåt",
                                "dbID":"col7",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Kärlek",
                                "dbID":"col8",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Osäker",
                                "dbID":"col9",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Trygg",
                                "dbID":"col10",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Försiktig",
                                "dbID":"col11",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Skam",
                                "dbID":"col12",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Nyfiken",
                                "dbID":"col13",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Rädd",
                                "dbID":"col14",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Oro",
                                "dbID":"col15",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            },
            {
                                "text":"Respekt",
                                "dbID":"col16",
                                "link":"",
                                  "textcontent":[{
                                    "header":"",
                                    "contenttext":""
                                }]
                            }
                ],
         "animation":"fade",
        "gotoID":"36c",
         "showNextButton":"-1"
       
    },      
          {   "ID": "36c",
        "type":"question", 
         "question_id":"7",
        "question":"Vad tror du Amir gör?",
        "html":"<span class='normaltext questiontext'>Vad tror du Amir gör?</span>",
         "background":{"type":"image","url":"3_6_3.jpg"},
        "answers":[
                            {"text":"Har sex utan kondom", "gotoID":"36c1"},
                            {"text":"Har inte sex alls", "gotoID":"36c2"}
                ]
         ,
         "showNextButton":"-1"
    },   
 {   "ID": "36c1",
        "type":"info",
        "background":{"type":"image","url":"3_6_3.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Amir och Mattieu har anal och oralsex utan kondom.<br>Efteråt ligger de och gosar och pratar och Amir går hem morgonen därpå.</span>",
        "showNextButton":"0",
        "gotoID":"36d"
       
    },
 {   "ID": "36c2",
        "type":"info",
        "background":{"type":"image","url":"3_6_3.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Amir och Mattieu fortsätter hångla och smeka varandra en stund, men bestämmer sig för att inte gå längre än så.<br>Efteråt ligger de och gosar och pratar och Amir går hem morgonen därpå.</span>",
        "showNextButton":"0",
        "gotoID":"36d",
        "gotoIDBack":"36c"
       
    },


    {   "ID": "36d",
        "type":"info",
        "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>På nästa sida följer ett quiz!<br> Gissa om det är <span class='lovescript'>ingen risk</span> , <span class='lovescript'>liten risk</span> eller <span class='lovescript'>stor risk</span> att <span class='lovescript'>klamydia</span> överförs vid olika typer av sex.</span>",
        "showNextButton":"0",
        "gotoIDBack":"36c"
       
    },
      {  "ID": "36d1",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>1/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Oralsex</h4>",
        
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Oralsex har liten risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Oralsex har liten risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Oralsex har liten risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36d2",
         "showNextButton":"-1"
       
    },      
    {  "ID": "36d2",
        "type":"D", 
      
        "titlecenter":"true",
       "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>2/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Fitta omsluter kuk</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Fitta omsluter kuk har stor risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Fitta omsluter kuk har stor risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Fitta omsluter kuk har stor risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36d3",
         "showNextButton":"-1"
       
    },     
     {  "ID": "36d3",
        "type":"D", 
      
        "titlecenter":"true",
         "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>3/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Hångel</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Hångel har ingen risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Hångel har ingen risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Hångel har ingen risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36d4",
         "showNextButton":"-1"
       
    },       
      {  "ID": "36d4",
        "type":"D", 
      
        "titlecenter":"true",
          "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>4/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Smeka och slicka anal</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Smeka och slicka anal har ingen risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Smeka och slicka anal har ingen risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Smeka och slicka anal har ingen risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36d5",
         "showNextButton":"-1"
       
    },       
     {  "ID": "36d5",
        "type":"D", 
      
        "titlecenter":"true",
          "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>5/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Smeka kön</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Smeka kön har liten risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Smeka kön har liten risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Smeka kön har liten risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36d6",
         "showNextButton":"-1"
       
    },      
{  "ID": "36d6",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>6/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Kön mot kön<br>(fitta+fitta / kuk+kuk)</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Kön mot kön (fitta+fitta / kuk+kuk) har liten risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Kön mot kön (fitta+fitta / kuk+kuk) liten risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Kön mot kön (fitta+fitta / kuk+kuk) har liten risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36d7",
         "showNextButton":"-1"
       
    },      
     {  "ID": "36d7",
        "type":"D", 
      
        "titlecenter":"true",
       "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>7/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Kuk i anal</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Kuk i anal har stor risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Kuk i anal har stor risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Kuk i anal har stor risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36d8",
         "showNextButton":"-1"
       
    },   
    {  "ID": "36d8",
        "type":"D", 
      
        "titlecenter":"true",
         "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"<span class='oneofx'>8/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Slicka bröst</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"klamydiaquiz", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='correctmodal'>RÄTT!</span>",
                                    "contenttext":"Slicka bröst har ingen risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Slicka bröst har ingen risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"<span class='wrongmodal'>FEL!</span>",
                                    "contenttext":"Slicka bröst har ingen risk att sprida klamydia"
                                }]
                            }
                ],
         "animation":"fade",
         "autoGotoID":"true",
        "gotoID":"36e",
         "showNextButton":"-1"
       
    },        

    {   "ID": "36e",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>Tycker du att det är <span class='factscript'>jobbigt att föreslå kondom</span> om du har sex där en kuk är inblandad?<br>Då kan du tänka så här: <span class='factscript'>kondom ger frihet!</span></span>",
        "showNextButton":"0"
    },
     {   "ID": "36e1",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>Med kondom kan du knulla utan att oroa dig för att få eller ge en könssjukdom som <br class='nospacebr'/>t.ex. hiv, klamydia eller gonorré!</span>",
        "showNextButton":"0"
    },

{   "ID": "36e2",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>Enligt undersökningen Kådiskollen (av RFSU, 2013) tycker de flesta att <span class='factscript'>en person som föreslår kondom är ansvarsfull, omtänksam och vuxen.</span></span>",
        "showNextButton":"0",
        "gotoID":"33c" //Festresan HUB
    }



]};
    return self;

})({});


