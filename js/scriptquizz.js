const quizData = [
    {
        question: "Berapa 1 + 1 x 0??",
        a: "2",
        b: "1",
        c: "3",
        d: "0",
        correct: "b",
    },
    {
        question: "Apa Itu Kepanjangan PPLG??",
        a: "Pengembangan Perangkat Lunak Dan Game",
        b: "Perangkat Lunak dan Game",
        c: "Rekayasa Perangkat Lunak",
        d: "Teknik Jaringan Akses",
        correct: "a",
    },
    {
        question: "Jika A Bernilai 30 dan B bernilai 10 berapakah nilai A X B",
        a: "400",
        b: "300",
        c: "500",
        d: "200",
        correct: "b",
    },
    {
        question: "Kapan tahun Indonesia merdeka??",
        a: "1928",
        b: "1985",
        c: "1960",
        d: "1945",
        correct: "d",
    },
    {
        question: "nilai A B C berturut turut 21, 7, 3 berapakah nilai (A : B) X C ",
        a: "9",
        b: "5",
        c: "2",
        d: "3",
        correct: "a",
    },
    {
        question: "Yang manakah dibawah ini hewan yang terbesar",
        a: "Ikan Paus",
        b: "Jerapah",
        c: "Gajah",
        d: "Kuda Nil",
        correct: "a",
    },
    {
        question: "merebus 1 telur memerlukan waktu 10 menit, berapa telur yang bisa di rebus jika waktunya 60 menit",
        a: "5",
        b: "2",
        c: "3",
        d: "6",
        correct: "d",
    },
    {
        question: "Apa kepanjang dari TJKT?",
        a: "Teknik Jaringan Komputer Telekomunikasi",
        b: "Komunikasi Dan Jaringan",
        c: "Telekomunikasi",
        d: "Teknik Jaringan Komputer",
        correct: "a",
    },
    {
        question: "Aku adalah bilangan prima yang genap, berapakah aku?",
        a: "7",
        b: "3",
        c: "2",
        d: "13",
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
            `
        }
    }
});