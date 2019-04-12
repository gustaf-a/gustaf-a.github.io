var Case3_victor = (function (self) {
    
self.ID = {"text":"Case3_victor", "saveForUnlocked":"true", "unlockedID":"festresan","backgroundParallax":"0",
  "bottombar":
    "<div class='rightcorner'><div class='progresstext'></div></div><div class='progressbar'><div class='progresschapterthumbs'></div><div class='progresspercent'></div></div>" 
           /*<div class='toggleanimation' onclick='FS.toggleanimation();'>[Stäng av animationer]</div>
           <div onclick='FS.gotoID(\'avfallstrappan\');'>AVFALLSTRAPPAN</div>*/
};
 
self.preload = {"images":
[  {"url":"3_5.jpg"},
 
  {"url":"3_5_1.jpg"},
  {"url":"3_5_2.jpg"},
  {"url":"3_5_3.jpg"},
  {"url":"3_5_5.jpg"},
  {"url":"3_5_2.jpg"},
   {"url":"3_5_4.jpg"}
 
]};
   self.nodes = {"content": 
    [
    




   /*

    VICTOR
    */
   
        {   "ID": "35a",
        "type":"info",
        "background":{"type":"image","url":"3_5.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>På festen träffar Victor Martine, en norsk tjej som han flirtat med på dagarna vid vandrarhemmet.<br><span class='lovescript'>Äntligen har Victor sin chans.</span></span>",
        "showNextButton":"0",
         "gotoIDBack":"33c"
       
    },       
          {   "ID": "35a0",
        "type":"info",
        "background":{"type":"image","url":"3_5_1.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>De är ganska fulla och har kul – de skrattar mycket och börjar hångla</span>",
        "showNextButton":"0"
       
    },       
      {   "ID": "35a1",
        "type":"info",
        "background":{"type":"image","url":"3_5_2.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Efter ett tag somnar de båda i sanden.<br><span class='lovescript'>Victor vaknar och är kåt.</span><br>Han har aldrig varit så nära att ha sex och det känns som att han är den sista oskulden i kompisgänget.</span>",
        "showNextButton":"0",
       
    },       
      {   "ID": "35a2",
        "type":"info",
        "background":{"type":"image","url":"3_5_3.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Han fortsätter där de avslutat och <span class='lovescript'>tar av Martines trosor.</span><br>Hon säger och gör inte så mycket, men hon är våt och verkade kåt förut. Victor smeker Martine och har sedan <span class='lovescript'>sex med henne utan kondom.</span></span>",
        "showNextButton":"0",
       
    },    
   {   "ID": "35a3",
        "type":"info",
        "background":{"type":"image","url":"3_5_3.jpg"},
        "title":"",
         "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'> Det är ganska skönt för Victor och han vill komma, men  <span class='lovescript'>han är fortfarande full och tappar ståndet efter en stund.</span><br>Martine verkar ha somnat igen. Victor drar därifrån. </span>",
        "showNextButton":"0",
       
    },
     {   "ID": "35b",
        "type":"info",
        "background":{"type":"image","url":"3_5_3.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'><span class='lovescript'>Hur känns det?</span><br>Välj på nästa sida tre ord som du tror att Victor känner!</span>",
        "showNextButton":"0"
    },    
       {  "ID": "35b1",
        "type":"D", 
      
        "titlecenter":"true",
        "background":{"type":"image","url":"3_5_3.jpg"},
       
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
        "background":{"type":"image","url":"3_5_5.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'>När Victor börjar nyktra till blir han bli orolig.<br>Han tycker ju om Martine. Men ville hon ha sex?<br><span class='lovescript'>Kanske våldtog han henne...</span></span>",
        "showNextButton":"0"
    },   
          {   "ID": "35c1",
        "type":"question", 
         "question_id":"8",
        "question":"Vad tror du Victor gör?",
        "html":"<span class='normaltext questiontext'>Vad tror du Victor gör?</span>",
         "background":{"type":"image","url":"3_5_5.jpg"},
        "answers":[
                            {"text":"Letar upp Martine på vandrarhemmet och frågar om hon vill ses igen?", "gotoID":"35c1a"},
                            {"text":"Letar upp Martine på vandrarhemmet och fråga om hon är OK efter det som skedde igår?", "gotoID":"35c1a"},
                            {"text":"Att söka upp Martine känns pinsamt och jobbigt - Viktor bestämmer sig för att låta saken vara.", "gotoID":"35c2a"},
                            {"text":"Äh, alla vill ju hångla och ha sex! Det var väl ingen våldtäkt.", "gotoID":"35c3a"}
                ]
         ,
         "showNextButton":"-1"
    },   
    {   "ID": "35c1a",
        "type":"info",
        "background":{"type":"image","url":"3_5_5.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'>Viktor går till vandrarhemmet och frågar efter Martine, men får hör att hon rest vidare tidigt på morgonen. Han får hennes nummer och skickar ett sms, men får inget svar.</span>",
        "showNextButton":"0",
        "gotoID":"35d",
        "gotoIDBack":"35c1"

    },  
     {   "ID": "35c2a",
        "type":"info",
        "background":{"type":"image","url":"3_5_5.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
       "text":"<span class='normaltext'>Viktor har lite dåligt samvete men tänker att Martine säkert kan ta hand om sig själv. Han fortsätter semestern och oroar sig inte mer.</span>",
        "showNextButton":"0",
        "gotoID":"35d",
        "gotoIDBack":"35c1"

    },   
       {   "ID": "35c3a",
        "type":"info",
        "background":{"type":"image","url":"3_5_5.jpg"},
        "title":"",
        "titlecenter":"true",
        "textclass":"phototext",
        "text":"<span class='normaltext'>Viktor fortsätter att festa under resan, hånglar och har sex med fler personer.</span>",
        "showNextButton":"0",
        "gotoID":"35d",
        "gotoIDBack":"35c1"

    },   
    {   "ID": "35d",
        "type":"info",
        "background":{"type":"image","url":"3_5_4.jpg"},
        "title":"",
        "titlecenter":"false",
        "textclass":"phototext",
        "text":"<span class='faktatext'>För att sex ska vara bra och skönt är det <span class='factscript'>viktigt att sexet är ömsesidigt och sker med samtycke.</span><br>Det betyder att både du och den/de andra känner att ni vill ha sex med varandra. Men detta är inte alltid så lätt att vet...</span>",
        "showNextButton":"0",
          "gotoIDBack":"35c1"
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
    }
]};
    return self;

})({});


