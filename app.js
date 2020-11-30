const quiz = [
    {
        question :'ゲーム市場、最も売れたゲーム機は次の内どれ？',
        answers : [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct : 'ニンテンドーDS'
    }, {
        question :'答えは3番だ。',
        answers : [
            '1',
            '2',
            '3',
            '4'
        ],
        correct : '3'
    }, {
        question :'右から2番目の左だ。',//クソ問題
        answers : [
            '左',
            '右',
            '左',
            '左'
        ],
        correct : '右'
    }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }
    quizIndex++;
    if(quizIndex < quizLength){
        //問題数が残っていればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'でした。');
    }
}
//ボタンクリックで正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
