const questions = [
  {
    level: "Łatwy",
    points: 1,
    visual: "yarn",
    question: "Włóczka to:",
    answers: ["narzędzie", "wyrób włókienniczy", "maszyna", "ścieg"],
    correct: 1,
    hint: "Nauczyciel podpowiada: włóczka powstaje z włókien i służy np. do robótek."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "knittingNeedles",
    question: "Druty służą do:",
    answers: ["szycia", "robienia dzianiny", "klejenia", "prasowania"],
    correct: 1,
    hint: "Nauczyciel podpowiada: na drutach wykonuje się oczka."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "needle",
    question: "Igła służy do:",
    answers: ["klejenia", "szycia", "mierzenia", "prasowania"],
    correct: 1,
    hint: "Nauczyciel podpowiada: igła prowadzi nitkę przez materiał."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "crochetHook",
    question: "Do robienia łańcuszka służy:",
    answers: ["młotek", "klej", "szydełko", "maszyna"],
    correct: 2,
    hint: "Nauczyciel podpowiada: łańcuszek to podstawowy element szydełkowania."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "threadSpools",
    question: "Nitka jest potrzebna do:",
    answers: ["szycia", "rysowania", "prasowania", "cięcia"],
    correct: 0,
    hint: "Nauczyciel podpowiada: nitka łączy kawałki materiału."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "button",
    question: "Guzik przyszywamy:",
    answers: ["klejem", "igłą i nicią", "nożyczkami", "linijką"],
    correct: 1,
    hint: "Nauczyciel podpowiada: do przyszywania guzika potrzebne są dwa małe narzędzia."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "wovenFabric",
    question: "Tkanina powstaje przez:",
    answers: ["szycie", "przeplatanie nitek", "klejenie", "prasowanie"],
    correct: 1,
    hint: "Nauczyciel podpowiada: tkanina powstaje z przeplatanych nitek."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "sweater",
    question: "Dzianina powstaje przez:",
    answers: ["klejenie", "robienie oczek", "prasowanie", "cięcie"],
    correct: 1,
    hint: "Nauczyciel podpowiada: dzianina składa się z oczek."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "scissors",
    question: "Nożyczki służą do:",
    answers: ["szycia", "cięcia", "prasowania", "mierzenia"],
    correct: 1,
    hint: "Nauczyciel podpowiada: nożyczkami rozdzielamy materiał lub papier."
  },
  {
    level: "Łatwy",
    points: 1,
    visual: "careShirt",
    question: "Dbamy o ubrania, żeby:",
    answers: ["były ciężkie", "dłużej służyły", "były mokre", "szybciej się niszczyły"],
    correct: 1,
    hint: "Nauczyciel podpowiada: dbanie o ubrania przedłuża ich używanie."
  },
  {
    level: "Średni",
    points: 2,
    visual: "tag",
    question: "Metka na ubraniu zawiera:",
    answers: ["ozdoby", "zasady dbania o odzież", "cenę", "kolor"],
    correct: 1,
    hint: "Nauczyciel podpowiada: metka pomaga sprawdzić, jak prać, suszyć i prasować ubranie."
  },
  {
    level: "Średni",
    points: 2,
    visual: "handwash",
    question: "Co oznacza ten symbol?",
    answers: ["suszenie", "pranie ręczne", "prasowanie", "wybielanie"],
    correct: 1,
    hint: "Nauczyciel podpowiada: dłoń w misce oznacza pranie ręczne."
  },
  {
    level: "Średni",
    points: 2,
    visual: "wash30",
    question: "Co oznacza ten symbol?",
    answers: ["prać w temperaturze do 30°C", "nie prać", "suszyć w suszarce", "prasować"],
    correct: 0,
    hint: "Nauczyciel podpowiada: liczba w misce oznacza najwyższą temperaturę prania."
  },
  {
    level: "Średni",
    points: 2,
    visual: "noWash",
    question: "Przekreślony symbol prania oznacza:",
    answers: ["prać w 30", "nie prać", "suszyć", "prasować"],
    correct: 1,
    hint: "Nauczyciel podpowiada: przekreślony znak oznacza zakaz."
  },
  {
    level: "Średni",
    points: 2,
    visual: "iron",
    question: "Co oznacza ten symbol?",
    answers: ["pranie", "prasowanie", "suszenie", "szycie"],
    correct: 1,
    hint: "Nauczyciel podpowiada: żelazko służy do prasowania."
  },
  {
    level: "Średni",
    points: 2,
    visual: "unknown",
    question: "Co warto zrobić, gdy ubranie nie ma metki?",
    answers: ["prać ostrożnie", "zawsze prać w 90°C", "zawsze wybielać", "nie trzeba uważać"],
    correct: 0,
    hint: "Nauczyciel podpowiada: bez metki najlepiej wybrać delikatny, bezpieczny sposób."
  },
  {
    level: "Średni",
    points: 2,
    visual: "triangle",
    question: "Co oznacza ten symbol?",
    answers: ["prasowanie", "wybielanie", "suszenie", "szycie"],
    correct: 1,
    hint: "Nauczyciel podpowiada: trójkąt oznacza wybielanie."
  },
  {
    level: "Średni",
    points: 2,
    visual: "noBleach",
    question: "Co oznacza ten symbol?",
    answers: ["można wybielać", "nie wybielać", "prasować", "suszyć"],
    correct: 1,
    hint: "Nauczyciel podpowiada: przekreślony trójkąt oznacza zakaz wybielania."
  },
  {
    level: "Średni",
    points: 2,
    visual: "dryer",
    question: "Co oznacza ten symbol?",
    answers: ["prania", "suszenia", "prasowania", "szycia"],
    correct: 1,
    hint: "Nauczyciel podpowiada: suszarka bębnowa suszy ubrania."
  },
  {
    level: "Średni",
    points: 2,
    visual: "unknown",
    question: "Po co na metkach podaje się temperaturę?",
    answers: ["żeby dobrać bezpieczne pranie", "żeby znać cenę ubrania", "żeby wybrać kolor", "żeby skrócić rękawy"],
    correct: 0,
    hint: "Nauczyciel podpowiada: temperatura pomaga nie zniszczyć ubrania w praniu."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "beforeWash",
    question: "Co robimy przed praniem ubrania?",
    answers: ["prasujemy", "sprawdzamy metkę", "suszymy", "składamy"],
    correct: 1,
    hint: "Nauczyciel podpowiada: przed praniem zawsze warto sprawdzić metkę."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "unknown",
    question: "Zbyt wysoka temperatura może:",
    answers: ["powiększyć ubranie", "skurczyć ubranie", "wysuszyć", "nic nie zrobić"],
    correct: 1,
    hint: "Nauczyciel podpowiada: zbyt gorące pranie może zmniejszyć ubranie."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "unknown",
    question: "Dlaczego warto zapinać zamki przed praniem?",
    answers: ["bo mogą zahaczać i niszczyć tkaninę", "bo ubranie staje się wtedy cięższe", "bo metka zmienia kolor", "bo pranie trwa krócej"],
    correct: 0,
    hint: "Nauczyciel podpowiada: zamek może zaczepiać o inne ubrania albo materiał."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "unknown",
    question: "Gdy znak na metce jest przekreślony, zwykle oznacza:",
    answers: ["można wykonać tę czynność", "nie wolno wykonywać tej czynności", "trzeba prasować", "trzeba suszyć"],
    correct: 1,
    hint: "Nauczyciel podpowiada: przekreślenie symbolu oznacza zakaz."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "stitchIcon",
    question: "Co to jest ścieg?",
    answers: ["materiał", "sposób szycia", "narzędzie", "maszyna"],
    correct: 1,
    hint: "Nauczyciel podpowiada: ścieg to sposób prowadzenia nici podczas szycia."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "careShirt",
    question: "Konserwacja ubrań to:",
    answers: ["niszczenie", "dbanie o ubrania", "kupowanie", "wyrzucanie"],
    correct: 1,
    hint: "Nauczyciel podpowiada: konserwacja oznacza dbanie o ubrania."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "unknown",
    question: "Co może zniszczyć ubranie?",
    answers: ["dobre pranie", "złe pranie", "składanie", "wieszanie"],
    correct: 1,
    hint: "Nauczyciel podpowiada: zły sposób prania może zniszczyć ubranie."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "unknown",
    question: "Dlaczego wybielanie nie zawsze jest bezpieczne?",
    answers: ["bo może zniszczyć kolor lub materiał", "bo zawsze naprawia ubranie", "bo służy do prasowania", "bo zastępuje suszenie"],
    correct: 0,
    hint: "Nauczyciel podpowiada: wybielacz może odbarwić albo osłabić tkaninę."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "unknown",
    question: "Dlaczego nie każde ubranie można prasować?",
    answers: ["bo jest mokre", "bo może się zniszczyć", "bo jest nowe", "bo jest kolorowe"],
    correct: 1,
    hint: "Nauczyciel podpowiada: niektóre materiały niszczą się od wysokiej temperatury."
  },
  {
    level: "Trudny",
    points: 3,
    visual: "unknown",
    question: "Co jest najważniejsze w dbaniu o ubrania?",
    answers: ["kolor", "cena", "przestrzeganie zasad i oznaczeń", "wygląd"],
    correct: 2,
    hint: "Nauczyciel podpowiada: najważniejsze jest przestrzeganie zasad i oznaczeń z metki."
  }
];

