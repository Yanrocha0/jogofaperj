const questions = [
    {
        question: "O que é oxidação?",
        options: ["Ganho de elétrons", "Perda de elétrons", "Reação com ácidos", "Mudança de cor"],
        correct: 1,
        explanation: "Oxidação é a perda de elétrons."
    },
    {
        question: "O que é redução?",
        options: ["Ganho de elétrons", "Perda de elétrons", "Reação com bases", "Liberação de calor"],
        correct: 0,
        explanation: "Redução é o ganho de elétrons."
    },
    {
        question: "Qual destes compostos é um ácido?",
        options: ["NaOH", "HCl", "NH₃", "NaCl"],
        correct: 1,
        explanation: "HCl é um ácido que libera H+ na água."
    },
    {
        question: "Qual destes compostos é uma base?",
        options: ["H₂SO₄", "CO₂", "NaOH", "HCl"],
        correct: 2,
        explanation: "NaOH é uma base que libera OH⁻."
    },
    {
        question: "O que caracteriza um sal inorgânico?",
        options: ["Ser formado por um metal e um não-metal", "Ser formado pela reação entre um ácido e uma base", "Ter sabor doce", "Ser solúvel em água"],
        correct: 1,
        explanation: "Um sal inorgânico é formado pela reação entre um ácido e uma base."
    },
    {
        question: "O ferro enferrujando é um exemplo de?",
        options: ["Redução", "Oxidação", "Neutralização", "Sublimação"],
        correct: 1,
        explanation: "A ferrugem é um exemplo de oxidação do ferro."
    }
];

let shuffledQuestions;
let currentQuestionIndex = 0;
let score = 0;
let playerName = "Você"; // Nome padrão do jogador

const questionElement = document.getElementById("question");
const speechBubble = document.getElementById("speech-bubble");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");
const questionInExplanation = document.getElementById("question-in-explanation");

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {
    shuffledQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector(".options").style.display = "block";
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("explanation-box").classList.add("hidden"); // Garante que a explicação comece escondida
    loadQuestion();
}

function loadQuestion() {
    speechBubble.classList.remove("hidden");
    explanationBox.classList.add("hidden"); // Garante que a explicação esteja escondida ao carregar uma nova pergunta
    const q = shuffledQuestions[currentQuestionIndex];
    typeWriterEffect(q.question, questionElement);

    document.getElementById("progress-text").innerText = `Pergunta ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
    const buttons = document.querySelectorAll(".option");
    buttons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.className = "option";
        btn.disabled = false;
        btn.onclick = () => checkAnswer(index);
    });
}

function typeWriterEffect(text, element, speed = 30) {
    let i = 0;
    element.textContent = ''; // Limpa o texto inicial
    const intervalId = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, speed);
}

function checkAnswer(selectedIndex) {
    const q = shuffledQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option");
    buttons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === q.correct;
    buttons[selectedIndex].classList.add(isCorrect ? "correct" : "wrong");
    buttons[q.correct].classList.add("correct");

    if (isCorrect) {
        score++;
        setTimeout(nextQuestion, 1000);
    } else {
        showExplanation(currentQuestionIndex);
    }
}

function showExplanation(index) {
    const q = shuffledQuestions[index];
    explanationText.textContent = q.explanation;
    questionInExplanation.textContent = q.question; // Exibe a pergunta em negrito no topo
    explanationBox.classList.remove("hidden");
    speechBubble.classList.add("hidden"); // Esconde o balão de fala durante a explicação
}

nextBtn.addEventListener("click", () => nextQuestion());

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("score-text").innerText = `Você acertou ${score} de ${shuffledQuestions.length}!`;
    document.getElementById("result-container").classList.remove("hidden");
    document.querySelector(".options").style.display = "none";
    speechBubble.classList.add("hidden");
    explanationBox.classList.add("hidden"); // Garante que a caixa de explicação esteja escondida no final
}

function goToHome() {
    window.location.href = "index.html";
}

// Inicia o jogo quando a página carrega
startGame();