particlesJS("particles-js", {
    "particles": { "number": { "value": 30, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#1abc9c" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 6 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 8, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 3, "sync": false } }, "line_linked": { "enable": true, "distance": 200, "color": "#3498db", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "bounce", "bounce": true, "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
});

// Banco de dados de perguntas com níveis de dificuldade
const questions = [
    { question: "Qual é o número de oxidação do oxigênio na maioria dos compostos?", options: ["-2", "+2", "0", "-1"], correct: 0, explanation: "O oxigênio geralmente possui número de oxidação -2.", difficulty: "easy", basePoints: 10 },
    { question: "Em uma reação redox, o agente oxidante é a substância que:", options: ["Perde elétrons", "Ganha elétrons", "É oxidada", "É neutra"], correct: 1, explanation: "O agente oxidante é a substância que ganha elétrons e, portanto, é reduzida.", difficulty: "medium", basePoints: 15 },
    { question: "O que ocorre com o número de oxidação de um elemento que sofre oxidação?", options: ["Aumenta", "Diminui", "Permanece o mesmo", "Torna-se zero"], correct: 0, explanation: "Na oxidação, o número de oxidação de um elemento aumenta devido à perda de elétrons.", difficulty: "easy", basePoints: 10 },
    { question: "Qual é o nome da reação entre um óxido ácido e uma base?", options: ["Neutralização", "Saponificação", "Esterificação", "Hidrólise"], correct: 0, explanation: "A reação entre um óxido ácido e uma base é uma neutralização, formando sal e água.", difficulty: "medium", basePoints: 15 },
    { question: "Qual dessas substâncias é um óxido básico?", options: ["Na₂O", "CO₂", "SO₃", "NO₂"], correct: 0, explanation: "Na₂O é um óxido básico que reage com água formando uma base.", difficulty: "hard", basePoints: 20 },
    { question: "Qual elemento é essencial em todos os compostos orgânicos?", options: ["Carbono", "Oxigênio", "Nitrogênio", "Hidrogênio"], correct: 0, explanation: "Todos os compostos orgânicos contêm carbono, que forma ligações covalentes estáveis.", difficulty: "easy", basePoints: 10 },
    { question: "Qual função orgânica está presente no etanol?", options: ["Álcool", "Ácido carboxílico", "Cetona", "Éter"], correct: 0, explanation: "O etanol (CH₃CH₂OH) pertence à função álcool devido ao grupo hidroxila (-OH).", difficulty: "medium", basePoints: 15 },
    { question: "Qual é o produto da reação entre um ácido carboxílico e um álcool?", options: ["Éster", "Aldeído", "Cetona", "Éter"], correct: 0, explanation: "A reação entre ácido carboxílico e álcool produz um éster e água (esterificação).", difficulty: "hard", basePoints: 20 },
    { question: "Qual destes compostos é um hidrocarboneto aromático?", options: ["Benzeno", "Eteno", "Etino", "Butano"], correct: 0, explanation: "O benzeno (C₆H₆) é o hidrocarboneto aromático mais simples, com estrutura de anel.", difficulty: "medium", basePoints: 15 },
    { question: "Qual é a função do grupo amino (-NH₂) em moléculas orgânicas?", options: ["Caracteriza as aminas", "Caracteriza os ácidos", "Caracteriza os álcoois", "Caracteriza os éteres"], correct: 0, explanation: "O grupo amino (-NH₂) é característico das aminas, importantes em bioquímica.", difficulty: "easy", basePoints: 10 },
    { question: "Qual elemento é reduzido na reação: 2Mg + O₂ → 2MgO?", options: ["Magnésio", "Oxigênio", "Ambos", "Nenhum"], correct: 1, explanation: "O oxigênio é reduzido (número de oxidação muda de 0 para -2), enquanto o magnésio é oxidado.", difficulty: "medium", basePoints: 15 },
    { question: "Qual desses compostos é um óxido anfótero?", options: ["Al₂O₃", "CO₂", "CaO", "SO₂"], correct: 0, explanation: "Al₂O₃ é um óxido anfótero, podendo reagir tanto com ácidos quanto com bases.", difficulty: "hard", basePoints: 20 },
    { question: "Qual é a principal característica dos alcanos?", options: ["Ligações simples apenas", "Pelo menos uma dupla ligação", "Pelo menos uma tripla ligação", "Grupos funcionais oxigenados"], correct: 0, explanation: "Alcanos são hidrocarbonetos saturados contendo apenas ligações simples entre átomos de carbono.", difficulty: "easy", basePoints: 10 },
    { question: "Qual é o produto da oxidação de um álcool primário?", options: ["Aldeído", "Cetona", "Ácido carboxílico", "Éter"], correct: 0, explanation: "Álcoois primários oxidam primeiro a aldeídos e podem oxidar ainda mais a ácidos carboxílicos.", difficulty: "medium", basePoints: 15 },
    { question: "Qual destes compostos apresenta isomeria cis-trans?", options: ["2-buteno", "Etano", "Propeno", "Ciclobutano"], correct: 0, explanation: "O 2-buteno (CH₃CH=CHCH₃) apresenta isomeria geométrica cis-trans devido à dupla ligação restrita.", difficulty: "hard", basePoints: 20 },
    { question: "Qual é a função orgânica do composto CH₃COOH?", options: ["Ácido carboxílico", "Álcool", "Éster", "Cetona"], correct: 0, explanation: "CH₃COOH (ácido acético) possui o grupo carboxila (-COOH), característico de ácidos carboxílicos.", difficulty: "easy", basePoints: 10 },
    { question: "Qual dessas reações caracteriza uma combustão completa?", options: ["CH₄ + 2O₂ → CO₂ + 2H₂O", "CH₄ + O₂ → C + 2H₂O", "C₂H₄ + O₂ → CO + H₂O", "C₃H₈ + O₂ → C + CO + H₂O"], correct: 0, explanation: "Combustão completa produz CO₂ e H₂O, enquanto a incompleta produz CO, C ou outros subprodutos.", difficulty: "medium", basePoints: 15 },
    { question: "Qual é o número de oxidação do enxofre no H₂SO₄?", options: ["+6", "+4", "-2", "0"], correct: 0, explanation: "No H₂SO₄, o enxofre tem número de oxidação +6 (H=+1, O=-2, total=0).", difficulty: "hard", basePoints: 20 },
    { question: "Qual destes compostos é uma amina primária?", options: ["CH₃NH₂", "(CH₃)₂NH", "(CH₃)₃N", "CH₃CONH₂"], correct: 0, explanation: "CH₃NH₂ (metilamina) é uma amina primária, com apenas um grupo orgânico ligado ao nitrogênio.", difficulty: "medium", basePoints: 15 },
    { question: "Qual é o produto da reação entre um ácido e uma base?", options: ["Sal e água", "Éster e água", "Álcool e CO₂", "Óxido e hidrogênio"], correct: 0, explanation: "Reações ácido-base (neutralização) produzem sal e água como produtos.", difficulty: "easy", basePoints: 10 },
    { question: "Qual destes é um exemplo de haleto orgânico?", options: ["CH₃Cl", "CH₃OH", "CH₃COOH", "CH₃OCH₃"], correct: 0, explanation: "CH₃Cl (clorometano) é um haleto orgânico, contendo um átomo de halogênio ligado a carbono.", difficulty: "medium", basePoints: 15 },
    { question: "Qual é a geometria molecular do carbono no metano (CH₄)?", options: ["Tetraédrica", "Trigonal plana", "Linear", "Angular"], correct: 0, explanation: "O carbono no CH₄ apresenta hibridização sp³ e geometria tetraédrica (109,5°).", difficulty: "hard", basePoints: 20 },
    { question: "Qual elemento tem sempre número de oxidação +1 em compostos iônicos?", options: ["Sódio", "Cálcio", "Alumínio", "Ferro"], correct: 0, explanation: "Metais alcalinos como o sódio (grupo 1) sempre têm número de oxidação +1 em compostos iônicos.", difficulty: "easy", basePoints: 10 },
    { question: "Qual é a função orgânica da acetona (CH₃COCH₃)?", options: ["Cetona", "Aldeído", "Álcool", "Éter"], correct: 0, explanation: "A acetona (propanona) possui o grupo carbonila (C=O) no meio da cadeia, caracterizando cetona.", difficulty: "medium", basePoints: 15 },
    { question: "Qual destes compostos apresenta caráter básico?", options: ["NH₃", "HCl", "H₂SO₄", "H₂O"], correct: 0, explanation: "A amônia (NH₃) é uma base de Lewis por possuir par de elétrons disponível no nitrogênio.", difficulty: "hard", basePoints: 20 },
    { question: "Quantos elétrons o carbono compartilha em ligações covalentes?", options: ["4", "2", "6", "1"], correct: 0, explanation: "O carbono forma 4 ligações covalentes para completar seu octeto (configuração estável).", difficulty: "easy", basePoints: 10 },
    { question: "Qual destes é um exemplo de polímero natural?", options: ["Celulose", "Poliestireno", "PVC", "Nylon"], correct: 0, explanation: "A celulose é um polímero natural encontrado em plantas, enquanto os outros são sintéticos.", difficulty: "medium", basePoints: 15 },
    { question: "Qual é o estado de oxidação do cromo no K₂Cr₂O₇?", options: ["+6", "+3", "+2", "0"], correct: 0, explanation: "No dicromato de potássio, cada cromo tem número de oxidação +6 (K=+1, O=-2).", difficulty: "hard", basePoints: 20 },
    { question: "Qual destes grupos funcionais caracteriza um éter?", options: ["-O-", "-OH", "-CHO", "-COOH"], correct: 0, explanation: "Éteres possuem um átomo de oxigênio ligado a dois radicais de carbono (R-O-R').", difficulty: "easy", basePoints: 10 }
];

let shuffledQuestions;
let currentQuestionIndex = 0;
let score = 0;
let playerName = localStorage.getItem("playerName") || "Você";
let timeLeft = 30;
let totalTime = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let questionStartTime;
let timerInterval;
let gameTimerInterval;
let gameTimeLeft = 60; // 1 minuto
let multiplier = 1;
let streak = 0;
let maxMultiplier = 1;
let questionsAnswered = 0;

const questionElement = document.getElementById("question");
const speechBubble = document.getElementById("speech-bubble");
const explanationBox = document.getElementById("explanation-box");
const questionInExplanation = document.getElementById("question-in-explanation");
const feedbackElement = document.getElementById("feedback");
const feedbackIcon = document.getElementById("feedback-icon");
const optionsElements = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const totalQuestionsElement = document.getElementById("total-questions");
const correctAnswersElement = document.getElementById("correct-answers");
const wrongAnswersElement = document.getElementById("wrong-answers");
const finalScoreElement = document.getElementById("final-score");
const maxMultiplierElement = document.getElementById("max-multiplier");
const playerNameElement = document.getElementById("player-name");
const timerBar = document.getElementById("timer-bar");
const timeLeftElement = document.getElementById("time-left");
const gameTimerElement = document.getElementById("game-timer");
const multiplierElement = document.getElementById("multiplier");
const questionsAnsweredElement = document.getElementById("questions-answered");
const badgeSpeed = document.getElementById("badge-speed");
const badgeStreak = document.getElementById("badge-streak");
const badgeSurvivor = document.getElementById("badge-survivor");
const characterElement = document.querySelector(".character");

// Inicializa o jogo
function initGame() {
    // Embaralha as perguntas
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    totalTime = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    gameTimeLeft = 60;
    multiplier = 1;
    streak = 0;
    maxMultiplier = 1;
    questionsAnswered = 0;

    // Mostra os elementos iniciais
    document.querySelector('.options').classList.remove('hidden');
    explanationBox.classList.add('hidden');
    resultContainer.classList.add('hidden');
    speechBubble.classList.remove('hidden');
    characterElement.classList.remove('hidden');
    document.getElementById('game-timer').classList.remove('hidden');
    document.getElementById('multiplier').classList.remove('hidden');
    document.getElementById('questions-answered').classList.remove('hidden');
    document.querySelector('.quiz-container').classList.remove('game-ended');

    // Atualiza a interface
    updateMultiplier();
    updateQuestionsAnswered();
    updateGameTimer();

    // Inicia o timer do jogo
    clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(updateGameTimer, 1000);

    // Mostra a primeira pergunta
    showQuestion();
}

function showQuestion() {
    // Verifica se o jogo já terminou (tempo esgotado)
    if (gameTimeLeft <= 0) {
        return; // Não mostra mais perguntas
    }

    if (currentQuestionIndex >= shuffledQuestions.length) {
        // Se acabaram as perguntas, reinicia o array
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
    }

    const question = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;

    // Limpa qualquer badge de dificuldade anterior
    const existingBadge = questionElement.querySelector('.difficulty-badge');
    if (existingBadge) {
        questionElement.removeChild(existingBadge);
    }

    // Adiciona o nível de dificuldade à pergunta
    const difficultyBadge = document.createElement('span');
    difficultyBadge.className = `difficulty-badge difficulty-${question.difficulty}`;
    difficultyBadge.textContent = question.difficulty === 'easy' ? 'Fácil' : 
                                  question.difficulty === 'medium' ? 'Médio' : 'Difícil';

    questionElement.appendChild(difficultyBadge);

    // Mostra as opções
    question.options.forEach((option, index) => {
        optionsElements[index].textContent = option;
        optionsElements[index].classList.remove('correct', 'wrong');
        optionsElements[index].disabled = false;
    });

    // Reseta o feedback
    feedbackElement.classList.add('hidden');

    // Inicia o timer para a pergunta
    startQuestionTimer();

    // Marca o tempo de início da pergunta
    questionStartTime = Date.now();
}

// Inicia o timer para a pergunta atual
function startQuestionTimer() {
    timeLeft = 30;
    updateTimerBar();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerBar();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeOut();
        }
    }, 1000);
}

