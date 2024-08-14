const questions = [
    {
        question: "Who is the Father of the Computer?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: false },
        ]
    },


{
    question: "When was the first time TypeScript was made public?",
    answers: [
        { text: "December 2012", correct: false },
        { text: "October 2012", correct: true },
        { text: "October 2013", correct: false },
        { text: "November 2013", correct: false },
    ] 
},


{
    question: " Which component is used to compile, debug and execute the java programs?",
    answers: [
        { text: " JRE", correct: false },
        { text: "JIT", correct: false },
        { text: "JDK", correct: true },
        { text: "JVM", correct: false },
    ]
},

{
    question: "Which of these packages contains the exception Stack Overflow in Java?",
    answers: [
        { text: "java.io", correct: false },
        { text: "java.system", correct: false },
        { text: "java.lang", correct: true },
        { text: " java.util", correct: false },
    ]
},

{
    question: "How does Java Script store dates in objects of Date type?",
    answers: [
        { text: "The number of days since January 1st, 1900", correct: false },
        { text: "The number of seconds since January 1st, 1970", correct: false },
        { text: "The number of milliseconds since January 1st, 1970", correct: false },
        { text: "The number of picoseconds since January 1st, 1970", correct: false },
    ]
},

{
    question: "Which of the following is the tainted property of a window object in Java Script?",
    answers: [
        { text: "Pathname", correct: false },
        { text: "Protocol", correct: false },
        { text: "Host", correct: false },
        { text: "Defaultstatus", correct: true },
    ]
},

{
    question: "Which of the following is used to capture all click events in a window?",
    answers: [
        { text: "window.captureEvents(Event.CLICK);", correct: true },
        { text: "window.routeEvents(Event.CLICK);", correct: false },
        { text: "window.handleEvents(Event.CLICK);", correct: false },
        { text: "window.raiseEvents(Event.CLICK);", correct: false },
    ]
},

{
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: [
        { text: "_java_and_java_names", correct: false },
        { text: "2java", correct: true },
        { text: "javaandjava", correct: false },
        { text: "None of the above", correct: false },
    ]
},

{
    question: "Which of the ways below is incorrect of instantiating a date?",
    answers: [
        { text: "new Date(dateString)", correct: false },
        { text: "new Date()", correct: false },
        { text: "new Date(year, month, day, hours, minutes, seconds, milliseconds)", correct: false },
        { text: "new Date(seconds)", correct: true },
    ]
},

{
    question: "___________ JavaScript is also called client-side JavaScript.",
    answers: [
        { text: "Microsoft", correct: false },
        { text: "Navigator", correct: true },
        { text: "LiveWire", correct: false },
        { text: "Native", correct: false },
    ]
},

// {
//     question: "",
//     answers: [
//         { text: "", correct: true },
//         { text: "", correct: false },
//         { text: "", correct: false },
//         { text: "", correct: false },
//     ]
// },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";

 }


 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }
nextButton.addEventListener("click", () => {
    // currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        // alert("Quiz Completed!");
        startQuiz();
    }
});

startQuiz();
