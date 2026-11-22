const STORAGE_KEY_STUDENTS = "enfercomp_estudiantes_contestados_v1";
const STORAGE_KEY_CURRENT = "enfercomp_estudiante_actual_v1";

const imgCorrectFeedback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 150'><rect width='400' height='150' fill='%23dcfce7'/><circle cx='200' cy='55' r='24' fill='%2315803d'/><path d='M189 55l7 7 14-14' fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/><text x='200' y='110' fill='%2314532d' font-family='sans-serif' font-size='14' font-weight='bold' text-anchor='middle'>¡CORRECTO! (+10 pts)</text></svg>";
const imgIncorrectFeedback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 150'><rect width='400' height='150' fill='%23fee2e2'/><circle cx='200' cy='55' r='24' fill='%23b91c1c'/><path d='M189 44l22 22m0-22l-22 22' fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/><text x='200' y='110' fill='%237f1d1d' font-family='sans-serif' font-size='14' font-weight='bold' text-anchor='middle'>¡INCORRECTO! (0 pts)</text></svg>";

const questions = [
    {
        question: "1. ¿Cuál es el primer paso recomendado en la entrevista de confianza para pacientes con aislamiento físico?",
        image: "https://i.ibb.co/C5cmCY2P/ni-os-que-juegan-preguntas-de-contestaci-n-del-juego-de-concurso-82352922.webp",
        options: [
            "Hablar sin juzgar sobre cómo utiliza su tiempo libre",
            "Criticar fuertemente su uso de redes sociales",
            "Aislarlo completamente de sus familiares"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Escuchar sin juzgar fomenta la confianza en la consulta clínica."
    },
    {
        question: "2. Ante un paciente con ansiedad severa por pérdida de conexión a internet (Nomofobia), ¿qué se valora primero?",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        options: [
            "Comprar un teléfono inteligente nuevo",
            "Valorar signos vitales e indagar síntomas exactos",
            "Dar de alta médica de inmediato"
        ],
        answer: 1,
        explanation: "Correcto (+10 pts): Es indispensable revisar los signos vitales ante crisis de ansiedad."
    },
    {
        question: "3. ¿Cómo se le denomina al hábito nocturno de desvelarse usando dispositivos móviles afectando el descanso?",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        options: [
            "Vamping (uso nocturno de pantallas)",
            "Insomnio cronológico natural",
            "Síndrome de fatiga diurna"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): El Vamping altera severamente el ciclo del sueño y la melatonina."
    },
    {
        question: "4. En casos de trastornos mentales severos y del sueño, ¿qué rol cumple el entorno familiar?",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
        options: [
            "Dejar que el paciente resuelva solo su problema",
            "Realizar acompañamiento y vigilancia estrecha",
            "Prohibir la comunicación médica"
        ],
        answer: 1,
        explanation: "Correcto (+10 pts): El acompañamiento familiar estrecho es clave en el tratamiento."
    },
    {
        question: "5. ¿Qué actividad física se recomienda promover para contrarrestar el sedentarismo digital?",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
        options: [
            "Competencias de videojuegos en línea",
            "Cualquier deporte al aire libre o actividad física de agrado",
            "Ninguna, el reposo total es mejor"
        ],
        answer: 1,
        explanation: "Correcto (+10 pts): El deporte al aire libre fomenta la socialización y la salud física."
    },
    {
        question: "6. ¿Cuál es un signo físico común de la ansiedad generada por la desconexión digital?",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
        options: [
            "Taquicardia, sudoración y desesperación",
            "Aumento de la visión nocturna",
            "Relajación muscular profunda"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La abstinencia digital puede activar síntomas físicos de pánico y ansiedad."
    },
    {
        question: "7. ¿Qué aspecto ético y clínico debe mantener el personal de salud durante la intervención?",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
        options: [
            "Confidencialidad, empatía y respeto al paciente",
            "Publicar el caso en redes sociales del hospital",
            "Juzgar al paciente por sus hábitos virtuales"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La empatía y el respeto garantizan una atención en salud de calidad."
    },
    {
        question: "8. ¿Cuándo se debe realizar una referencia a psicología o psiquiatría en estos casos?",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        options: [
            "Cuando hay trastornos mentales severos o riesgo para el paciente",
            "Nunca, enfermería puede tratar todo por sí sola",
            "Solo si el paciente tiene un teléfono caro"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La derivación a especialistas es fundamental ante cuadros severos."
    },
    {
        question: "9. ¿Qué medida preventiva se aconseja respecto al uso de pantallas antes de dormir?",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
        options: [
            "Apagar dispositivos al menos una hora antes de acostarse",
            "Dejar el brillo al máximo en la oscuridad",
            "Leer notificaciones hasta quedarse dormido"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Evitar pantallas antes de dormir mejora significativamente el descanso."
    },
    {
        question: "10. ¿Por qué es importante el cumplimiento riguroso del tratamiento farmacológico prescrito?",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
        options: [
            "Para estabilizar los trastornos severos bajo supervisión psiquiátrica",
            "Para acelerar la adicción a internet",
            "Para reemplazar la comunicación familiar"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): El apego al tratamiento médico estabiliza la salud mental del paciente."
    }
];

const ethicsQuestions = [
    {
        question: "1. Un estudiante comparte en su estado de red social la foto de una hoja de signos vitales sin nombres. ¿Qué ocurre éticamente?",
        options: [
            "Vulneración de la confidencialidad y ética profesional",
            "Es una práctica educativa recomendada",
            "No tiene implicaciones éticas"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La confidencialidad del paciente es un deber ético fundamental."
    },
    {
        question: "2. Ante un paciente con ansiedad por desconexión digital, ¿cuál es la postura ética correcta del profesional?",
        options: [
            "Brindar trato digno, empático y libre de prejuicios",
            "Burlarse de su dependencia en el equipo de salud",
            "Ignorar su malestar emocional"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La dignidad y empatía guían el cuidado ético en salud."
    },
    {
        question: "3. ¿Qué exige el principio de beneficencia al orientar sobre salud digital?",
        options: [
            "Promover hábitos seguros y respaldo científico",
            "Difundir remedios sin evidencia en redes",
            "Limitar el acceso a atención especializada"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La beneficencia busca el bienestar real del paciente."
    },
    {
        question: "4. Si se desea tomar una fotografía con fines académicos a un usuario o paciente, ¿qué corresponde?",
        options: [
            "Solicitar consentimiento informado claro y respetar su negativa",
            "Tomarla a escondidas si no se ve el rostro",
            "Subirla directamente a una cuenta pública"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La autonomía exige consentimiento previo y voluntario."
    },
    {
        question: "5. ¿Cómo se aplica la no maleficencia ante casos de insomnio severo asociado a pantallas?",
        options: [
            "Evitar intervenciones perjudiciales y derivar a tiempo",
            "Minimizar el problema sin seguimiento clínico",
            "Recomendar automedicación sin control médico"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La no maleficencia previene daños adicionales y asegura cuidado seguro."
    }
];

let userData = {
    nombre: "",
    apellidos: "",
    sexo: "Masculino",
    carrera: "Enfermería",
    sede: "Condega",
    dependencia: "No evaluada",
    puntajePrincipal: null,
    puntajeEtica: null,
    correctas: 0,
    incorrectas: 0
};

let currentIdx = 0;
let score = 0;
let correctCount = 0;
let incorrectCount = 0;
let timeLeft = 15;
let timerInterval = null;
let locked = false;

let ethIdx = 0;
let ethScore = 0;
let ethLocked = false;

let sharedAudioCtx = null;

function getAudioCtx() {
    try {
        if (!sharedAudioCtx) {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (Ctx) sharedAudioCtx = new Ctx();
        }
        if (sharedAudioCtx && sharedAudioCtx.state === "suspended") {
            sharedAudioCtx.resume().catch(() => {});
        }
    } catch {}
    return sharedAudioCtx;
}

function playTone(freqs, durations, type = "sine", volume = 0.16) {
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        let startTime = ctx.currentTime;
        freqs.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(f, startTime);
            gain.gain.setValueAtTime(volume, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + durations[i]);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + durations[i]);
            startTime += durations[i] * 0.85;
        });
    } catch {}
}

function soundTick(urgent = false) {
    playTone([urgent ? 880 : 660], [0.05], "sine", urgent ? 0.14 : 0.07);
}
function soundCorrect() { playTone([523.25, 659.25], [0.12, 0.22], "triangle", 0.18); }
function soundWrong() { playTone([220, 165], [0.18, 0.3], "sawtooth", 0.16); }
function soundWinner() { playTone([523.25, 659.25, 783.99, 1046.5], [0.12, 0.12, 0.12, 0.4], "triangle", 0.18); }
function soundLoser() { playTone([330, 293.66, 261.63, 196], [0.2, 0.2, 0.2, 0.45], "sawtooth", 0.16); }

function loadStudents() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_STUDENTS);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveStudents(list) {
    try {
        localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(list));
    } catch {}
    updateCounters();
}

function saveCurrentUser() {
    try {
        localStorage.setItem(STORAGE_KEY_CURRENT, JSON.stringify(userData));
    } catch {}
    updateBanner();
}

function updateBanner() {
    const banner = document.getElementById("active-student-banner");
    if (!banner) return;
    if (userData.nombre || userData.apellidos) {
        banner.textContent = `${userData.nombre} ${userData.apellidos} • ${userData.carrera} (${userData.sede}) • Sexo: ${userData.sexo}`;
    } else {
        banner.textContent = "Estudiante no registrado";
    }
}

function updateCounters() {
    const count = loadStudents().length;
    const regCount = document.getElementById("reg-count");
    const menuCount = document.getElementById("menu-count");
    if (regCount) regCount.textContent = count;
    if (menuCount) menuCount.textContent = count;
}

function syncInputsFromUserData() {
    const nom = document.getElementById("input-nombre");
    const ape = document.getElementById("input-apellidos");
    const sex = document.getElementById("input-sexo");
    const car = document.getElementById("input-carrera");
    const sed = document.getElementById("input-sede");
    if (nom) nom.value = userData.nombre || "";
    if (ape) ape.value = userData.apellidos || "";
    if (sex) sex.value = userData.sexo || "Masculino";
    if (car) car.value = userData.carrera || "Enfermería";
    if (sed) sed.value = userData.sede || "Condega";
}

function syncUserDataFromInputs() {
    const nom = document.getElementById("input-nombre");
    const ape = document.getElementById("input-apellidos");
    const sex = document.getElementById("input-sexo");
    const car = document.getElementById("input-carrera");
    const sed = document.getElementById("input-sede");
    if (nom) userData.nombre = nom.value.trim();
    if (ape) userData.apellidos = ape.value.trim();
    if (sex) userData.sexo = sex.value;
    if (car) userData.carrera = car.value;
    if (sed) userData.sede = sed.value;
    saveCurrentUser();
}

function closeDropdownMenu() {
    const dropdown = document.getElementById("dropdown-menu");
    if (dropdown) dropdown.classList.remove("open");
}

function toggleDotsMenu(event) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown-menu");
    if (dropdown) dropdown.classList.toggle("open");
}

function handleTopSelfEval() {
    syncUserDataFromInputs();
    showView("selfeval-screen");
}

function selectMenuView(viewId) {
    syncUserDataFromInputs();
    showView(viewId);
}

function handleMenuExportCsv() {
    closeDropdownMenu();
    exportCsvToMobile();
}

function openViewWithSync(viewId) {
    syncUserDataFromInputs();
    showView(viewId);
}

function toggleCreditsPanel() {
    const panel = document.getElementById("credits-panel");
    if (panel) panel.classList.toggle("hidden");
}

function showView(viewId) {
    clearInterval(timerInterval);
    const views = [
        "register-screen",
        "selfeval-screen",
        "ethics-screen",
        "counseling-screen",
        "bibliography-screen",
        "authors-screen",
        "students-screen",
        "quiz-screen",
        "end-screen"
    ];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.toggle("hidden", id !== viewId);
    });
    closeDropdownMenu();
    if (viewId === "students-screen") {
        renderStudentsList();
    }
    if (viewId === "ethics-screen") {
        renderEthicsQuestion();
    }
}

function renderStudentsList() {
    const list = loadStudents();
    const container = document.getElementById("students-list-container");
    document.getElementById("students-total-label").textContent = `Total registrados: ${list.length}`;
    container.innerHTML = "";

    if (!list.length) {
        container.innerHTML = `<p class="empty-students-msg">Aún no hay estudiantes registrados en este dispositivo.</p>`;
        return;
    }

    list.forEach((item, idx) => {
        const row = document.createElement("div");
        row.className = "student-item";
        row.innerHTML = `
            <div>
                <strong>${escapeHtml(item.nombre)} ${escapeHtml(item.apellidos)}</strong> (${escapeHtml(item.sexo)})<br>
                <span>${escapeHtml(item.carrera)} — Sede ${escapeHtml(item.sede)}</span><br>
                <span>Puntaje: <strong>${escapeHtml(String(item.puntaje))}</strong> | Ética: <strong>${escapeHtml(String(item.etica || "N/A"))}</strong></span><br>
                <span>Detalle: ${escapeHtml(item.detalle || "-")} | Móvil: ${escapeHtml(item.dependencia || "N/A")}</span><br>
                <span class="student-meta">${escapeHtml(item.fecha || "")}</span>
            </div>
            <button type="button" class="btn-danger-sm" data-del="${idx}">✕</button>
        `;
        container.appendChild(row);
    });

    container.querySelectorAll("[data-del]").forEach(btn => {
        btn.addEventListener("click", () => {
            const i = Number(btn.getAttribute("data-del"));
            const updated = loadStudents();
            updated.splice(i, 1);
            saveStudents(updated);
            renderStudentsList();
        });
    });
}

function clearAllStudents() {
    if (confirm("¿Deseas borrar toda la lista de estudiantes guardada en este dispositivo?")) {
        saveStudents([]);
        renderStudentsList();
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function calculateSelfEval() {
    const v1 = Number(document.getElementById("se-q1").value);
    const v2 = Number(document.getElementById("se-q2").value);
    const v3 = Number(document.getElementById("se-q3").value);
    const total = v1 + v2 + v3;

    let level = "";
    let desc = "";
    if (total <= 2) {
        level = `Dependencia Baja (${total}/9 pts)`;
        desc = "Mantienes un uso equilibrado del teléfono móvil con buen control de tu tiempo y descanso.";
    } else if (total <= 5) {
        level = `Dependencia Moderada (${total}/9 pts)`;
        desc = "Se observan señales iniciales de apego digital. Conviene limitar pantallas antes de dormir y cuidar pausas.";
    } else {
        level = `Dependencia Alta (${total}/9 pts)`;
        desc = "Existe una fuerte dependencia al móvil que puede afectar sueño, ánimo o rutina. Se sugiere consejería y apoyo.";
    }

    userData.dependencia = level;
    saveCurrentUser();

    const resBox = document.getElementById("selfeval-result");
    resBox.classList.remove("hidden");
    document.getElementById("se-level-title").textContent = level;
    document.getElementById("se-level-desc").textContent = desc;
}

function renderEthicsQuestion() {
    ethLocked = false;
    const q = ethicsQuestions[ethIdx];
    document.getElementById("eth-counter").textContent = `Ética ${ethIdx + 1}/${ethicsQuestions.length}`;
    document.getElementById("eth-score").textContent = `Puntaje Ética: ${ethScore}/50`;
    document.getElementById("eth-question").textContent = q.question;
    document.getElementById("eth-feedback").textContent = "";
    document.getElementById("btn-eth-next").classList.add("hidden");

    const optBox = document.getElementById("eth-options");
    optBox.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleEthicsAnswer(i, btn));
        optBox.appendChild(btn);
    });
}

