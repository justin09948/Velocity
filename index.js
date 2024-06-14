let easy = ['cat', 'dog', 'sun', 'moon', 'tree', 'house', 'car', 'bird', 'fish', 'book',
            'pen', 'table', 'chair', 'ball', 'lamp', 'door', 'window', 'smile', 'happy',
            'funny', 'rain', 'snow', 'wind', 'star', 'green', 'blue', 'red', 'yellow',
            'orange', 'apple', 'banana', 'grape', 'lemon', 'orange', 'tomato', 'potato',
            'onion', 'water', 'milk', 'bread', 'cheese', 'cake', 'ice', 'fire', 'earth',
            'air', 'ocean', 'river', 'mountain', 'valley', 'forest', 'park', 'street',
            'bridge', 'hill', 'stone', 'rock', 'sand', 'beach', 'wave', 'shell',
            'happy', 'sad', 'big', 'small', 'hot', 'cold', 'fast', 'slow', 'high', 'low',
            'light', 'dark', 'old', 'new', 'rich', 'poor', 'thick', 'thin', 'soft', 'hard',
            'loud', 'quiet', 'simple', 'complex', 'sweet', 'sour', 'safe', 'dangerous',
            'bright', 'dull', 'clean', 'dirty', 'empty', 'full', 'wide', 'narrow', 'deep',
            'shallow', 'happy', 'angry', 'proud', 'shy', 'brave', 'scared', 'kind', 'mean',
            'calm', 'excited', 'polite', 'rude', 'honest', 'dishonest', 'smart', 'dumb',
            'funny', 'serious', 'tall', 'short', 'young', 'old', 'simple', 'complex',
            'early', 'late', 'fresh', 'stale', 'smooth', 'rough', 'vast', 'tiny', 'wild',
            'tame', 'warm', 'cool', 'easy', 'difficult', 'happy', 'sad', 'strong', 'weak',
            'thirsty', 'hungry', 'sleepy', 'awake', 'sharp', 'dull', 'near', 'far', 'light',
            'heavy', 'early', 'late', 'safe', 'dangerous', 'true', 'false', 'open', 'closed',
            'alive', 'dead', 'loose', 'tight', 'thick', 'thin', 'cheap', 'expensive',
            'loud', 'quiet', 'free', 'busy', 'hard', 'soft', 'low', 'high', 'deep', 'shallow',
            'empty', 'full', 'dark', 'light', 'thirsty', 'hungry', 'fast', 'slow', 'old', 'young',
            'heavy', 'light', 'happy', 'sad', 'hot', 'cold', 'rich', 'poor', 'thick', 'thin',
            'deep', 'shallow', 'bright', 'dull', 'clean', 'dirty', 'empty', 'full', 'wide', 'narrow',
            'soft', 'hard', 'simple', 'complex', 'true', 'false', 'open', 'closed', 'alive', 'dead',
            'loose', 'tight', 'thirsty', 'hungry', 'sleepy', 'awake', 'sharp', 'dull', 'near', 'far',
            'early', 'late', 'fresh', 'stale', 'smooth', 'rough', 'vast', 'tiny', 'wild', 'tame',
            'warm', 'cool', 'easy', 'difficult', 'happy', 'sad', 'strong', 'weak', 'thirsty', 'hungry',
            'sleepy', 'awake', 'sharp', 'dull', 'near', 'far', 'early', 'late', 'fresh', 'stale', 'smooth',
            'rough', 'vast', 'tiny', 'wild', 'tame', 'warm', 'cool', 'easy', 'difficult', 'a', 'another', 'he', 'she'];

