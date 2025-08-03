const RANDOM_SENTENCE_URL_API = "./sentense.json"
const typeDisplay = document.getElementById("typeDisplay")
const typeInput = document.getElementById("type-Input")
const timeLimit = document.getElementById("timer")
const typeSound = new Audio("./audio/typing-sound.mp3")
const inCorrectSound = new Audio("./audio/wrong.mp3")
const finishGameSound = new Audio("./audio/correct.mp3")


//inputテキスト入力ー会っているかの判定

typeInput.addEventListener("input", () => {

    //タイプ音を出す
    typeSound.play()
    typeSound.currentTime = 0 //ラグが０秒

    const sentenseArray = typeDisplay.querySelectorAll("span") //spanタグのすべてを取得

    const arrayValue = typeInput.value.split("") //valueは入力された値を取ってこれる

    let correct = true;
    sentenseArray.forEach((characterSpan, index) => {
        if (arrayValue[index] == null) {
            characterSpan.classList.remove("correct")
            characterSpan.classList.remove("incorrect")
            correct = false
        } else if (characterSpan.innerText == arrayValue[index]) {
            // console.log("correct")
            characterSpan.classList.add("correct")
            characterSpan.classList.remove("incorrect")
        } else {
            inCorrectSound.volume = 0.05
            inCorrectSound.play();
            inCorrectSound.currentTime = 0
            characterSpan.classList.add("incorrect")
            characterSpan.classList.remove("correct")
            correct = false;
        }
    })
    if (correct === true) {
        finishGameSound.play();
        finishGameSound.currentTime = 0
        RenderNextSentence();
    }
})



//APIからデータを取得してjsonを変換
function GetRandomSentence() {
    return fetch(RANDOM_SENTENCE_URL_API)
        .then((res) => res.json())
        .then((data) => data[Math.floor(Math.random() * data.length)])
}


async function RenderNextSentence() {
    const sentense = await GetRandomSentence();
    const typeWord = sentense.word
    typeDisplay.innerText = ""
    //文章を一文字ずつ分解してspanタグで生成する
    let oneText = typeWord.split("")

    oneText.forEach((character) => {
        const characterSpan = document.createElement("span")//spanタグの中に１文字ずついれる
        characterSpan.innerText = character
        // console.log(characterSpan)
        typeDisplay.appendChild(characterSpan)
        // characterSpan.classList.add("normal") //spanタグにcorrectクラスを付与する
    });
    //テキストボックスの中身を消す
    typeInput.value = "";
    startTimer()
}

let startTime;
let origintTime = 30
function startTimer() {
    timeLimit.innerText = origintTime;
    startTime = new Date();
    // console.log(startTime)
    setInterval(() => {
        timeLimit.innerText = origintTime - getTimerTime();
        if (timeLimit.innerText <= 0) timeUp();
    }, 1000)
}
function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

function timeUp() {
    RenderNextSentence();
}


RenderNextSentence()