// Atualiza a barra de tempo
function updateTimerBar() {
    const percentage = (timeLeft / 30) * 100;
    timerBar.style.width = `${percentage}%`;

    // Muda a cor conforme o tempo diminui
    timerBar.classList.remove('warning', 'danger');
    if (percentage <= 30) {
        timerBar.classList.add('warning');
    }
    if (percentage <= 15) {
        timerBar.classList.add('danger');
    }

    timeLeftElement.textContent = `${timeLeft}s restantes`;
}

// Tempo esgotado para a pergunta
function timeOut() {
    feedbackElement.classList.remove('hidden');
    feedbackElement.classList.add('incorrect');
    feedbackIcon.textContent = '⏱️';
    feedbackElement.textContent = 'Tempo esgotado!';

    // Desabilita os botões
    optionsElements.forEach(option => {
        option.disabled = true;
    });

    // Mostra a resposta correta
    const correctIndex = shuffledQuestions[currentQuestionIndex].correct;
    optionsElements[correctIndex].classList.add('correct');

    // Atualiza estatísticas
    wrongAnswers++;
    streak = 0;
    multiplier = 1;
    updateMultiplier();

    // Mostra a explicação após um breve delay
    setTimeout(showExplanation, 1500);
}

// Verifica a resposta selecionada
function checkAnswer(selectedIndex) {
    clearInterval(timerInterval); // Pára o timer

    const question = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    // Calcula o tempo gasto na pergunta (em segundos)
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    const timeBonus = Math.max(0, 30 - timeSpent); // Bônus de até 30 pontos

    // Atualiza o feedback
    feedbackElement.classList.remove('hidden');
    feedbackIcon.textContent = isCorrect ? '✓' : '✗';

    if (isCorrect) {
        feedbackElement.classList.remove('incorrect');
        feedbackElement.classList.add('correct');
        feedbackElement.textContent = 'Correto!';
        
        // Calcula os pontos (base + bônus de tempo) com multiplicador
        const basePoints = question.basePoints;
        const points = Math.floor((basePoints + timeBonus) * multiplier);
        score += points;
        
        // Atualiza estatísticas
        correctAnswers++;
        streak++;
        
        // Aumenta o multiplicador a cada 3 acertos consecutivos
        if (streak >= 3) {
            multiplier = Math.min(5, Math.floor(streak / 3) + 1);
            maxMultiplier = Math.max(maxMultiplier, multiplier);
        }
        
        // Adiciona confetti
        createConfetti();
        
        // Avança para próxima pergunta após breve delay
        setTimeout(() => {
            questionsAnswered++;
            updateQuestionsAnswered();
            currentQuestionIndex++;
            showQuestion();
        }, 1500);
    } else {
        feedbackElement.classList.remove('correct');
        feedbackElement.classList.add('incorrect');
        feedbackElement.textContent = 'Incorreto!';
        
        // Mostra a resposta correta
        optionsElements[question.correct].classList.add('correct');
        
        // Atualiza estatísticas
        wrongAnswers++;
        streak = 0;
        multiplier = 1;
        
        // Adiciona efeito de shake
        shakeElement(feedbackElement);
        shakeElement(optionsElements[selectedIndex]);
        
        // Mostra a explicação após um breve delay
        setTimeout(showExplanation, 1500);
    }

    // Desabilita os botões
    optionsElements.forEach(option => {
        option.disabled = true;
    });

    // Destaca a resposta selecionada se estiver errada
    if (!isCorrect) {
        optionsElements[selectedIndex].classList.add('wrong');
    }

    updateMultiplier();
}