const state = {
  index: -1,
  score: 0,
  players: [],
  answered: false,
  fiftyUsed: false,
  teacherUsed: false,
  resultSaved: false
};

let gameQuestions = buildQuestionSet();

const levelLabel = document.querySelector("#level-label");
const scoreLabel = document.querySelector("#score-label");
const progressBar = document.querySelector("#progress-bar");
const questionNumber = document.querySelector("#question-number");
const questionPoints = document.querySelector("#question-points");
const questionVisual = document.querySelector("#question-visual");
const questionText = document.querySelector("#question-text");
const answersEl = document.querySelector("#answers");
const studentOneName = document.querySelector("#student-one-name");
const studentOneNumber = document.querySelector("#student-one-number");
const studentTwoName = document.querySelector("#student-two-name");
const studentTwoNumber = document.querySelector("#student-two-number");
const startGameBtn = document.querySelector("#start-game-btn");
const feedback = document.querySelector("#feedback");
const nextBtn = document.querySelector("#next-btn");
const fiftyBtn = document.querySelector("#fifty-btn");
const teacherBtn = document.querySelector("#teacher-btn");
const qrUrl = document.querySelector("#qr-url");
const qrBtn = document.querySelector("#qr-btn");
const qrImage = document.querySelector("#qr-image");
const qrNote = document.querySelector("#qr-note");
const resultsList = document.querySelector("#results-list");
const copyResultsBtn = document.querySelector("#copy-results-btn");
const clearResultsBtn = document.querySelector("#clear-results-btn");

