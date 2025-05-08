const questions = [

    {
        question: "Qual é o número de oxidação do oxigênio na maioria dos compostos?",
        options: ["-2", "+2", "0", "-1"],
        correct: 0,
        explanation: "O oxigênio geralmente possui número de oxidação -2."
    },
    {
        question: "Em uma reação redox, o agente oxidante é a substância que:",
        options: ["Perde elétrons", "Ganha elétrons", "É oxidada", "É neutra"],
        correct: 1,
        explanation: "O agente oxidante é a substância que ganha elétrons e, portanto, é reduzida."
    },
    {
        question: "Qual é o ácido responsável pela acidez do vinagre?",
        options: ["Ácido cítrico", "Ácido acético", "Ácido sulfúrico", "Ácido clorídrico"],
        correct: 1,
        explanation: "O ácido acético é o principal componente ácido do vinagre."
    },
    {
        question: "Qual dessas substâncias é uma base forte?",
        options: ["NH₃", "NaOH", "CH₃COOH", "H₂O"],
        correct: 1,
        explanation: "NaOH é uma base forte que se dissocia completamente em solução aquosa."
    },
    {
        question: "O que ocorre com o número de oxidação de um elemento que sofre redução?",
        options: ["Aumenta", "Permanece o mesmo", "Diminui", "Torna-se zero"],
        correct: 2,
        explanation: "Na redução, o número de oxidação de um elemento diminui devido ao ganho de elétrons."
    },
    {
        question: "Qual é o nome da reação entre um ácido e uma base que forma sal e água?",
        options: ["Saponificação", "Esterificação", "Neutralização", "Hidrólise"],
        correct: 2,
        explanation: "A neutralização é a reação entre um ácido e uma base formando sal e água."
    },
    {
        question: "Qual é o produto da reação entre HCl e NaOH?",
        options: ["NaCl e H₂O", "H₂ e NaCl", "NaOH e H₂", "Cl₂ e NaOH"],
        correct: 0,
        explanation: "A reação entre HCl e NaOH produz NaCl (sal) e H₂O (água)."
    },
    {
        question: "Em uma pilha eletroquímica, onde ocorre a oxidação?",
        options: ["Cátodo", "Ânodo", "Eletrólito", "Ponte salina"],
        correct: 1,
        explanation: "A oxidação ocorre no ânodo de uma pilha eletroquímica."
    },
    {
        question: "Qual é o pH de uma solução neutra à 25°C?",
        options: ["0", "7", "14", "1"],
        correct: 1,
        explanation: "Uma solução neutra possui pH igual a 7 à 25°C."
    },
    {
        question: "Qual dessas substâncias é um ácido forte?",
        options: ["HCl", "CH₃COOH", "H₂CO₃", "HF"],
        correct: 0,
        explanation: "HCl é um ácido forte que se ioniza completamente em solução aquosa."
    },
    {
        question: "O que caracteriza uma base de Arrhenius?",
        options: ["Libera H⁺ em solução", "Libera OH⁻ em solução", "Aceita prótons", "Doa prótons"],
        correct: 1,
        explanation: "Segundo Arrhenius, uma base é uma substância que libera íons OH⁻ em solução aquosa."
    },
    {
        question: "Qual é o número de oxidação do hidrogênio na maioria dos compostos?",
        options: ["+1", "-1", "0", "+2"],
        correct: 0,
        explanation: "O hidrogênio geralmente possui número de oxidação +1."
    },
    {
        question: "Qual dessas substâncias é um indicador ácido-base?",
        options: ["NaCl", "Fenolftaleína", "H₂O", "NaOH"],
        correct: 1,
        explanation: "A fenolftaleína é um indicador que muda de cor dependendo do pH da solução."
    },
    {
        question: "O que ocorre com o pH de uma solução ao adicionar uma base?",
        options: ["Aumenta", "Diminui", "Permanece o mesmo", "Torna-se neutro"],
        correct: 0,
        explanation: "Adicionar uma base aumenta o pH da solução, tornando-a mais alcalina."
    },
    {
        question: "Qual é o nome da reação de um metal com ácido produzindo sal e hidrogênio?",
        options: ["Redox", "Neutralização", "Deslocamento simples", "Combustão"],
        correct: 2,
        explanation: "Essa é uma reação de deslocamento simples, onde o metal desloca o hidrogênio do ácido."
    },
    {
        question: "Qual é o agente redutor na reação: Zn + Cu²⁺ → Zn²⁺ + Cu?",
        options: ["Zn", "Cu²⁺", "Zn²⁺", "Cu"],
        correct: 0,
        explanation: "O zinco (Zn) é o agente redutor, pois sofre oxidação ao perder elétrons."
    },
    {
        question: "O que é uma reação de oxirredução?",
        options: ["Reação que envolve transferência de elétrons", "Reação que forma água", "Reação entre ácidos e bases", "Reação de decomposição"],
        correct: 0,
        explanation: "Reações de oxirredução envolvem transferência de elétrons entre espécies químicas."
    },
    {
        question: "Qual dessas substâncias é um sal?",
        options: ["NaCl", "HCl", "NaOH", "H₂O"],
        correct: 0,
        explanation: "NaCl é um sal formado pela reação entre um ácido e uma base."
    },
    {
        question: "O que é uma base de Lewis?",
        options: ["Doa par de elétrons", "Aceita prótons", "Libera H⁺", "Libera OH⁻"],
        correct: 0,
        explanation: "Segundo Lewis, uma base é uma substância que doa um par de elétrons."
    },
    {
        question: "Qual é o produto da reação entre ácido sulfúrico e hidróxido de cálcio?",
        options: ["CaSO₄ e H₂O", "CaCl₂ e H₂", "CaO e H₂O", "CaSO₄ e H₂"],
        correct: 0,
        explanation: "A reação entre H₂SO₄ e Ca(OH)₂ produz sulfato de cálcio (CaSO₄) e água."
    },
    {
        question: "Qual é o número de oxidação do enxofre no ácido sulfúrico (H₂SO₄)?",
        options: ["+6", "+4", "-2", "0"],
        correct: 0,
        explanation: "No H₂SO₄, o enxofre possui número de oxidação +6."
    },
    {
        question: "O que caracteriza uma reação de combustão?",
        options: ["Envolve oxigênio e libera energia", "Forma sal e água", "Envolve transferência de elétrons", "Forma precipitado"],
        correct: 0,
        explanation: "Reações de combustão envolvem oxigênio e liberam energia na forma de calor e luz."
    },
    {
        question: "Qual dessas substâncias é um ácido diprótico?",
        options: ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
        correct: 0,
        explanation: "H₂SO₄ é um ácido diprótico, pois pode liberar dois íons H⁺ por molécula."
    },
    {
        question: "Qual é o pH de uma solução ácida?",
        options: ["Menor que 7", "Igual a 7", "Maior que 7", "Igual a 14"],
        correct: 0,
        explanation: "Soluções ácidas possuem pH menor que 7."
    },
    {
        question: "O que ocorre com o número de oxidação de um elemento que sofre oxidação?",
        options: ["Aumenta", "Diminui", "Permanece o mesmo", "Torna-se zero"],
        correct: 0,
        explanation: "Na oxidação, o número de oxidação de um elemento aumenta devido à perda de elétrons."
    },
    {
        question: "Qual é o nome da reação entre um óxido ácido e uma base?",
        options: ["Neutralização", "Saponificação", "Esterificação", "Hidrólise"],
        correct: 0,
        explanation: "A reação entre um óxido ácido e uma base é uma neutralização, formando sal e água."
    },
    {
        question: "Qual dessas substâncias é um óxido básico?",
        options: ["Na₂O", "CO₂", "SO₃", "NO₂"],
        correct: 0,
        explanation: "Na₂O é um óxido básico que reage com água formando uma base."
    },
    {
        question: "O que caracteriza um ácido de Brønsted-Lowry?",
        options: ["Doa prótons (H⁺)", "Aceita elétrons", "Libera OH⁻", "Doa elétrons"],
        correct: 0,
        explanation: "Segundo Brønsted-Lowry, um ácido é uma substância que doa prótons (H⁺)."
    },
    {
        question: "Qual é o produto da reação entre CO₂ e H₂O?",
        options: ["H₂CO₃", "CO", "H₂", "O₂"],
        correct: 0,
        explanation: "A reação entre CO₂ e H₂O forma ácido carbônico (H₂CO₃)."
    }];

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
    shuffledQuestions = shuffleArray([...questions]).slice(0, 6);

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