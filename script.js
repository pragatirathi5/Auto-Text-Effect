const mytext = document.getElementById('text')
const mydisplay = document.getElementById('display')
const text = 'Heya..This is Pragati..How are you ?'
let num=1;
let display = 200 / mydisplay.value                    //speed

mydisplay.addEventListener('input', (e) => display = 200 / e.target.value)

function displayText() {
    mytext.innerText = text.slice(0, num);
    num++

    if(num > text.length) {
    num=1;

    }

    setTimeout(displayText, display)
}

displayText();