function handleEthicsAnswer(selectedIdx, btnClicked) {
    if (ethLocked) return;
    ethLocked = true;
    const q = ethicsQuestions[ethIdx];
    const buttons = document.getElementById("eth-options").querySelectorAll(".btn");
    const fb = document.getElementById("eth-feedback");

    buttons.forEach(b => b.disabled = true);

    if (selectedIdx === q.answer) {
        btnClicked.classList.add("correct");
        soundCorrect();
        ethScore += 10;
        fb.style.color = "var(--success)";
        fb.textContent = q.explanation;
    } else {
        btnClicked.classList.add("incorrect");
        buttons[q.answer].classList.add("correct");
        soundWrong();
        fb.style.color = "var(--danger)";
        fb.textContent = "Incorrecto (0 pts). La respuesta correcta quedó marcada en verde.";
    }

    userData.puntajeEtica = `${ethScore}/50 pts`;
    saveCurrentUser();
    document.getElementById("eth-score").textContent = `Puntaje Ética: ${ethScore}/50`;

    const nextBtn = document.getElementById("btn-eth-next");
    nextBtn.textContent = ethIdx < ethicsQuestions.length - 1
        ? "Siguiente Pregunta de Ética ➔"
        : "Guardar Puntaje de Ética ✔";
    nextBtn.classList.remove("hidden");
}

