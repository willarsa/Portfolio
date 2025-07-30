var hasLeft = false;

function optionClick(elem){
    let lines = document.getElementsByClassName('uline');
    let wrappers = document.getElementsByName('contentwrapper');

    for(let i = 0; i < lines.length; i++){
        if(lines[i] == elem.nextElementSibling){
            lines[i].classList.add('active');
            wrappers[i].classList.remove('hidden');
            void wrappers[i].offsetWidth;
            wrappers[i].style.opacity = '1';
        }
        else{
            lines[i].classList.remove('active');
            wrappers[i].classList.add('hidden');
            wrappers[i].style.opacity = '0';
        }
    }
}

function showEmail(){
    document.getElementById('email').classList.remove('invisible');
}


function hideEmail(){
    if(!hasLeft){
        hasLeft = true;
        setTimeout(() => {
            document.getElementById('email').classList.add('invisible');
            hasLeft = false;
        }, 1500);
    }
    
}

function copyToClipboard(){
    navigator.clipboard.writeText('samuelpwillard@gmail.com');
}

/* INFINITE 'FUNCTIONS' */

const ripple = document.querySelector('.rippletext');
const text = ripple.textContent;
const letters = [...text];
let html = '';

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  const delay = i * 0.1;
  const isSpace = letter === ' ';
  const content = isSpace ? '&nbsp;' : letter;

  html += `<span style="--delay: ${delay}s">${content}</span>`;
}

ripple.innerHTML = html;