const resultsKey = "milionerzyWloknaResults";

const visuals = {
  yarn: 'assets/włóczka.png',
  knittingNeedles: 'assets/druty.png',
  needle: 'assets/igła.png',
  crochetHook: 'assets/łańcuszek.png',
  threadSpools: 'assets/nitki.png',
  button: 'assets/guzik.png',
  wovenFabric: 'assets/tkanina.png',
  sweater: 'assets/dzianina.png',
  scissors: 'assets/nożyczki.png',
  careShirt: '<path d="M64 22c0-9 12-10 12 0 0 8-12 8-12 16" fill="none" stroke="#3b2a20" stroke-width="5" stroke-linecap="round"/><path d="M32 51l32-17 32 17" fill="none" stroke="#3b2a20" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 55h44l7 51H35z" fill="#f8d97f" stroke="#3b2a20" stroke-width="6" stroke-linejoin="round"/><path d="M48 72c8-11 16-5 16 1 0-6 8-12 16-1 0 13-16 22-16 22S48 85 48 72z" fill="#e85d75" stroke="#3b2a20" stroke-width="4" stroke-linejoin="round"/>',
  stitchIcon: 'assets/ścieg.png',
  tag: 'assets/metka.png',
  beforeWash: 'assets/przed praniem.png',
  handwash: 'assets/pranie ręczne.png',
  wash30: '<path d="M20 40c8 6 16 6 24 0s16-6 24 0 16 6 24 0 16-6 24 0L105 94H31z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><text x="64" y="77" text-anchor="middle" font-size="32" font-weight="900" fill="currentColor">30°</text>',
  wash40: '<path d="M20 40c8 6 16 6 24 0s16-6 24 0 16 6 24 0 16-6 24 0L105 94H31z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><text x="64" y="77" text-anchor="middle" font-size="32" font-weight="900" fill="currentColor">40°</text>',
  washTemp: '<path d="M20 40c8 6 16 6 24 0s16-6 24 0 16 6 24 0 16-6 24 0L105 94H31z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><text x="64" y="77" text-anchor="middle" font-size="32" font-weight="900" fill="currentColor">40°</text>',
  temperature: '<path d="M20 40c8 6 16 6 24 0s16-6 24 0 16 6 24 0 16-6 24 0L105 94H31z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><path d="M49 72h30" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><circle cx="86" cy="72" r="6" fill="currentColor"/>',
  noWash: '<path d="M20 40c8 6 16 6 24 0s16-6 24 0 16 6 24 0 16-6 24 0L105 94H31z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><path d="M22 23l84 82M106 23l-84 82" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
  iron: 'assets/żelazko.png',
  noIron: '<path d="M25 79h79c-6-24-27-38-60-38H37z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><path d="M38 79v18h65" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M47 41c13-15 36-15 50 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M23 24l82 82M105 24l-82 82" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
  ironDot: '<path d="M25 79h79c-6-24-27-38-60-38H37z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><path d="M38 79v18h65" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M47 41c13-15 36-15 50 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><circle cx="66" cy="68" r="6" fill="currentColor"/>',
  square: '<rect x="31" y="31" width="66" height="66" fill="none" stroke="currentColor" stroke-width="8"/>',
  dryer: '<rect x="31" y="31" width="66" height="66" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="64" cy="64" r="25" fill="none" stroke="currentColor" stroke-width="7"/>',
  noDryer: '<rect x="31" y="31" width="66" height="66" fill="none" stroke="currentColor" stroke-width="8"/><circle cx="64" cy="64" r="25" fill="none" stroke="currentColor" stroke-width="7"/><path d="M23 24l82 82M105 24l-82 82" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
  triangle: '<path d="M64 24l42 76H22z" fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round"/>',
  noBleach: '<path d="M64 24l42 76H22z" fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round"/><path d="M25 24l78 80M103 24l-78 80" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
  stitch: '<path d="M17 70c15-22 31-22 47 0s32 22 47 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M22 92h84" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-dasharray="5 12"/>',
  shirt: '<path d="M42 25l14 11 16-11 14 11 19 9-13 25-9-5v39H45V65l-9 5-13-25z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/>',
  badWash: '<path d="M20 40c8 6 16 6 24 0s16-6 24 0 16 6 24 0 16-6 24 0L105 94H31z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><path d="M43 65l42 25M85 65L43 90" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
  rules: '<rect x="36" y="20" width="56" height="88" rx="4" fill="none" stroke="currentColor" stroke-width="7"/><path d="M51 48h30M51 64h30M51 80h18" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M41 43l7 7 11-15" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
  washSet: '<path d="M12 51c6 4 12 4 18 0s12-4 18 0 12 4 18 0l-7 38H18z" fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/><text x="39" y="77" text-anchor="middle" font-size="18" font-weight="900" fill="currentColor">30°</text><path d="M78 23v48M92 31v39" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M75 76c10 10 24 10 34 0" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>',
  colors: '<path d="M26 34h31v61H26zM71 34h31v61H71z" fill="none" stroke="currentColor" stroke-width="7"/><path d="M32 48h19M77 48h19M32 64h19M77 64h19" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>',
  wool: '<path d="M37 68c-18-19 7-46 30-29 22-17 48 10 29 29 18 18-5 45-29 30-24 15-47-12-30-30z" fill="none" stroke="currentColor" stroke-width="7"/><path d="M45 83c16-10 32-10 48 0" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>',
  unknown: 'assets/znak zapytania.png',
  bleach: '<path d="M64 24l42 76H22z" fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round"/><path d="M47 69h34" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>',
  care: '<path d="M31 22h46l30 30-46 46-30-30z" fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round"/><path d="M49 66l12 12 28-34" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>'
};

