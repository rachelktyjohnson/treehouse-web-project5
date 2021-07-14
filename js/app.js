let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');

let missed = 0;

let start_button = document.querySelector('.btn__reset');
start_button.addEventListener('click',() => {
    document.getElementById('overlay').style.display = 'none';
})

let phrases = [
    'Right off the bat',
    'Rain on your parade',
    'Everything but the kitchen sink',
    'Go out on a limb',
    'Happy as a clam',
    'Easy as pie',
    'Break the ice',
    'Down to the wire'
];

function getRandomPhraseAsArray(arr){
    let rand_num = Math.floor( Math.random()*arr.length);
    return arr[rand_num].split("");
}

function addPhraseToDisplay(phrase_arr){
    for (let i=0; i<phrase_arr.length; i++){
        let li = document.createElement('li');
        li.textContent = phrase_arr[i];
        if (phrase_arr[i]!==" "){
            li.className = "letter";
        } else {
            li.className = "space";
        }
        document.querySelector('#phrase ul').appendChild(li);
    }
}

function checkLetter(letter_button){
    let letters = document.querySelectorAll('#phrase ul .letter');
    let output = null;
    for (let i=0; i<letters.length; i++){
        if (letters[i].textContent.toUpperCase() === letter_button.textContent.toUpperCase()){
            letters[i].classList.add("show");
            output = letter_button;
        }
    }
    return output;
}

//keyboard event listener
qwerty.addEventListener('click', (e)=>{
    if (e.target.tagName==="BUTTON"){
        e.target.className = "chosen";
        e.target.disabled = true;
        let letterFound = checkLetter(e.target);
        if (letterFound === null){
            missed += 1;
        }
    }
    checkWin();
})

function checkWin(){
    //number of letters with the class show
    //number of letters
    let letters = document.querySelectorAll('.letter')
    let shownLetters = document.querySelectorAll('.show');
    if (letters.length === shownLetters.length){
        //show win overlay
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('overlay').classList.add('win');
    } else if (missed >= 5){
        //show lose overlay
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('overlay').classList.add('lose');
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases))