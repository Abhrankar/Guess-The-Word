var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
var player1_score = 0;
var player2_score = 0;
questionTurn = player1;
answerTurn = player2;
document.getElementById("player1").innerHTML = player1 + " : " + player1_score;
document.getElementById("player2").innerHTML = player2 + " : " + player2_score;
document.getElementById("Question").innerHTML = "Question turn : " + player1;
document.getElementById("Answer").innerHTML = "Answer turn : " + player2;
function send() {
    var getWord = document.getElementById("Word").value;
    var word = getWord.toLowerCase();
    console.log(word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    midValue = Math.floor(word.length/2);
    charAtMid = word.charAt(midValue);
    endValue = word.length-1;
    charAtLast = word.charAt(endValue);
    console.log(charAtLast);
    console.log(charAtMid);
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAtMid, "_");
    removeCharAt3 = removeCharAt2.replace(charAtLast, "_");
    console.log(removeCharAt1);
    console.log(removeCharAt2);
    console.log(removeCharAt3);
    questionWord = "<h4 id='word_display' Q. >" + removeCharAt3 + "</h4>";
    answerWord = "<br>Answer: <input id='answerInput'>";
    checkButton = "<br><br> <button onclick = 'check()' class = 'btn btn-info'>Check</button>";
    Row = questionWord + answerWord + checkButton;
    document.getElementById("output").innerHTML = Row;
}

function check() {
    var getWord = document.getElementById("Word").value;
    var word = getWord.toLowerCase();
    inputValue = document.getElementById("Word").value;
    Answer = inputValue.toLowerCase();
    console.log(Answer);
    if (Answer == word) {
        if (questionTurn == player1) {
            player2_score = player2_score + 1;
            document.getElementById("player2").innerHTML = player2 + " : " + player2_score;
        }

        if (questionTurn == player2) {
            player1_score = player1_score + 1;
            document.getElementById("player1").innerHTML = player1 + " : " + player1_score;
        }
    }

    if (questionTurn == player1) {
        questionTurn = player2;
        answerTurn = player1;
        document.getElementById("Question").innerHTML = "Question turn : " + player2;
        document.getElementById("Answer").innerHTML = "Answer turn : " + player1;
    }

    if (questionTurn == player2) {
        questionTurn = player1;
        answerTurn = player2;
        document.getElementById("Question").innerHTML = "Question turn : " + player1;
        document.getElementById("Answer").innerHTML = "Answer turn : " + player2;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("word").innerHTML = "";
}