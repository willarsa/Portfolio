function optionClick(elem){
    lines = document.getElementsByClassName('uline');
    content = document.getElementsByClassName('content');

    for(let i = 0; i < lines.length; i++){
        if(lines[i] == elem.nextElementSibling){
            lines[i].classList.add('active');
            content[i].classList.remove('invisible');
        }
        else{
            lines[i].classList.remove('active');
            content[i].classList.add('invisible');
        }
    }
}