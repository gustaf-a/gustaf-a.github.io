var Case3 = (function (self) {

    self.ID = {
        "text": "Case3", "saveForUnlocked": "true", "unlockedID": "main", "backgroundParallax": "0",
        "bottombar":
            "<div class='rightcorner'><div class='progresstext'></div></div><div class='progressbar'><div class='progresschapterthumbs'></div><div class='progresspercent'></div></div>"
        /*<div class='toggleanimation' onclick='FS.toggleanimation();'>[Stäng av animationer]</div>
        <div onclick='FS.gotoID(\'avfallstrappan\');'>AVFALLSTRAPPAN</div>*/
    };

    self.preload = {
        "images":
            [
            { "url": "bild_8.png" }

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
                    "gotoID": "31"
                }
            ]
    };
    return self;

})({});