function shuffleAnswers(question) {
  const packed = question.answers.map((text, index) => ({ text, originalIndex: index }));

  for (let i = packed.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [packed[i], packed[j]] = [packed[j], packed[i]];
  }

  return packed.map((answer, index) => ({
    ...answer,
    label: ["A", "B", "C", "D"][index],
    isCorrect: answer.originalIndex === question.correct
  }));
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function buildQuestionSet() {
  return [
    ...shuffleArray(questions.filter((question) => question.level === "Łatwy")),
    ...shuffleArray(questions.filter((question) => question.level === "Średni")),
    ...shuffleArray(questions.filter((question) => question.level === "Trudny"))
  ];
}

function getPlayerLabel() {
  return state.players
    .filter((player) => player.name || player.number)
    .map((player) => {
      const number = player.number ? `nr ${player.number}` : "bez nr";
      return `${player.name || "Uczeń"} (${number})`;
    })
    .join(" + ");
}

function getStoredResults() {
  try {
    return JSON.parse(localStorage.getItem(resultsKey) || "[]");
  } catch {
    return [];
  }
}

function setStoredResults(results) {
  localStorage.setItem(resultsKey, JSON.stringify(results));
}

function saveResult(rank) {
  if (state.resultSaved) {
    return;
  }

  const results = getStoredResults();
  results.unshift({
    date: new Date().toLocaleString("pl-PL"),
    players: getPlayerLabel() || "Brak danych",
    score: state.score,
    rank
  });
  setStoredResults(results.slice(0, 40));
  state.resultSaved = true;
  renderResults();
}

function resultsToCsv(results) {
  const rows = [["Data", "Uczniowie", "Punkty", "Tytuł"], ...results.map((result) => [
    result.date,
    result.players,
    String(result.score),
    result.rank
  ])];

  return rows
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(";"))
    .join("\n");
}