// Mostra a explicação da resposta (apenas quando errar)
function showExplanation() {
    const question = shuffledQuestions[currentQuestionIndex];

    questionInExplanation.textContent = question.question;
    document.getElementById("explanation-text").textContent = question.explanation;

    // Esconde as opções e mostra a explicação
    document.querySelector('.options').classList.add('hidden');
    explanationBox.classList.remove('hidden');
}

// Avança para a próxima pergunta
function nextQuestion() {
    questionsAnswered++;
    updateQuestionsAnswered();

    currentQuestionIndex++;
    explanationBox.classList.add('hidden');
    document.querySelector('.options').classList.remove('hidden');

    showQuestion();
}

// Atualiza o multiplicador na interface
function updateMultiplier() {
    multiplierElement.textContent = `Multiplicador: ${multiplier}x`;
}

// Atualiza o contador de perguntas respondidas
function updateQuestionsAnswered() {
    questionsAnsweredElement.textContent = `Perguntas respondidas: ${questionsAnswered}`;
}

// Atualiza o timer do jogo
function updateGameTimer() {
    gameTimeLeft--;

    const minutes = Math.floor(gameTimeLeft / 60);
    const seconds = gameTimeLeft % 60;
    gameTimerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (gameTimeLeft <= 0) {
        endGame();
    }
}

