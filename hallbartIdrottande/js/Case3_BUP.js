var Case3 = (function (self) {
    
self.ID = {"text":"Case3", "saveForUnlocked":"true", "unlockedID":"main","backgroundParallax":"0",
  "bottombar":
    "<div class='rightcorner'><div class='nolink'>Festresan</div><div class='progresstext'></div></div><div class='progressbar'><div class='progresschapterthumbs'></div><div class='progresspercent'></div></div>" 
           /*<div class='toggleanimation' onclick='FS.toggleanimation();'>[Stäng av animationer]</div>
           <div onclick='FS.gotoID(\'avfallstrappan\');'>AVFALLSTRAPPAN</div>*/
};
 
self.preload = {"images":
[{"url":"3_0.jpg"},
{"url":"3_1.jpg"},
 {"url":"3_2.jpg"},
 {"url":"3_2_1.jpg"},
 {"url":"3_2_2.jpg"},
  {"url":"3_3.jpg"},
  {"url":"3_3_1.jpg"},
  {"url":"3_3_2.jpg"},
 {"url":"3_3c1.jpg"},
  {"url":"3_3c2.jpg"},
  {"url":"3_3c3.jpg"},
  {"url":"3_3c4.jpg"},
 {"url":"3_6_1.jpg"},
  {"url":"3_6_2.jpg"},
  {"url":"3_6_4.jpg"},
  {"url":"3_5_4.jpg"},
  {"url":"3_4_1.jpg"},
  {"url":"3_4_2.jpg"},
  {"url":"3_5_1.jpg"},
  {"url":"3_5_2.jpg"},
  {"url":"3_7.jpg"},
  {"url":"3_9.jpg"},
  {"url":"3_11.jpg"}
 
]};
   self.nodes = {"content": 
    [
    



    {   "ID": "30",
    "type":"info",
    "background":{"type":"image","url":"3_0.jpg"},
    "text":"<span class='normaltext instruktionstext'>Swipe:a från höger till vänster för att navigera.</span>",
    "justify":"center",
    "showNextButton":"0",
    "gotoIDBack":"huvudmeny",
    },
     {   "ID": "31",
        "type":"info",
        "background":{"type":"image","url":"3_1.jpg"},
        "title":"",
        "titlecenter":"true",
      "text":"<div class='sms'>Brorsan!<br>Studentfesten igår var nice :P Imorgon drar vi till Thailand för två veckor av party och relax. See you later google translator! //Peter</div>",
    
        "imagecenter":"true",
         "showNextButton":"0"
    },
        
    {   "ID": "32",
        "type":"info",
        "background":{"type":"image","url":"3_2.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Vännerna Amir, Peter och Victor <span class='lovescript'>trivs på en varm thailändsk ö.</span></span>",
        "showNextButton":"0"
    },
     {   "ID": "32a",
        "type":"info",
        "background":{"type":"image","url":"3_2_1.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Dagarna fylls med utflykter, shopping och dykkurs. De lär känna många andra sköna personer från hela världen.</span>",
        "showNextButton":"0"
    },
    
      {   "ID": "33a",
        "type":"info",
        "background":{"type":"image","url":"3_2_2.jpg"},
        "title":"",
        "titlecenter":"true",
       "textclass":"phototext",
        "text":"<span class='normaltext'>Kvällarna är heta och <span class='lovescript'>alltid är det fest någonstans</span></span>",
        "navigationDirection":"fade",
        "showNextButton":"0"
    },
         {   "ID": "33a",
        "type":"info",
        "background":{"type":"image","url":"3_3.jpg"},
        "title":"",
        "titlecenter":"true",
       "textclass":"phototext",
        "text":"<span class='normaltext'>Ikväll går de på sin första strandfest</span>",
        "navigationDirection":"fade",
        "showNextButton":"0"
    },
    
       {   "ID": "33b",
        "type":"info",
        "background":{"type":"image","url":"3_3_1.jpg"},
        "title":"",
        "titlecenter":"true",
       "textclass":"phototext",
        "text":"<span class='normaltext'>De festar hårt och trots att de lovat varandra att hålla ihop <span class='lovescript'>lockar nattens frestelser</span> iväg dem på varsitt skönt möte...</span>",
        "navigationDirection":"fade",
        "showNextButton":"0"
    },
    {  "ID": "33c",
        "type":"C", 
       
        "background":{"type":"color","url":"#000"},
       
        "nrOfItemsToFind":"0",
        "template":"onecols",
        "clicktype":"image_gotoID", //"clicktype":"text"
        "clickareas":[        
                            {   
                               
                               
                                "url":"3_3c1.jpg",
                                "link":"",
                                  gotoID:"36a"
                            },
                              {
                               
                                "url":"3_3c2.jpg",
                                "link":"",
                                   gotoID:"35a"
                            },
                            {
                               
                                "url":"3_3c3.jpg",
                                "link":"",
                                   gotoID:"34"
                            },    
                            {
                               
                                "url":"3_3c4.jpg",
                                "link":"",
                                   gotoID:"37"
                            }
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
       
    },    

   /*

    AMIR
    */

   {   "ID": "36a",
        "type":"info",
        "background":{"type":"image","url":"3_6_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>På festen finns även säsongsarbetaren Matthieu från Frankrike som är instruktör på dykkursen Amir har gått.<br>De dansar och skrattar mycket tillsammans och helt plötsligt...</span>",
        "showNextButton":"0",
         "gotoIDBack":"33c"
       
    },       
      {   "ID": "36a1",
        "type":"info",
        "background":{"type":"image","url":"3_6_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>...befinner de sig i sängen i Matthieus bungaloo. <span class='lovescript'>Amir är kåt och vill gärna ha sex, men han har ingen kondom</span> och vill inte fråga om Matthieu har det. </span>",
        "showNextButton":"0",
       
    },
     {   "ID": "36b",
        "type":"info",
        "background":{"type":"image","url":"3_6_2.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Amir känner!</span>",
        "showNextButton":"0"
    },    
       {  "ID": "35b1",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_6_4.jpg"},
        
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
         "background":{"type":"image","url":"3_6_1.jpg"},
        "answers":[
                            {"text":"Har sex utan kondom"},
                            {"text":"Har inte sex alls"}
                ]
         ,
         "showNextButton":"-1"
    },   
    {   "ID": "36d",
        "type":"info",
        "background":{"type":"image","url":"3_6_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>På nästa sida följer ett quiz! Gissa om det är <span class='lovescript'>ingen risk</span> , <span class='lovescript'>liten risk</span> eller <span class='lovescript'>stor risk</span> att <span class='lovescript'>klamydia</span> överförs vid olika typer av sex.</span>",
        "showNextButton":"0",
       
    },
      {  "ID": "36d1",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>1/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Oralsex</h4>",
        
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Oralsex har liten risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
                                    "contenttext":"Oralsex har liten risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
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
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>2/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Fitta omsluter kuk</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Fitta omsluter kuk har stor risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Fitta omsluter kuk har stor risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
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
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>3/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Hångel</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
                                    "contenttext":"Hångel har ingen risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Hångel har ingen risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
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
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>4/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Smeka och slicka anal</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
                                    "contenttext":"Smeka och slicka anal har ingen risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Smeka och slicka anal har ingen risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
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
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>5/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Smeka kön</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Smeka kön har liten risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
                                    "contenttext":"Smeka kön har liten risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
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
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>6/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Kön mot kön<br>(fitta+fitta / kuk+kuk)</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Kön mot kön (fitta+fitta / kuk+kuk) har liten risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
                                    "contenttext":"Kön mot kön (fitta+fitta / kuk+kuk) liten risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
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
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>7/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Kuk i anal</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Kuk i anal har stor risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Kuk i anal har stor risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
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
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"<span class='oneofx'>8/8</span><span class='klamquizheader'>Hur stor är risken att få eller ge klamydia?</span></span><span class='klamquizquestion'> <h4>Slicka bröst</h4>",
     
        "template":"clickwords",
        "class":"klamydiaquiz",
        "nrOfItemsToFind":"1",
        "clicktype":"text", //"clicktype":"images"
        "nopopup":"false",
        "clickareas":[        
                            {
                                "text":"Ingen risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Rätt",
                                    "contenttext":"Slicka bröst har ingen risk att sprida klamydia"
                                }]
                            },{
                                "text":"Liten risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
                                    "contenttext":"Slicka bröst har ingen risk att sprida klamydia"
                                }]
                            },
            {
                                "text":"Stor risk",
                                "link":"",
                                  "textcontent":[{
                                    "header":"Fel",
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
        "text":"<span class='faktatext'>Med kondom kan du knulla utan att oroa dig för att få eller ge en könssjukdom som t ex hiv, klamydia eller gonorré!</span>",
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
        "gotoID":"33c"
    },



   /*

    VICTOR
    */
   
        {   "ID": "35a",
        "type":"info",
        "background":{"type":"image","url":"3_5_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>På festen träffar Victor Martine, en norsk tjej som han flirtat med på dagarna vid vandrarhemmet.<br><span class='lovescript'>Äntligen har Victor sin chans.</span><br>De är ganska fulla och har ganska kul – de skrattar mycket och börjar hångla</span>",
        "showNextButton":"0",
         "gotoIDBack":"33c"
       
    },       
      {   "ID": "35a1",
        "type":"info",
        "background":{"type":"image","url":"3_5_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Efter ett tag somnar de båda i sanden.<br><span class='lovescript'>Victor vaknar och är kåt.</span><br>Han har aldrig varit så nära att ha sex och hans känns som den sista oskulden i hans kompisgäng.</span>",
        "showNextButton":"0",
       
    },       
      {   "ID": "35a2",
        "type":"info",
        "background":{"type":"image","url":"3_5_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Han fortsätter där de avslutat och <span class='lovescript'>tar av Martines trosor.</span><br>Hon säger och gör inte så mycket, men hon är våt och verkade kåt förut. Victor smeker Martine och har sedan <span class='lovescript'>sex med henne utan kondom.</span></span>",
        "showNextButton":"0",
       
    },    
   {   "ID": "35a3",
        "type":"info",
        "background":{"type":"image","url":"3_5_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'> Det är ganska skönt för Victor och han vill komma, men  <span class='lovescript'>han är fortfarande full och tappar ståndet efter en stund.</span><br>Martine verkar ha somnat igen. Victor drar därifrån. </span>",
        "showNextButton":"0",
       
    },
     {   "ID": "35b",
        "type":"info",
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Victor känner!</span>",
        "showNextButton":"0"
    },    
       {  "ID": "35b1",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_6_4.jpg"},
       
        "template":"clickwords",
           "savetodb_ID":"2",
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
        "gotoID":"35c",
         "showNextButton":"-1"
       
    },      
    {   "ID": "35c",
        "type":"info",
        "background":{"type":"image","url":"3_6_4.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'>När Victor börjar nyktra till blir han bli orolig.<br>Han tycker ju om Martine. Men ville hon ha sex?<br><span class='lovescript'>Våldtog han kanske henne...</span></span>",
        "showNextButton":"0"
    },   
          {   "ID": "35c1",
        "type":"question", 
         "question_id":"8",
        "question":"Vad tror du Victor gör?",
        "html":"<span class='normaltext questiontext'>Vad tror du Victor gör?</span>",
         "background":{"type":"image","url":"3_6_4.jpg"},
        "answers":[
                            {"text":"Letar upp Martine på vandrarhemmet och frågar om de kan ses igen."},
                            {"text":"Äh, det var väl ingen våldtäkt! Han struntar i henne, alla som flirtar och festar så vill ju ha sex."}
                ]
         ,
         "showNextButton":"-1"
    },   
    {   "ID": "35d",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>För att sex ska vara bra och skönt är det <span class='factscript'>viktigt att sexet är ömsesidigt och sker med samtycke.</span><br>Det betyder att både du och den/de andra känner att ni vill ha sex med varandra. Men detta är inte alltid så lätt att vet...</span>",
        "showNextButton":"0"
    },
     {   "ID": "35d1",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>Om du är kåt och vill ha sex med någon annan, kommer här  <span class='factscript'>några tips</span> för att ta reda på om det är ömsesidigt:</span>",
        "showNextButton":"0"
    },

{   "ID": "35d2",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'><h3 class='factheader'>Tips 1/4</h3><br>• Ett av de bästa sätten är att <span class='factscript'>FRÅGA den andra personen om den vill ha sex.</span></span>",
        "showNextButton":"0"
    },
{   "ID": "35d3",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'><h3 class='factheader'>Tips 2/4</h3><br>• Att en person <span class='factscript'>har stånd eller är våt betyder inte självklart att den vill ha sex.</span> Kroppar kan ge signaler samtidigt som tankarna och känslorna är helt annorlunda.</span>",
        "showNextButton":"0"
    },
{   "ID": "35d4",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'><h3 class='factheader'>Tips 3/4</h3><br>• <span class='factscript'>Respektera alltid ett nej.</span> Och tänk på att ett ja kan bli ett nej närsomhelst. Var mogen och ta ett nej på ett schysst sätt utan att skuldbelägga den andra.</span>",
        "showNextButton":"0"
    },
{   "ID": "35d5",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'><h3 class='factheader'>Tips 4/4</h3><br>• <span class='factscript'>Om du är kåt och njuter så visa det tydligt med kroppen och med ord!</span> Så slipper den andra gissa sig till hur du känner.</span>",
        "showNextButton":"0",
        "gotoID":"33c"
    },


   /*
   /*

    PETER
    */



        
    {   "ID": "34",
        "type":"info",
        "background":{"type":"image","url":"3_4_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Peter är långt ifrån nykter och sugen på att hitta på något riktigt äventyr. Han blir lätt övertygad om att följa med några andra turister bort från strandfesten...</span>",
        "showNextButton":"0",
        "gotoIDBack":"33c"
    },       
        {   "ID": "341",
        "type":"info",
        "background":{"type":"image","url":"3_4_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>... till en strippklubb.<br>När de är där skrattar en av dem och säger 'The whores here are cheaper than your t-shirt!'.</span>",
        "showNextButton":"0",
     
    },  
    {   "ID": "34a",
        "type":"info",
        "background":{"type":"image","url":"3_4_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Utan att hänga med på hur det kunde hända, befinner sig Peter i en av de andras hotellrum med en söt tjej och det är tydligt att de andra har betalat henne för att de ska ha sex.</span>",
        "showNextButton":"0"
    },       
       {   "ID": "34a1",
        "type":"info",
        "background":{"type":"image","url":"3_4_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Peter vet inte om han är kåt, men hon verkar veta vad hon gör. Hon ger honom oralsex och han får stånd, sedan har de sex med kondom.</span>",
        "showNextButton":"0"
    },           
        
     {   "ID": "34a2",
        "type":"info",
        "background":{"type":"image","url":"3_4_2.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Peter känner!</span>",
        "showNextButton":"0"
    },    
       {  "ID": "34b",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_4_2.jpg"},
       
        "template":"clickwords",
           "savetodb_ID":"3",
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
        "gotoID":"34c",
         "showNextButton":"-1"
       
    },   
          {   "ID": "34c",
        "type":"question", 
         "question_id":"9",
        "question":"Vad tror du Peter gör?",
        "html":"<span class='normaltext questiontext'>Vad tror du Peter gör?</span>",
         "background":{"type":"image","url":"3_4_2.jpg"},
        "answers":[
                            {"text":"Frågar tjejen han haft sex med om han var bra och om det var skönt för henne."},
                            {"text":"Bara går därifrån."}
                ]
         ,
         "showNextButton":"-1"
    },   
        {   "ID": "34d",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'><span class='factscript'>80 % av svenskars köp av sexuella tjänster sker utomlands.</span><br>Varför tror du att det är så?",
        "showNextButton":"0"
     
    },           
        

    {   "ID": "34d1",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>Resor kan innebära en äventyrskänsla!<br>Att komma till nya platser och <span class='factscript'>känna sig lite anonym kan påverka moraliska beslut.</span> </span>",
        "showNextButton":"0"
     
    } ,
       {   "ID": "34d2",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>Kanske gör du saker på en resa som du aldrig skulle göra hemma. Kanske testar du nya relationer och festar mer med alkohol och droger. Det kan leda till att du hamnar i sexuella situationer som du kan ha mindre kontroll över.</span>",
        "showNextButton":"0"
       
    },
       {   "ID": "34d3",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'><span class='factscript'>Sex mot ersättning är ofta mer synligt och lättillgängligt utanför Sverige.</span> När det finns överallt kan det också kännas som de flesta gör, och steget att själv testa blir därför lättare att ta. Även om det känns normalt kan det vara olagligt.</span>",
        "showNextButton":"0"
    },

       {   "ID": "34d4",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'> <span class='factscript'>Lagar om att sälja och köpa sex ser olika ut världen över.</span> Samtycke (att de som har sex vill det) gäller även vid köp av sex, <span class='factscript'>även personer som säljer sex har rätt till sina gränser</span> vad de gör och inte gör.<br><br> Respektera dessa gränser.</span>",
        "showNextButton":"0",
         "gotoID":"33c"
    } ,   






    /*GÅ VIDARE */


        
    {   "ID": "37",
        "type":"info",
        "background":{"type":"image","url":"3_2.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Alla tre kommer tillslut tillbaka till deras bungaloo. Dagen efter är alla ganska slitna och brunchen äts först under tystnad.<br><span class='lovescript'>Vad är lätt att prata med vänner om?</script></span>",
        "showNextButton":"0",
        "gotoIDBack":"33c"
    },     
        

        
     {   "ID": "37a",
        "type":"question", 
         "question_id":"10",
         "question":"Vad är lättast att prata med vänner om?", 
         "html":"<span class='normaltext'>Vad är <span class='lovescript'>lättast</span> att prata med vänner om?</span>", 
        "background":{"type":"image","url":"3_2.jpg"},
        "answers":[
                            {"text":"Sexköp"},
                            {"text":"Sexuella övergrepp"},
                            {"text":"Könssjukdomar"},
                            {"text":"Olika sätt att ha sex på"},
                            {"text":"Sexuell läggning"},
                            {"text":"Känslor vid sex"}
                
                ]
         ,
         "showNextButton":"-1"
    },
        {   "ID": "37b",
        "type":"question", 
         "question_id":"11",
        "question":"Vad är svårast att prata med vänner om?",
        "html":"<span class='normaltext'>Vad är <span class='lovescript'>svårast</span> att prata med vänner om?</span>",
         "background":{"type":"image","url":"3_2.jpg"},
        "answers":[
                            {"text":"Sexköp"},
                            {"text":"Sexuella övergrepp"},
                            {"text":"Könssjukdomar"},
                            {"text":"Olika sätt att ha sex på"},
                            {"text":"Sexuell läggning"},
                            {"text":"Känslor vid sex"}
                
                ]
         ,
         "showNextButton":"-1"
    },
   
  {   "ID": "38",
        "type":"question", 
         "question_id":"12",
        "question":"Vad ska de göra ikväll?",
        "html":"<span class='normaltext'>Dagen fortsätter med sol och bad och kvällen kommer så småningom. Musiken börjar pumpa från barerna.<br><span class='lovescript'>Vad ska de göra ikväll?</span></span>",
         "background":{"type":"image","url":"3_7.jpg"},
        "answers":[
                            {"text":"Festa igen, och lova att stanna ihop hela natten"},
                            {"text":"Ta det lugnt på vandrarhemmet"}
                
                ]
         ,
         "showNextButton":"-1"
    },
 {   "ID": "39",
        "type":"info",
        "background":{"type":"image","url":"3_9.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Under kvällen börjar de prata om sexet de har haft. De kommer in på <span class='lovescript'>hur könssjukdomar sprids</span> och minns tillbaka på sex- och samlevnads-undervisningen de fick i gymnasiet.</span>",
        "showNextButton":"0"
    },     
        
     {   "ID": "310",
    "type":"B",
    "background":{"type":"image","url":"3_6_4.jpg"},
    "sequences":[
                {
                "sequenceID":"0",
                "type":"video",
                "url":"http://player.vimeo.com/video/141538434"
                }],
   
    "showNextButton":"0"
    },    
        
      {   "ID": "311",
        "type":"info",
        "background":{"type":"image","url":"3_11.jpg"},
        "title":"",
        "titlecenter":"true",
      "text":"<span class='normaltext'>Efter festresan är kompisarna tillbaka i ett kallare Sverige. Rika på minnen, lite fattigare i plånboken, mer solbrända och kanske lite klokare.</span>",
    
        "imagecenter":"true",
         "showNextButton":"0"
    },
        {   "ID": "311a",
        "type":"info",
        "background":{"type":"image","url":"3_11.jpg"},
        "title":"",
        "titlecenter":"true",
      "text":"<span class='normaltext'><span class='lovescript'>Vad är det första de borde göra nu när de är hemma i Sverige?</span><br>Välj ett alternativ per person.</span>",
    
        "imagecenter":"true",
         "showNextButton":"0"
    },
           
           
     {   "ID": "311b",
        "type":"question", 
         "question_id":"13",
        "question":"Vad borde Amir göra först?",
        "html":"<span class='normaltext questiontext'>Vad borde <span class='questioncript'>Amir</span> göra först?</span>",
         "background":{"type":"image","url":"3_6_1.jpg"},
        "answers":[
                            {"text":"Testa sig för könssjukdomar."},
                            {"text":"Gå och prata med kurator på ungdomsmottagning."},
                            {"text":"Ringa Preventell – hjälplinje för oönskad sexualitet."},
                            {"text":"Berätta för vänner om vilken skön resa det har varit."}
                ]
         ,
         "showNextButton":"-1"
    },   
         {   "ID": "311c",
        "type":"question", 
         "question_id":"14",
          "question":"Vad borde Victor göra först?",
        "html":"<span class='normaltext questiontext'>Vad borde <span class='questioncript'>Victor</span> göra först?</span>",
         "background":{"type":"image","url":"3_5_1.jpg"},
        "answers":[
                            {"text":"Testa sig för könssjukdomar."},
                            {"text":"Gå och prata med kurator på ungdomsmottagning."},
                            {"text":"Ringa Preventell – hjälplinje för oönskad sexualitet."},
                            {"text":"Berätta för vänner om vilken skön resa det har varit."}
                ]
         ,
         "showNextButton":"-1"
    },   
         {   "ID": "311d",
        "type":"question", 
         "question_id":"15",
          "question":"Vad borde Peter göra först?",
        "html":"<span class='normaltext questiontext'>Vad borde <span class='questioncript'>Peter</span> göra först?</span>",
         "background":{"type":"image","url":"3_4_1.jpg"},
        "answers":[
                            {"text":"Testa sig för könssjukdomar."},
                            {"text":"Gå och prata med kurator på ungdomsmottagning."},
                            {"text":"Ringa Preventell – hjälplinje för oönskad sexualitet."},
                            {"text":"Berätta för vänner om vilken skön resa det har varit."}
                ]
         ,
         "showNextButton":"-1"
    },   
         {   "ID": "312",
        "type":"question", 
         "question_id":"16",
        "question":"Hur hade killarna kunnat förbereda sig för att ha en säkrare och skönare resa?",
        "html":"<span class='normaltext questiontext'>Hur hade killarna kunnat förbereda sig för att ha en <span class='questioncript'>säkrare och skönare resa?</span></span>",
         "background":{"type":"image","url":"3_6_4.jpg"},
        "answers":[
                            {"text":"De hade inte kunnat gör något annorlunda.", "gotoID":"huvudmeny"},
                            {"text":"Prata med varandra vilket sex som är ok.", "gotoID":"huvudmeny"},
                            {"text":"Alltid ha med sig kondom.", "gotoID":"huvudmeny"},
                            {"text":"Testa sig för könssjukdomar innan de reste.", "gotoID":"huvudmeny"},
                            {"text":"Gå runt med t-shirtar där det står ”I want to fuck”.", "gotoID":"huvudmeny"}
                ]
         ,
         "showNextButton":"-1",
          "gotoID":"huvudmeny"
    } 
]};
    return self;

})({});


