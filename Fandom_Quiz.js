var readlinesync = require('readline-sync');
var score = 0
console.log('Relationship Quiz: How Well Do You Know Your Partner?\n')
console.log('------------------');
var userName = readlinesync.question("Hi! What is your name?\n")
console.log("Welcome " + userName + "! " + " How Well Do You Know Your Partner? " + " Type: yes/no", );
var highscore = [
    { Name: "Ajay         ", Score: 2 },
    { Name: "Sumit         ", Score: 4 },
    { Name: "Kush          ", Score: 1 },
    { Name: "Anil        ", Score: 5 },
    { Name: "Verru       ", Score: 3 }
];

function play(questions, answer) {
    var userAnswer = readlinesync.question(questions);
    console.log("You Enter: (" + userAnswer + ")"); {
        if (userAnswer === answer) {
            console.log('right answer')
            score += 1;
        } else {
            console.log('wrong answer')
        }
        console.log('Current score : ' + score);
        console.log('------------------');

    }
}


var questions = [
    { question: " I can name my partner's best friends.", answer: "no" },
    { question: "My partner is one of my best friends.", answer: "yes" },
    { question: " My partner is usually a great help as a problem solvers.", answer: "yes" },
    { question: " At the end of the day my partner is glad to see me.", answer: "yes" },
    { question: " We just love talking to each other ", answer: "yes" }

];



for (var i = 0; i < questions.length; i++) {
    console.log((i + 1) + "." + questions[i].question)
    currentQuestion = questions;

    play(currentQuestion[i].questions, currentQuestion[i].answer.toLowerCase());

} {

    console.log("your Final Score: " + score);
    console.log('--------------------');

    console.log("Thank you , take a snapshot of your final score, `if you Goted High Score and ,Send Me`  ")



    var checkHighscore = readlinesync.question("Do you want to check the leaderboard? ");

    if (checkHighscore.toLowerCase() === "yes") {
        for (var i = 0; i < highscore.length; i++) {
            console.log((i + 1) + ". " + "Name : " + highscore[i].Name + " Score : " + highscore[i].Score);

        }

    }
}
console.log("Thanktyou For Playing")