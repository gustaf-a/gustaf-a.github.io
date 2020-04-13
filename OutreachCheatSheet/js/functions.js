const allPickedValue = "all";
var strategiesAvailable = ["classic", "dog", "fivequestions", "kids", "farmers", "christians", "muslims", "vegetarians", "vegans"];
var languagesAvailable = ["english", "swedish", "french", "spanish"];

var pickedStrategy = allPickedValue;
var pickedLanguage = languagesAvailable[0];

function updateStrategy(strategy) {
    pickedStrategy = strategy;
    updateContent();
}

function updateLanguage(language) {
    pickedLanguage = language;
    updateContent();
}

function updateContent() {
    updateOutreachSelectedTabs('strategy', pickedStrategy);
    updateOutreachSelectedTabs('language', pickedLanguage);
    setDisplayOfAllWithClass("strategy-content", "none");
    showElement(pickedLanguage, pickedStrategy);
}

const activeClassActive = 'active';
const activeClassGrey = 'grey-half-transparent-bg';

function updateOutreachSelectedTabs(tabgroup, pickedValue) {
    var list = document.getElementById("advice-" + tabgroup + "-list").getElementsByTagName("a");
    for (let element of list) {
        element.classList.remove(activeClassActive);
        element.classList.remove(activeClassGrey);
        element.classList.remove(currentNotTextClass);
    }
    console.log("advice-" + tabgroup + "-" + pickedValue);
    document.getElementById("advice-" + tabgroup + "-" + pickedValue).classList.add(activeClassActive);
    document.getElementById("advice-" + tabgroup + "-" + pickedValue).classList.add(activeClassGrey);
    document.getElementById("advice-" + tabgroup + "-" + pickedValue).classList.add(currentTextClass);
}

const displayStyle = "block";
const rootAdviceString = "outreach-advice-content-";

function showElement(language, strategy) {

    let listOfLanguagesToIterate = []
    let listOfStrategiesToIterate = []
    let showDividerClass;

    if (strategy == allPickedValue) {
        for (var i = 0; i < strategiesAvailable.length; i++) {
            listOfStrategiesToIterate[i] = strategiesAvailable[i];
        }
    } else {
        listOfStrategiesToIterate[0] = strategy
    }

    if (language == allPickedValue) {
        for (var i = 0; i < languagesAvailable.length; i++) {
            listOfLanguagesToIterate[i] = languagesAvailable[i];
            showDividerClass = "block";
        }
    } else {
        listOfLanguagesToIterate[0] = language
        showDividerClass = "none";
    }

    for (var i = 0; i < listOfStrategiesToIterate.length; i++) {
        document.getElementById(rootAdviceString + listOfStrategiesToIterate[i]).style.display = displayStyle;
        setDisplayOfAllWithClass(rootAdviceString + listOfStrategiesToIterate[i] + "-" + "divider", showDividerClass);
        for (var j = 0; j < listOfLanguagesToIterate.length; j++) {
            document.getElementById(rootAdviceString + listOfStrategiesToIterate[i] + "-" + listOfLanguagesToIterate[j]).style.display = displayStyle;
        }
    }
}

function setDisplayOfAllWithClass(className, displayStyle) {
    var elementsToHide = document.getElementsByClassName(className);
    for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = displayStyle;
    }
}

function toggleMenu() {
    toggleMenuButtonText();
    toggleMenuVisibility();
}

const menuButtonText = ["Hide Menu", "Show Menu"];
const menuButtonId = "button-control-panel-toggle-menu";

function toggleMenuButtonText() {
    var currentText = document.getElementById(menuButtonId).innerHTML;
    if (currentText == menuButtonText[0]) {
        document.getElementById(menuButtonId).innerHTML = menuButtonText[1];
        return;
    }
    document.getElementById(menuButtonId).innerHTML = menuButtonText[0];
}

const menuDivId = "menu-big-div";

function toggleMenuVisibility() {
    if (document.getElementById(menuDivId).style.display == "none") {
        document.getElementById(menuDivId).style.display = displayStyle;
        return;
    }
    document.getElementById(menuDivId).style.display = "none";
}

const backgroundColors = ["white", "black"];

const blackTextClasses = "text-dark";
const whiteTextClasses = "text-white";
var currentBackground = backgroundColors[0];
var currentTextClass = blackTextClasses;
var currentNotTextClass = whiteTextClasses;

function toggleDarkMode() {
    if (document.body.style.backgroundColor == backgroundColors[1]) {
        currentBackground = backgroundColors[0];
        currentTextClass = blackTextClasses;
        currentNotTextClass = whiteTextClasses;
        setInnerHtmlOfElement("button-control-panel-toggle-darkmode", "Dark Mode");
    } else {
        currentBackground = backgroundColors[1];
        currentTextClass = whiteTextClasses;
        currentNotTextClass = blackTextClasses;
        setInnerHtmlOfElement("button-control-panel-toggle-darkmode", "Light Mode");
    }

    document.body.style.backgroundColor = currentBackground;
    updateTextClassOnElements("list-group-item");
    updateTextClassOnElements("advice-content-headers");
    updateTextClassOnElements("nav-link");
    setBackgroundOnElements("nav-link");
}

function setInnerHtmlOfElement(elementId, innerHtmlToSet) {
    document.getElementById(elementId).innerHTML = innerHtmlToSet;
}

function updateTextClassOnElements(elementsClassName) {
    elements = document.getElementsByClassName(elementsClassName);
    for (let element of elements) {
        element.classList.remove(currentNotTextClass);
        element.classList.add(currentTextClass);
    }
}

function setBackgroundOnElements(elementsClassName) {
    elements = document.getElementsByClassName(elementsClassName);
    for (let element of elements) {
        element.style.backgroundColor = currentBackground;
    }
}

function changeFontSize(sizeChange){
    var fontSize = parseInt($("body").css("font-size"));
    fontSize = fontSize + sizeChange + "px";
    $("body").css({'font-size':fontSize});
}