// Finaliza o jogo
function endGame() {
    clearInterval(gameTimerInterval);
    clearInterval(timerInterval);

    // Esconde todos os elementos da pergunta atual
    document.querySelector('.options').classList.add('hidden');
    explanationBox.classList.add('hidden');
    speechBubble.classList.add('hidden');
    characterElement.classList.add('hidden');
    document.getElementById('game-timer').classList.add('hidden');
    document.getElementById('multiplier').classList.add('hidden');
    document.getElementById('questions-answered').classList.add('hidden');
    document.querySelector('.quiz-container').classList.add('game-ended');

    // Calcula a porcentagem de acertos
    const totalQuestions = correctAnswers + wrongAnswers;
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

    // Atualiza a interface com os resultados
    scoreText.textContent = `Pontuação: ${score} (${accuracy}% de acerto)`;
    totalQuestionsElement.textContent = totalQuestions;
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
    finalScoreElement.textContent = '0';
    maxMultiplierElement.textContent = `${maxMultiplier}x`;
    playerNameElement.textContent = playerName;

    // Verifica conquistas
    checkBadges();

    // Mostra o container de resultados
    resultContainer.style.animation = 'fadeInUp 0.8s';
    resultContainer.classList.remove('hidden');

    // Anima a pontuação final
    animateFinalScore();
}

