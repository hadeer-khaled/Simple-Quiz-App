
const questions =
    [
        [
            {
                question: "Merge sort uses which of the following techniques to implement sorting?",
                answers: [{ text: "Backtracking", flag: false },
                { text: "Greedy algorithm", flag: false },
                { text: "Divide and conquer", flag: true },
                { text: "Dynamic programming", flag: false }]
            },
            {
                question: "Which sorting algorithm may make multiple swaps per pass?",
                answers: [{ text: "Bubble Sort", flag: true },
                { text: "Insertion Sortt", flag: false },
                { text: "Selection Sort", flag: false },
                { text: "None of the above", flag: false }]
            },
            {
                question: "Which of the following is not an in-place sorting algorithm?",
                answers: [{ text: "Insertion Sort", flag: false },
                { text: "Selection Sortt", flag: false },
                { text: "Bubble Sort", flag: false },
                { text: "Merge sort", flag: true }]
            },
            {
                question: "How many passes will both the selection and insertion sorts make?",
                answers: [{ text: "N+1", flag: false },
                { text: "N", flag: false },
                { text: "N-1", flag: true },
                { text: "None of the above", flag: false }]
            },
            {
                question: "What is the best case time complexity of merge sort?",
                answers: [{ text: "O(1)", flag: false },
                { text: "O(log n)", flag: false },
                { text: "O(n)", flag: false },
                { text: "O(n log n)", flag: true }]
            },
        ], //Sorting
        [
            {
                question: "Merge sort uses which of the following techniques to implement sorting?",
                answers: [{ text: "Backtracking", flag: false },
                { text: "Greedy algorithm", flag: false },
                { text: "Divide and conquer", flag: true },
                { text: "Dynamic programming", flag: false }]
            },
            {
                question: "Which sorting algorithm may make multiple swaps per pass?",
                answers: [{ text: "Bubble Sort", flag: true },
                { text: "Insertion Sortt", flag: false },
                { text: "Selection Sort", flag: false },
                { text: "None of the above", flag: false }]
            },
            {
                question: "Which of the following is not an in-place sorting algorithm?",
                answers: [{ text: "Insertion Sort", flag: false },
                { text: "Selection Sortt", flag: false },
                { text: "Bubble Sort", flag: false },
                { text: "Merge sort", flag: true }]
            },
            {
                question: "How many passes will both the selection and insertion sorts make?",
                answers: [{ text: "N+1", flag: false },
                { text: "N", flag: false },
                { text: "N-1", flag: true },
                { text: "None of the above", flag: false }]
            },
            {
                question: "What is the best case time complexity of merge sort?",
                answers: [{ text: "O(1)", flag: false },
                { text: "O(log n)", flag: false },
                { text: "O(n)", flag: false },
                { text: "O(n log n)", flag: true }]
            },
        ],//Stack
        [
            {
                question: "A queue is a first in first out data structure?",
                answers: [{ text: "True", flag: true },
                { text: "false", flag: false },
                    // { text: "Divide and conquer", flag: true },
                    // { text: "Dynamic programming", flag: false }
                ]
            },
            {
                question: "A Queue uses a front and rear pointer?",
                answers: [{ text: "True", flag: true },
                { text: "false", flag: false },
                    // { text: "Selection Sort", flag: false },
                    //     { text: "None of the above", flag: false }
                ]
            },
            {
                question: "A Queue can only store 6 data items. The Queue is sent 4 data items: Bert, Cynthia, Cedric and Albert. Where does the 'Rear' pointer point?",
                answers: [{ text: "Bert", flag: false },
                { text: "Cynthia", flag: false },
                { text: "Cedric", flag: false },
                { text: "Albert", flag: true }]
            },
            {
                question: "A Queue can only store 6 data items. The Queue is sent 4 data items: Bert, Cynthia, Cedric and Albert. Where does the 'Front' pointer point?",
                answers: [{ text: "Bert", flag: true },
                { text: "Cynthia", flag: false },
                { text: "Cedric", flag: false },
                { text: "Albert", flag: false }]
            }
        ],//Queues
        [
            {
                question: "……………… is a directed tree in which out-degree of each node is less than or equal to two",
                answers: [{ text: "Trinary tree", flag: false },
                { text: "Unary tree", flag: false },
                { text: "Binary tree", flag: true },
                { text: "Both b and c", flag: false }]
            },
            {
                question: "The number of edges from the root to the node is called ________ of the tree?",
                answers: [{ text: "Depth", flag: true },
                { text: "Height", flag: false },
                { text: "Length", flag: false },
                { text: "Width", flag: false }]
            },
            {
                question: "The number of edges from the node to the deepest leaf is called_______of the tree.",
                answers: [{ text: "Depth", flag: false },
                { text: "Height", flag: true },
                { text: "Length", flag: false },
                { text: "Width", flag: false }]
            },
            {
                question: "What is the average case time complexity for finding the height of the binary tree?",
                answers: [{ text: "h = O(n)", flag: false },
                { text: "h = O(n log n)", flag: false },
                { text: "h = O(log log n)", flag: false },
                { text: "h = O(log n)", flag: true }]
            },
            {
                question: "Which of these tree traversal methods is used to output the contents of a binary tree in ascending order?",
                answers: [{ text: "In-Order", flag: true },
                { text: "Pre-Order", flag: false },
                { text: "Post-Order", flag: false },
                { text: "Monastic Orders", flag: false }]
            },
            {
                question: "A tree is composed of ____ connected by edges or lines.",
                answers: [{ text: "Fruit", flag: false },
                { text: "Leaf Node", flag: false },
                { text: "Root Node", flag: false },
                { text: "Nodes", flag: true }]
            },
            {
                question: "A Kind of tree where every node in a tree can have at most two children.",
                answers: [{ text: "Binary Expression Tree", flag: false },
                { text: "Tree", flag: false },
                { text: "Binary Tree", flag: true },
                { text: "Binary Search Tree", flag: false }]
            },
            {
                question: "In preorder traversal of a binary tree the second step is _________",
                answers: [{ text: "traverse the right subtree", flag: false },
                { text: "traverse the left subtree", flag: true },
                { text: "traverse right subtree and visit the root", flag: false },
                { text: "visit the root", flag: false }]
            },
        ],//Trees

    ]


