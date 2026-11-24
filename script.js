const STORAGE_KEY_STUDENTS = "enfercomp_estudiantes_contestados_v1";
const STORAGE_KEY_CURRENT = "enfercomp_estudiante_actual_v1";

const imgCorrectFeedback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 150'><rect width='400' height='150' fill='%23dcfce7'/><circle cx='200' cy='55' r='24' fill='%2315803d'/><path d='M189 55l7 7 14-14' fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/><text x='200' y='110' fill='%2314532d' font-family='sans-serif' font-size='14' font-weight='bold' text-anchor='middle'>¡CORRECTO! (+10 pts)</text></svg>";
const imgIncorrectFeedback = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 150'><rect width='400' height='150' fill='%23fee2e2'/><circle cx='200' cy='55' r='24' fill='%23b91c1c'/><path d='M189 44l22 22m0-22l-22 22' fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round'/><text x='200' y='110' fill='%237f1d1d' font-family='sans-serif' font-size='14' font-weight='bold' text-anchor='middle'>¡INCORRECTO! (0 pts)</text></svg>";

const questions = [
    {
        question: "1. ¿Cuál es el primer paso recomendado en la entrevista de confianza para pacientes con aislamiento físico vinculado al uso excesivo de redes?",
        image: "https://i.ibb.co/C5cmCY2P/ni-os-que-juegan-preguntas-de-contestaci-n-del-juego-de-concurso-82352922.webp",
        options: [
            "Hablar sin juzgar sobre cómo utiliza su tiempo libre y sus pantallas",
            "Criticar fuertemente su uso de redes sociales desde el inicio",
            "Aislarlo completamente de sus familiares y amigos"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Escuchar sin juzgar fomenta la confianza y permite explorar el hábito real."
    },
    {
        question: "2. Ante un paciente con ansiedad severa por pérdida de conexión a internet (Nomofobia), ¿qué se valora primero en consulta?",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        options: [
            "Indicarle que compre un teléfono inteligente más rápido",
            "Valorar signos vitales e indagar los síntomas físicos y emocionales exactos",
            "Darle de alta médica de inmediato sin seguimiento"
        ],
        answer: 1,
        explanation: "Correcto (+10 pts): Valorar signos vitales y síntomas permite descartar crisis agudas de ansiedad."
    },
    {
        question: "3. ¿Cómo se le denomina al hábito nocturno de desvelarse usando dispositivos móviles que afecta el descanso?",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        options: [
            "Vamping (uso nocturno de pantallas)",
            "Insomnio cronológico natural",
            "Síndrome de fatiga diurna"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): El vamping altera el ciclo circadiano y reduce la calidad del sueño."
    },
    {
        question: "4. En casos de trastornos del sueño o malestar emocional severo asociados a redes, ¿qué rol cumple el entorno familiar?",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
        options: [
            "Dejar que el paciente resuelva solo su problema sin apoyo",
            "Realizar acompañamiento y vigilancia estrecha con rutinas saludables",
            "Prohibir toda comunicación con el equipo de salud"
        ],
        answer: 1,
        explanation: "Correcto (+10 pts): El acompañamiento familiar empático y constante fortalece la recuperación."
    },
    {
        question: "5. ¿Qué actividad se recomienda promover para contrarrestar el sedentarismo digital y el aislamiento?",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
        options: [
            "Competencias prolongadas de videojuegos en línea",
            "Actividad física o deporte al aire libre de agrado para la persona",
            "Reposo absoluto en cama durante todo el día"
        ],
        answer: 1,
        explanation: "Correcto (+10 pts): La actividad física al aire libre mejora la salud física y la interacción social."
    },
    {
        question: "6. ¿Cuál es un signo físico frecuente ante crisis de ansiedad generadas por la desconexión digital?",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
        options: [
            "Taquicardia, sudoración, temblor o sensación de angustia",
            "Aumento de la agudeza visual en la oscuridad",
            "Relajación muscular profunda inmediata"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La respuesta autonómica de ansiedad puede manifestarse con taquicardia y sudoración."
    },
    {
        question: "7. ¿Qué actitud clínica y ética debe mantener el personal de salud durante la orientación?",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
        options: [
            "Confidencialidad, empatía y respeto a la dignidad del paciente",
            "Publicar detalles del caso en redes sociales para generar debate",
            "Juzgar al paciente por pasar demasiado tiempo en línea"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): El respeto, la empatía y la confidencialidad son base del cuidado humanizado."
    },
    {
        question: "8. ¿Cuándo es indispensable realizar una referencia a psicología o psiquiatría?",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        options: [
            "Cuando existen síntomas severos, deterioro funcional o riesgo para el paciente",
            "Nunca, la atención primaria no requiere interconsulta especializada",
            "Únicamente si el paciente no tiene acceso a internet"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La referencia oportuna a salud mental garantiza valoración especializada segura."
    },
    {
        question: "9. ¿Qué medida preventiva de higiene del sueño se recomienda respecto al uso de pantallas?",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
        options: [
            "Apagar pantallas al menos 60 minutos antes de acostarse",
            "Mantener el brillo máximo en una habitación oscura",
            "Revisar notificaciones y mensajes cada vez que se despierte de noche"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Desconectar pantallas antes de dormir facilita conciliar un sueño reparador."
    },
    {
        question: "10. ¿Por qué es importante el apego al tratamiento indicado cuando existe un trastorno asociado?",
        image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
        options: [
            "Porque ayuda a estabilizar el cuadro clínico bajo control profesional",
            "Porque reemplaza por completo los hábitos de sueño y descanso",
            "Porque permite usar redes sociales sin límite de tiempo"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Seguir la indicación médica y el plan de cuidados favorece la estabilidad clínica."
    },
    {
        question: "11. ¿Cómo puede influir la comparación constante en redes sociales sobre la autoestima de jóvenes?",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        options: [
            "Puede generar insatisfacción corporal, baja autoestima o frustración",
            "Elimina por completo el estrés académico y social",
            "Garantiza estabilidad emocional sin necesidad de apoyo"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Compararse con ideales editados en redes puede afectar la autoestima y el bienestar."
    },
    {
        question: "12. ¿Qué postura corporal se asocia comúnmente al uso prolongado del móvil sin pausas?",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        options: [
            "Inclinación cervical hacia adelante (cuello de texto) y tensión en hombros",
            "Alineación neutra automática sin sobrecarga muscular",
            "Fortalecimiento lumbar sin necesidad de estiramientos"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Inclinar la cabeza hacia la pantalla aumenta la tensión cervical y dorsal."
    },
    {
        question: "13. ¿Qué hábito ayuda a prevenir la fatiga visual digital durante el estudio o uso de pantallas?",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        options: [
            "Hacer pausas visuales periódicas (como mirar a lo lejos) y parpadear con frecuencia",
            "Frotarse los ojos con fuerza cada vez que se sienta ardor",
            "Leer letra muy pequeña con poca iluminación ambiental"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Descansar la vista y parpadear reduce la resequedad y la fatiga ocular."
    },
    {
        question: "14. Si un estudiante o paciente reporta irritabilidad y bajo rendimiento tras pasar madrugadas en redes, ¿qué se debe explorar?",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
        options: [
            "Horas reales de sueño, uso nocturno de pantallas y nivel de estrés",
            "Únicamente el modelo de celular que posee",
            "Suponer que es falta de interés sin indagar sus hábitos"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Evaluar el sueño y el uso nocturno de pantallas ayuda a entender la irritabilidad."
    },
    {
        question: "15. ¿Qué riesgo psicosocial puede presentarse cuando las redes sociales sustituyen el contacto cara a cara?",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
        options: [
            "Sensación de soledad percibida y debilitamiento de redes de apoyo cercanas",
            "Mayor cercanía afectiva automática sin comunicación real",
            "Inmunidad frente a conflictos interpersonales"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La interacción virtual superficial no siempre reemplaza el vínculo cercano real."
    },
    {
        question: "16. ¿Cuál es una estrategia práctica de autocuidado digital para reducir distracciones?",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
        options: [
            "Desactivar notificaciones no esenciales y definir horarios libres de pantalla",
            "Mantener todas las alertas sonoras activas durante el descanso",
            "Revisar redes cada cinco minutos mientras se estudia o conversa"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): Silenciar alertas innecesarias y fijar franjas sin pantalla mejora la concentración."
    },
    {
        question: "17. Ante información dudosa sobre salud o medicamentos viralizada en redes sociales, ¿qué corresponde hacer?",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
        options: [
            "Verificar fuentes científicas confiables y consultar con profesionales de salud",
            "Compartirla de inmediato si tiene muchos 'me gusta'",
            "Automedicarse siguiendo testimonios anónimos en internet"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La popularidad en redes no equivale a evidencia médica ni seguridad clínica."
    },
    {
        question: "18. ¿Qué señal de alarma justifica buscar apoyo profesional prioritario en salud mental?",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
        options: [
            "Angustia persistente, alteración marcada del sueño o ideas de desesperanza",
            "Cambiar la foto de perfil una vez al mes",
            "Silenciar un grupo de chat por un par de horas"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): El malestar intenso o persistente y la desesperanza requieren atención oportuna."
    },
    {
        question: "19. ¿Cómo contribuye la educación comunitaria y escolar sobre uso responsable de redes?",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
        options: [
            "Fortalece la prevención temprana, el autocuidado y el diálogo familiar",
            "Sustituye la atención clínica cuando ya existe un cuadro severo",
            "Promueve el ocultamiento de síntomas para evitar consejos"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): La educación preventiva promueve hábitos digitales saludables desde edades tempranas."
    },
    {
        question: "20. En una intervención integral de enfermería sobre salud digital, ¿qué se busca lograr con el paciente?",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
        options: [
            "Equilibrio entre bienestar físico, descanso, vínculos reales y uso consciente de pantallas",
            "Prohibición permanente de toda tecnología sin alternativa de apoyo",
            "Minimizar los síntomas si el paciente rinde en otras áreas"
        ],
        answer: 0,
        explanation: "Correcto (+10 pts): El objetivo es un uso consciente y equilibrado que proteja la salud integral."
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

const selfEvalQuestions = [
    {
        question: "1. ¿Revisas el teléfono inmediatamente al despertar o antes de dormir?",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        tip: "Revisar pantallas al despertar o acostarse activa la mente y puede afectar el descanso.",
        options: [
            { label: "Nunca o casi nunca", points: 0 },
            { label: "A veces", points: 1 },
            { label: "Casi todos los días", points: 2 },
            { label: "Siempre", points: 3 }
        ]
    },
    {
        question: "2. ¿Sientes ansiedad, inquietud o angustia si te quedas sin internet o batería?",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
        tip: "La inquietud marcada ante la desconexión se asocia con nomofobia y estrés digital.",
        options: [
            { label: "No", points: 0 },
            { label: "Levemente", points: 1 },
            { label: "Moderadamente", points: 2 },
            { label: "Intensamente", points: 3 }
        ]
    },
    {
        question: "3. ¿Has descuidado horas de sueño, estudio o convivencia familiar por el móvil?",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
        tip: "El descanso nocturno, el estudio y el vínculo familiar sostienen tu salud integral.",
        options: [
            { label: "Nunca", points: 0 },
            { label: "Ocasionalmente", points: 1 },
            { label: "Frecuentemente", points: 2 },
            { label: "Muy frecuentemente", points: 3 }
        ]
    },
    {
        question: "4. ¿Revisas notificaciones o redes durante clases, prácticas o charlas presenciales?",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
        tip: "La atención fragmentada reduce la retención académica y la calidad de la escucha.",
        options: [
            { label: "Casi nunca", points: 0 },
            { label: "A veces", points: 1 },
            { label: "A menudo", points: 2 },
            { label: "Constantemente", points: 3 }
        ]
    },
    {
        question: "5. ¿Te comparas con otros en redes sociales sintiendo desánimo o presión constante?",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        tip: "Las redes suelen mostrar recortes idealizados que no reflejan la vida cotidiana completa.",
        options: [
            { label: "No me afecta", points: 0 },
            { label: "Pocas veces", points: 1 },
            { label: "Con frecuencia", points: 2 },
            { label: "Casi siempre", points: 3 }
        ]
    },
    {
        question: "6. ¿Intentas usar el móvil poco tiempo y terminas navegando mucho más de lo previsto?",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
        tip: "Poner un límite de tiempo o alarma ayuda a evitar desplazamientos automáticos prolongados.",
        options: [
            { label: "Rara vez ocurre", points: 0 },
            { label: "A veces", points: 1 },
            { label: "Varias veces por semana", points: 2 },
            { label: "Todos los días", points: 3 }
        ]
    },
    {
        question: "7. ¿Notas tensión en el cuello, hombros o cansancio visual tras usar el teléfono sin pausas?",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
        tip: "Levantar la pantalla a la altura de los ojos y descansar la vista previene molestias físicas.",
        options: [
            { label: "Casi nunca", points: 0 },
            { label: "A veces", points: 1 },
            { label: "Frecuentemente", points: 2 },
            { label: "Casi todos los días", points: 3 }
        ]
    },
    {
        question: "8. ¿Has sentido irritabilidad o mal humor cuando alguien te pide dejar el celular?",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
        tip: "Identificar irritabilidad ante límites digitales permite ajustar rutinas con mayor calma.",
        options: [
            { label: "Nunca", points: 0 },
            { label: "Rara vez", points: 1 },
            { label: "A menudo", points: 2 },
            { label: "Muy seguido", points: 3 }
        ]
    }
];

const POINTS_PER_QUESTION = 10;
const MAX_QUIZ_SCORE = questions.length * POINTS_PER_QUESTION;
const QUESTION_TIME_SECONDS = 60;
const SELFEVAL_TIME_SECONDS = 20;
const MAX_SELFEVAL_SCORE = selfEvalQuestions.length * 3;

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
let timeLeft = QUESTION_TIME_SECONDS;
let timerInterval = null;
let locked = false;

let ethIdx = 0;
let ethScore = 0;
let ethLocked = false;

let seIdx = 0;
let seAnswers = Array(selfEvalQuestions.length).fill(null);
let seTimeLeft = SELFEVAL_TIME_SECONDS;
let seTimerInterval = null;
let seTimedOutQuestions = Array(selfEvalQuestions.length).fill(false);

let soundEnabled = true;
let sharedAudioCtx = null;

function getAudioCtx() {
    if (!soundEnabled) return null;
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
    if (!soundEnabled) return;
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

function soundSelect() { playTone([440, 554.37], [0.07, 0.09], "sine", 0.11); }
function soundTick(urgent = false) { playTone([urgent ? 880 : 660], [0.05], "sine", urgent ? 0.14 : 0.07); }
function soundCorrect() { playTone([523.25, 659.25], [0.12, 0.22], "triangle", 0.18); }
function soundWrong() { playTone([220, 165], [0.18, 0.3], "sawtooth", 0.16); }
function soundWinner() { playTone([523.25, 659.25, 783.99, 1046.5], [0.12, 0.12, 0.12, 0.4], "triangle", 0.18); }
function soundLoser() { playTone([330, 293.66, 261.63, 196], [0.2, 0.2, 0.2, 0.45], "sawtooth", 0.16); }

function toggleSound() {
    soundEnabled = !soundEnabled;
    if (!soundEnabled) {
        clearInterval(seTimerInterval);
    } else if (!document.getElementById("selfeval-screen")?.classList.contains("hidden")) {
        startSelfEvalTimer();
    }
    const btn = document.getElementById("btn-toggle-sound");
    if (btn) {
        btn.setAttribute("aria-pressed", String(soundEnabled));
        btn.textContent = soundEnabled ? "🔊 Audio ON" : "🔇 Audio OFF";
    }
    if (soundEnabled) {
        soundSelect();
    }
}

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
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const dropdown = document.getElementById("dropdown-menu");
    if (dropdown) {
        dropdown.classList.toggle("open");
    }
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
    clearInterval(seTimerInterval);
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
    if (viewId === "selfeval-screen") {
        renderSelfEvalQuestion();
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

function getSelfEvalTotalXp() {
    return seAnswers.reduce((acc, val) => acc + (typeof val === "number" ? val : 0), 0);
}

function startSelfEvalTimer() {
    clearInterval(seTimerInterval);
    if (seAnswers[seIdx] !== null || seTimedOutQuestions[seIdx]) {
        return;
    }

    seTimeLeft = SELFEVAL_TIME_SECONDS;
    const timerText = document.getElementById("se-timer-text");
    const timerBar = document.getElementById("se-timer-bar");

    if (timerText) timerText.textContent = `⏱️ ${seTimeLeft}s`;
    if (timerBar) {
        timerBar.style.width = "100%";
        timerBar.style.backgroundColor = "#0f766e";
    }

    seTimerInterval = setInterval(() => {
        seTimeLeft--;
        if (timerText) timerText.textContent = `⏱️ ${Math.max(0, seTimeLeft)}s`;
        if (timerBar) {
            timerBar.style.width = `${Math.max(0, (seTimeLeft / SELFEVAL_TIME_SECONDS) * 100)}%`;
            if (seTimeLeft <= 5) timerBar.style.backgroundColor = "var(--danger)";
            else if (seTimeLeft <= 10) timerBar.style.backgroundColor = "var(--warning)";
            else timerBar.style.backgroundColor = "#0f766e";
        }

        if (seTimeLeft > 0) {
            soundTick(seTimeLeft <= 5);
        }

        if (seTimeLeft <= 0) {
            clearInterval(seTimerInterval);
            handleSelfEvalTimeout();
        }
    }, 1000);
}

function handleSelfEvalTimeout() {
    seTimedOutQuestions[seIdx] = true;
    if (seAnswers[seIdx] === null) {
        seAnswers[seIdx] = 0;
    }
    soundWrong();
    const fb = document.getElementById("se-feedback");
    if (fb) {
        fb.style.color = "var(--warning)";
        fb.textContent = `⏰ Tiempo agotado en esta pregunta. ${selfEvalQuestions[seIdx].tip}`;
    }
    renderSelfEvalQuestion(false);
}

function renderSelfEvalQuestion(resetTimer = true) {
    const q = selfEvalQuestions[seIdx];
    const totalXp = getSelfEvalTotalXp();
    const answeredCount = seAnswers.filter(v => v !== null).length;

    const counterEl = document.getElementById("se-counter");
    const xpEl = document.getElementById("se-xp");
    const barEl = document.getElementById("se-progress-bar");
    const imgEl = document.getElementById("se-question-img");
    const qTextEl = document.getElementById("se-question-text");
    const optBox = document.getElementById("se-options");
    const fbEl = document.getElementById("se-feedback");
    const nextBtn = document.getElementById("btn-se-next");
    const calcBtn = document.getElementById("btn-calc-selfeval");
    const timerText = document.getElementById("se-timer-text");
    const timerBar = document.getElementById("se-timer-bar");

    if (counterEl) counterEl.textContent = `Pregunta ${seIdx + 1}/${selfEvalQuestions.length}`;
    if (xpEl) xpEl.textContent = `XP Hábitos: ${totalXp}/${MAX_SELFEVAL_SCORE} pts`;
    if (barEl) {
        const pct = Math.round(((seIdx + 1) / selfEvalQuestions.length) * 100);
        barEl.style.width = `${pct}%`;
    }
    if (imgEl) {
        imgEl.src = q.image;
        imgEl.alt = q.question;
    }
    if (qTextEl) qTextEl.textContent = q.question;

    if (fbEl && !seTimedOutQuestions[seIdx]) {
        if (seAnswers[seIdx] !== null) {
            fbEl.style.color = "var(--primary)";
            fbEl.textContent = `✔ Respuesta registrada. ${q.tip}`;
        } else {
            fbEl.style.color = "var(--text-muted)";
            fbEl.textContent = `💡 ${q.tip}`;
        }
    }

    if (optBox) {
        optBox.innerHTML = "";
        q.options.forEach((opt) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btn";
            if (seAnswers[seIdx] === opt.points && !seTimedOutQuestions[seIdx]) {
                btn.classList.add("selected-option");
            }
            btn.textContent = opt.label;
            btn.addEventListener("click", () => handleSelfEvalOption(opt.points));
            optBox.appendChild(btn);
        });
    }

    const currentAnswered = seAnswers[seIdx] !== null || seTimedOutQuestions[seIdx];
    const isLast = seIdx === selfEvalQuestions.length - 1;
    const allAnswered = answeredCount === selfEvalQuestions.length;

    if (nextBtn) {
        nextBtn.classList.toggle("hidden", !currentAnswered || isLast);
    }
    if (calcBtn) {
        calcBtn.classList.toggle("hidden", !allAnswered);
    }

    if (seAnswers[seIdx] !== null || seTimedOutQuestions[seIdx]) {
        clearInterval(seTimerInterval);
        if (timerText) timerText.textContent = seTimedOutQuestions[seIdx] ? "⏱️ 0s" : "⏱️ Listo";
        if (timerBar) {
            timerBar.style.width = seTimedOutQuestions[seIdx] ? "0%" : "100%";
            timerBar.style.backgroundColor = seTimedOutQuestions[seIdx] ? "var(--danger)" : "var(--success)";
        }
    } else if (resetTimer) {
        startSelfEvalTimer();
    }
}

function handleSelfEvalOption(points) {
    getAudioCtx();
    clearInterval(seTimerInterval);
    seTimedOutQuestions[seIdx] = false;
    seAnswers[seIdx] = points;
    soundSelect();
    renderSelfEvalQuestion(false);

    if (seIdx < selfEvalQuestions.length - 1) {
        setTimeout(() => {
            if (!document.getElementById("selfeval-screen")?.classList.contains("hidden") && seAnswers[seIdx] !== null) {
                seIdx++;
                renderSelfEvalQuestion(true);
            }
        }, 420);
    }
}

function handleSelfEvalNext() {
    if (seIdx < selfEvalQuestions.length - 1 && (seAnswers[seIdx] !== null || seTimedOutQuestions[seIdx])) {
        soundTick(false);
        seIdx++;
        renderSelfEvalQuestion(true);
    }
}

function calculateSelfEval() {
    clearInterval(seTimerInterval);
    const unansweredIdx = seAnswers.findIndex(v => v === null);
    if (unansweredIdx !== -1) {
        seIdx = unansweredIdx;
        renderSelfEvalQuestion(true);
        alert(`Responde la pregunta ${unansweredIdx + 1} para completar el reto.`);
        return;
    }

    const total = getSelfEvalTotalXp();
    let level = "";
    let desc = "";

    if (total <= 6) {
        level = `Dependencia Baja (${total}/${MAX_SELFEVAL_SCORE} pts)`;
        desc = "Excelente equilibrio digital: mantienes control sobre tu tiempo, descanso y vínculos presenciales. Sigue practicando pausas saludables.";
        soundWinner();
    } else if (total <= 15) {
        level = `Dependencia Moderada (${total}/${MAX_SELFEVAL_SCORE} pts)`;
        desc = "Se observan señales moderadas de apego al móvil o uso nocturno. Intenta apagar pantallas 60 minutos antes de dormir y silenciar alertas en clase o estudio.";
        soundTick(true);
    } else {
        level = `Dependencia Alta (${total}/${MAX_SELFEVAL_SCORE} pts)`;
        desc = "Existe una dependencia marcada al teléfono móvil que puede afectar sueño, ánimo o concentración. Se recomienda higiene del sueño estricta, rutinas sin pantalla y consejería.";
        soundLoser();
    }

    userData.dependencia = level;
    saveCurrentUser();

    const resBox = document.getElementById("selfeval-result");
    if (resBox) resBox.classList.remove("hidden");
    const titleEl = document.getElementById("se-level-title");
    const scoreEl = document.getElementById("se-level-score");
    const descEl = document.getElementById("se-level-desc");

    if (titleEl) titleEl.textContent = level;
    if (scoreEl) scoreEl.textContent = `Puntaje acumulado en el reto: ${total} de ${MAX_SELFEVAL_SCORE} puntos`;
    if (descEl) descEl.textContent = desc;
}

function restartSelfEval() {
    soundTick(false);
    seIdx = 0;
    seAnswers = Array(selfEvalQuestions.length).fill(null);
    seTimedOutQuestions = Array(selfEvalQuestions.length).fill(false);
    const resBox = document.getElementById("selfeval-result");
    if (resBox) resBox.classList.add("hidden");
    renderSelfEvalQuestion(true);
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
    el.textContent = `Puntaje: ${score}/${MAX_QUIZ_SCORE}`;
    el.classList.remove("score-plus", "score-minus");
    if (delta > 0) el.classList.add("score-plus");
    if (delta < 0) el.classList.add("score-minus");
    setTimeout(() => el.classList.remove("score-plus", "score-minus"), 400);
}

function loadQuestion() {
    locked = false;
    clearInterval(timerInterval);
    timeLeft = QUESTION_TIME_SECONDS;

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
        timerBar.style.width = `${Math.max(0, (timeLeft / QUESTION_TIME_SECONDS) * 100)}%`;

        if (timeLeft > 0) {
            soundTick(timeLeft <= 10);
        }

        if (timeLeft <= 10) timerBar.style.backgroundColor = "var(--danger)";
        else if (timeLeft <= 25) timerBar.style.backgroundColor = "var(--warning)";

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
    const buttons = document.getElementById("options-container").querySelectorAll(".btn");
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
        score += POINTS_PER_QUESTION;
        correctCount++;
        updateScoreUI(POINTS_PER_QUESTION);

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
    userData.puntajePrincipal = `${score}/${MAX_QUIZ_SCORE} pts`;
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
        puntaje: `${score}/${MAX_QUIZ_SCORE} pts`,
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

    scoreEl.textContent = `${score} / ${MAX_QUIZ_SCORE} Pts`;
    detailsEl.textContent = `✅ Correctas: ${correctCount} | ❌ Incorrectas: ${incorrectCount}`;
    extraEl.textContent = `Ética: ${userData.puntajeEtica || "No realizada"} • Móvil: ${userData.dependencia || "No evaluada"}`;

    if (score >= Math.ceil(MAX_QUIZ_SCORE * 0.7)) {
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
            puntaje: userData.puntajePrincipal || `${score}/${MAX_QUIZ_SCORE} pts`,
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
    document.getElementById("btn-toggle-sound")?.addEventListener("click", toggleSound);
    document.getElementById("btn-dots-menu")?.addEventListener("click", toggleDotsMenu);
    document.getElementById("dropdown-menu")?.addEventListener("click", (e) => e.stopPropagation());
    document.getElementById("menu-export-csv")?.addEventListener("click", handleMenuExportCsv);

    document.querySelectorAll("#dropdown-menu .dropdown-item[data-view]").forEach(btn => {
        btn.addEventListener("click", () => selectMenuView(btn.getAttribute("data-view")));
    });

    document.getElementById("btn-start-quiz")?.addEventListener("click", startQuizFlow);
    document.getElementById("btn-open-ethics")?.addEventListener("click", () => openViewWithSync("ethics-screen"));
    document.getElementById("btn-open-students")?.addEventListener("click", () => openViewWithSync("students-screen"));
    document.getElementById("btn-toggle-credits")?.addEventListener("click", toggleCreditsPanel);
    document.getElementById("btn-se-next")?.addEventListener("click", handleSelfEvalNext);
    document.getElementById("btn-calc-selfeval")?.addEventListener("click", calculateSelfEval);
    document.getElementById("btn-se-restart")?.addEventListener("click", restartSelfEval);
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