// Verifica e concede badges
function checkBadges() {
    // Badge de velocidade (responder muitas perguntas rapidamente)
    if (questionsAnswered >= 15) {
        badgeSpeed.classList.add('unlocked');
    }

    // Badge de sequência (maior multiplicador alcançado)
    if (maxMultiplier >= 3) {
        badgeStreak.classList.add('unlocked');
    }

    // Badge de sobrevivente (terminar o jogo com tempo)
    if (correctAnswers >= 10) {
        badgeSurvivor.classList.add('unlocked');
    }
}

// Volta para a página inicial
function goToHome() {
    window.location.href = "index.html";
}

// Adiciona efeito de digitação
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Cria efeito de confetti
function createConfetti() {
    const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        
        document.querySelector('.quiz-container').appendChild(confetti);
        
        // Animação
        const animation = confetti.animate([
            { top: '-10px', opacity: 1 },
            { top: '100%', opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// Adiciona efeito de shake
function shakeElement(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Animação da pontuação final
function animateFinalScore() {
    const finalScore = document.getElementById('final-score');
    let currentScore = 0;
    const targetScore = score;
    const duration = 2000; // 2 segundos
    const stepTime = Math.max(Math.floor(duration / targetScore), 1);

    const timer = setInterval(() => {
        currentScore += Math.ceil(targetScore / (duration / stepTime));
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(timer);
        }
        finalScore.textContent = currentScore;
    }, stepTime);
}

// Inicia o jogo quando a página carrega
window.onload = function() {
    // Carrega o nome do jogador se existir
    if (localStorage.getItem("playerName")) {
        playerName = localStorage.getItem("playerName");
    }

    initGame();
};

// Inicia um novo jogo
function startGame() {
    initGame();
}

// Adiciona evento ao botão "Próxima"
nextButton.addEventListener('click', function() {
    nextQuestion();
    
    // Adiciona animação de saída
    explanationBox.style.animation = 'fadeOut 0.5s';
    setTimeout(() => {
        explanationBox.style.animation = '';
    }, 500);
});

// Adiciona evento para voltar ao início com Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        goToHome();
    }
});

// Adiciona evento para reiniciar o jogo com a tecla R
document.addEventListener('keydown', function(e) {
    if (e.key === 'r' || e.key === 'R') {
        startGame();
    }
});

// Adiciona animação ao discurso do personagem
speechBubble.addEventListener('animationend', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = '';
    }, 10);
});