let listBtn = document.querySelector(".list-btn")
let startBtn = document.querySelector(".start-btn")

let welcomDiv = document.querySelector(".welcom-div")
let optionsDiv = document.querySelector(".options")
let errorElem = document.querySelector(".error-msg")
let quizDiv = document.querySelector(".quiz-div")
let quizTitle = document.querySelector(".quiz-title")

const questionElem = document.querySelector(".question")
const answersBtnsDiv = document.querySelector(".answers-btns")
const nextBtn = document.querySelector(".next-btn")

let questionNumbers = document.querySelector(".total")
let currentIndexDiv = document.querySelector(".currentIndex")
let counterDiv = document.querySelector(".counter")

let questionCategory = -1;
let currentQuestionIndx = 0
let score = 0



startApp()
// Functions
function getSelectedCategory(option) {
    option.addEventListener("click", (e) => {
        listBtn.innerHTML = `${e.target.innerHTML}`
        questionCategory = e.target.id
        console.log(questionCategory)
        optionsDiv.classList.toggle("show")
        questionNumbers.innerHTML = questions[questionCategory].length
        quizTitle.innerHTML = `${e.target.innerHTML} Quiz`
        startBtn.disabled = false
        startBtn.style.cursor = "pointer"
        errorElem.style.display = "none"
    })
}
function startApp() {
    listBtn.innerHTML = "Choose a Category"
    questionCategory = -1;
    welcomDiv.style.display = "flex"
    quizDiv.style.display = "none"
    errorElem.style.display = "none"

}
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
    let currentQuestion = questions[questionCategory][currentQuestionIndx]
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
        btn.addEventListener("click", selectAnswer)
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
        answer.style.cursor = "not-allowed"
        answer.disabled = true
    })
    if (+(currentIndexDiv.innerHTML) == questions[questionCategory].length) {
        nextBtn.innerHTML = "Show Score"
    }
    nextBtn.style.display = "block"
}

function nextQuestion() {
    currentQuestionIndx++
    if (currentQuestionIndx < questions[questionCategory].length) {
        showQuestion()
    } else {
        counterDiv.style.display = "none"
        showScore()
    }
}
function showScore() {
    resetState()
    questionElem.innerHTML = `You scored ${score} out of ${questions[questionCategory].length}`
    nextBtn.innerHTML = "Try Again"
    nextBtn.style.display = "block"
}
// Events

listBtn.addEventListener("click", () => {
    optionsDiv.classList.toggle("show")
})

Array.from(optionsDiv.children).forEach(getSelectedCategory)

startBtn.addEventListener("click", () => {
    if (questionCategory < 0) {

        errorElem.style.display = "inline"

        startBtn.style.cursor = "not-allowed"

        startBtn.disabled = true
    }
    else {
        welcomDiv.style.display = "none"
        quizDiv.style.display = "block"
        startQuiz()
    }
})

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndx < questions[questionCategory].length) {
        nextQuestion()
    } else {
        startApp()
    }

})