function handleEthicsNext() {
    if (ethIdx < ethicsQuestions.length - 1) {
        ethIdx++;
        renderEthicsQuestion();
    } else {
        showView("register-screen");
    }
}

function startQuizFlow() {
    syncUserDataFromInputs();
    if (!userData.nombre || !userData.apellidos) {
        alert("Por favor complete su nombre y apellidos antes de comenzar.");
        return;
    }
    getAudioCtx();
    showView("quiz-screen");
    currentIdx = 0;
    score = 0;
    correctCount = 0;
    incorrectCount = 0;
    updateScoreUI(0);
    loadQuestion();
}

function updateScoreUI(delta) {
    const el = document.getElementById("score-display");
    el.textContent = `Puntaje: ${score}/100`;
    el.classList.remove("score-plus", "score-minus");
    if (delta > 0) el.classList.add("score-plus");
    if (delta < 0) el.classList.add("score-minus");
    setTimeout(() => el.classList.remove("score-plus", "score-minus"), 400);
}

function loadQuestion() {
    locked = false;
    clearInterval(timerInterval);
    timeLeft = 15;

    const q = questions[currentIdx];
    document.getElementById("q-counter").textContent = `Pregunta ${currentIdx + 1}/${questions.length}`;
    document.getElementById("question-img").src = q.image;
    document.getElementById("question-text").textContent = q.question;
    document.getElementById("feedback-box").textContent = "";

    const nextBtn = document.getElementById("btn-next-question");
    nextBtn.classList.add("hidden");
    nextBtn.textContent = currentIdx < questions.length - 1
        ? "Siguiente Pregunta ➔"
        : "Ver Resultados Finales ➔";

    const optionsDiv = document.getElementById("options-container");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleAnswer(index, btn));
        optionsDiv.appendChild(btn);
    });

    startTimer();
}

