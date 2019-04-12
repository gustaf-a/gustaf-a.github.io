 //GET COORDS HERE: http://imagemap-generator.dariodomi.de/


var Case1a = (function(self){
self.ID = {"text":"Case1a", "bottombar":"", "saveForUnlocked":"false"};
self.preload = {"images":
[{"url":"bg_planet.jpg"},
   {"url":"2_1.jpg"},
            {"url":"meny_2.png"},
            {"url":"meny_3.png"},
            {"url":"meny_4.png"}

]};

 
self.nodes = {"content": [
//PASTE JSON HERE:


	{  	"ID": "20",
		"type":"info",
		"background":{"type":"image","url":"2_1.jpg"},
		"text":"<h1>BACKPACKING</h1>",
        "justify":"center",
	
     	"showNextButton":"0"
	},
    {   "ID": "21",
        "type":"info",
        "background":{"type":"image","url":"2_2_phone.jpg"},
        "title":"",
        "titlecenter":"true",
      "text":"<div class='sms'>Idag fick jag min sista lön från lagret OCH biljetten till min tågluff. <br> Snart säger jag Hasta la vista och drar ut i världen innan seriösa universitetslivet börjar.<br><br>I’m soooooo happy :P</div>",
    
        "imagecenter":"true",
        /*"image": [
            {"url":"2_1.png"}
            ],*/
         "showNextButton":"0"
    },
  
{   "ID": "22",
        "type":"info",
        "background":{"type":"image","url":"bg_planet.jpg"},
        "title":"",
        "titlecenter":"true",
        "text":"Sara tar tåget från Göteborg genom Danmark till Berlin för att börja sitt nya, <span class='lovescript'>sköna äventyr</span>.",
        "showNextButton":"0",
        "gotoID":"20"
    },
    {   "ID": "1.1",
        "type":"video_seq",
        
        "background":{"type":"image","url":"bg_planet.jpg"},
         "sequences":[
                {
                "sequenceID":"0",
                "type":"video",
                "url":"http://player.vimeo.com/video/46926279"
                }],
    "showNextButton":"0"
    },


    {  "ID": "huvudmeny",
        "type":"hub", 
        "unlockedID":"main",
        "background":{"type":"image","url":"bg_planet.jpg"},
        "hubimage":[
            {"url":"meny_1.png"},
            {"url":"meny_2.png"},
            {"url":"meny_3.png"},
            {"url":"meny_4.png"}
           
        ],
        "imagewidth":"1914",
        "imageheight":"648",
        "bottombar":"#bottombar-main",

    

        "chapters":[        
                            {"icon":"none.png", 
                                "ID":"0",
                                "caseName":"Case2",
                                "lockeduntil":"0", 
                                "shape":"poly",
                                "coords":"1,251,22,180,93,92,162,64,211,59,259,18,316,1,372,14,415,45,447,103,451,169,433,225,403,262,400,320,369,401,316,464,234,499,152,496,70,449,24,383,3,319",
                                "callback":"Case2"
                                },
                            {"icon":"none.png", 
                                "ID":"1",
                                "caseName":"Case3",
                                "lockeduntil":"1", 
                                "shape":"poly",
                                "coords":"458,216,502,143,557,99,626,77,700,82,761,110,808,152,840,207,858,282,845,374,803,448,738,497,651,520,618,569,548,602,461,595,402,552,369,472,394,393,448,347,442,282",
                                "callback":"Case3"},
                                /*
                            {"icon":"none.png", 
                                "ID":"2",
                                "caseName":"Case4",
                                "lockeduntil":"2", 
                                "shape":"poly",
                                "coords":"927,304,939,206,988,123,1066,71,1117,59,1193,36,1262,37,1335,69,1378,119,1392,196,1370,248,1342,278,1330,356,1276,440,1202,490,1099,498,1020,464,963,410,939,350",
                                "callback":"Case4" },

                            {"icon":"none.png", 
                                "ID":"3",
                                "caseName":"Case5",
                                "lockeduntil":"3", 
                                "shape":"poly",
                                "coords":"1408,239,1447,148,1503,92,1581,59,1669,65,1725,92,1765,129,1795,171,1816,228,1823,285,1876,317,1910,387,1901,462,1845,520,1761,543,1690,520,1658,495,1594,499,1526,479,1467,435,1425,368,1404,304", 
                                 "callback":"Case5"}*/
                            
                ],
         "animation":"fade",
         "showNextButton":"-1"
        
        }






//END OF JSON

	  ]
};

	return self;

})({});