function renderResults() {
  const results = getStoredResults();
  if (!results.length) {
    resultsList.innerHTML = '<p id="qr-note">Wyniki pojawią się tutaj po zakończeniu gry na tym urządzeniu.</p>';
    return;
  }

  resultsList.innerHTML = "";
  results.forEach((result) => {
    const row = document.createElement("div");
    row.className = "result-row";
    row.innerHTML = `<strong>${result.score} pkt - ${result.rank}</strong><span>${result.players}</span><span>${result.date}</span>`;
    resultsList.append(row);
  });
}

async function copyResults() {
  const csv = resultsToCsv(getStoredResults());
  if (!csv) {
    return;
  }

  await navigator.clipboard.writeText(csv);
  qrNote.textContent = "Skopiowano zestawienie CSV do schowka.";
}

function clearResults() {
  localStorage.removeItem(resultsKey);
  renderResults();
}

function startGame() {
  state.players = [
    {
      name: studentOneName.value.trim(),
      number: studentOneNumber.value.trim()
    },
    {
      name: studentTwoName.value.trim(),
      number: studentTwoNumber.value.trim()
    }
  ];

  restartGame();
}

function currentQuestion() {
  return gameQuestions[state.index];
}

function renderVisual(name) {
  if (!name) {
    questionVisual.hidden = true;
    questionVisual.innerHTML = "";
    return;
  }

  questionVisual.hidden = false;
  const shape = visuals[name] || visuals.tag;
  if (shape.startsWith("https://") || shape.startsWith("assets/")) {
    questionVisual.innerHTML = `<img src="${shape}" alt="">`;
    return;
  }

  questionVisual.innerHTML = `<svg viewBox="0 0 128 128" role="img">${shape}</svg>`;
}

function renderQuestion() {
  const question = currentQuestion();
  const shuffled = shuffleAnswers(question);
  state.answered = false;

  document.body.classList.add("game-active");
  document.body.dataset.level = question.level.toLowerCase();
  levelLabel.textContent = `Poziom: ${question.level.toLowerCase()}`;
  scoreLabel.textContent = `${state.score} pkt`;
  questionNumber.textContent = `Pytanie ${state.index + 1} z ${gameQuestions.length}`;
  questionPoints.textContent = `Za ${question.points} ${question.points === 1 ? "punkt" : "punkty"}`;
  questionText.textContent = question.question;
  progressBar.style.width = `${(state.index / gameQuestions.length) * 100}%`;
  feedback.textContent = "";
  nextBtn.textContent = "Następne pytanie";
  nextBtn.disabled = true;
  renderVisual(question.visual);

  answersEl.innerHTML = "";
  shuffled.forEach((answer) => {
    const button = document.createElement("button");
    const letter = document.createElement("span");

    button.className = "answer";
    button.type = "button";
    button.dataset.correct = String(answer.isCorrect);
    letter.className = "letter";
    letter.textContent = answer.label;
    button.append(letter, answer.text);
    button.addEventListener("click", () => selectAnswer(button));
    answersEl.append(button);
  });

  updateLifelines();
}

