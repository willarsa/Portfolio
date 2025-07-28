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