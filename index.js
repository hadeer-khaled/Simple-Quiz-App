const questions = [
    {
        question: "Merge sort uses which of the following techniques to implement sorting?",
        answers: [{ text: "Backtracking", flag:false},
            { text: "Greedy algorithm", flag: false },
            { text: "Divide and conquer", flag: true },
            { text: "Dynamic programming", flag: false }]
    },
    {
        question: "Which sorting algorithm may make multiple swaps per pass?",
        answers: [{ text: "Bubble Sort", flag:true},
            { text: "Insertion Sortt", flag: false },
            { text: "Selection Sort", flag: false },
            { text: "None of the above", flag: false }]
    },
    {
        question: "Which of the following is not an in-place sorting algorithm?",
        answers: [{ text: "Insertion Sort", flag:false},
        { text: "Selection Sortt", flag: false },
            { text: "Bubble Sort", flag: false },
            { text: "Merge sort", flag: true }]
    },
    {
        question: "How many passes will both the selection and insertion sorts make?",
        answers: [{ text: "N+1", flag:false},
            { text: "N", flag: false },
            { text: "N-1", flag: true },
            { text: "None of the above", flag: false }]
    },
    {
        question: "What is the best case time complexity of merge sort?",
        answers: [{ text: "O(1)", flag:false},
            { text: "O(log n)", flag: false },
            { text: "O(n)", flag: false },
            { text: "O(n log n)", flag: true }]
    },
]

const questionElem = document.querySelector(".question")
const answersBtnsDiv = document.querySelector(".answers-btns")
const nextBtn = document.querySelector(".next-btn")

let currentQuestionIndx = 0
let score = 0 
let questionNumbers = document.querySelector(".total")
let currentIndexDiv = document.querySelector(".currentIndex")
questionNumbers.innerHTML = questions.length
let counterDiv = document.querySelector(".counter")

function startQuiz() {
    let currentQuestion
    currentQuestionIndx = 0
    score = 0 
    nextBtn.innerHTML = "Next"
    counterDiv.style.display = "block"
    showQuestion()
    
}
function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndx]
    questionElem.innerHTML = `${currentQuestionIndx + 1}. ${currentQuestion.question}`
    currentIndexDiv.innerHTML = currentQuestionIndx + 1
    showAnswers(currentQuestion)
}
function resetState() {
    nextBtn.style.display = "none";
    while (answersBtnsDiv.firstChild) {
        console.log(answersBtnsDiv.firstChild)
        answersBtnsDiv.removeChild(answersBtnsDiv.firstChild)
    }
}
function showAnswers(currentQuestion) {
    currentQuestion.answers.forEach(answer => {
        let btn = document.createElement("button")
        btn.innerHTML = answer.text 
        btn.classList.add("answer-btn")
        answersBtnsDiv.appendChild(btn)
        if (answer.flag) {
            btn.dataset.correct = answer.flag;
        }
        btn.addEventListener("click" , selectAnswer)
    });
}
function selectAnswer(e) {
    let selectedAnswer = e.target
    if (selectedAnswer.dataset.correct === "true") {
        selectedAnswer.classList.add("correct")
        score++
    }
    else {
        selectedAnswer.classList.add("incorrect")
    }
    Array.from(answersBtnsDiv.children).forEach(answer => {
        if (answer.dataset.correct == "true") {
            answer.classList.add("correct")
        }
        answer.disabled = "true"
    })
    if (+(currentIndexDiv.innerHTML) == questions.length) {
        nextBtn.innerHTML = "Show Score"
    }
    nextBtn.style.display = "block"
}

function nextQuestion() {
    currentQuestionIndx++
    if (currentQuestionIndx < questions.length) {
        showQuestion()
    } else {
        counterDiv.style.display = "none"
        showScore()
    }       
}
function showScore() {
    resetState()
    questionElem.innerHTML = `You scored ${score} out of ${questions.length}`
    nextBtn.innerHTML = "Try Again"
    nextBtn.style.display = "block"
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndx < questions.length) {
        nextQuestion()
    } else {
        startQuiz()
    }
    
})
startQuiz()