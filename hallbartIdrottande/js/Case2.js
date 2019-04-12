var Case2 = (function (self) {
    
self.ID = {"text":"Case2", "saveForUnlocked":"true", "unlockedID":"main","backgroundParallax":"0",
  "bottombar":
    "<div class='rightcorner'><div class='progresstext'></div></div><div class='progressbar'><div class='progresschapterthumbs'></div><div class='progresspercent'></div></div>" 
           /*<div class='toggleanimation' onclick='FS.toggleanimation();'>[Stäng av animationer]</div>
           <div onclick='FS.gotoID(\'avfallstrappan\');'>AVFALLSTRAPPAN</div>*/
};
 
self.preload = {"images":
[{"url":"2_0.jpg"},
 {"url":"2_1.jpg"},
 {"url":"2_neutral.jpg"},
 {"url":"2_2.jpg"},
 {"url":"2_3_1.jpg"},
 
 {"url":"2_4_2.jpg"},
 
 {"url":"2_5.jpg"},
 {"url":"2_5_3.jpg"},
 {"url":"2_6.jpg"},
 {"url":"2_7.jpg"},
 {"url":"2_8.jpg"},
 {"url":"2_10.jpg"},
 {"url":"2_10_1.jpg"},

 {"url":"2_12.jpg"},
 {"url":"2_13.jpg"},
 {"url":"2_13_1.jpg"},

 {"url":"2_14.jpg"},
 {"url":"2_15.jpg"}





 
]};
   self.nodes = {"content": 
    [
    



    {   "ID": "20",
    "type":"info",
    "background":{"type":"image","url":"2_0.jpg"},
"text":"<span class='normaltext instruktionstext'><span class='instruction_touch'>Swipe:a från höger till vänster för att navigera.</span><span class='instruction_notouch'>Klicka på pilarna till höger och vänster för att navigera.</span></span>",
 
   
    "justify":"center",
    "showNextButton":"0",
    "gotoIDBack":"huvudmeny",
    },
     {   "ID": "21",
        "type":"info",
        "background":{"type":"image","url":"2_1.jpg"},
        "title":"",
        "titlecenter":"true",
        "text":"<div class='sms'>Idag fick jag min sista lön från lagret OCH biljetten till min tågluff.<br>Snart säger jag Hasta la vista och drar ut i världen innan seriösa universitetslivet börjar. I’m soooooo happy :P //Sara</div>",
    
        "imagecenter":"true",
         "showNextButton":"0"
    },
        
    {   "ID": "22",
        "type":"info",
        "background":{"type":"image","url":"2_2.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Sara tar tåget från Göteborg genom Danmark till Berlin för att börja <span class='lovescript'>sitt nya, sköna äventyr.</span></span>",
        "showNextButton":"0"
    },
      {   "ID": "23",
        "type":"info",
        "background":{"type":"image","url":"2_3.jpg"},
        "title":"",
        "titlecenter":"true",
       "textclass":"phototext",
        "text":"<span class='normaltext'>På dagarna lever hon kulturellt och intellektuellt. På kvällarna upplever hon gatornas puls och <span class='lovescript'>dansar med andra på resande fot.</span></span>",
        "navigationDirection":"fade",
        "showNextButton":"0"
    },
         {   "ID": "24a",
        "type":"info",
        "background":{"type":"image","url":"2_4.jpg"},
        "title":"",
        "titlecenter":"true",
       "textclass":"phototext",
        "text":"<span class='normaltext'>Sara träffar fransmannen Matthieu och det är <span class='lovescript'>love at first sight...</span></span>",
        "navigationDirection":"fade",
        "showNextButton":"0"
    },
    
       {   "ID": "24b",
        "type":"info",
        "background":{"type":"image","url":"2_4_2.jpg"},
        "title":"",
        "titlecenter":"true",
       "textclass":"phototext",
        "text":"<span class='normaltext'>Sara och Matthieu blir djupt förälskade och umgås dygnet runt i en vecka. <br class='nospacebr'/> <span class='lovescript'>De kan inte hålla händerna ifrån varandra.</span>",
        "navigationDirection":"fade",
        "showNextButton":"0"
    }, 
    {   "ID": "24c",
        "type":"info",
        "background":{"type":"image","url":"2_4_3.jpg"},
        "title":"",
        "titlecenter":"true",
       "textclass":"phototext",
        "text":"<span class='normaltext'>Sara och Matthieu har olika planer för deras vidare resor.<br>Sara har egentligen planerat att åka till Ungern. Matthieu vill vidare till Malta...</span>",
        "navigationDirection":"fade",
        "showNextButton":"0"
    },
       {   "ID": "24d",
        "type":"question", 
         "question_id":"1",
        "question":"Vad ska Sara göra?",
        "html":"<span class='normaltext questiontext'>Vad ska Sara göra?</span>",
         "background":{"type":"image","url":"2_4_3.jpg"},
        "answers":[
                            {"text":"Åka enligt sin plan till Ungern", "gotoID":"25a"},
                            {"text":"Följa med Matthieu till Malta ", "gotoID":"26a"}
                ]
         ,
         "showNextButton":"-1"
    },   

  /*UNGERN*/
   {   "ID": "25a",
        "type":"info",
        "background":{"type":"image","url":"2_4_3.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Sara känner!</span>",
        "showNextButton":"0"
    },    
   {  "ID": "25a2",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"2_4_3.jpg"},
       /* "title":"<span class='normaltext questiontext'>Hur känns det?<br>Välj tre ord som du tror att Sara känner</span>",*/
        "template":"clickwords",
           "savetodb_ID":"4",
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
        "gotoID":"25b",
         "showNextButton":"-1"
       
    },      
   {   "ID": "25b",
        "type":"info",
        "background":{"type":"image","url":"2_5.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Sara fortsätter själv till <span class='lovescript'>Budapest</span> - staden med mycket <span class='lovescript'>spa och relax.</span></span>",
        "showNextButton":"0",
         "gotoIDBack":"25a"
       
    },       
      {   "ID": "25c",
        "type":"info",
        "background":{"type":"image","url":"2_5_3.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Det dröjer inte länge förrän hon träffar en ungrare som heter Antel. Attraktionen är stark och <span class='lovescript'>Sara ser till att få ihop det med honom.</span> Hon njuter av livet.</span>",
        "showNextButton":"0",
        "gotoID":"27"
       
    },

 /*MALTA*/
  {   "ID": "26a",
        "type":"info",
        "background":{"type":"image","url":"2_4_3.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Sara känner!</span>",
        "showNextButton":"0",
        "gotoIDBack":"24d",

    },    
   {  "ID": "26a2",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"2_4_3.jpg"},
       
        "template":"clickwords",
           "savetodb_ID":"5",
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
        "gotoID":"26b",
         "showNextButton":"-1"
       
    },      

     {   "ID": "26b",
        "type":"info",
        "background":{"type":"image","url":"2_6.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'>Sara fortsätter tillsammans med Matthieu till <span class='lovescript'>Valletta</span> - en stad med <span class='lovescript'>mycket sol och bad.</span></span>",
        "showNextButton":"0",
        "gotoIDBack":"26a",

    },    
      

/*FORTSÄTTER*/

 {   "ID": "27",
        "type":"info",
        "background":{"type":"image","url":"2_7.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Deras relation utvecklas snabbt och de säger att de <span class='lovescript'>aldrig känt så här</span> eller haft <span class='lovescript'>så skönt sex förut.</span></span>",
        "showNextButton":"0",
         "gotoIDBack":"24d",
    },
 {   "ID": "28",
        "type":"info",
        "background":{"type":"image","url":"2_8.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>De hånglar mycket och experimenterar sexuellt. Sara njuter. </span>",
        "showNextButton":"0"
    },
     {   "ID": "28a",
        "type":"info",
        "background":{"type":"image","url":"2_8.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>I början använder de kondom vid vaginal-, oral- och analsex men <span class='lovescript'>efter ett tag föreslår Sara att de ska ha sex utan kondom.</span></span>",
        "showNextButton":"0"
    },

{   "ID": "29a",
        "type":"info",
        "background":{"type":"image","url":"2_neutral.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Vad tror du är den vanligaste anledningen till att kondom inte används? <i>(tänk generellt, och inte bara i Saras situation)</i></span>",
        "showNextButton":"0"
    },

          {   "ID": "29b",
        "type":"question", 
         "question_id":"2",
        "question":"Vad tror du är den vanligaste anledningen till att kondom inte används?",
         "showresponse":"true",
        "html":"<span class='normaltext questiontext'>Välj ett av alternativen!</span>",
         "background":{"type":"image","url":"2_neutral.jpg"},
        "answers":[
                            {"text":"Det känns inte lika intimt och skönt med kondom."},
                            {"text":"Det känns pinsamt att föreslå kondom. Vad ska den andra tycka?"},
                            {"text":"Den andra personen känns fräsch, och har nog ingen könssjukdom."},
                            {"text":"Det känns lugnt om den ena använder ett hormonellt preventivmedel, t ex p-piller."},
                            {"text":"Det är inte en sådan stor grej att få en könssjukdom eller bli gravid. Det går ju att ta medicin eller akut p-piller."},
                ]
         ,
         "showNextButton":"-1"
    },   


       {   "ID": "210",
        "type":"info",
        "background":{"type":"image","url":"2_10.jpg"},
    
        "titlecenter":"true",
      "text":"<div class='sms'>Hej Pappa! Jag har det underbart!<br>Träffat många nya vänner, maten är god och vädret är fint. Kram! //Sara</div>",
    
        "imagecenter":"true",
         "showNextButton":"0"
    },

      {   "ID": "210b",
        "type":"info",
        "background":{"type":"image","url":"2_10_1.jpg"},
       
        "titlecenter":"true",
      "text":"<div class='sms'>Hej vännen... vet du, shit vi har haft sex utan kondom...tänk om jag blivit gravid...//Sara</div>",/*<div class='smscontact'>BFF</div>*/
    
        "imagecenter":"true",
         "showNextButton":"0"
    },

    {   "ID": "211a",
        "type":"info",
        "background":{"type":"image","url":"2_neutral.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Sara känner!</span>",
        "showNextButton":"0"

    },    
   {  "ID": "211b",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"2_neutral.jpg"},
       
        "template":"clickwords",
           "savetodb_ID":"6",
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
        "gotoID":"212",
         "showNextButton":"-1"
       
    },      

    {   "ID": "212",
        "type":"info",
        "background":{"type":"image","url":"2_neutral.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Det är några veckor kvar tills att Sara ska få sin mens, så <span class='lovescript'>hon kan inte göra ett graviditetstest just nu.</span><br>Vad ska Sara göra?</span>",
        "showNextButton":"0",
       
    },
       {   "ID": "212b",
        "type":"info",
        "background":{"type":"image","url":"2_neutral.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<div class='textfact'><b>FAKTA:</b> Ett graviditetstest kan man göra tidigast samma dag som mensen skulle ha kommit, eller tre veckor efter senaste oskyddade samlaget.</div>",
        "showNextButton":"0",
       
    },

          {   "ID": "213",
        "type":"question", 
         "question_id":"3",
        "question":"Gravid? Vad ska Sara göra?",
        "html":"<span class='normaltext questiontext'>Vad ska Sara göra?</span>",
         "background":{"type":"image","url":"2_13.jpg"},
        "answers":[
                            {"text":"Gå till ett apotek och skaffa akut-p-piller", "gotoID":"213a"},
                            {"text":"Risken att bli gravid är nog ganska liten. Tänk inte på det och fortsätt äventyret!", "gotoID":"214"},
                          
                ]
         ,
         "showNextButton":"-1"
    },   
    {   "ID": "213a",
        "type":"info",
        "background":{"type":"image","url":"2_13.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Apoteket vill inte ge Sara något akut-p-piller!<br>Och hon som har planerat att resa runt i Europa i tre veckor till...</span>",
        "showNextButton":"0"
       
    },
      {   "ID": "213a2",
        "type":"info",
        "background":{"type":"image","url":"2_13.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<div class='textfact'><b>FAKTA:</b> Akut-p-piller eller dagen efter-piller (Emergency Contraception eller morning-after pill på engelska) är inte alltid lika tillgängligt i andra länder som i Sverige. Ibland krävs det läkarbesök för att få ett recept eller så finns det inte överhuvudtaget i landet. </div>",
        "showNextButton":"0"
       
    },

          {   "ID": "213b",
        "type":"question", 
         "question_id":"4",
        "question":"Apoteket vill inte ge Sara något akut-p-piller! Vad ska Sara göra?",
        "html":"<span class='normaltext questiontext'>Vad ska Sara göra?</span>",
         "background":{"type":"image","url":"2_13.jpg"},
        "answers":[
                            {"text":"Äh, det går att fortsätta resa några veckor till. Om hon är gravid och inte vill vara det, kan hon göra abort senare i Sverige.", "gotoID":"214"},
                            {"text":"Avbryt resan och åk hem till Sverige!", "gotoID":"215"},
                          
                ]
         ,
         "showNextButton":"-1"
    },  

     {   "ID": "214",
        "type":"info",
        "background":{"type":"image","url":"2_14.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Resan med kärlek, sex och kulturella upplevelser fortsätter genom Europa i några veckor till. Sara har det skönt och bestämmer sig för att <span class='lovescript'>inte oroa sig</span> för något under sista tiden på resan.</div>",
        "showNextButton":"0",
        "gotoIDBack":"212"
       
    },

/*HEMMA*/

      {   "ID": "215",
        "type":"info",
        "background":{"type":"image","url":"2_15.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Efter äventyret kommer Sara hem till Sverige. Rik på minnen, lite fattigare i plånboken och kanske lite klokare.</div>",
        "showNextButton":"0",
         "gotoIDBack":"212"
       
    },
        {   "ID": "216",
        "type":"question", 
         "question_id":"5",
        "question":"Vad är det första Sara borde göra nu hemma i Sverige?",
        "html":"<span class='normaltext questiontext'>Vad är det första Sara borde göra nu hemma i Sverige?</span>",
         "background":{"type":"image","url":"2_8.jpg"},
        "answers":[
                            {"text":"Kolla upp kostråd för gravida."},
                            {"text":"Testa sig för graviditet och könssjukdomar samt prata med en barnmorska på ungdomsmottagningen."},
                            {"text":"Planera en ny resa för att möta sin kärlek ute i Europa."},
                            {"text":"Berätta för sin pappa om att hon kanske är gravid."}
                ]
         ,
         "showNextButton":"-1",
          "gotoID":"217"
    },
     {   "ID": "217",
        "type":"question", 
         "question_id":"6",
        "question":"Hur hade Sara kunnat förbereda sig för att ha en säkrare och skönare resa?",
         "showresponse":"true",
        "html":"<span class='normaltext questiontext'>Hur hade Sara kunnat förbereda sig för att ha en <span class='questscript'>säkrare och skönare resa?</span></span>",
         "background":{"type":"image","url":"2_8.jpg"},
        "answers":[
                            {"text":"Hon hade inte kunnat göra något annorlunda."},
                            {"text":"Ha med sig kondom och akut p-piller från Sverige."},
                            {"text":"Bestämma sig för att inte ha sex utomlands."},
                            {"text":"Kolla upp sjukvård, rättigheter och lagar i de länder hon skulle resa till."},
                            {"text":"Ha på sig en t-shirt med texten ”I don’t have chlamydia”."}
                ]
         ,
         "showNextButton":"-1"
    },
     {   "ID": "218",
        "type":"info",
        "background":{"type":"image","url":"2_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Tack för att du följt med på Saras resa genom Europa.<br>Vi hoppas resan varit lärorik!</div>",
        "showNextButton":"0",
         "gotoID":"huvudmeny"
       
    },

]};
    return self;

})({});