// Adiciona efeito de hover nos badges
document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        if (this.classList.contains('unlocked')) {
            this.style.transform = 'scale(1.2) rotate(15deg)';
        }
    });

    badge.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Adiciona efeito de rotação aleatória nos badges desbloqueados
setInterval(() => {
    document.querySelectorAll('.badge.unlocked').forEach(badge => {
        badge.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    });
}, 3000);

// Adiciona estilo para o confetti
const style = document.createElement('style');
style.textContent = `.confetti { position: absolute; top: -10px; opacity: 0; z-index: 999; }`;
document.head.appendChild(style);

// Adiciona keyframes de animação dinamicamente
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp { 
        from { opacity: 0; transform: translateY(20px); } 
        to { opacity: 1; transform: translateY(0); } 
    } 
    @keyframes fadeOut { 
        from { opacity: 1; transform: translateY(0); } 
        to { opacity: 0; transform: translateY(20px); } 
    } 
    @keyframes bounceIn { 
        0% { transform: scale(0.8); opacity: 0; } 
        50% { transform: scale(1.05); } 
        100% { transform: scale(1); opacity: 1; } 
    } 
    @keyframes pulse { 
        0% { transform: scale(1); } 
        50% { transform: scale(1.1); } 
        100% { transform: scale(1); } 
    } 
    @keyframes shake { 
        0%, 100% { transform: translateX(0); } 
        20%, 60% { transform: translateX(-5px); } 
        40%, 80% { transform: translateX(5px); } 
    }`;
document.head.appendChild(animationStyle);

// Adiciona tooltip para o multiplicador
multiplierElement.title = "O multiplicador aumenta a cada 3 respostas corretas consecutivas!";

// Animação inicial
setTimeout(() => {
    speechBubble.style.animation = 'bounceIn 0.6s';
}, 500);