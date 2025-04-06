const questions = [
    {
        question: "O que é oxidação?",
        options: ["Ganho de elétrons", "Perda de elétrons", "Reação com ácidos", "Mudança de cor"],
        correct: 1
    },
    {  
        question: "O que é redução?",
        options: ["Ganho de elétrons", "Perda de elétrons", "Reação com bases", "Liberação de calor"],
        correct: 0
    },
    {
        question: "Qual destes compostos é um ácido?",
        options: ["NaOH", "HCl", "NH₃", "NaCl"],
        correct: 1
    },
    {
        question: "Qual destes compostos é uma base?",
        options: ["H₂SO₄", "CO₂", "NaOH", "HCl"],
        correct: 2
    },
    {
        question: "O que caracteriza um sal inorgânico?",
        options: ["Ser formado por um metal e um não-metal", "Ser formado pela reação entre um ácido e uma base", "Ter sabor doce", "Ser solúvel em água"],
        correct: 1
    },
    {
        question: "O ferro enferrujando é um exemplo de?",
        options: ["Redução", "Oxidação", "Neutralização", "Sublimação"],
        correct: 1
    }
];

let shuffledQuestions;
let currentQuestionIndex;
let score;
const questionElement = document.getElementById("question");

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {
    shuffledQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector(".options").style.display = "block";
    document.getElementById("result-container").classList.add("hidden");
    loadQuestion();
}

function typeWriterEffect(text, element, speed = 50) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function loadQuestion() {
    const questionData = shuffledQuestions[currentQuestionIndex];
    typeWriterEffect(questionData.question, questionElement);

    const buttons = document.querySelectorAll(".option");
    buttons.forEach((btn, index) => {
        btn.innerText = questionData.options[index];
        btn.classList.remove("correct", "wrong");
        btn.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    const questionData = shuffledQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option");

    if (selectedIndex === questionData.correct) {
        buttons[selectedIndex].classList.add("correct");
        score++;
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[questionData.correct].classList.add("correct");
    }

    setTimeout(() => nextQuestion(), 2000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        document.getElementById("score-text").innerText = `Você acertou ${score} de ${shuffledQuestions.length}!`;
        document.getElementById("result-container").classList.remove("hidden");
        document.querySelector(".options").style.display = "none";

        const name = localStorage.getItem("playerName");
        if (name) {
            document.getElementById("player-name").innerText = `👤 Jogador: ${name}`;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("playerName");
    if (name) {
        document.getElementById("player-name").innerText = `👤 Jogador: ${name}`;
    }
});


startGame();
