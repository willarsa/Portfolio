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