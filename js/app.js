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

addPhraseToDisplay(getRandomPhraseAsArray(phrases))