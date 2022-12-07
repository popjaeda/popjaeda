//변수맨
//컴퓨럴 점수, 사람점수, 남은 슛, 횟수
//html변경되는 요소
let comScore = 0;
let userScore = 0;
let shortsLeft = 3;
let isComputerTurn = true;
//html요소
let shortleftElem = document.querySelector("#short-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");
//컴퓨러 먼저 슛을한다.
//2점슛인지 3점슛인지 랜덤으로 결정
//2점슛 50%확률 3점슛은 30%확률 성공
//컴퓨러가 슛을 할때 동작하는 함수
shortleftElem.innerHTML = shortsLeft;
function onComputerShoot() {
    //2점인지 3점인지 랜덤지정
    let shootType = Math.random()>0.5 ? 2 : 3 ;
    //2점슛일때;;
    if(shootType==2) {
        //성공햇을때
        if(Math.random()<0.5){
            //컴퓨터의 점수를 올린다.
            //글자를변경,컴퓨터가 2점슛을 성공시켰습니다.
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터 2점 성공"
        }else {
            textElem.innerHTML = "실패쓰;;ㄷㄷ"
        }
    }else {
        if(Math.random()<0.3){
            comScore = comScore + 3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터 3점 성공"
        }else {
            textElem.innerHTML = "실패쓰;;ㄷㄷ"
        }
    }
    isComputerTurn =false;
    userBtns.forEach(btn=>{
        btn.disabled =false;
    })
    comBtn.disabled = true;
}
//사용자가 2점슛을 클릭했을때
function onUserShoot2() {
    if(Math.random()<0.5){
        //컴퓨터의 점수를 올린다.
        //글자를변경,컴퓨터가 2점슛을 성공시켰습니다.
        userScore = userScore + 2;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "닝겐 2점 성공"
    }else {
        textElem.innerHTML = "실패쓰;;ㄷㄷ"
    }
    userBtns.forEach(btn=>{
        btn.disabled =true;
    })
    comBtn.disabled = false;
    //남은 슛횟수를 1씩 빼기
    --shortsLeft;
    //슛횟수 화면 변경
    shortleftElem.innerHTML = shortsLeft;
    if(shortsLeft==0){
        gameOver();
    }
}
//슛횟수가 0이되면 승자를 결정하는 함수
function gameOver(){
    if(userScore>comScore){
        textElem.innerHTML = "WIN";
    }else if(userscore == comScore){
        textElem.innerHTML = "DRAW"
    }else{
        textElem.innerHTML = "LOSE"
    }
    userBtns.forEach(btn=>{
        btn.disabled =true;
    })
    comBtn.disabled = true;
}
function onUserShoot3() {
    if(Math.random()<0.3){
        //컴퓨터의 점수를 올린다.
        //글자를변경,컴퓨터가 2점슛을 성공시켰습니다.
        userScore = userScore + 3;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "닝겐 3점 성공"
    }else {
        textElem.innerHTML = "실패쓰;;ㄷㄷ"
    }
    userBtns.forEach(btn=>{
        btn.disabled =true;
    })
    comBtn.disabled = false;
    //남은 슛횟수를 1씩 빼기
    --shortsLeft;
    //슛횟수 화면 변경
    shortleftElem.innerHTML = shortsLeft;
    if(shortsLeft==0){
        gameOver();
    }
}