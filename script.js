const question = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const next = document.getElementById("next");
const scoreText = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

const quiz = [

    {
        question:"Capital of Iran?",
        answers:["Tehran","Paris","London","Berlin"],
        correct:"Tehran"
    },

    {
        question:"2 + 2 = ?",
        answers:["3","4","5","6"],
        correct:"4"
    },

    {
        question:"HTML stands for?",
        answers:[
            "Hyper Text Markup Language",
            "Home Tool",
            "Hyper Tool",
            "Hello Text"
        ],
        correct:"Hyper Text Markup Language"
    }

];

showQuestion();
function showQuestion(){
    question.innerHTML = quiz[currentQuestion].question;
    for(let i=0;i<answers.length;i++){
        answers[i].innerHTML = quiz[currentQuestion].answers[i];
    }
}

for(let i=0;i<answers.length;i++){
    answers[i].addEventListener("click",function(){
        if(answers[i].innerHTML == quiz[currentQuestion].correct){
            score++;
        }
    });
}

next.addEventListener("click",function(){
    currentQuestion++;
    if(currentQuestion < quiz.length){
        showQuestion();
    }else{
        question.innerHTML = "Quiz Finished";

        for(let i=0;i<answers.length;i++){

            answers[i].style.display="none";

        }

        next.style.display="none";

        scoreText.innerHTML = "Your Score : " + score;

    }

});










