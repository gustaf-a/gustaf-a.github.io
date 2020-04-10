var responses = `{
    "classic": {
        "english": [
            "This is just one of many openers. It's not that that important what people say.", 
            "Give people some time to feel and think about it. Common responses are bad, sad, angry. This is a good time to tell a small story about what you felt the first time you saw these things.", 
            "Many respond by thinking for a while and then saying no. However, this question is important to know the facts around. This is a good time to relate with 'feel, felt, found' and point to official organizations for example Academy of Nutrition and Dietetics or movies such as The Game Changers", 
            "There are two main ways: 1. We can stop giving money to the industry, 2. We can help spread information to more people by being active. Online, on the streets or to friends and family.", 
            "Common answers are: 'not really', 'family', 'I can eat less meat', 'will it really make a difference?'. Remember that the important thing is what happens after they leave. Will they by themselves look for information or not?"],
        "swedish": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
        ],
        "french": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
        ],
        "spanish": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."    
        ]
    },
    "dog": {
        "english": [
            "Be prepared for a no. Classic question 1 may work better as it doesn't give people an easy way out.",
            "Of course we acknowledge that there are differences, but what we're getting at here is that those differences aren't morally relevant. If someone doesn't care about dogs, make the same question with humans. Look up 'Name the Trait' for more information.",
            "Many respond by thinking for a while and then saying no. However, this question is important to know the facts around. This is a good time to relate with 'feel, felt, found' and point to official organizations for example Academy of Nutrition and Dietetics or movies such as The Game Changers",
            "Almost everyone will agree that this is wrong without excuses. It's a good moment to point out that this example is the best possible scenario for the meat industry.",
            "If the person you're talking to doesn't agree to check out the resouces, thank them for their honesty and ask them why."
        ],
        "swedish": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
        ],
        "french": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
        ],
        "spanish": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."    
        ]
    },
    "fivequestions": {
        "english": [
            "This usually only get's a short yes, so be prepared to pose the next question straight away.",
            "Many people react in a way that makes it useful to repeat the question and really stress the word 'necessary'",
            "It's useful to point towards the screen while posing this question.",
            "Most people say we have alternatives, but be prepared to meet people who believe it's necessary.",
            "If they don't object, it's a good opportunity to coach them into watching a documentary. Even if they agree completely with the arguments, it's most of the time not enough for real change."
        ],
        "swedish": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
        ],
        "french": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
        ],
        "spanish": [
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."    
        ]
    }
}`;

const failedResponseMessage = "Error when finding response";

var responsesObject = JSON.parse(responses);

//div id="outreach-advice-content-classic-english"
function getQuestionResponseClicked(listItemClicked) {
    var responseText;
    var listItem = $(listItemClicked);

    if (listItem.children(".classic-response")[0].innerText == "") {
        var parentDivIdArray = getParentDivId(listItem);
        responseText = getQuestionResponse(parentDivIdArray[3], parentDivIdArray[4], listItem[0].innerText.charAt(0));
        listItem.find(">:first-child").attr("src", "open-iconic/svg/chevron-top.svg");
    } else {
        responseText = "";
        listItem.find(">:first-child").attr("src", "open-iconic/svg/chevron-bottom.svg");
    }
    listItem.find(">:last-child").toggleClass("mt-3");
    listItem.children(".classic-response")[0].innerText = responseText;
}

function getParentDivId(listItem) {
    return listItem.closest("div")[0].id.split("-");
}

function getQuestionResponse(question, language, questionNumber) {
    if (question === "classic") {
        return getQuestionResponseFromObject(responsesObject.classic, language, questionNumber);
    }

    if (question === "dog") {
        return getQuestionResponseFromObject(responsesObject.dog, language, questionNumber);
    }

    if (question === "fivequestions") {
        return getQuestionResponseFromObject(responsesObject.fivequestions, language, questionNumber);
    }

    return failedResponseMessage + ": Bad Question - " + question;

    // console.log(responsesObject.classic.english[questionNumber-1]);
}

function getQuestionResponseFromObject(questionObject, language, number) {
    number--;
    try {
        if (language == "english") {
            return questionObject.english[number];
        }

        if (language == "swedish") {
            return questionObject.swedish[number];
        }

        if (language == "french") {
            return questionObject.french[number];
        }

        if (language == "spanish") {
            return questionObject.spanish[number];
        }
    } catch (error) {

    }

    return failedResponseMessage + ": Bad language and number - " + language + ", " + number;
}