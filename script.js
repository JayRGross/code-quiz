const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answersButtonElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(question) {
    questionElement.innerText = questions.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'An external JavaScript must contain the <script> tag?',
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true },
        ]
    }
]