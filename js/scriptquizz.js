const quizData = [
    {
        question: "Siapa yang menjadi ketua pelaksanaan penculikan dalam Gerakan 30 September 1965?",
        a: "Letjen Ahmad Yani",
        b: "Brigjen D.I. Panjaitan",
        c: "Lettu Dul Arief",
        d: "Mayjen Harjono",
        correct: "c",
    },
    {
        question: "Yang bukan korban dari penculikan dan pembunuhan",
        a: "Brigjen. Sutoyo",
        b: "Letjen. Ahmad Yani",
        c: "Lettu Pierre Tendean",
        d: "Letkol Sugiono",
        correct: "d",
    },
    {
        question: "Berapa jumlah jenderal yang menjadi korban penculikan dan pembunuhan dalam Gerakan 30 September 1965?",
        a: "4",
        b: "3",
        c: "5",
        d: "6",
        correct: "d",
    },
    {
        question: "Dimana lokasi tempat jenderal-jenderal yang menjadi korban dimasukkan setelah penculikan?",
        a: "Jakarta",
        b: "Bandung",
        c: "Yogyakarta",
        d: "Surabaya",
        correct: "a",
    },
    {
        question: "Siapa satu-satunya jenderal yang selamat dari penculikan tersebut?",
        a: "Letjen Ahmad Yani",
        b: "Brigjen Sutoyo",
        c: "Jendral A.H. Nasution",
        d: "Mayjen R. Soeprapto",
        correct: "c",
    },
    {
        question: "Siapa yang menjadi korban wafat ketika mengawal rumah Dr. J. Leimana?",
        a: "Brigjen Polisi K.S. Tubun",
        b: "Mayjen Harjono",
        c: "Brigjen D.I. Panjaitan",
        d: "Lettu Pirre Tandean",
        correct: "a",
    },
    {
        question: "Di mana gerakan G30S PKI menyebar selain di Jakarta?",
        a: "Jawa Timur",
        b: "Jawa Tengah",
        c: "Sumatera",
        d: "Sulawesi",
        correct: "b",
    },
    {
        question: "Siapa yang menjadi korban karena tidak mendukung gerakan G30S PKI di Jawa Tengah dan D.I Yogyakarta?",
        a: "Lettu Pierre Tendean",
        b: "Letjen Ahmad Yani",
        c: "Kolonel Katamso",
        d: "Mayjen R. Soeprapto",
        correct: "c",
    },
    {
        question: "Apa yang dilakukan PKI setelah berhasil menculik dan membunuh petinggi AD?",
        a: "Menguasai gedung DPR",
        b: "Menguasai gedung Radio Republik Indonesia",
        c: "Membentuk pemerintahan baru",
        d: "Membentuk tentara baru",
        correct: "b",
    },
    {
        question: "Apa yang dimaksud dengan Dekrit no.1 dalam konteks Gerakan 30 September 1965?",
        a: "Pernyataan bahwa AD akan mengambil alih pemerintahan",
        b: "Rencana untuk membubarkan PKI",
        c: "Pernyataan bahwa G30S PKI adalah upaya penyelematan negara",
        d: "Rencana pembentukan parlemen baru",
        correct: "c",
    },

];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Restart</button>
            <button onclick="window.location.href = 'index.html';">Home</button>
            `
        }
    }
});