function startTimer() {
    const timerText = document.getElementById("timer-text");
    const timerBar = document.getElementById("timer-bar");
    timerText.textContent = `⏱️ ${timeLeft}s`;
    timerBar.style.width = "100%";
    timerBar.style.backgroundColor = "#0f766e";

    timerInterval = setInterval(() => {
        if (locked) {
            clearInterval(timerInterval);
            return;
        }
        timeLeft--;
        timerText.textContent = `⏱️ ${timeLeft}s`;
        timerBar.style.width = `${Math.max(0, (timeLeft / 15) * 100)}%`;

        if (timeLeft > 0) {
            soundTick(timeLeft <= 5);
        }

        if (timeLeft <= 5) timerBar.style.backgroundColor = "var(--danger)";
        else if (timeLeft <= 9) timerBar.style.backgroundColor = "var(--warning)";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    if (locked) return;
    locked = true;
    clearInterval(timerInterval);
    soundWrong();
    incorrectCount++;
    updateScoreUI(0);

    document.getElementById("question-img").src = imgIncorrectFeedback;

    const q = questions[currentIdx];
    const buttons = document.getElementById("options-container").queryAll ? document.getElementById("options-container").queryAll(".btn") : document.getElementById("options-container").querySelectorAll(".btn");
    buttons.forEach(b => b.disabled = true);
    buttons[q.answer].classList.add("correct");

    const fb = document.getElementById("feedback-box");
    fb.style.color = "var(--danger)";
    fb.textContent = `⏰ ¡Tiempo agotado! (0 pts). ${q.explanation}`;

    document.getElementById("btn-next-question").classList.remove("hidden");
}

function handleAnswer(selectedIndex, btnClicked) {
    if (locked) return;
    locked = true;
    clearInterval(timerInterval);

    const q = questions[currentIdx];
    const buttons = document.getElementById("options-container").querySelectorAll(".btn");
    const fb = document.getElementById("feedback-box");
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === q.answer) {
        btnClicked.classList.add("correct");
        soundCorrect();
        score += 10;
        correctCount++;
        updateScoreUI(10);

        document.getElementById("question-img").src = imgCorrectFeedback;
        fb.style.color = "var(--success)";
        fb.textContent = q.explanation;
    } else {
        btnClicked.classList.add("incorrect");
        buttons[q.answer].classList.add("correct");
        soundWrong();
        incorrectCount++;
        updateScoreUI(0);

        document.getElementById("question-img").src = imgIncorrectFeedback;
        fb.style.color = "var(--danger)";
        fb.textContent = "Incorrecto (0 pts). La respuesta correcta quedó marcada en verde.";
    }

    document.getElementById("btn-next-question").classList.remove("hidden");
}

function nextStep() {
    currentIdx++;
    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        finalizeQuiz();
    }
}

