var cmd = document.createElement("span");
cmd.id = "cmd";
cmd.textContent = "_";
cmd.classList.add("cmd");

var lines = ["Hello, I'm Sam Willard, a 3rd year computer science and mathematics honors student at Oregon State University",
             "My focus for CS is in Computer Systems, where I'm learning a lot about lower-level hardware and it's implementations"];

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

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("about").appendChild(cmd);
});

function pause (milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

document.addEventListener("keydown", async function(e) {
    //Remove Span From It's Parent
    if(lines.length > 0){
       cmd.parentElement.removeChild(cmd);

        if(e.key == "Enter"){
            var display = document.createElement("p");
            display.textContent = "";
            document.getElementById("about").appendChild(display);
            var text = lines.shift();
            for(let i = 0; i < text.length; i++){
                display.textContent += text.charAt(i);
                await pause(15);
            }
            display.appendChild(cmd);
        } 
    }
    
});