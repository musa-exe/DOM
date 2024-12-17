const gameCONT = document.querySelector('.container')
const allMoleItem = document.querySelectorAll('.item')


let startGame, startTime, countDown = 20, score = 0;



const timeCount = document.getElementById('time-count')
const scoreCount = document.getElementById('score-count')





gameCONT.addEventListener('click' , function(e){
if(e.target.classList.contains('mole-clicked')){
    score++;
    scoreCount.innerHTML = score;

    const bushElem = e.target.parentElement.previousElementSibling;
    let textEl = document.createElement('span')
    textEl.setAttribute('class' , ' whack-text ')
    textEl.innerHTML = "WHACK!";
    bushElem.appendChild(textEl);
                   
    setTimeout(() => {
        textEl.remove()

    },300);



}


})



document.addEventListener('DOMContentLoaded' , () => {
    startTime = setInterval(() => {
        timeCount.innerHTML = countDown;
        countDown--;
    }, 1000)

    startGame = setInterval(() => {
showMole();

    }, 600);
})

function showMole(){
    if(countDown < 0){
        clearInterval(startGame)
        clearInterval(startTime)
        timeCount.innerHTML = "0"
    }
let moleToAppear = allMoleItem[getRandomValue()].querySelector('.mole');
moleToAppear.classList.add('mole-appear');
hideMole(moleToAppear);



}









function getRandomValue(){
let rndm = Math.random() * allMoleItem.length+1;
return Math.floor(rndm);

}




function hideMole(moleitem){
    setTimeout(() => {
        moleitem.classList.remove('mole-appear');
    },1000);
}









