const qna = document.querySelector("#qna");
const main = document.querySelector("#main");
const result= document.querySelector("#result");

function begin()
{
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        main.style.display = "none";
    }, 1000);

    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.Animation = "fadeIn 1s";
    setTimeout(() => {
        qna.style.display="block";
    }, 1000);

    let idx =0;
    goNext(idx)
}

function goNext(idx)
{
    
}
//이게아니야!


function nextq()
{
    var q = document.querySelector(".qbox")
    q.innerHTML = qnaList[i].q;
}


function goResult()
{
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.display = "none";
    }, 1000);

    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.Animation = "fadeIn 1s";
    setTimeout(() => {
        result.style.display="block";
    }, 1000);
}

function addAnswer()
{

}



//자... 다음 질문으로 넘어가자. 그러면, 질문은 다음질문으로 넘어가고, 응답란은 fadeout되면서 다음 질문이 fadein된다.
//다음 질문으로 넘어가는건, 배열 변수를 증가시켜주면 되고, 배열의 인덱스 값을 변수로 설정
//흠...
//버튼을 누르면, 다른 버튼은 작동할 수 없게 하고, 자동으로 gonext 함수 실행
//Idx로 , 인덱스 값 설정해서 함수에 집어넣든 배열에 집어넣든 하고







function hide(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        main.style.display = "none";
    }, 1000);
}

function show(){
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.Animation = "fadeIn 1s";
    setTimeout(() => {
        qna.style.display="block";
    }, 1000);
}