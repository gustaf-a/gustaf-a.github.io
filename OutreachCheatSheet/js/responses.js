var responses = `{
    "classic": {
        "english": [
            "This is just one of many openers. It's not that that important what people say.", 
            "Give people some time to feel and think about it. Common responses are bad, sad, angry. This is a good time to tell a small story about what you felt the first time you saw these things.", 
            "Many respond by thinking for a while and then saying no. This is an important time to relate with 'feel, felt, found'", 
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
            "Sometimes people actually ask now ",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
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
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written.",
            "Common response not yet written."
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