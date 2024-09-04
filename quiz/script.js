const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "Which ocean is the largest?",
        a: "Atlantic",
        b: "Indian",
        c: "Arctic",
        d: "Pacific",
        correct: "d",
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "William Shakespeare",
        d: "Jane Austen",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const options = ["a_text", "b_text", "c_text", "d_text"].map(id => document.getElementById(id));
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => answers.forEach(answer => (answer.checked = false));

const getSelected = () => {
  let selected;
  answers.forEach(answer => {
    if (answer.checked) selected = answer.id;
  });
  return selected;
};

const loadQuiz = () => {
  deselectAnswers();
  const { question, a, b, c, d } = quizData[currentQuiz];
  questionElement.innerText = question;
  [a, b, c, d].forEach((text, i) => options[i].innerText = text);
};

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    currentQuiz < quizData.length ? loadQuiz() : quiz.innerHTML = `
      <h2>You scored ${score}/${quizData.length}</h2>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
});

loadQuiz();