function selectAnswer(selectedButton) {
  if (state.answered) {
    return;
  }

  state.answered = true;
  const question = currentQuestion();
  const isCorrect = selectedButton.dataset.correct === "true";
  const buttons = [...document.querySelectorAll(".answer")];

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    state.score += question.points;
    feedback.textContent = `Dobra odpowiedź. Zdobywacie ${question.points} pkt.`;
  } else {
    selectedButton.classList.add("wrong");
    feedback.textContent = "To nie ta odpowiedź. Punktów za to pytanie nie ma.";
  }

  scoreLabel.textContent = `${state.score} pkt`;
  nextBtn.disabled = false;
  updateLifelines();
}

function useFifty() {
  if (state.fiftyUsed || state.answered || state.index < 0) {
    return;
  }

  state.fiftyUsed = true;
  const wrongButtons = [...document.querySelectorAll(".answer")]
    .filter((button) => button.dataset.correct !== "true");

  wrongButtons
    .sort(() => Math.random() - .5)
    .slice(0, 2)
    .forEach((button) => {
      button.classList.add("hidden-option");
      button.disabled = true;
    });

  feedback.textContent = "Koło 50:50 usunęło dwie błędne odpowiedzi.";
  updateLifelines();
}

function askTeacher() {
  if (state.teacherUsed || state.answered || state.index < 0) {
    return;
  }

  state.teacherUsed = true;
  feedback.textContent = currentQuestion().hint;
  updateLifelines();
}

function updateLifelines() {
  const blocked = state.answered || state.index < 0;
  fiftyBtn.disabled = state.fiftyUsed || blocked;
  teacherBtn.disabled = state.teacherUsed || blocked;
  fiftyBtn.classList.toggle("used", state.fiftyUsed);
  teacherBtn.classList.toggle("used", state.teacherUsed);
}

function finishGame() {
  const rank = state.score >= 50
    ? "Mistrzowie"
    : state.score >= 35
      ? "Eksperci"
      : state.score >= 20
        ? "Znawcy"
        : "Uczestnicy";

  progressBar.style.width = "100%";
  document.body.dataset.level = "trudny";
  levelLabel.textContent = "Koniec gry";
  questionNumber.textContent = "Wynik końcowy";
  questionPoints.textContent = "Maksymalnie 60 pkt";
  questionVisual.innerHTML = '<svg viewBox="0 0 128 128" role="img"><circle cx="64" cy="64" r="48" fill="#fff" stroke="currentColor" stroke-width="7"/><path d="M39 66l17 17 35-41" fill="none" stroke="#3bb99b" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  questionText.textContent = `${getPlayerLabel() || "Gracze"}: ${state.score} pkt. Tytuł grupy: ${rank}.`;
  answersEl.innerHTML = "";
  feedback.textContent = "Kliknij restart, aby zagrać jeszcze raz z przemieszanymi odpowiedziami.";
  nextBtn.textContent = "Restart";
  nextBtn.disabled = false;
  saveResult(rank);
  updateLifelines();
}

function nextQuestion() {
  if (state.index >= gameQuestions.length - 1) {
    finishGame();
    state.index = gameQuestions.length;
    return;
  }

  state.index += 1;
  renderQuestion();
}

function restartGame() {
  gameQuestions = buildQuestionSet();
  state.index = -1;
  state.score = 0;
  state.answered = false;
  state.fiftyUsed = false;
  state.teacherUsed = false;
  state.resultSaved = false;
  scoreLabel.textContent = "0 pkt";
  nextQuestion();
}

function setQrCode() {
  const value = qrUrl.value.trim();
  if (!value) {
    qrImage.removeAttribute("src");
    qrNote.textContent = "Wpisz link do opublikowanej gry, aby utworzyć kod QR dla tabletów.";
    return;
  }

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(value)}`;
  qrNote.textContent = "Zeskanuj kod tabletem. Każde urządzenie uruchamia własną rozgrywkę.";
}

nextBtn.addEventListener("click", () => {
  if (state.index === gameQuestions.length) {
    restartGame();
    return;
  }

  nextQuestion();
});

startGameBtn.addEventListener("click", startGame);
copyResultsBtn.addEventListener("click", copyResults);
clearResultsBtn.addEventListener("click", clearResults);
fiftyBtn.addEventListener("click", useFifty);
teacherBtn.addEventListener("click", askTeacher);
qrBtn.addEventListener("click", setQrCode);

if (window.location.protocol.startsWith("http")) {
  qrUrl.value = window.location.href;
  setQrCode();
}

updateLifelines();
renderResults();
