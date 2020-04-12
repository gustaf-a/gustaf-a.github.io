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
            "This is not the first question to ask someone when approaching. First it's good to start with another opening question, but this can be the second or third questions. This usually only get's a short yes, so be prepared to pose the next question straight away.",
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

var responseMarginClass = "mt-3";


$(document).ready(function () {
    //TODO: Hide all question response
    $(".question-response").hide();
    $(".question-response").addClass(responseMarginClass);

    $(".outreach-question").click(function () {
        getQuestionResponseClicked(this);
    });

    //TODO: Populate all question responses
    console.log("Ready called");
    fillAllResponses();
});

function fillAllResponses() {
    $(".question-response").each(function (i) {
        var parentDivIdArray = this.parentNode.parentNode.parentNode.id.split("-");
        this.innerText = getQuestionResponse(parentDivIdArray[3], parentDivIdArray[4], this.parentNode.innerText.charAt(0));
    }
    )
}

//div id="outreach-advice-content-classic-english"
function getQuestionResponseClicked(listItemClicked) {
    let questionResponseDiv = $(listItemClicked).find(">:last-child")[0];
    toggleListItemsResponseShownFromDiv(questionResponseDiv);
}

const questionSrcArrowClickToShow = "open-iconic/svg/chevron-bottom.svg";
const questionSrcArrowClickToHide = "open-iconic/svg/chevron-top.svg";

function toggleListItemsResponseShownFromDiv(questionResponseDiv) {
    if (questionResponseDiv.style.display == "none") {
        $(questionResponseDiv).show();
        $(questionResponseDiv.parentNode).find(">:first-child").attr("src", questionSrcArrowClickToHide);
    } else {
        $(questionResponseDiv).hide();
        $(questionResponseDiv.parentNode).find(">:first-child").attr("src", questionSrcArrowClickToShow);
    }
}

var responsesShown = false;

function toggleShowAllResponses() {
    if (responsesShown) {
        $(".question-response").hide();
        $(".question-response-icon-arrow").attr("src", questionSrcArrowClickToShow);
        responsesShown = false;
    } else {
        $(".question-response").show();
        $(".question-response-icon-arrow").attr("src", questionSrcArrowClickToHide);
        responsesShown = true;
    }
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
        return "Not yet written";
    }

    return failedResponseMessage + ": Bad language and number - " + language + ", " + number;

}