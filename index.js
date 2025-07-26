function optionClick(elem){
    lines = document.getElementsByClassName('uline');
    for(let i = 0; i < lines.length; i++){
        if(lines[i] == elem.nextElementSibling){
            lines[i].classList.add('active');
        }
        else{
            lines[i].classList.remove('active');
        }
    }
}