let hard = ['absurd', 'accidentally', 'accommodate', 'acquaintance', 'aggressive', 'amateur', 'apparently', 'argument', 'athletic', 'boundary',
    'calendar', 'category', 'cemetery', 'committee', 'conscience', 'conscious', 'controversy', 'dilemma', 'efficient', 'embarrass',
    'exaggerate', 'fluorescent', 'foreign', 'genuine', 'harass', 'hierarchy', 'humorous', 'inoculate', 'irresistible', 'liaison',
    'maneuver', 'millennium', 'necessary', 'occasion', 'parallel', 'perceive', 'persuade', 'precede', 'questionnaire', 'receive',
    'recommend', 'rhythm', 'ridiculous', 'sacrifice', 'separate', 'statistics', 'thorough', 'tomorrow', 'unbelievable', 'vaccinate',
    'accomplish', 'aggravate', 'allegiance', 'bureaucracy', 'chauffeur', 'coalesce', 'czar', 'deceive', 'dedicate', 'deprecate',
    'ecstasy', 'encyclopedia', 'enthusiastic', 'facade', 'fascinate', 'fiery', 'frequent', 'grievance', 'haphazard', 'hypocrisy',
    'innocuous', 'jeopardy', 'judicious', 'kerfuffle', 'leisure', 'medieval', 'mischievous', 'neophyte', 'niece', 'nuisance',
    'onomatopoeia', 'opulent', 'parliament', 'perpendicular', 'plausible', 'potpourri', 'quarantine', 'raspberry', 'reminisce', 'resilient',
    'satellite', 'serendipity', 'sufficient', 'tantalize', 'troubleshoot', 'ubiquitous', 'viable', 'whimsical', 'xenophobia', 'yield',
    'abundance', 'accelerate', 'ambiguous', 'apocalypse', 'bewilder', 'catastrophe', 'conundrum', 'cumbersome', 'deleterious', 'eccentric',
    'ephemeral', 'extravagant', 'flabbergasted', 'gregarious', 'hallucinate', 'idiosyncrasy', 'indelible', 'inquisitive', 'juxtapose', 'labyrinth',
    'magnificent', 'nostalgia', 'obfuscate', 'perfunctory', 'quintessential', 'recalcitrant', 'sycophant', 'trepidation', 'ubiquity', 'verisimilitude',
    'wanderlust', 'xerophyte', 'yearning', 'zeppelin',
    'alleviate', 'benevolent', 'capitulate', 'deprecate', 'ephemeral', 'facetious', 'garrulous', 'hirsute', 'impeccable', 'juxtapose',
    'kaleidoscope', 'laudable', 'mellifluous', 'nemesis', 'obfuscate', 'paradox', 'quixotic', 'reverence', 'serendipity', 'taciturn',
    'ubiquitous', 'vexatious', 'writhe', 'xenophobic', 'yonder', 'zenith'];

let words = document.getElementById("words");
words.textContent = "Press Start";


function reset(){
    let textArr = [];
    let output = "";
    words.style.color = "white";
    input.disabled = false;
    document.getElementById("reset").innerHTML = "Reset";
    for(let i = 0; i<10;i++){
        let randomIndex = Math.floor(Math.random() * easy.length);
        textArr.push(easy[randomIndex]);
    }
    for(word of textArr){
        if(textArr.indexOf(word)==textArr.length - 1){
            output += word;
        }
        else{
            output += word + " ";
        }
    }
    document.getElementById("input").value = '';
    words.textContent = output;
    startTime = null;
    clearInterval(timerInterval);

}

function isCorrect() {
    let input = document.getElementById("input").value;
    let wordsText = words.textContent.trim();
    let errorCount = 0;
    let span;
    words.textContent = '';
    
    if (wordsText === input) {
        words.style.color = "green";
        words.textContent = wordsText;
        return true;
    } else {
        let minLength = Math.min(input.length, wordsText.length);
        for (let i = 0; i < minLength; i++) {
            span = document.createElement("span");
            span.textContent = wordsText[i]; 
            
            if (wordsText[i] !== input[i]) {
                span.style.color = "red"; 
                errorCount++;
            }
            
            words.appendChild(span); 
        }
        
        if (input.length > wordsText.length) {
            for (let i = minLength; i < wordsText.length; i++) {
                span = document.createElement("span");
                span.textContent = input[i];
                span.style.color = "red";
                words.appendChild(span);
            }

            
        } else if (wordsText.length > input.length) {
            for (let i = minLength; i < wordsText.length; i++) {
                span = document.createElement("span");
                span.textContent = wordsText[i];
                span.style.color = "red";
                words.appendChild(span);
            }
        }
        return false;
    }
}

function isCompleted(){
    return words.style.color === "green";
}

let startTime;
let timerInterval;
let finalTime;
let wpmElement = document.getElementById("wpm");
document.addEventListener('keydown',function(event){
    if(!startTime && event.key != 'Enter'){
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      if (startTime) {
        clearInterval(timerInterval);
        if(isCorrect()){
            finalTime = Math.floor((Date.now() - startTime) / 1000);
            document.getElementById("wpm").textC
            startTime = null;
            let wpm = Math.round((10 / (finalTime / 60)));
            wpmElement.textContent = `WPM: ${wpm}`;
        }
        if(isCompleted()){
            input.disabled = true;
        }
      }
    }
  });


// let input = document.getElementById("input");
// let reset = document.getElementById("reset");
// words.textContent = "test";
// let textArr = [];
// for(let i = 0; i<10;i++){
//     const randomIndex = Math.floor(Math.random() * easy.length);
//     textArr.push(easy[randomIndex]);
// }
// words.textContent = textArr;
