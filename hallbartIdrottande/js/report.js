var RP = (function(self) {
    "use strict";


    var data;
    var countData;
    var resultstring;
    var countUsers;
    var myFeelings = ["","","","","","","",""];
    var nrOfFeelingsToRead =8;
    var questions = [
        "Vad ska Sara göra?",
        "Vad tror du är den vanligaste anledningen till att kondom inte används?",
        "Gravid? Vad ska Sara göra?",
        "Apoteket vill inte ge Sara något akut-p-piller! Vad ska Sara göra?",
        "Vad är det första Sara borde göra nu hemma i Sverige?",
        "Hur hade Sara kunnat förbereda sig för att ha en säkrare och skönare resa?",

        "Vad tror du Amir gör?",
        "Vad tror du Victor gör?",
        "Vad tror du Peter gör?",
        "Hur ska Alex göra med sin skada?",
        "Vad är svårast att prata med vänner om?",
        "Vad ska de göra ikväll?",
        "(Tillbaka i Sverige) Vad borde Amir göra först?",
        "(Tillbaka i Sverige) Vad borde Victor göra först?",
        "(Tillbaka i Sverige) Vad borde Peter göra först?",
        "Hur hade killarna kunnat förbereda sig för att ha en säkrare och skönare resa?",

        "Vad ska Lee göra?",
        "Vad ska Lee göra (har tagit droger)?",
        "Vad ska Lee göra (har inte tagit droger)?",
        "Vem borde Lee prata med?",
        "Vad är det första Lee borde göra hemma i Sverige?",
        "Vad tänkte du att Lee hade för kön?",
        "Hur hade Lee kunnat förbereda sig för att ha en säkrare och skönare resa?",

    ];

    var nrOfanswers = [2, 5, 2, 2, 4, 5,
        2, 2, 2, 2, 6, 2, 4, 4, 4, 5,
        2, 2, 2, 7, 4, 5, 5
    ];



    function answerAsString(myid) {
        //console.log("answerAsString " + myid);
        try {
            return _.findWhere(RP.data, {
                answer_id: myid
            }).answer;
        } catch (err) {
            return undefined
        }
    }

    self.showQuestion = function(i, n) {
        var mystring = "";
        mystring += "<div class='accordion-toggle'>" + n + ". " + questions[i] + "</div>"; //<section><h2>"+questions[i]+"</h2>";
        mystring += "<div class='accordion-content'>";
        var totalAnswers = 0;
        var myValue = [];
        var myAnswer = [];
        for (var j = 0; j < nrOfanswers[i]; j++) {

            var thisAnswer = answerAsString((i + 1) + '_' + (j));
            var thisAnswerValue = countData[(i + 1) + '_' + j];

            if (thisAnswer) {
                myValue.push(thisAnswerValue);
                myAnswer.push(thisAnswer);
                totalAnswers += parseInt(thisAnswerValue);
            }
        };
        for (var k = 0; k < nrOfanswers[i]; k++) {
            if (myAnswer[k]) {
                var percent = parseInt(myValue[k] / totalAnswers * 100);
                mystring += "<div class='answer'><div class='progress awaitanimation' style='width:" + percent + "%'></div><span class='answertext'>" + myAnswer[k] + "</span><span class='answervalue'>" + myValue[k] + " st</span><span class='answerpercentage'>(" + percent + "%)</span></div>"
            }
        }


        mystring += "<div class='totalt'>Totalt antal svar: " + totalAnswers + " st</div>";
        mystring += "</div>";
        return mystring;
    }

    self.showFeelings = function(indexInArray, question_id, nrToShowAsString, questionstring) {
    	var mystring = "";
	 	
	 	var jsonObj = {"question_id": question_id};
   					
	 	var aFeelings = [
		 	"Lycka",
		 	"Lättnad",
		 	"Stress",
		 	"Maktlös",
		 	"Makt",
		 	"Pirr",
		 	"Kåt",
		 	"Kärlek",
		 	"Osäker",
		 	"Trygg",
		 	"Försiktig",
		 	"Skam",
		 	"Nyfiken",
		 	"Rädd",
		 	"Oro",
		 	"Respekt"
	 	];
		
			$.ajax({
	        	type: "GET",
	        	url: "../php/getClickWord.php",
	         	datatype:'json', 
	        	data: jsonObj,
	        	success:function(data) {
	        			var myObj =  JSON.parse(data)[0];
	        			var total = myObj.total;
	        			mystring += "<div class='accordion-toggle'>" + nrToShowAsString + ". " + questionstring + "</div>"; 
	  					mystring += "<div class='accordion-content'>";
	  					for (var j=1; j<=16; j++) {
	  						var thisWidth = parseInt((myObj["col"+j].value / total) *300);
							mystring +='<div class = "answer feelings" id = "col'+j+'"><div class="progress awaitanimation" style="width:'+thisWidth+'%"/><span class="answertext">'+aFeelings[j-1]+'</span><span class="answervalue">' + myObj["col"+j].value + ' st</span><span class="answerpercentage">(' + thisWidth + '%)</span></div>';
						}

						 mystring += "<div class='totalt'>Totalt antal unika svar (där alla har angett tre alternativ var): " + total/3 + " st</div>";
			     		mystring += "</div>";
			     		

			     		myFeelings.splice(indexInArray, 0, mystring);
			     		
						nrOfFeelingsToRead--;

				}

	        });

     
    }


    self.showReport = function(nId) {
        $.getJSON('php/countanswersfromDB.php', function(data) {

            RP.data = data;

            countUsers = _.countBy(data, function(obj) {
                return obj.user.replace(" ", "_");
            });



            countData = _(data).chain()
                .map(function(type) {
                    return type.answer_id
                })
                // break down types
                .flatten() // squash it down to a single array
                .reduce(function(counts, item) {
                    counts[item] = (counts[item] || 0) + 1;
                    return counts;
                }, {}).value();

			$('.main').html('Laddar alla svar');

            RP.resultstring = "<article ><section><h2>Antal unika besök, med minst ett svar: " + _.size(countUsers) + "</h2></section></article>";
            RP.resultstring += "<div id='helptext'>Klicka på frågorna nedan för att visa svarsresultat</div>";
            RP.resultstring += "<div id='accordion'>";


            RP.showFeelings(0,4,1, "Sara reser till Ungern som planerat. Hur känns det?");
            RP.showFeelings(1,5,2, "Sara reser till Malta med Matthieu. Hur känns det?");
            RP.showFeelings(2,6,4, "Sara har sex utan kondom. Hur känns det?");

            RP.showFeelings(3,1,7, "Amir är tillsammans med Matthieu, men de har ingen kondom. Hur känns det?");
            RP.showFeelings(4,2,8, "Victor har haft sex med Martine på stranden. Hur känns det?");
            RP.showFeelings(5,3,9, "Peter har köpt sex på hotellrummet. Hur känns det?");

            RP.showFeelings(6,7,16, "Lee röker cannabis som alla andra. Hur känns det?");
            RP.showFeelings(7,10,17, "Lee tackar nej till cannabis. Hur känns det?");


            var myVar = setInterval(function() {
            	
            	if (nrOfFeelingsToRead == 0) {
            			clearInterval(myVar);
            		 


            		    RP.resultstring += "<div class='sectionheader'>Backpacking</div>";
			            RP.resultstring += myFeelings[0];
			            RP.resultstring += myFeelings[1];
			            RP.resultstring += RP.showQuestion(1, 3);
			             RP.resultstring+= myFeelings[2];
			            RP.resultstring += RP.showQuestion(4, 5);
			            RP.resultstring += RP.showQuestion(5, 6);
			            
			            RP.resultstring += "<div class='sectionheader'>Festresan</div>";
			            RP.resultstring += myFeelings[3];
			            RP.resultstring += myFeelings[4];
			            RP.resultstring += myFeelings[5];
			            RP.resultstring += RP.showQuestion(9, 10);
			            RP.resultstring += RP.showQuestion(10, 11);
			            RP.resultstring += RP.showQuestion(12, 12);
			            RP.resultstring += RP.showQuestion(13, 13);
			            RP.resultstring += RP.showQuestion(14, 14);
			            RP.resultstring += RP.showQuestion(15, 15);
			           	
			           	RP.resultstring += "<div class='sectionheader'>Språkresan</div>";
			           	RP.resultstring += myFeelings[6];
			           	RP.resultstring += myFeelings[7];
			            RP.resultstring += RP.showQuestion(19, 18);
			            RP.resultstring += RP.showQuestion(20, 19);
			            RP.resultstring += RP.showQuestion(21, 20);
			            RP.resultstring += RP.showQuestion(22, 21);
			            RP.resultstring += "</div>";

		            	$('.main').html(RP.resultstring);

		            	setTimeout(function() {


			                $('#accordion').find('.accordion-toggle').click(function() {

			                    //Expand or collapse this panel
			                    $(this).next().slideToggle('fast');
			                    $(this).toggleClass('selected');
			                    $(this).next().find($('.progress')).removeClass('awaitanimation');
			                    $(".accordion-toggle").not($(this)).removeClass('selected');

			                    //Hide the other panels
			                    $(".accordion-content").not($(this).next()).slideUp('fast');


			                });
			            }, 200);
		            	
            	}


            },100);

            	 
	        


           
            





        });

    }



    return self;

})({});