function finalizeQuiz() {
    userData.puntajePrincipal = `${score}/100 pts`;
    userData.correctas = correctCount;
    userData.incorrectas = incorrectCount;
    saveCurrentUser();

    const record = {
        fecha: new Date().toLocaleString("es-NI"),
        nombre: userData.nombre,
        apellidos: userData.apellidos,
        sexo: userData.sexo,
        carrera: userData.carrera,
        sede: userData.sede,
        puntaje: `${score}/100 pts`,
        etica: userData.puntajeEtica || "No realizada",
        dependencia: userData.dependencia || "No evaluada",
        detalle: `${correctCount} correctas, ${incorrectCount} incorrectas`
    };

    const currentList = loadStudents();
    currentList.unshift(record);
    saveStudents(currentList);

    sendDataToNetlify(record);
    showResults();
}

function sendDataToNetlify(record) {
    try {
        document.getElementById("net-nombre").value = record.nombre;
        document.getElementById("net-apellidos").value = record.apellidos;
        document.getElementById("net-sexo").value = record.sexo;
        document.getElementById("net-carrera").value = record.carrera;
        document.getElementById("net-sede").value = record.sede;
        document.getElementById("net-puntaje").value = record.puntaje;
        document.getElementById("net-etica").value = record.etica;
        document.getElementById("net-dependencia").value = record.dependencia;
        document.getElementById("net-detalle").value = record.detalle;

        const formElement = document.querySelector('form[name="resultados-estudiantes"]');
        const formData = new FormData(formElement);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).catch(() => {});
    } catch {}
}

