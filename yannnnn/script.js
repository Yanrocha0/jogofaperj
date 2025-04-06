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
const correctSound = new Audio('wrong-answer-129254.mp3');
const wrongSound = new Audio('buzzer-or-wrong-answer-20582.mp3');

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {
    shuffledQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector(".options").style.display = "block";
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("ranking-section").style.display = "block";
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
    document.getElementById("progress-text").innerText = `Pergunta ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
    typeWriterEffect(questionData.question, questionElement);

    const buttons = document.querySelectorAll(".option");
    buttons.forEach((btn, index) => {
        btn.innerText = questionData.options[index];
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
        btn.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    const questionData = shuffledQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".option");
    buttons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === questionData.correct;

    if (isCorrect) {
        buttons[selectedIndex].classList.add("correct");
        score++;
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[questionData.correct].classList.add("correct");
    }

    showFeedback(isCorrect);
}

function showFeedback(isCorrect) {
    const feedback = document.getElementById('feedback');
    const icon = document.getElementById('feedback-icon');

    icon.textContent = isCorrect ? '✅' : '❌';
    isCorrect ? correctSound.play() : wrongSound.play();

    feedback.classList.remove('hidden');
    feedback.classList.add('visible');

    setTimeout(() => {
        feedback.classList.remove('visible');
        feedback.classList.add('hidden');
        nextQuestion();
    }, 1500);
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
            updateRanking(name, score);
            displayRanking();
            document.getElementById("ranking-section").style.display = "block";
        }
    }
}

function goToHome() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("playerName");
    if (name) {
        document.getElementById("player-name").innerText = `👤 Jogador: ${name}`;
        document.getElementById("ranking-section").style.display = "block";
    }
});

// ✅ Ranking functions
function updateRanking(name, score) {
    const rankingKey = 'quizRanking';
    const newEntry = { name, score };
    let ranking = JSON.parse(localStorage.getItem(rankingKey)) || [];

    ranking.push(newEntry);
    ranking.sort((a, b) => b.score - a.score);
    ranking = ranking.slice(0, 5);
    localStorage.setItem(rankingKey, JSON.stringify(ranking));
}

function displayRanking() {
    const rankingContainer = document.getElementById("ranking");
    const resetBtn = document.getElementById("reset-btn");
    const ranking = JSON.parse(localStorage.getItem('quizRanking')) || [];

    if (ranking.length === 0) {
        rankingContainer.innerHTML = "<p>Nenhum ranking ainda!</p>";
        resetBtn.style.display = "none";
        return;
    }

    let html = "<h3>🏆 Top 5 Jogadores:</h3><ol>";
    ranking.forEach(player => {
        html += `<li>${player.name} - ${player.score} pts</li>`;
    });
    html += "</ol>";
    rankingContainer.innerHTML = html;
    resetBtn.style.display = "inline-block";
}

function toggleRanking() {
    const rankingContainer = document.getElementById("ranking");
    const resetBtn = document.getElementById("reset-btn");

    const isVisible = rankingContainer.style.display === "block";
    if (isVisible) {
        rankingContainer.style.display = "none";
        resetBtn.style.display = "none";
    } else {
        displayRanking();
        rankingContainer.style.display = "block";
    }
}

function resetRanking() {
    localStorage.removeItem('quizRanking');
    displayRanking();
    alert("Ranking resetado com sucesso!");
}

startGame();
function startGame() {
    shuffledQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector(".options").style.display = "block";
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("ranking-section").style.display = "none"; // Oculta no início
    loadQuestion();
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
            updateRanking(name, score);
            document.getElementById("ranking-section").style.display = "block"; // Só aparece no final
        }
    }
}

function toggleRanking() {
    const rankingContainer = document.getElementById("ranking");
    const resetBtn = document.getElementById("reset-btn");

    const isVisible = rankingContainer.style.display === "block";
    if (isVisible) {
        rankingContainer.style.display = "none";
        resetBtn.style.display = "none";
    } else {
        displayRanking();
        rankingContainer.style.display = "block";
        resetBtn.style.display = "inline-block"; // Só mostra quando o ranking for exibido
    }
}
