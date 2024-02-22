"use strict";

function game(){
    //two truths and a lie
    if (confirm("i have one year of coding experience")){
        alert("incorrect!");
    } else {
        alert("correct!");
    }

    if (confirm("i learned python")){
        alert("correct!");
    } else {
        alert("incorrect!");
    }

    
    if (confirm("my middle school coding teacher taught me javascript")){
        alert("correct!");
    } else {
        alert("incorrect!");
    }

    //5 questions
    if (prompt("when you are faced with a difficult question that decides the fate of thousands of people, do you cripple under the pressure?") === "yes".toLowerCase || "y".toLowerCase){
        console.log("question one response is yes");
    }

    if (prompt("is eve a monster?") === "yes".toLowerCase || "y".toLowerCase){
        console.log("question two response is yes");
    }

    if (prompt("are you shorter than perla?") === "yes".toLowerCase || "y".toLowerCase){
        console.log("question three response is yes");
    }

    if (prompt("do you believe in god?") === "yes".toLowerCase || "y".toLowerCase){
        console.log("question four response is yes");
    }

    if (prompt("is this week over yet?") === "no".toLowerCase || "n".toLowerCase){
        console.log("question five response is no");
    }

}

function getToKnowYou(){
    let username = prompt("what is your name?");
    alert("Hello " + username + " welcome to my site!");
    alert(username + ", i hope you enjoy the rest of my site");
}