function showResults() {
    showView("end-screen");

    const titleEl = document.getElementById("end-title");
    const scoreEl = document.getElementById("final-score");
    const detailsEl = document.getElementById("final-details");
    const extraEl = document.getElementById("final-extra");
    const summaryEl = document.getElementById("final-summary");

    scoreEl.textContent = `${score} / 100 Pts`;
    detailsEl.textContent = `✅ Correctas: ${correctCount} | ❌ Incorrectas: ${incorrectCount}`;
    extraEl.textContent = `Ética: ${userData.puntajeEtica || "No realizada"} • Móvil: ${userData.dependencia || "No evaluada"}`;

    if (score >= 70) {
        soundWinner();
        titleEl.textContent = `🏆 ¡Excelente, ${userData.nombre}!`;
        titleEl.style.color = "var(--success)";
        summaryEl.textContent = "¡Dominas los protocolos de enfermería, ética y salud mental digital!";
    } else {
        soundLoser();
        titleEl.textContent = `📋 ¡Buen esfuerzo, ${userData.nombre}!`;
        titleEl.style.color = "var(--danger)";
        summaryEl.textContent = "Revisa la consejería, la ética profesional y la bibliografía para reforzar.";
    }
}

function csvCell(val) {
    const s = String(val ?? "");
    return `"${s.replace(/"/g, '""')}"`;
}

function buildCsvContent() {
    const headers = [
        "Fecha",
        "Nombre",
        "Apellidos",
        "Sexo",
        "Carrera",
        "Sede",
        "Puntaje Principal",
        "Puntaje Etica",
        "Dependencia Movil",
        "Detalle Respuestas"
    ];
    let rows = loadStudents();

    if (!rows.length && (userData.nombre || userData.apellidos)) {
        rows = [{
            fecha: new Date().toLocaleString("es-NI"),
            nombre: userData.nombre,
            apellidos: userData.apellidos,
            sexo: userData.sexo,
            carrera: userData.carrera,
            sede: userData.sede,
            puntaje: userData.puntajePrincipal || `${score}/100 pts`,
            etica: userData.puntajeEtica || "No realizada",
            dependencia: userData.dependencia || "No evaluada",
            detalle: `${correctCount} correctas, ${incorrectCount} incorrectas`
        }];
    }

    const lines = [headers.map(csvCell).join(",")];
    rows.forEach(r => {
        lines.push([
            r.fecha,
            r.nombre,
            r.apellidos,
            r.sexo,
            r.carrera,
            r.sede,
            r.puntaje,
            r.etica,
            r.dependencia,
            r.detalle
        ].map(csvCell).join(","));
    });

    return "\uFEFF" + lines.join("\n");
}

