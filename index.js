

function toggle(project){
    var toggle = document.getElementById(project + "_toggle");
    var desc = document.getElementById(project + "_desc");
    var vid = document.getElementById(project + "_vid");
    if(toggle.textContent == "Show video..."){
        desc.classList.add("hidden");
        vid.classList.remove("hidden");
        toggle.textContent = "Show description...";
    }
    else{
        desc.classList.remove("hidden");
        vid.classList.add("hidden");
        toggle.textContent = "Show video...";
    }
}