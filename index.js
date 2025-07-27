function optionClick(elem){
    let lines = document.getElementsByClassName('uline');
    let wrappers = document.getElementsByName('contentwrapper');

    for(let i = 0; i < lines.length; i++){
        if(lines[i] == elem.nextElementSibling){
            lines[i].classList.add('active');
            wrappers[i].classList.remove('hidden');
        }
        else{
            lines[i].classList.remove('active');
            wrappers[i].classList.add('hidden');
        }
    }
}