function exportCsvToMobile() {
    syncUserDataFromInputs();
    const csvText = buildCsvContent();
    const filename = "enfercomp_resultados.csv";

    try {
        const blob = new Blob([csvText], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {}

    document.getElementById("csv-output-text").value = csvText;
    document.getElementById("csv-modal-status").textContent =
        "Archivo CSV generado. Si no aparece en descargas de tu móvil, copia el texto y pégalo en una nota o archivo .csv.";
    document.getElementById("csv-modal").classList.add("open");
}

function copyCsvText() {
    const ta = document.getElementById("csv-output-text");
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(ta.value).catch(() => document.execCommand("copy"));
        } else {
            document.execCommand("copy");
        }
    } catch {
        try { document.execCommand("copy"); } catch {}
    }
    document.getElementById("csv-modal-status").textContent = "✔ Contenido CSV copiado al portapapeles.";
}

function closeCsvModal() {
    const modal = document.getElementById("csv-modal");
    if (modal) modal.classList.remove("open");
}

function bindEvents() {
    document.getElementById("btn-top-selfeval")?.addEventListener("click", handleTopSelfEval);
    document.getElementById("btn-dots-menu")?.addEventListener("click", toggleDotsMenu);
    document.getElementById("menu-export-csv")?.addEventListener("click", handleMenuExportCsv);

    document.querySelectorAll("#dropdown-menu .dropdown-item[data-view]").forEach(btn => {
        btn.addEventListener("click", () => selectMenuView(btn.getAttribute("data-view")));
    });

    document.getElementById("btn-start-quiz")?.addEventListener("click", startQuizFlow);
    document.getElementById("btn-open-ethics")?.addEventListener("click", () => openViewWithSync("ethics-screen"));
    document.getElementById("btn-open-students")?.addEventListener("click", () => openViewWithSync("students-screen"));
    document.getElementById("btn-toggle-credits")?.addEventListener("click", toggleCreditsPanel);
    document.getElementById("btn-calc-selfeval")?.addEventListener("click", calculateSelfEval);
    document.getElementById("btn-eth-next")?.addEventListener("click", handleEthicsNext);
    document.getElementById("btn-export-from-list")?.addEventListener("click", exportCsvToMobile);
    document.getElementById("btn-clear-students")?.addEventListener("click", clearAllStudents);
    document.getElementById("btn-next-question")?.addEventListener("click", nextStep);
    document.getElementById("btn-export-results")?.addEventListener("click", exportCsvToMobile);
    document.getElementById("btn-view-list-end")?.addEventListener("click", () => showView("students-screen"));
    document.getElementById("btn-copy-csv")?.addEventListener("click", copyCsvText);
    document.getElementById("btn-close-csv-modal")?.addEventListener("click", closeCsvModal);

    document.querySelectorAll("[data-back]").forEach(btn => {
        btn.addEventListener("click", () => showView(btn.getAttribute("data-back")));
    });

    document.addEventListener("click", (e) => {
        const dropdown = document.getElementById("dropdown-menu");
        const dotsBtn = document.getElementById("btn-dots-menu");
        if (dropdown && !dropdown.contains(e.target) && e.target !== dotsBtn) {
            dropdown.classList.remove("open");
        }
    });

    ["input-nombre", "input-apellidos", "input-sexo", "input-carrera", "input-sede"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("change", syncUserDataFromInputs);
    });
}

function initApp() {
    try {
        const savedCurrent = localStorage.getItem(STORAGE_KEY_CURRENT);
        if (savedCurrent) {
            const parsed = JSON.parse(savedCurrent);
            userData = { ...userData, ...parsed };
        }
    } catch {}

    syncInputsFromUserData();
    updateBanner();
    updateCounters();
    bindEvents();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}